import React, { useState, useEffect } from 'react';
import { View, ScrollView,Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {  Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';


import styles from './styles';


function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFilterVisible, setFilterVisible] = useState(false);

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTEachers = JSON.parse(response);
                const favoritedTEachersIDS = favoritedTEachers.map((teacher: Teacher) =>{
                    return teacher.id;
                })
               setFavorites(favoritedTEachersIDS);
            }
        })
    }
    //assim que o componente ser exibido na tela.
    //useEffect(() =>{
    //
    //   },
    // []);//se este arrey estiver fazio somente sera execultado 1 unica vez
    
    const[subject, setSubject ] = useState('Matematica');
    const[week_day, setWeek_day] = useState('1');
    const[time, setTime] =useState('08:00');


    function handlerTogleFilterVisible(){
        setFilterVisible(!isFilterVisible);
    }

 
    async function handleFiltersSubmit(){

        const response = await api.get('classes',{
            params:{
                subject,week_day,time
            }
        })
        setFilterVisible(false);
        setTeachers(response.data);
        console.log(response.data);
        loadFavorites();
    }

    return(
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponiveis" 
                headerRight={(
                    <BorderlessButton onPress={handlerTogleFilterVisible}>
                        <Feather name="filter" size={20} color="#FFF"></Feather>
                    </BorderlessButton>
                )}
            > 
                {isFilterVisible && (
                   <View style={styles.searchForm}>
                    <Text style={styles.label}>Materias</Text>
                    <TextInput 
                      value={subject}  
                      onChangeText={text => setSubject(text)}
                      style={styles.input}
                      placeholder="Qual a materia:"
                      placeholderTextColor="#c1bcc"
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                             <Text style={styles.label}>Dia da Semana</Text>
                              <TextInput
                                 value={week_day}  
                                 onChangeText={text => setWeek_day(text)} 
                                 style={styles.input}
                                 placeholder="Qual o dia?"
                                 placeholderTextColor="#c1bcc"
                               />
                        </View>
                        
                        <View style={styles.inputBlock}>
                             <Text style={styles.label}>Horario</Text>
                              <TextInput
                                 value={time}  
                                 onChangeText={text => setTime(text)} 
                                 style={styles.input}
                                 placeholder="Qual horario?"
                                 placeholderTextColor="#c1bcc"
                               />
                        </View>

                    </View>
                    <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtar</Text>

                    </RectButton>
                </View>)}

            </PageHeader>
            <ScrollView style={styles.teacherList}
                        contentContainerStyle={{
                            paddingHorizontal:16,
                            paddingBottom:16,
                        }}>
                   {teachers.map((teacher: Teacher) => {
                       return (
                            <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher} 
                                favorited={favorites.includes(teacher.id)}
                            />);
                   })}

            </ScrollView>
        </View>  
    );
}

export default TeacherList