/**********************************************************
 * 
 * TODO: Provide info on settings container. 
 * 
 * 
 *********************************************************/

import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import FounIcon from 'react-native-vector-icons/Foundation';
export default class SettingsContainer extends Component {
    render() {

        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#babdc1',
                borderWidth: 2,
                borderLeftWidth: 1,
                borderRadius: 18,
                borderColor: 'black'
            }}>






                <TouchableOpacity onPress={() => this.props.coinRollerVisible()} style={{ flex: .50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1 }}>
                    <View>
                      <Text style={{ fontFamily: 'Teko-Medium2', fontSize: 20, color: 'white' }}>About</Text>

                    </View>
                </TouchableOpacity>





                <TouchableOpacity onPress={() => this.props.resetGame()} style={{ flex: 1.50, flexDirection: 'row', borderColor: 'black', borderLeftWidth: 1, borderRightWidth: 1 }}>

                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end' }}>

                        <Icon name="refresh" size={20} color="#bcdbbe" />

                    </View>


                    <View style={{ flex: 1.15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Teko-Medium3', fontSize: 20, color: 'white' }}>Reset</Text>
                    </View>

                </TouchableOpacity>







                <TouchableOpacity onPress={() => this.props.newGame()} style={{ flex: 1.50, flexDirection: 'row', borderColor: 'black', borderLeftWidth: 1, borderRightWidth: 1 }}>

                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end' }}>

                        <Icon name="plus-circle" size={20} color="#bcdbbe" />

                    </View>


                    <View style={{ flex: 1.15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Teko-Medium4', fontSize: 20, color: 'white' }}>New Game</Text>
                    </View>

                </TouchableOpacity>




                <TouchableOpacity onPress={() => this.props.settingsContainerVisible()} style={{ flex: .50, alignItems: 'center', justifyContent: 'center', borderLeftWidth: 1 }}>
                    <View>
                        <Icon name="reply" size={20} color='white' />
                    </View>
                </TouchableOpacity>



            </View>
        )
    }
}