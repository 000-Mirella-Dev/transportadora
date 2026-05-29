import style from '@/app/app.module.css'
import { ReactNode } from "react";
import Image from 'next/image'
import Link from "next/link";

export const metadata = {
  title: "Loggi",
};

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="pt-BR">

      <body>
        <main className={style.Main}>

          {children}

        </main>

        <footer
          className={style.footer}>
            <div className={style.footercontainer}>
              <div className={style.footerinfo}>
                <Image className={style.footerlogo} src="/imagens/loggi-logo.png" alt="Loggi" width={70} height={70} />
                <p> Somos uma empresa de logística que oferece soluções simples e práticas, para pessoas e negócios. Levamos sua encomenda para qualquer local do país com tecnologia própria e uma malha logística robusta. </p>
              </div>
              <div className={style.footerlinks}>
                <h3>Links Úteis</h3>
                <ul>
                  <li><Link href="/">Sobre nós</Link></li>
                  <li><Link href="/servicos">Serviços</Link></li>
                  <li><Link href="/contato">Contato</Link></li>
                </ul>
                  </div>
                  <div className={style.footercontatos}>
                    <h3>Contatos</h3>
                    <p>(11) 99999-9999</p>
                    <p>contato@loggi.com</p>
                  </div>
                   </div>
                  <div className={style.footerbottom}>
                    <p>&copy; 2023 Loggi. Todos os direitos reservados.</p>
                  </div>

        </footer>

      </body>

    </html>
  );
}