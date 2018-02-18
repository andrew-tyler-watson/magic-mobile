/*********************************************************
 * 
 * Responsible for rendering the selected player's life total 
 * as well as providing the ability to increment/decrement life. 
 * 
 * functions received from appContainer: 
 * -setPlayerNameModalVisible() 
 * -incrementLife() 
 * -decrementLife() 
 *********************************************************/

import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'


import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Component used to display player life & name. 
 * Also allows user to increase/decrease life total.
 * 
 * TODO: onLongPress of playername, open modal to change name? 
 */
export default class LifeTotalBox extends Component {
    async componentDidMount(){
        await Font.loadAsync({
            'Teko-Medium': require('./android/app/src/main/assets/fonts/Teko-Medium.ttf'),
            'Teko-Light': require('./android/app/src/main/assets/fonts/Teko-Light.ttf'),
            'Teko-Bold': require('./android/app/src/main/assets/fonts/Teko-Bold.ttf'),
            'Teko-SemiBold': require('./android/app/src/main/assets/fonts/Teko-SemiBold.ttf'),
            'Teko-Regular': require('./android/app/src/main/assets/fonts/Teko-Regular.ttf'),
            'FontAwesome': require('./android/app/src/main/assets/fonts/FontAwesome.ttf'),

        });

        this.setState({fontLoaded: true});
    }

    renderMinusContainer() {
        return (
            <View style={{ flex: 3, }} >

                <TouchableOpacity onPress={this.props.minus} style={{ flex: 1 }}>

                    <View style={{ flex: 1, }} />

                    <View style={styles.leftArrow}>
                        <Icon name="chevron-left" size={25} color={'white'} />
                    </View>

                    <View style={{ flex: 1, }} />

                </TouchableOpacity>

            </View>
        )
    }

    renderPlusContainer() {
        return (
            <View style={{ flex: 3, }} >

                <TouchableOpacity onPress={this.props.plus} style={{ flex: 1, }}>

                    <View style={{ flex: 1 }} />

                    <View style={styles.rightArrow}>
                        <Icon name="chevron-right" size={25} color={'white'} />
                    </View>

                    <View style={{ flex: 1, }} />

                </TouchableOpacity>

            </View>
        )
    }

    renderLifeScore(selectedPlayer) {
        if (selectedPlayer == undefined) {
            return null;
        }
        return (
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            {
                this.props.data.fontLoaded ?
                (<Text style={{fontSize: 100, fontFamily: 'Teko-Medium', color: '#FFFFFF',}}>
                {selectedPlayer.lifeTotal}</Text>) : null
            }
            </View>
        )
    }

    renderPlayerName(selectedPlayer) {

        let playerName;

        if (selectedPlayer == null || selectedPlayer == undefined || selectedPlayer.name == null || selectedPlayer.name == undefined) {
            playerName = '';
        } else {
            playerName = selectedPlayer.name;
        }
        

        return (
            <View style={styles.nameBox}>
                <TouchableOpacity
                    onLongPress={() => this.props.setModalVisible(true)}>
                    {
                    this.props.data.fontLoaded ?
                    (<Text style={{textAlign: 'center', fontSize: 35,fontFamily: 'Teko-Medium7',color: 'white',}}>
                    {playerName}</Text>) : null
                    }
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        // TEMPORARY FIX 
        if(this.props.data == null){
            return (
                <View style={styles.lifeBox} >
                    <View style={styles.topContainer}>
                    </View>
                </View>
            )
         }

        selectedPlayer = this.props.data[this.props.selectedKey]

        return (

            <View style={styles.lifeBox} >
                {this.renderPlayerName(selectedPlayer)}

                <View style={styles.topContainer}>

                    {this.renderMinusContainer()}

                    {this.renderLifeScore(selectedPlayer)}

                    {this.renderPlusContainer()}

                </View>




            </View>
        )
    }
}

var styles = StyleSheet.create({

    topContainer: {
        flex: 4, flexDirection: 'row',
    },

    leftArrow: {
        alignItems: 'center',
        flex: 1
    },

    rightArrow: {
        flex: 1,

        alignItems: 'center',
    },

    lifeBox: {
        flex: 4.50,
        backgroundColor: '#3c7387',
        paddingTop: 15,
        borderColor: 'black',
        borderWidth: 10,
        borderRadius: 20

    },

  

    nameBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    
});