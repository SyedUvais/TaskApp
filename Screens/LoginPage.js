import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const LoginPage = ({navigation}) =>
{   
    var [mailFieldVal, setMailFieldVal] = useState('');
    var [passFieldVal, setPassFieldVal] = useState('');
    var [response_Msg, setResponse_Msg] = useState('')

    const maleFieldValFun = (value) =>
        {
            setMailFieldVal(value);
        }

    const passFieldValFun = (value) =>
        {
            setPassFieldVal(value);
        }

    const postData = async () =>
    {   
        api_url = 'https://blue-api-test.onrender.com/api/v1/user-signIn';
        const data = {
            "userEmail": mailFieldVal,
            "userPassword": passFieldVal
        }
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
             console.log("Evening", result);

             setResponse_Msg(result.message);

             if(result.status)
             {
                navigation.navigate('Home Page', result.data.user);
             }
        } 
        catch (error)
        {
            console.log("Error in getting response: ", error)
        }
    }

    const ResetPassApi = async () =>
    {   
        api_url = 'https://blue-api-test.onrender.com/api/v1/forgot-password';
        const data = {
            "userEmail": mailFieldVal,
        }
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
            //  console.log("Good Evening", result);

             setResponse_Msg(result.message);

             if(result.status)
             {
                navigation.navigate('Forget Password', result.token);
             }
        } 
        catch (error)
        {
            console.log("Error in getting response: ", error)
        }
    }

    return(
        <View style={styling.mainContainer}>
            <View style={styling.formDiv}>
                <Text style={styling.mainLabel}>Login</Text>
                
                <Text style={styling.responseMsg}>{response_Msg}</Text>

                <TextInput style ={styling.inputField} placeholder='Email' onChangeText={maleFieldValFun} />
                <TextInput style ={styling.inputField} placeholder='Password'secureTextEntry onChangeText={passFieldValFun} />
                
                <TouchableOpacity onPress={ResetPassApi}>
                    <Text style={styling.forgotPassText}>Forgot password?</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => postData()}>
                    <Text style={styling.loginBtn}>Login</Text>
                </TouchableOpacity>

                <View style={styling.signupTagView}>
                
                <Text style={styling.signupTag} >Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={{fontSize: 20, color: 'blue'}}>Signup</Text>
                </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styling = StyleSheet.create({
    mainContainer:
    {
        backgroundColor: 'blueviolet',
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
    forgotPassText:
    {
        marginTop: 10,
        color: 'blue',
        fontSize: 18
    },
    loginBtn:
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

export default LoginPage;