import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputForm = () => {
  return (
    <KeyboardAvoidingView
        style={styles.addFormContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TextInput
        style = {styles.inputField}
        placeholder="할일을 작성해주세요."/>
        <Pressable
         style={styles.addButton}>
            <Text sytle={styles.addButtonText}>+</Text>
        </Pressable>
    </KeyboardAvoidingView>
  )
}

export default InputForm

const styles = StyleSheet.create({

})