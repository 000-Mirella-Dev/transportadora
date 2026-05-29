import style from '@/app/app.module.css'
import Image from 'next/image'
import Link from 'next/link';
export default function Hero() {
    return (
        <div className={style.Hero}>
            <Image className={style.imgHero} src="/imagens/loggi.png" alt="Loggi" width={300} height={100}/>
            <h1 className={style.h1}>Entregador Loggi: trabalhe com entregas e aumente seus ganhos.</h1>
            <Link href="/cadastro">
                <button  id="buttonHeroC" className={style.buttonHeroC}>Seja um motorista parceiro</button>
            </Link>
        </div>
    );
}
