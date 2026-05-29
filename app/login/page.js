"use client";
import Navbar from '../components/Navbarcadastro'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import style from './login.module.css'
export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function fazerLogin(e) {

    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {

      alert("Login realizado!");


      router.push("/dashboard");

    } else {

      alert(data.erro);

    }
  }

  return (
    <div className={style.main}>
      <Navbar/>
        <div className={style.titulo}>
        <h1>Seja um parceiro!</h1>
      </div>

      <div className={style.loginPage}>
        <div className={style.Hero}>
          <Image
            className={style.motorista}
            src="/imagens/entregadora-loggi.png"
            alt="Motorista"
            width={900}
            height={710}
            priority
          />
        </div>

        <div className={style.container_Login}>
          <h1 className={style.login}>Login</h1>

    <form onSubmit={fazerLogin}
      className={style.form}
>

      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className={style.input}
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) =>
          setSenha(e.target.value)
        }
        className={style.input}
      />

      <button type="submit"
        className={style.Button}>
        Entrar
      </button>

    </form>
    </div>
    </div>
    </div>
  );
}