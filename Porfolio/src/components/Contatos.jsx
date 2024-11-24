import '../styles/Contatos.css'

import GithubIMG from '../assets/Github.png'
import GmailIMG from '../assets/Gmail.png'
import LinkedinIMG from '../assets/Linkedin.png'

function Contatos() {
    return (
        //Desenvolver isso aqui
    <div className='Contatos'>
        <h2>Contatos</h2>

        <div className='fotos'>
            <a href="https://github.com/MarioBrandao0" target="_blank">
                <img src={GithubIMG} alt="Github"/>
            </a>
            
            <a href="mailto:mariobrandao030@gmail.com">
                <img src={GmailIMG} alt="Gmail"/>
            </a>
            <a href="https://www.linkedin.com/in/mario-brand%C3%A3o-195864242/" target="_blank">
                <img src={LinkedinIMG} alt="Linkedin"/>
            </a>
        </div>
    </div>
    )
}

export default Contatos