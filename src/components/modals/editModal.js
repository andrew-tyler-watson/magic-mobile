import React, { Component } from 'react';
/****************************************************
 * 
 * //TODO: Write description. 
 * 
 ****************************************************/

import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet, ScrollView
} from 'react-native';

import EditButton from '../editButtons.js'
import Functions from '../editFunctions.js'

export default class EditModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let editButtons = () => {
      let edits = this.props.data.map((_player, index) => {
        return (
          <EditButton onSelectPlayer={this.props.onSelectPlayer} data={this.props.data} key={index} id={index} player={_player} />
        )
      })
      return edits;
    }


    return (
      <View >
        <Modal
          animationType={"slide"}
          visible={this.props.editModalVisible}
          onRequestClose={() => { this.props.setVis(false) } }>
          <View style={styles.editContainer}>
            <ScrollView>
              {editButtons()}
            </ScrollView>
          </View>

          <Functions style={styles.buttonContainer} delete={this.props.delete} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  editContainer: {
    flex: 8,
    flexDirection: 'column',
  },
  buttonContainer: {
    flex: 2,
  }
});

 /*let editButtons = () => {
      let edits = this.props.data.map((_player, index) => {
        return (
          <editButton onSelectPlayer={this.props.onSelectPlayer} data={this.props.data} key={index} id={index} player={_player} />
        )
      })
      return edits;
    }
*/