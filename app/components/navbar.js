import style from './Navbar2.module.css'

export default function Navbar(){
  return(
    <nav className={style.Navbar}>
      <div>

        <h1 className={style.Logo}>
          Transportadora Loggi
        </h1>

      </div>
    </nav>
  );
}