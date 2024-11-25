import '../styles/SobreMim.css'
import { useRef } from 'react'

import FotoPerfil from '../assets/FotoPerfil.jpeg'

function SobreMim() {
    const dialog = useRef(null)

    function chamar() {
            dialog.current.showModal()
    }

    function fechar(){
        dialog.current.close()
    }

    return (
        <div className="SobreMim">
            <div className="perfil">
                <img src={FotoPerfil} alt="" />
                <h2>Mário Brandão</h2>
                <div className="info">
                    <h3 className='idade'>Idade: 19</h3>
                    <h3>Telefone: (81) 99268-4898</h3>
                 </div>
            </div>


            <div className="Caixotes">
                <div className='Desc1'>
                    <p>Gosto de desing</p>
                </div>
                <div className='Desc2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugiat!</p>
                </div>
                <button id='Botão' className='Detalhes' onClick={chamar}>Detalhes</button>    
            </div>
            

            <dialog className='dialog' ref={dialog}>
                <div className="perfil2">
                    <img src={FotoPerfil} alt="" />
                    
                </div>
                <div className="conteudo">
                    <p>
                        José é uma pessoa curiosa, autodidata e apaixonada pelo que faz. 
                        Ele adora resolver problemas complexos e tem uma abordagem criativa quando se trata de encontrar soluções técnicas. 
                        No tempo livre, além de programar, ele gosta de jogar games, especialmente os de estratégia e RPGs. 
                        José também gosta de compartilhar seu conhecimento e participa de comunidades online, ajudando iniciantes a se aprofundarem em programação.
                    </p>
                </div>
                <button onClick={fechar}>Close</button>
            </dialog>
        </div>
    )
}

export default SobreMim