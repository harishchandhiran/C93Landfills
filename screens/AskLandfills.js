import * as React from 'react';
import { View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    StyleSheet } from 'react-native';
import { Header } from "react-native-elements";

export default class AskLandfills extends React.Component {
    render(){
        return (
            <View style={{flex: 1,backgroundColor: '#B4F5F0'}}>
                <View>
                    <Header 
                        backgroundColor="#041F60"
                        centerComponent={{
                            text:"Ask landfills",
                            style:{ color: 'white',fontSize: 27 }
                        }} />
                </View>
                <TextInput style={ styles.inputBox } placeholder="Quantity" />
                <TextInput style={ styles.inputBox } placeholder="Address" />
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: 'white',fontSize: 20}}>Update</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        width: '80%',
        marginTop: 40,
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderBottomWidth: 4,
        borderColor: '#464033',
        fontSize: 23
    },
    button: {
        marginTop: 50,
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#041F60',
        borderRadius: 20,
        height: '5%',
        paddingTop: '1%',
    }
})