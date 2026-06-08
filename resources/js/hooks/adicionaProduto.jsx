import { useState } from "react";

export const useAdicionaProduto = () => {
	const [quantidade, setQuantidade] = useState(1);

	const incrementar = () => setQuantidade((prev) => prev + 1);
	const decrementar = () => setQuantidade((prev) => Math.max(prev - 1, 1));

	return { quantidade, incrementar, decrementar };
};