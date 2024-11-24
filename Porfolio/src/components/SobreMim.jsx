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
                <img src={FotoPerfil} alt="" />
                <div className="conteudo">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis, repellendus laborum vero cumque saepe in tempore veritatis eaque maxime fugiat perferendis aut consequuntur quibusdam atque porro, ab, non alias natus nihil. Quibusdam quae nemo veniam tenetur repudiandae ex corrupti reiciendis. Enim officia distinctio magnam voluptatibus fuga, suscipit animi vel ullam aspernatur mollitia? Assumenda, voluptas similique. Laborum, architecto nostrum? Illo sint cupiditate autem rerum asperiores neque esse veritatis odit saepe ut! Iure iusto sapiente, itaque molestiae accusantium sequi pariatur cumque magni. Facilis facere consequatur pariatur tenetur modi tempore, optio error nostrum ipsum quibusdam, fugiat ratione totam cupiditate quaerat veniam temporibus?</p>
                </div>
                <button onClick={fechar}>Close</button>
            </dialog>
        </div>
    )
}

export default SobreMim