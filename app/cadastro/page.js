"use client";
import style from "./cadastro.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from '../components/Navbarcadastro'

import { useState }
from "react";

export default function Cadastro() {
  const router = useRouter();

  const [form, setForm] =
    useState({

      nome: "",
      cnh: "",
      veiculo: "",
      telefone: "",
      email: "",
      senha: "",

    });

  function handleChange(e) {

    setForm({

      ...form,

      [e.target.name]:
        e.target.value,

    });

  }

async function handleSubmit(e) {

  e.preventDefault();

  const response = await fetch(
    "../api/usoarios",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),

    }
  );
  if (response.ok) {
    localStorage.setItem(
      "token",
      "motorista-logado"
    )

    alert("Cadastrado!");
    router.push("/dashboard");

  
  } else {

    alert("Erro ao cadastrar");
  }
}

  return (
    <div className={style.main}>
      <Navbar/>
      <div className={style.titulo}>
        <h1>Seja um parceiro!</h1>
      </div>

      <div className={style.cadastroPage}>
        <div className={style.Hero}>
          <Image
            className={style.motorista}
            src="/imagens/motorista.png"
            alt="Motorista"
            width={900}
            height={710}
            priority
          />
        </div>

        <div className={style.container_cadastro}>
          <h1 className={style.cadastro}>Cadastro</h1>

          <form
            onSubmit={handleSubmit}
            className={style.form}
          >
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={form.nome}
              onChange={handleChange}
              className={style.input}
            />

            <input
              type="text"
              name="cnh"
              placeholder="CNH"
              value={form.cnh}
              onChange={handleChange}
              className={style.input}
            />

            <input
              type="text"
              name="veiculo"
              placeholder="Veículo"
              value={form.veiculo}
              onChange={handleChange}
              className={style.input}
            />

            <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={form.telefone}
              onChange={handleChange}
              className={style.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={style.input}
            />

            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange}
              className={style.input}
            />

            <button
              type="submit"
              className={style.Button}
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}