/****************************************************
 * 
 * Renders settings bar at bottom of screen. 
 * Provides ability to switch between counters or coin roller, ability to add 
 * counters, go to more options, etc. 
 * 
 */

import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import FounIcon from 'react-native-vector-icons/Foundation';
export default class SettingsBar extends Component {


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
                        <FounIcon name="contrast" size={25} color='white' />

                    </View>
                </TouchableOpacity>





                <TouchableOpacity onPress={() => { this.props.addToken(); this.props.coinRollerVisible(true) } } style={{ flex: 1.50, flexDirection: 'row', borderColor: 'black', borderLeftWidth: 1, borderRightWidth: 1 }}>

                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end' }}>

                        <FounIcon name="plus" size={25} color="#bcdbbe" />

                    </View>


                    <View style={{ flex: 1.15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Teko-Medium', fontSize: 20, color: 'white' }}>Tokens</Text>
                    </View>

                </TouchableOpacity>







                <TouchableOpacity onPress={() => { this.props.addCounter(); this.props.coinRollerVisible(true) } } style={{ flex: 1.50, flexDirection: 'row', borderColor: 'black', borderLeftWidth: 1, borderRightWidth: 1 }}>

                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end' }}>

                        <FounIcon name="plus" size={25} color="#bcdbbe" />

                    </View>


                    <View style={{ flex: 1.15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Teko-Medium', fontSize: 20, color: 'white' }}>Counters</Text>
                    </View>

                </TouchableOpacity>




                <TouchableOpacity onPress={() => { this.props.settingsContainerVisible() } } style={{ flex: .50, alignItems: 'center', justifyContent: 'center', borderLeftWidth: 1 }}>
                    <View>
                        <FounIcon name="widget" size={25} color='white' />
                    </View>
                </TouchableOpacity>



            </View>
        )
    }
}