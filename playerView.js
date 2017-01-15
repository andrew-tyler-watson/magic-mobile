import React, { Component } from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView

} from 'react-native'

import SettingsBar from './settingsBar';

import TokenCounters from './tokenCounters';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class PlayerView extends Component {

    render() {

        let selectedPlayer = this.props.data[this.props.selectedKey]



        return (
            <View style={{ flex: 6, backgroundColor: '#7fd3e0' }} >


                <View style={{ flex: 3, flexDirection: 'row', backgroundColor: '#7fd3e0' }} >


                    <View style={{ flex: 2, }} >

                        <TouchableOpacity onPress={this.props.minus} style={{ flex: 1, }}>

                            <View style={{ flex: 1, }} />

                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, flex: 1 }}>
                                <Icon name="chevron-left" size={25} />
                            </View>

                            <View style={{ flex: 1, }} />

                        </TouchableOpacity>

                    </View>
                    <View>
                        <View style={{ flex: 1 }}>
                        </View>


                        <Text style={styles.lifeScore}>{selectedPlayer.lifeTotal}</Text>

                        <View style={{ flex: 1, }} />

                    </View>
                    <View style={{ flex: 2, }} >

                        <TouchableOpacity onPress={this.props.plus} style={{ flex: 1, }}>

                            <View style={{ flex: 1, }} />

                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, flex: 1 }}>
                                <Icon name="chevron-right" size={25} />
                            </View>

                            <View style={{ flex: 1, }} />

                        </TouchableOpacity>

                    </View>



                </View>

                <View style={{ flex: .50, }} >
                    <Text style={styles.playerName}>{selectedPlayer.name}</Text>

                </View>

                <SettingsBar />


                <View style={styles.counterBox}>
                    <ScrollView >


                        <TokenCounters />
                        



                    </ScrollView>


                </View>

            </View>



        )
    }
}


var styles = StyleSheet.create({
    lifeButtons: {
        textAlign: 'center',
        fontSize: 50,
        flex: 1

    },

    playerName: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 20

    },

    lifeScore: {
        textAlign: 'center',
        fontSize: 90,
        flex: 3
    },

    counterBox: {
        flex: 4,
        backgroundColor: '#325182',
        borderWidth: 2,
        borderColor: 'black',
        borderBottomWidth: 0
    },

    counterItem: {
        height: 56,
        backgroundColor: '#d0d5dd',
        borderColor: 'black',
        borderWidth: 1,
        flex: 5,
        flexDirection: 'row'


    }

});