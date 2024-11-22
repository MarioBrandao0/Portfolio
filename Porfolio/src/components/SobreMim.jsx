import '../styles/SobreMim.css'
import { useRef } from 'react'

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
            <img src="/FotoPerfil.jpeg" alt="" />
            <h2>Mário Brandão</h2>
            
            <div className="Caixotes">
                <div className='Desc1'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, nesciunt.</p>
                </div>
                <div className='Desc2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugiat!</p>
                </div>
                <button id='Botão' onClick={chamar}>Clique aqui</button>    
            </div>
            

            <dialog className='dialog' ref={dialog}>
                    <p>oi</p>
                    <button onClick={fechar}>Close</button>
            </dialog>
        </div>
    )
}

export default SobreMim