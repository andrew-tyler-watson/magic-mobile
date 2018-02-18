/****************************************
 * 
 * Component that represents a single player. 
 * Allows user to select a player to be viewed as well as 
 * edit/delete modal appearing on longpresses. 
 * 
 ***************************************/

import React, { Component } from 'react';
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native'



export default class Button extends Component {

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

    lifeRed() {
        lifeTotal = this.props.player.lifeTotal

        var color;


        if (lifeTotal > 5 && lifeTotal <= 10) {
            color = "#eda90b"
        }
        else if (lifeTotal <= 5) {
            color = 'red';
        }
        else {
            color = 'white';
        }

        return color;
    }









    render() {
        let bgColor = this.getBackgroundColor();
        let fontColor = this.lifeRed();
        let index = this.props.index;


        return (
            <TouchableOpacity style={styles.playerTab} onPress={() => this.props.onSelectPlayer(this.props.id)} onLongPress={() => this.props.editPlayerModal(true, index)} >
                <Text style={styles.playerTabNames}>{this.props.player.name}</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'Teko-Medium', flex: 1, color: fontColor }}>{this.props.player.lifeTotal}</Text>
            </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({
    playerTab: {
        width: 88,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRadius: 6,
        backgroundColor: '#505256',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        margin: 1,
        marginBottom: 2



    },
    playerTabNames: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: 'Teko-Light',
        fontSize: 25,
        flex: 2,
        color: 'white'
    },


})

