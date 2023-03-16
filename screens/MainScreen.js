import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import InputForm from '../components/InputForm';
import TodoItem from '../components/TodoItem';
import { useSelector } from 'react-redux';
import LogoutIcon from '../assets/logout.svg';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const MainScreen = () => {
  const todos = useSelector(state => state.todo.todos);
  // redux store에 접근하기 위한 Hooks
  const todoTasks = todos.filter((it)=> it.state === 'todo');
  const completedTasks = todos.filter((it)=> it.state === 'done');
  const auth = getAuth();
  const navigation = useNavigation();

  const handleLogout = async() => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle = {'default'} />
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>ToDo App</Text>
        <TouchableOpacity
          style = {styles.logOutButton}
          onPress = {handleLogout}
        >
          <LogoutIcon/>
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {todoTasks.length !== 0 ? (
          <FlatList
          data = {todoTasks}
          renderItem = {({item}) => <TodoItem {...item}/>}
          keyExtractor = {(item)=>item.id}
          />) : 
          (<Text style={styles.emptyListText}>'할일이 없습니다.'</Text>)}
      </View>
      <View style={styles.separator}/>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        {completedTasks.length !== 0 ? (
          <FlatList
          data = {completedTasks}
          renderItem = {({item}) => <TodoItem {...item}/>}
          keyExtractor = {(item)=>item.id}
          />) : 
          (<Text style={styles.emptyListText}>'완료된 일이 없습니다.'</Text>)}
      </View>
      <InputForm/>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0, //android,ios 분리
        backgroundColor: '#f7f8fa'
    },
    pageTitle: {
        marginBottom: 35,
        paddingHorizontal: 15,
        fontSize: 50,
        fontWeight: '600'
    },
    separator: {
        marginHorizontal: 10,
        marginTop: 25,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)'
    },
    listView: {
        flex: 1,
    },
    listTitle: {
        marginBottom: 25,
        paddingHorizontal: 15,
        fontSize: 41,
        fontWeight: '500'
    },
    emptyListText: {
      paddingTop: 10,
      paddingBottom: 15,
      paddingHorizontal: 15,
      fontSize: 15,
      lineHeight: 20,
      color: '#737373'
    },
    headerContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logOutButton: {
      marginBottom: 0,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: 42,
      height: 42,
      
    }
});