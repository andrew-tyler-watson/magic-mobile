/***********************************************
 * 
 * Used to visually represent a basic counter. 
 * 
 **********************************************/

import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,


} from 'react-native'

import SettingsBar from './settingsBar';

import Icon from 'react-native-vector-icons/FontAwesome';
import FounIcon from 'react-native-vector-icons/Foundation';


export default class BasicCounters extends Component {



    render() {

        let index = this.props.index;

        return (

            <TouchableOpacity
                onLongPress={() => this.props.setEditCounterModalVisible(true,index)}
                style={{
                    height: 56,
                    backgroundColor: '#babdc1',
                    borderColor: '#e8ecf2',
                    borderWidth: 2,
                    borderRadius: 25,
                    flex: 5,
                    flexDirection: 'row',
                    marginBottom: 1,
                    marginTop: .50,
                    marginLeft: 1,
                    marginRight: 1 
                }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#b9bc54', borderRadius: 80, marginTop: 1, marginBottom: 1, marginLeft: 1 }}>
                    <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Teko-SemiBold' }}>{this.props.value}</Text>

                </View>

                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Teko-Medium1' }}>{this.props.name}</Text>


                </View>

                <View style={{ flex: .50, }}>

                    <TouchableOpacity onPress={() => this.props.minusCounterValue(index)} style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <View>
                            <FounIcon name="minus" size={25} color="#fca9a9" />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1, }}>
                    <TouchableOpacity onPress={() => this.props.plusCounterValue(index)} style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                        <View>
                            <FounIcon name="plus" size={25} color="#bcdbbe" />
                        </View>
                    </TouchableOpacity>

                </View>
            </TouchableOpacity>

        )
    }
}