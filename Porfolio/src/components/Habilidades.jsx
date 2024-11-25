import '../styles/Habilidades.css'
import PythonIMG from '../assets/Python.png'
function Habilidades() {
    //Desenvolver isso aqui
    return (
        <div className="Habilidades">
            <button className="python">
                <img src={PythonIMG} alt="python" />
                <strong>Python</strong>
            </button>

            <div className="JavaScript">
                <p>oi</p>
            </div>

        </div>
    )
}
export default Habilidades