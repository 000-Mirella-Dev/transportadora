import Link from "next/link";
import style from './navbar.module.css'
export default function Navbar() {

  return (

<nav className={style.navbar}>
  <h1 className={style.Logo}>
    Transportadora Loggi
  </h1>

  <div className={style.actions}>
    <Link className={style.navbtn} href="/login">
      <button>Login</button>
    </Link>

    <Link className={style.navbtn} href="/cadastro">
      <button>Cadastro</button>
    </Link>
  </div>
</nav>
  );
}