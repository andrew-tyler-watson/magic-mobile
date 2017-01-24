import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'

import Token from './tokenCounters'
import Counter from './basicCounters'

export default class CounterContainer extends Component {


    render() {

        let selectedPlayer = this.props.data[this.props.selectedKey];

        let renderCounters = () => {
            let counters = selectedPlayer.counters.map((counter, index) => {
                if (counter.type == "counter") {
                    return (
                        <Counter name={counter.name} value={counter.value} key={index} index={index} minusCounterValue={this.props.minusCounterValue} plusCounterValue={this.props.plusCounterValue}
                            setEditCounterModalVisible={this.props.setEditCounterModalVisible} />
                    )
                }

                else if (counter.type == "token") {
                    return (
                        <Token name={counter.name} value={counter.value} key={index} index={index} minusCounterValue={this.props.minusCounterValue} plusCounterValue={this.props.plusCounterValue}
                            setEditCounterModalVisible={this.props.setEditCounterModalVisible} />
                    )
                }
            })
            return counters;
        }

        return (
            <View style={{
                flex: 5.25,
             
                backgroundColor: 'black',
                borderColor: 'white',
                borderTopWidth: 2,
                paddingTop: 1,
                paddingBottom: 1
            }}>

                <ScrollView>
                    {renderCounters()}
                </ScrollView>

            </View>
        )
    }
}