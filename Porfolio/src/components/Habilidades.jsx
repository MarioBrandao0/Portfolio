import '../styles/Habilidades.css'
import { useRef } from 'react'
import PythonIMG from '../assets/Python.png'
import javascriptIMG from '../assets/JavaScript.png'


function Habilidades() {
    const dialog = useRef(null)
    function chamarHB() {
        dialog.current.showModal()
    }

    function fecharHB(){
        dialog.current.close()
    }

    
    //Desenvolver isso aqui
    return (
        <div className="Habilidades">
            <button className="python" onClick={chamarHB}>
                <img src={PythonIMG} alt="python" />
                <strong>Python</strong>
            </button>

            <div className="JavaScript">
                <p>oi</p>
            </div>
        

            <dialog className='dialogHB' ref={dialog}>
                <div className="Linguagens">
                    <img src={PythonIMG} alt="" className='python' />
                    <img src={javascriptIMG} className='javascript' alt="" />                    
                </div>
                <div className="Conhecimentos">
                    <p>
                        Desenvolver isso de Habilidades
                    </p>
                </div>
                <button onClick={fecharHB}>Close</button>
            </dialog>

        </div>
    )
}
export default Habilidades