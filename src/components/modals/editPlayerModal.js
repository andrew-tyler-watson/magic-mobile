/*************************************************
 * 
 * Component that represents the modal window that allows
 * user to edit all players. 
 * 
 ************************************************/

import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    TextInput
} from 'react-native'



export default class EditPlayerModal extends Component {



    render() {

        let player = this.props.data[this.props.selectedKey];
        let index = this.props.playerIndex;

        if (player == undefined) {
            return null;
        }

        return (

            <View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => this.props.setModalVisible(false)}
                    >
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10, }}>

                        <View style={{ flex: .25 }} />

                        <View style={{ flex: .50, backgroundColor: '#a3a7af', borderWidth: 1, paddingTop: 0, borderRadius: 24, borderColor: 'white' }}>

                            <View style={{ flex: .50 , justifyContent:'center', alignItems:'center'}} >
                            <Text style={{ color: 'white', fontFamily: 'Teko-Medium', fontSize:15 }}>Delete Selected Player?</Text>
                            </View>





                            <View style={{ flex: 1, }} >

                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                                <View style={{ flex: 1 }} />
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.setModalVisible(false);

                                        this.props.deletePlayer(this.props.Index);
                                    } }
                                    style={{ backgroundColor: '#fca9a9', flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 8 }}
                                    >
                                    <Text style={{ color: 'white', fontFamily: 'Teko-Medium' }}>Delete</Text>
                                </TouchableOpacity>
                                <View style={{ flex: .10 }} />
                                <TouchableOpacity
                                    style={{ flex: 1, backgroundColor: '#babdc1', borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}
                                    onPress={() => this.props.setModalVisible(false)}
                                    >

                                    <Text style={{ fontFamily: 'Teko-Medium', color: 'white' }}>Cancel</Text>

                                </TouchableOpacity>

                                <View style={{ flex: 1 }} />
                            </View>

                        </View>

                        <View style={{ flex: 1 }} />


                    </View>




                </Modal>

            </View>
        )
    }
}

