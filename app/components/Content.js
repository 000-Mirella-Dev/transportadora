import style from '@/app/app.module.css'
import Image from 'next/image'
import Navbar from '../components/navbar'

export default function Content() {
    return (
        <div>
            <Navbar/>
        <div className={style.content}>
            <h1>Transporte com tecnologia de ponta a ponta</h1>
            <h4>Nossos serviços de entrega se conectam com qualquer tamanho de negócio.</h4>
        <div className={style.Card_container}>
            <div className={style.card}>
                <Image src="/imagens/Loggi-Delivery-3-b.png" alt="Delievery" width={250} height={259}/>
                <div className={style.card_body}>
                    <h3> Para todos</h3>
                     <h4>Envie de forma rápida e sem burocracia com a nossa plataforma</h4>
                </div>
            </div>   
                <div className={style.card}>
                <Image src="/imagens/Loggi-Delivery-Image-1.png" alt="Delievery" width={250} height={259}/>
                <div className={style.card_body}>
                    <h3>Indústrias e grandes negócios</h3>
                     <h4>Integração direta e customizável dos nossos serviços</h4>
                </div>
            </div>           
             <div className={style.card}>
                <Image src="/imagens/Loggi-Delivery-1-1.png" alt="Delievery" width={250} height={259}/>
                <div className={style.card_body}>
                    <h3> Negócios em expansão</h3>
                     <h4>Serviços ideais para a necessidade do empreendedor</h4>
                </div>
            </div>           
            </div>
        </div>
        </div>
    );
}
