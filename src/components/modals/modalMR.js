/***********************************************
 * 
 * //TODO: Rename this and add description. 
 * 
 **********************************************/

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput
} from 'react-native'



export default class ModalMR extends Component {



  editName(player) {
    if (player.names.length > 0) {

      let names = player.names[this.props.namesIndex];
      return names.name;
    }
  }

  render() {

    let player = this.props.data[this.props.selectedKey];
    let index = this.props.namesIndex;

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

            <View style={{ flex: 1, backgroundColor: '#a3a7af', borderWidth: 1, paddingTop: 20, borderRadius: 24, borderColor: 'white' }}>

              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'white' }}>Name:</Text>
                <TextInput
                  style={{ width: 200, textAlign: 'center', color: 'white' }}
                  defaultValue={this.getnamesName(player)}
                  onChange={(text, index) => {
                    this.props.editnamesName(text, index);
                  } }
                  />
              </View>

              <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}>Value: </Text>
                <TextInput
                  style={{ width: 200, textAlign: 'center', color: 'white' }}
                  defaultValue={this.getnamesValue(player)}
                  />
              </View>

              <View style={{ flex: 1, }} >

              </View>

              <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>
                <View style={{ flex: 1 }} />
                <TouchableOpacity
                  onPress={() => {
                    this.props.setModalVisible(false);

                    this.props.deletenames(this.props.namesIndex);
                  } }
                  style={{ backgroundColor: '#fca9a9', flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 8 }}
                  >
                  <Text style={{ color: 'white' }}>Delete</Text>
                </TouchableOpacity>
                <View style={{ flex: .10 }} />
                <TouchableOpacity
                  style={{ flex: 1, backgroundColor: '#bcdbbe', borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}
                  onPress={() => this.props.setModalVisible(false)}
                  >

                  <Text>Done</Text>

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

