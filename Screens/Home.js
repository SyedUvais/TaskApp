import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Home = ({navigation, route}) =>
{   
    const {userName, userEmail} = route.params

    return (
        <View>
            <Text style={styling.nameTag}>Welcome <Text style={{color: 'red'}}>{userName}</Text></Text>
            <Image style={styling.img} source={{uri: 'https://thumbs.dreamstime.com/b/holiday-welcome-sign-hanging-rustic-teal-blue-wood-background-white-christmas-garland-border-61613569.jpg'}} />
        </View>
    );
};

const styling = StyleSheet.create({
    nameTag:
    {
        color: '#2a364f',
        textAlign: 'center',
        fontSize: 35,
        marginTop: 50
    },
    img:
    {
        width: '80%',
        height: '60%',
        marginHorizontal: '10%',
        marginTop: 50
    }
})

export default Home;