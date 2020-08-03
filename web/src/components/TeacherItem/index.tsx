import React from 'react'
import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
             <img src="https://www.alumbra.com.br//img/profiles/1166.jpeg" alt="ThiagoMarcato"/>
             <div>
                 <strong>Thiago Marcato</strong>
                 <span>Química</span>
             </div>
        </header>
        <p> mestre de atimanhas em manusear as ferramentas de ponta, <br></br>buscando por ajudar e ser util lucrando<br></br> com minha criatividade</p>
        <footer>
            <p>Preço por hora <strong>R$ 60,00</strong></p>
            <button>
                <img src={whatsapp} alt="EntrarEmcontato"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;