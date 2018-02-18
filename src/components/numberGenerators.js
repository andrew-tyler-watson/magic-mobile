/*****************************************************
 * 
 * Creates the component the provides user with options 
 * to use a random number generator. Examples include, 
 * coin toss and multiple dice rolls.  * 
 * 
 ****************************************************/

import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Modal,
    Alert
} from 'react-native'

import FounIcon from 'react-native-vector-icons/Foundation';

export default class CoinRoller extends Component {




    randomNumberGenerator(min, max) {
        let roll = (Math.floor(Math.random() * ((max + 1) - min) + min))
        Alert.alert('Dice Roll', roll.toString())


    }

    randomCoinFlip(min, max) {
        let flip = (Math.floor(Math.random() * ((max + 1) - min) + min))
        if (flip == 1) { Alert.alert('Coin Flip', 'Heads') }
        else { Alert.alert('Coin Flip', 'Tails') }
    }





    render() {
        return (

            <View style={styles.coinRollerContainer}>



                <View style={{ flex: 1, flexDirection: 'row' }} >
                   
                    <TouchableOpacity style={styles.coinDieList} onPress={() => { this.randomCoinFlip(1, 2) } }>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >

                            <Text style={styles.diceButtons}>Coin-Heads/Tails</Text>
                        </View>

                    </TouchableOpacity>
                   
                </View>



                <View style={{ flex: 1, flexDirection: 'row' }} >
                   
                    <TouchableOpacity style={styles.coinDieList} onPress={() => { this.randomNumberGenerator(1, 4) } }>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >

                            <Text style={styles.diceButtons}>Dice Roll-4 Sided</Text>
                        </View>

                    </TouchableOpacity>
                   
                </View>



                <View style={{ flex: 1, flexDirection: 'row' }} >
                   
                    <TouchableOpacity style={styles.coinDieList} onPress={() => { this.randomNumberGenerator(1, 6) } }>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >

                            <Text style={styles.diceButtons}>Dice Roll-6 Sided</Text>
                        </View>

                    </TouchableOpacity>
                   
                </View>


                <View style={{ flex: 1, flexDirection: 'row' }} >
                   
                    <TouchableOpacity style={styles.coinDieList} onPress={() => { this.randomNumberGenerator(1, 10) } }>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >

                            <Text style={styles.diceButtons}>Dice Roll-10 Sided</Text>
                        </View>

                    </TouchableOpacity>
                   
                </View>


                <View style={{ flex: 1, flexDirection: 'row' }} >
                   
                    <TouchableOpacity style={styles.coinDieList} onPress={() => { this.randomNumberGenerator(1, 12) } }>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >

                            <Text style={styles.diceButtons}>Dice Roll-12 Sided</Text>
                        </View>

                    </TouchableOpacity>
                   
                </View>


                <View style={{ flex: 1, flexDirection: 'row' }} >
                   
                    <TouchableOpacity style={styles.coinDieList} onPress={() => { this.randomNumberGenerator(1, 20) } }>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }} >

                            <Text style={styles.diceButtons}>Dice Roll-20 Sided</Text>
                        </View>

                    </TouchableOpacity>
                   
                </View>










            </View >


        )
    }
}

var styles = StyleSheet.create({
    coinDieList: {
        borderWidth: .5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: '#babdc1',
 


    },

    diceButtons: {
        fontFamily: 'Teko-Medium',
        fontSize: 20,
        color: 'white',
        borderRadius: 14,

    },
    coinRollerContainer: {
        flex: 5.25,
        backgroundColor: 'black',
        borderColor: 'white',
        borderTopWidth: 2,
        borderBottomWidth:2,
        paddingTop:1,
        paddingBottom:1
    }
})