<?php

namespace App\Http\Controllers;

use App\Models\dadosEnvio;
use App\Http\Requests\DadosEnvioRequest;

class DadosEnvioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DadosEnvioRequest $request)
    {
        $data = $request->validated();
        $dados = dadosEnvio::create($data);
        return response()->json($dados, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(dadosEnvio $dadosEnvio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(dadosEnvio $dadosEnvio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DadosEnvioRequest $request, dadosEnvio $dadosEnvio)
    {
        $dadosEnvio->update($request->validated());
        return response()->json($dadosEnvio);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(dadosEnvio $dadosEnvio)
    {
        //
    }
}
