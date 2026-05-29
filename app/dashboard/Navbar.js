import style from '../dashboard/Navbar.module.css'
import Image from 'next/image';

export default function Navbar(){
       return(
        <div>
       <nav
          className={style.Navbar}>

  <div className={style.logoContainer}>
   <Image src="/imagens/logo.png" alt="logo" width={60} height={60}
/>
            <h1 className={style.LogoTexto}>
            Transportadora Loggi
            </h1>
            </div>
            <ul className={style.navlinks}>
            <li> <a href="#Painel_motorista"> Inicio </a> </li> 
            <li> <a href="#historico"> Histórico </a> </li> 
            </ul>

        </nav>

        </div>
       );

}