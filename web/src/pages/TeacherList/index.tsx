import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';
import './styles.css';


 
function TeacherList(){
 
const [teachers, setTeachers] = useState([]);
const [subject, setSubject] = useState('');
const [week_day, setWeek_day] = useState('');
const [time, setTime] = useState('');

async function seachTeachers(e: FormEvent){
    e.preventDefault();
    const response = await api.get('classes',{
        params:{
            subject,week_day,time
        }
    })

    setTeachers(response.data);
}
    return(
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={seachTeachers}>

                <Select  
                    name="subject" 
                    label="Matéria"
                    options={[{value: 'Artes', label:'Artes'},{value:'Matematica', label:'Matematica'}]}
                    value={subject}
                    onChange={(e) => {setSubject(e.target.value)}}
                />
                <Select  
                    name="week_day" 
                    label="Dia da semana"
                    options={[{value: '0', label:'Domingo'},
                              {value: '1', label:'Segunda'},
                              {value: '2', label:'Terca'},
                              {value: '3', label:'Quarta'},
                              {value: '4', label:'Quinta'},
                              {value: '5', label:'Sexta'},
                              {value: '6', label:'Sabado'}]}
                   value={week_day}
                   onChange={(e) => {setWeek_day(e.target.value)}}
                />
                     <Input  
                     type="time" 
                     name="time" 
                     label="Hora"
                     value={time}
                     onChange={e => {setTime(e.target.value)}}/>

                <button type="submit">Buscar</button>
                </form>
           </PageHeader>
           <main>
               {teachers.map((teacher: Teacher) => {
                   return  <TeacherItem key={teacher.id} teacher={teacher}/>;
               })}
           
           </main>
        </div>
    )
}
 
export default TeacherList