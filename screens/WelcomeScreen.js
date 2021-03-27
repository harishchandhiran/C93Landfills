import * as React from 'react'
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native';

export default class WelcomeScreen extends React.Component {
    constructor(){
        super();
        this.state={
            name: '',
            password: ''
        }
    }

    userSignIn(){
        this.props.navigation.navigate('Drawer');
    }

    render(){
        return (
            <View style={{flex: 1,backgroundColor: '#2CEEF0'}}>
                <Text style={styles.title}>Landfills</Text>
                <TextInput style={ styles.inputBox } placeholder="email Id" />
                <TextInput style={ styles.inputBox } placeholder="password" />
                <TouchableOpacity style={styles.button}
                    onPress={()=>{this.userSignIn();}} >
                    <Text style={{color: 'white',fontSize: 20}}>
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: 'white',fontSize: 20}}>Sign up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        marginTop: 65,
        textAlign: 'center',
        color: '#0476D0',
        fontWeight: 'bold'
    },
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
        marginTop: 40,
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#041F60',
        borderRadius: 20,
        height: '5%',
        paddingTop: '1%',
    }
})

//onPress={this.props.navigation.navigate('MyProfileScreen')}