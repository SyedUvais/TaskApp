import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const SignupPage = ({navigation}) =>
{   
    var [nameFieldVal, setNameFieldVal] = useState('');
    var [mailFieldVal, setMailFieldVal] = useState('');
    var [passFieldVal, setPassFieldVal] = useState('');
    var [cnfrmPassFieldVal, setCnfrmPassFieldVal] = useState('');
    var [response_Msg, setResponse_Msg] = useState('')

    const nameFieldValFun = (value) =>
        {
            setNameFieldVal(value);
            // console.log(nameFieldVal);
        }

    const mailFieldValFun = (value) =>
        {
            setMailFieldVal(value);
            // console.log(mailFieldVal);
        }

    const passFieldValFun = (value) =>
        {
            setPassFieldVal(value);
            // console.log(passFieldVal);
        }
    
    const cnfrmPassFieldValFun = (value) =>
        {
            setCnfrmPassFieldVal(value);
            // console.log(cnfrmPassFieldVal);
        }
    
    const postData = async () =>
        {
            // Alert.alert(`${nameFieldVal}, , ${mailFieldVal}, ${passFieldVal}, ${cnfrmPassFieldVal}`);

            const api_url = 'https://blue-api-test.onrender.com/api/v1/user-signup';
            const data = {

                "userName" : nameFieldVal,
                "userEmail": mailFieldVal,
                "userPassword": passFieldVal,
                "confirmPassword": cnfrmPassFieldVal
            };
            
            console.log(data);

            try 
            {
                const response = await fetch(api_url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                  });
    
                const result = await response.json();
                console.log(result);

                setResponse_Msg(result.message);
                
                if (result.status)
                {
                    navigation.navigate('Email Verification', result.token);
                }
            } 
            catch (error) 
            {
                console.log("Error in Api handling: ", error)
            }
        }

    return(
        <View style={styling.mainContainer}>
            <View style={styling.formDiv}>
                <Text style={styling.mainLabel}>Signup</Text>

                <Text style={styling.responseMsg}>{response_Msg}</Text>

                <TextInput style ={styling.inputField} placeholder='Username' onChangeText={nameFieldValFun}/>
                <TextInput style ={styling.inputField} placeholder='Email' onChangeText={mailFieldValFun}/>
                <TextInput style ={styling.inputField} placeholder='Password'secureTextEntry onChangeText={passFieldValFun}/>
                <TextInput style ={styling.inputField} placeholder='Confirm Password'secureTextEntry onChangeText={cnfrmPassFieldValFun}/>

                <TouchableOpacity onPress={postData}>
                    <Text style={styling.signUpBtn}>Signup</Text>
                </TouchableOpacity>

                <View style={styling.signupTagView}>
                
                <Text style={styling.signupTag}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Log In')}>
                    <Text style={{fontSize: 20, color: 'blue'}}>Login</Text>
                </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styling = StyleSheet.create({
    mainContainer:
    {
        backgroundColor: '#2a364f',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formDiv:
    {
        width: '80%',
        // height: '60%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 10,
    },
    mainLabel:
    {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 500,
        marginBottom: 10,
    },
    responseMsg:
    {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 15
    },
    inputField:
    {
        borderWidth: 1,
        borderColor: 'cyan',
        borderRadius: 8,
        height: 45,
        fontSize: 17,
        color: 'gray',
        paddingLeft: 10,
        marginTop: 20,
    },
    signUpBtn:
    {
        backgroundColor: 'blueviolet',
        marginTop: 40,
        paddingVertical: 10,
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        borderRadius: 8
    },
    signupTagView:
    {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        marginTop: 20
    },
    signupTag:
    {
        color: 'gray',
        fontSize: 18,
    }
})

export default SignupPage;