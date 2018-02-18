/************************************************************
 * 
 * playerOptions is the component responsible for displaying buttons 
 * that allow user to add or edit player on the main app screen. 
 * Receives the following functions for appContainer: 
 * 
 * -addPlayer()
 * -setEditPlayerModalVisible() 
 * 
 * Also receives the entire state object from appContainer. 
 * 
 ************************************************************/

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import FounIcon from 'react-native-vector-icons/Foundation';

export default class AddPlayer extends Component {
    render() {
        return (
            <View style={styles.settingsContainer}>
                <TouchableOpacity style={styles.addPlayer} onPress={this.props.onAddPlayer}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <FounIcon name="torsos-all" size={15} color='white' />
                    </View>
                    <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Teko-Light' }}>Add Player</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editPlayer} onPress={()=>this.props.setVis(true)}>

                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <FounIcon name="results-demographics" size={15} color='white' />
                    </View>
                    <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Teko-Light' }}>Edit Players</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    settingsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    addPlayer: {
        flex: 1,
        backgroundColor: '#babdc1',
        borderWidth: 4,
        borderRadius: 14,
        borderColor: 'black',
       
    },
    editPlayer: {
        flex: 1,
        backgroundColor: '#babdc1',
        borderWidth: 4,
        borderRadius: 14,
        borderColor: 'black',
       

    }
});