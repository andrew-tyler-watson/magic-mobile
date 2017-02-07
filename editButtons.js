import React, { Component } from 'react';
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput
} from 'react-native'



export default class EditButton extends Component {

  getBackgroundColor() {
        selectedPlayer = this.props.data[this.props.id]

        var backgroundColor;

        switch (selectedPlayer.color) {
            case "r":
                backgroundColor = 'red';
                break;
            case "b":
                backgroundColor = 'black';
                break;
            case "g":
                backgroundColor = 'green';
                break;
            case 'w':
                backgroundColor = 'white';
                break;
            case "u":
                backgroundColor = 'blue';
                break;
            default:
                backgroundColor = '#7fd3e0';
                break;
        }

        return backgroundColor;
    }

    render() {

        return (
            <TouchableOpacity style={styles.playerTab} onPress={() => this.props.onSelectPlayer(this.props.id)} >
                <TextInput style={styles.playerTabNames}>{this.props.player.name}</TextInput>
                <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Teko-Medium', flex: 1, color:'black' }}>{this.props.player.lifeTotal}</Text>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    playerTab: {
        width: 360,
        height: 90,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth:1,
        backgroundColor:'#babdc1',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',

        
        
    },
    playerTabNames: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: 'Teko-Light',
        fontSize: 25,
        flex:2,
        color: 'black'
    },


})
