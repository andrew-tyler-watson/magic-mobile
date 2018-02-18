import React, { Component } from 'react';
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

export default class EditFunctions extends Component {
    render() {
        return (

            <View style={styles.even}>
                <TouchableOpacity style={styles.even}>
                    <Text>Edit Name</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.even}>
                    <Text>Set BackGround Color</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.even} onPress={this.props.delete}>
                    <Text>Delete Player</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    even: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        flex: 1
    },
    color :{
        color: 'white'
    }

})