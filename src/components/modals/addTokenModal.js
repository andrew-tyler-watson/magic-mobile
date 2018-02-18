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

        return (

            <View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={() => this.props.setModalVisible(false)}
                    >
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10, }}>
                        <View style={{ flex: 1 }} />

                        <View style={{ flex: 1, backgroundColor: 'white', borderWidth: 1 }}>

                            <View style={{ flex: 1 }} />

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>


                            </View>

                            <View style={{ flex: 1 }} />

                            <View style={{ flex: 1,alignItems:'center', justifyContent:'center' }}>
                                <TouchableOpacity
                                    style={{marginBottom:30,height:50, width:100,backgroundColor:'gray',borderWidth:1, alignItems:'center',justifyContent:'center'}}
                                    onPress = { () => this.props.setModalVisible(false)}
                                    >

                                    <Text>Done</Text>

                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ flex: 1 }} />


                    </View>




                </Modal>

            </View>
        )
    }
}

