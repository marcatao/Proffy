import React from 'react';
import{ View, ImageBackground, Text } from 'react-native'
import { RectButton}  from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';


function GiveClasses(){
    const navigation = useNavigation();
    // can use { goBack }

    function goLandingPageBack(){
        navigation.navigate('Landing');
        //goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={giveClassesBgImage} resizeMode="contain" style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>Para se cadastrar como professor, utilize nossa plataforma web.</Text>
            </ImageBackground>
            <RectButton style={styles.okButton} onPress={goLandingPageBack}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        
        </View>


    );
}

export default GiveClasses;