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

                borderColor: 'black'
            }}>






                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: .50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRightWidth:1 }}>
                    <View>
                        <FounIcon name="contrast" size={25} />

                    </View>
                </TouchableOpacity>





                <TouchableOpacity onPress={()=>this.props.addToken()} style={{ flex: 1.50,  flexDirection: 'row', borderColor:'black', borderLeftWidth:1, borderRightWidth:1  }}>

                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end'}}>

                        <FounIcon name="plus" size={25} color="#bcdbbe" />

                    </View>


                    <View style={{ flex: 1.15, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontFamily:'Teko-Medium', fontSize:20}}>Tokens</Text>
                    </View>

                </TouchableOpacity>







                <TouchableOpacity onPress={()=>this.props.addCounter()} style={{ flex: 1.50,  flexDirection: 'row', borderColor:'black', borderLeftWidth:1, borderRightWidth:1 }}>

                    <View style={{ flex: .35, justifyContent: 'center', alignItems: 'flex-end'}}>

                        <FounIcon name="plus" size={25} color="#bcdbbe" />

                    </View>


                    <View style={{ flex: 1.15, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontFamily:'Teko-Medium', fontSize:20}}>Counters</Text>
                    </View>

                </TouchableOpacity>




                <TouchableOpacity onPress={this.props.resetLife} style={{ flex: .50, alignItems: 'center', justifyContent: 'center', borderLeftWidth:1 }}>
                    <View>
                        <FounIcon name="widget" size={25} />
                    </View>
                </TouchableOpacity>



            </View>
        )
    }
}