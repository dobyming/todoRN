import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useNavigation } from '@react-navigation/native';
import ListIcon from '../assets/list.svg';

const LoginScreen = () => {
    const [email,setEmail] = useState('');
    const [pwd, setPwd] = useState('');  
    const auth = getAuth();
    const navigation = useNavigation();

    //Auth State 변화를 subscribe 해주기 
    useEffect(()=>{ 
        onAuthStateChanged(auth,user => {
            console.log('user',user);
            // 존재하는 계정이라면 login 후 main화면으로 이동
            if(user) {
                navigation.replace("Main");
            }
        })
    },[]);

    const handleSignUp = async() => {
        try{
            const user = await createUserWithEmailAndPassword(auth,email,pwd);
            console.log('User', user);
            Toast.show({
                type: 'success',
                text1: '회원가입 성공',
                text2: `${email}으로 가입되었습니다.🥳`
            });
        } catch(error) {
            console.log(error.message);
            Alert.alert(
                "회원가입 도중에 문제가 발생했습니다.",
                error.message,
                [{text: '닫기', onPress: ()=> console.log('닫기')}],
                { cancelable: true } //alert창 밖을 눌러도 닫기 수행
            )
        }
        
    };

    const handleLogin = async() => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                pwd
            );
            console.log(user);
        } catch(error) {
            Alert.alert(
                "로그인 도중에 문제가 발생했습니다.",
                error.message,
                [{text: '닫기', onPress: () => console.log('닫기')}],
                { cancelable: true } 
            )
        }
    };

  return (
    <View style={styles.container}>
      <ListIcon/>
      <View style={styles.inputContainer}>
        <TextInput
            placeholder ='이메일'
            value = {email}
            onChangeText = {text => setEmail(text)}
            style={styles.input}
        />
        <TextInput
            placeholder ='비밀번호'
            value = {pwd}
            onChangeText = {text => setPwd(text)}
            style={styles.input}
            secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button}
            onPress={handleLogin}
        >
            <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={[styles.button, styles.buttonOutline]}
            onPress={handleSignUp}    
        >
            <Text style={styles.buttonOutlineText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        marginTop: 15
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10
    },
    buttonContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: 'black',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 1
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    },
    buttonOutlineText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 16
    }
})