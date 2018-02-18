/***************************************************
 * 
 * Component representing the modal window that appears and 
 * gives user the ability to change a user's name. 
 * 
 ***************************************************/

import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    TextInput
} from 'react-native'



export default class PlayerName extends Component {

    render() {
        if (this.props.data[this.props.selectedKey]==undefined){
            return null;
        }
            let playerName = this.props.data[this.props.selectedKey].name;

        return (

            <View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => this.props.setModalVisible(false)}
                    >
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10, }}>


                        <View style={{ flex: 1, backgroundColor: '#a3a7af', borderWidth: 1, paddingTop: 20, borderRadius: 24, borderColor: 'white', alignItems: 'center' }}>

                            <View style={{ flex: 1 }} >
                                <Text style={{ fontFamily: 'Teko-Medium', fontSize: 25 }}>Edit Player Name</Text>
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                                <TextInput style={{ width: 200, borderColor: 'white', borderWidth: 1, color: 'white', alignItems: 'center', justifyContent: 'center' }}
                                    onChangeText={(text) => this.props.setPlayerName(text)}
                                    value={playerName}
                                    />

                            </View>

                            <View style={{ flex: 1 }} />

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    style={{ marginBottom: 30, height: 50, width: 100, backgroundColor: '#bcdbbe', borderWidth: 1, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}
                                    onPress={() => this.props.setModalVisible(false)}
                                    >

                                    <Text style={{ fontFamily: 'Teko-Medium' }}>Done</Text>

                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ flex: 3 }} />


                    </View>




                </Modal>

            </View>
        )
    }
}

