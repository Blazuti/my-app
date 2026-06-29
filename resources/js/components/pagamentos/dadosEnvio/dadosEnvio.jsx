import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import styles from './dadosEnvio.module.css'; // Importação dos estilos

export default function dadosEnvio({ onSuccess }) {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    cpf: '',
    nascimento: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
  });

  const [errors, setErrors] = useState({
    cpf: '',
    nascimento: '',
    cep: '',
  });

  const [loadingCep, setLoadingCep] = useState(false);

  const salvarResumoLocal = (dados) => {
    if (typeof window === 'undefined') return;

    const resumo = {
      nome: dados?.nome || formData.nome,
      cpf: dados?.cpf || formData.cpf,
      cep: dados?.cep || formData.cep,
    };

    localStorage.setItem('dadosEnvioResumo', JSON.stringify(resumo));
    window.dispatchEvent(new CustomEvent('dados-envio-salvo'));
  };

  // --- Máscaras de Input ---
  const aplicarMascaraCelular = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 6) return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    if (v.length > 2) return `(${v.slice(0, 2)}) ${v.slice(2)}`;
    if (v.length > 0) return `(${v}`;
    return v;
  };

  const aplicarMascaraCPF = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    return v
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const aplicarMascaraCEP = (value) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 8) v = v.slice(0, 8);
    return v.replace(/^(\d{5})(\d)/, "$1-$2");
  };

  // --- Gerenciador de Mudanças nos Inputs ---
  const handleChange = (e) => {
    const { id, value } = e.target;
    let valueFormatado = value;

    if (id === 'celular') valueFormatado = aplicarMascaraCelular(value);
    if (id === 'cpf') valueFormatado = aplicarMascaraCPF(value);
    if (id === 'cep') valueFormatado = aplicarMascaraCEP(value);

    setFormData((prev) => ({ ...prev, [id]: valueFormatado }));

    // Limpa erros customizados enquanto o usuário digita novamente
    if (id === 'cpf') setErrors((prev) => ({ ...prev, cpf: '' }));
    if (id === 'cep') setErrors((prev) => ({ ...prev, cep: '' }));
    if (id === 'nascimento') setErrors((prev) => ({ ...prev, nascimento: '' }));
  };

  // --- Validação Matemática do CPF ---
  const validarCPF = (valor) => {
    const cpf = valor.replace(/\D/g, "");
    if (cpf.length === 0) return;

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      setErrors((prev) => ({ ...prev, cpf: 'CPF inválido' }));
      return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = 11 - (soma % 11);
    let dv1 = (resto === 10 || resto === 11) ? 0 : resto;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = 11 - (soma % 11);
    let dv2 = (resto === 10 || resto === 11) ? 0 : resto;

    if (dv1 !== parseInt(cpf.charAt(9)) || dv2 !== parseInt(cpf.charAt(10))) {
      setErrors((prev) => ({ ...prev, cpf: 'CPF inválido' }));
      return false;
    }

    setErrors((prev) => ({ ...prev, cpf: '' }));
    return true;
  };

  // --- Auto-complete de CEP (ViaCEP API) ---
  const buscaCEP = async () => {
    const cep = formData.cep.replace(/\D/g, "");
    if (cep.length !== 8) return;

    setLoadingCep(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErrors((prev) => ({ ...prev, cep: 'CEP não encontrado' }));
        setFormData((prev) => ({ ...prev, rua: '' }));
      } else {
        setErrors((prev) => ({ ...prev, cep: '' }));
        setFormData((prev) => ({ ...prev, rua: data.logradouro }));
        // Foca automaticamente no campo número após o autocomplete
        document.getElementById('numero')?.focus();
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP", error);
    } finally {
      setLoadingCep(false);
    }
  };

  // --- Envio do Formulário ---
  const validarNascimento = (valor) => {
    const nascimento = valor;
    if (!nascimento) {
      setErrors((prev) => ({ ...prev, nascimento: 'Data de nascimento é obrigatória' }));
      return false;
    }

    const hoje = new Date();
    const dataNascimento = new Date(nascimento + 'T00:00:00');
    if (Number.isNaN(dataNascimento.getTime())) {
      setErrors((prev) => ({ ...prev, nascimento: 'Data inválida' }));
      return false;
    }

    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    const dia = hoje.getDate() - dataNascimento.getDate();
    const idadeAjustada = mes < 0 || (mes === 0 && dia < 0) ? idade - 1 : idade;

    if (idadeAjustada < 18) {
      setErrors((prev) => ({ ...prev, nascimento: 'Você deve ter pelo menos 18 anos' }));
      return false;
    }

    setErrors((prev) => ({ ...prev, nascimento: '' }));
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cpfValido = validarCPF(formData.cpf);
    const nascimentoValido = validarNascimento(formData.nascimento);

    if (cpfValido && nascimentoValido && !errors.cep) {
      // Mapeia campos do frontend para os nomes esperados pelo backend
      const payload = {
        nome: formData.nome,
        contato: formData.celular.replace(/\D/g, ''),
        cpf: formData.cpf.replace(/\D/g, ''),
        data_nasc: formData.nascimento,
        cep: formData.cep.replace(/\D/g, ''),
        logradouro: formData.rua,
        numero: formData.numero,
        complemento: formData.complemento,
      };

      const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

      fetch('/dados-envio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrf || '',
        },
        body: JSON.stringify(payload),
      })
        .then(async (res) => {
          if (!res.ok) {
            const data = await res.json().catch(() => null);
            throw data || new Error('Erro ao enviar');
          }
          return res.json();
        })
        .then((data) => {
          alert('Cadastro salvo com sucesso.');
          salvarResumoLocal(data);
          console.log('Resposta:', data);
          if (typeof onSuccess === 'function') {
            onSuccess();
          }
        })
        .catch((err) => {
          console.error('Erro ao salvar:', err);
          alert('Erro ao salvar dados. Verifique o console.');
        });
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2>Informações de Entrega</h2>
        <p>Insira seus dados para envio e faturamento</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Nome */}
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            placeholder=" "
            required
            minlength="3"
            value={formData.nome}
            onChange={handleChange}
          />
          <span className={styles.errorMessage}>Por favor, insira seu nome completo.</span>
        </div>

        {/* Celular */}
        <div className={styles.formGroup}>
          <label htmlFor="celular">Celular</label>
          <input
            type="tel"
            id="celular"
            placeholder=" "
            required
            pattern="^\(?\d{2}\)?\s?\d{5}-?\d{4}$"
            value={formData.celular}
            onChange={handleChange}
          />
          <span className={styles.errorMessage}>Formato aceito: (11) 99999-9999</span>
        </div>

        {/* CPF */}
        <div className={styles.formGroup}>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            placeholder=" "
            required
            value={formData.cpf}
            onChange={handleChange}
            onBlur={(e) => validarCPF(e.target.value)}
            className={errors.cpf ? styles.inputInvalid : ''}
          />
          <span className={errors.cpf ? styles.showError : styles.errorMessage}>
            {errors.cpf || "CPF inválido. Insira 11 dígitos."}
          </span>
        </div>

        {/* Data de Nascimento */}
        <div className={styles.formGroup}>
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input
            type="date"
            id="nascimento"
            placeholder=" "
            required
            value={formData.nascimento}
            onChange={handleChange}
            onBlur={(e) => validarNascimento(e.target.value)}
            className={errors.nascimento ? styles.inputInvalid : ''}
          />
          <span className={errors.nascimento ? styles.showError : styles.errorMessage}>
            {errors.nascimento || "Informe sua data de nascimento. Maior de 18 anos."}
          </span>
        </div>

        {/* CEP */}
        <div className={styles.formGroup}>
          <label htmlFor="cep">CEP</label>
          <div className={styles.formRowCep}>
            <input
              type="text"
              id="cep"
              placeholder=" "
              required
              value={formData.cep}
              onChange={handleChange}
              onBlur={buscaCEP}
              className={`${loadingCep ? styles.loading : ''} ${errors.cep ? styles.inputInvalid : ''}`}
            />
            <button type="button" className={styles.btnCep} onClick={buscaCEP}>
              Buscar
            </button>
          </div>
          <span className={errors.cep ? styles.showError : styles.errorMessage}>
            {errors.cep || "Insira um CEP válido."}
          </span>
        </div>

        {/* Rua */}
        <div className={styles.formGroup}>
          <label htmlFor="rua">Logradouro (Rua/Avenida)</label>
          <input
            type="text"
            id="rua"
            placeholder=" "
            required
            value={formData.rua}
            onChange={handleChange}
          />
          <span className={styles.errorMessage}>O endereço é obrigatório.</span>
        </div>

        {/* Número e Complemento */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="numero">Número</label>
            <input
              type="text"
              id="numero"
              placeholder=" "
              required
              value={formData.numero}
              onChange={handleChange}
            />
            <span className={styles.errorMessage}>Obrigatório.</span>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="complemento">Complemento</label>
            <input
              type="text"
              id="complemento"
              placeholder=" "
              value={formData.complemento}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className={styles.btnSubmit}>
          Salvar Endereço
        </button>
      </form>
    </div>
  );
}