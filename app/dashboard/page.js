"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import style from './dashboard.module.css'
import Navbar from '../dashboard/Navbar'
import Image from 'next/image'
import pfp from './default pfp.jpg'
export default function Dashboard() {
  const router = useRouter();

useEffect(() => {
  const carregarDados = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/cadastro");
      return;
    }
  };

  carregarDados();
}, [router]);
return (
  <div> 
    <Navbar/>
  <div id="Painel_motorista" className={style.body}>
  <main className={style.main}>
    <div className={style.topbar}>
      <div className={style.welcome}>
        <h1>Bem vindo(a) ao painel de motorista</h1>
      </div>
      <div className={style.drivercard}>
        <Image src={pfp} alt="Motorista" width={50} height={50}/>
        <div>

  <div className={style.status}>
     <div className={style.dot}></div>
       Online
    </div>
    </div>
      </div>
    </div>

<section className={style.cards}>

    <div className={style.card}>
        <h3>Entregas Hoje</h3>
        <div className={style.numero}>0
        </div>
    </div>

    <div className={style.card}>
        <h3>Concluídas</h3>
        <div className={style.numero}>0</div>
      </div>

      <div className={style.card}>
        <h3>Em Rota</h3>
        <div className={style.numero}>0</div>
      </div>

      <div className={style.card}>
        <h3>Pendentes</h3>
        <div className={style.numero}>0</div>
      </div>

</section>

    <section className={style.secaotabela}>
      <h2>Últimas Entregas</h2>

<table className={style.table}>
    <tbody className={style.tbody}>
      <tr className={style.tr}>
         <td className={style.td}>
           <h4>sem entregas por enquanto</h4>
        </td>
       </tr>
    </tbody>
  </table>
</section>
  </main>
<div>
<div id="historico" className={style.body}>
  <main className={style.main}>
    <div className={style.top}>
      <div>
        <h1>Histórico de entregas</h1>
      </div>
      <div className={style.search}>
        <input type="text" placeholder="Pesquisar entrega..." />
        <button>Buscar</button>
      </div>
    </div>
    <section className={style.cards}>
      <div className={style.card}>
        <h3>Total de Entregas</h3>
        <div className={style.numero}>0</div>
      </div>
      <div className={style.card}>
        <h3>Concluídas</h3>
        <div className={style.number}>0</div>
      </div>
      <div className={style.card}>
        <h3>Em Andamento</h3>
        <div className={style.number}>0</div>
      </div>
    </section>

<section className={style.secaotabela}>
      <h2>Histórico de entregas anteriores</h2>

<table className={style.table}>
    <tbody className={style.tbody}>
      <tr className={style.tr}>
         <td className={style.td}>
           <h4>sem entregas por enquanto</h4>
        </td>
       </tr>
    </tbody>
  </table>
</section>
    
  </main>
</div>
</div>
</div>
</div>
);
}