import React from 'react'
import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './style.css';
import api from '../../services/api';


export interface Teacher{
         id: number
        name: string;
        avatar: string;
        cost : number;
        subject: string;
        whatsapp: string;
        bio:string;
}

interface TeacherItemProps{
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    function createNewConnection(){
        api.post('/connections',{
            user_id: teacher.id,
        })
    }
    return(
        <article className="teacher-item">
        <header>
             <img src={teacher.avatar} alt={teacher.name}/>
             <div>
                 <strong>{teacher.name}</strong>
                 <span>{teacher.subject}</span>
             </div>
        </header>
        <p> {teacher.bio}</p>
        <footer>
            <p>Preço por hora <strong>R$ {teacher.cost}</strong></p>
            <a href={`https://we.be/${teacher.whatsapp}`} onClick={createNewConnection}>
                <img src={whatsapp} alt="EntrarEmcontato"/>
                Entrar em contato
            </a>
        </footer>
    </article>
    );
}

export default TeacherItem;