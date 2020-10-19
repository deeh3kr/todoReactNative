import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function Sandbox(){
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        paddingTop: 40,
        backgroundColor: '#ddd',
    }
});