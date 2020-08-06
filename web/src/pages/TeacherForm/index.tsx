import React, {useState, FormEvent} from 'react'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import  warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import {useHistory} from 'react-router-dom';

import './styles.css'
import api from '../../services/api';

function TeacherForm(){
    const history  = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([ 
        {week_day: 0 , from: '', to: ''}
    ]);
    
    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: '', to:'' }
        ]);
    }
    function setScheduleItemValue(position:number, field:string, value:string){
        const newArray = scheduleItems.map((scheduleItem, index ) => {
            if(index === position){
                return {...scheduleItem, [field]: value};
            }
            return scheduleItem;
        });
        setScheduleItems(newArray);
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() =>{
            alert('Cadastro realizado com sucesso!');
            //history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro');
        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems

        })
        return false
    }



    return(
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Que incrivel que você quer dar aulas" 
            description="O primeiro passo e preencher este formulario de inscrição"
        />
        <main>
           <form onSubmit={handleCreateClass}>
            <fieldset>
               <legend>Seus dados</legend>
               <Input  
                    name="name" 
                    label="Nome completo"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                />

               <Input  
                    name="avatar" 
                    label="Avatar"
                    value={avatar}
                    onChange={(e)=>{setAvatar(e.target.value)}}
                />

               <Input  
                    name="whatsapp" 
                    label="Whatsapp"
                    value={whatsapp}
                    onChange={(e)=>{setWhatsapp(e.target.value)}}
                /> 

               <Textarea 
                    name="bio" 
                    label="Biografia" 
                    value={bio}
                    onChange={(e)=>{setBio(e.target.value)}}
                    
                />
            </fieldset>

            <fieldset>
              <legend>Sobre a Aula</legend>
               <Select  
                    name="subject" 
                    label="Matéria"
                    options={[{value: 'Artes', label:'Artes'},{value:'Matematica', label:'Matematica'}]}
                    value={subject}
                    onChange={(e)=>{setSubject(e.target.value)}}
                />
               <Input  
                    name="cost" 
                    label="Custo hora aula"
                    value={cost}
                    onChange={(e)=>{setCost(e.target.value)}}
                />
            </fieldset>
                
            <fieldset>
                <legend>Horários disponiveis
                <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
                </legend>


            {scheduleItems.map((scheduleItem, index) => {
                return(
                    <div key={scheduleItem.week_day} className="schedule-item">
                    <Select  
                           name="week_day" 
                           value={scheduleItem.week_day}
                           onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                           label="Dia da semana"
                           options={[{value: '0', label:'Domingo'},
                             {value: '1', label:'Segunda'},
                             {value: '2', label:'Terca'},
                             {value: '3', label:'Quarta'},
                             {value: '4', label:'Quinta'},
                             {value: '5', label:'Sexta'},
                             {value: '6', label:'Sabado'}]}
                     />   
                     <Input 
                        name="from"  
                        value={scheduleItem.from}
                        label="Das" 
                        type="time"
                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                    /> 
                    
                    <Input 
                        name="to"   
                        value={scheduleItem.to}
                        label="Até" 
                        type="time" 
                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                    />
                  </div>  
          );
        })}
            </fieldset>



            <footer>
                <p>
                    <img src={warningIcon} alt="aviso importante" />
                    Importante < br/>
                    Preencha todos os dados
                </p>
                <button type="submit">
                    Salvar cadastro
                </button>
            </footer>
            </form> 
        </main>
     </div>
    )
}

export default TeacherForm