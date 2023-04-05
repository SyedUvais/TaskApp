import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const ResetPass = ({route, navigation}) =>
{
    var [otpFieldVal, setOtpFieldVal] = useState('');
    var [response_Msg, setResponse_Msg] = useState('')

    const tokenVal = route.params;

    // console.log("Token Value: ", tokenVal)

    const otpFieldValFun = (value) =>
    {
        setOtpFieldVal(value);
    };

    const postData = async () =>
    {
        const api_url = 'https://blue-api-test.onrender.com/api/v1/verify-forgot-password-otp';
        const data = {
            'otp': otpFieldVal,
            "token": tokenVal
        };

        try 
        {
            const response = await fetch(api_url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
    
            const result = await response.json()
            console.log("OKK", result);

            setResponse_Msg(result.message);

            if (result.status)
            {   
                navigation.navigate('Change Password', result.token);
                setOtpFieldVal('');
            }
        } 
        catch (error) 
        {
            console.log("Error in Api Rendering: ", error);
        }
    }

    return(
        <View style={styling.mainContainer}>
            <View style={styling.formDiv}>
                <Text style={styling.mainLabel}>Email Verification</Text>

                <Text style={styling.responseMsg}>{response_Msg}</Text>
                <TextInput style ={styling.inputField} placeholder='OTP' value={otpFieldVal} keyboardType="numeric" onChangeText={otpFieldValFun}/>
                <Text style={styling.otpTag}>Check your mail and enter otp here</Text>

                <TouchableOpacity onPress={postData}>
                    <Text style={styling.submitBtn}>Submit</Text>
                </TouchableOpacity>

                <View style={styling.signupTagView}>
                
                <Text style={styling.signupTag}>Didn't get the otp? </Text>
                <TouchableOpacity>
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
        backgroundColor: 'green',
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
    otpTag:
    {
        color: 'gray',
        marginTop: 10,
        fontSize: 17
    },
    submitBtn:
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

export default ResetPass;