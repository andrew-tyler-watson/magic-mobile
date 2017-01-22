import React, { Component } from 'react'

import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native'
import AddPlayer from './addPlayer.js'
import PlayerHolder from './playerHold'
import Edit from './editModal.js'
import BackgroundModal from './backgroundModal'
import LifeTotalBox from './lifeTotalBox'
import SettingsBar from './settingsBar'
import CounterContainer from './counterContainer'
import TokenCounters from './tokenCounters'
import BasicCounters from './basicCounters'
import PlayerNameModal from './playerNameModal'

/**
 * example of data --
 * 
 * data : [
 *  {name:Player 1', lifeTotal: 20, key: 0}, 
 *  {name:'Player 2, lifeTotal: 15, key: 1},
 * ]
 *
 */

/**
 * Base component which contains all other components.
 * All app data is stored as state in this component. 
 * Functions used to modify data are created here and then passed into other components as props. 
 */
export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [{ name: 'Fred', lifeTotal: 20, color: null, key: 0 },
            { name: 'Daryll', lifeTotal: 30, color: null, key: 1 }],
            tokens: [{ defaultToke: 5, key: 0 }, { defaultToke: 5, key: 1 }],
            selectedKey: 1,
            modalVisible: false,
            backgroundModalVisible: false,
            playerNameModalVisible: false, 
            settings: {
                defaultLife: 20,
            }
        }
    }

    /**
     * Resets all player life to 0. 
     */
    resetLife = () => {
        data = this.state.data;

        data.forEach(function (player) {
            player.lifeTotal = 0;
        }, this);

        this.setState({
            data: data
        });
    }

    /**
     * Function to pass to PlayerView to handle decreasing life/clicking minus button. 
     */
    decrementLife = () => {
        let data = this.state.data;
        const key = this.state.selectedKey;

        data[key].lifeTotal--;

        this.setState({
            data: data,
        });
    }

    /**
     * Function to pass to PlayerView to handle increasing life/clicking plus button. 
     */
    incrementLife = () => {
        let data = this.state.data;
        const key = this.state.selectedKey;

        data[key].lifeTotal++;

        this.setState({
            data: data,
        })
    }

    /**
     * Function to pass to PlayerHolder to handle  
     * 
     */
    addPlayer = () => {
        let data = this.state.data;
        const dataLength = data.length;

        data.push({ name: "player", lifeTotal: 20, id: dataLength, key: dataLength });

        this.setState({
            data: data,
        })
    }

    deletePlayer = () => {
        let data = this.state.data;
        const index = data.key;
        data.splice({ index: 1 })
    }

    /**
     * Used to change player name. 
     */
    setPlayerName = (name) =>{
        let data = this.state.data; 
        
        data[this.state.selectedKey].name = name; 

        this.setState({
            data: data, 
        })
    }

    /**
     * Function to pass to PlayerButton to handle selecting/clicking players. 
     */
    selectPlayer = (key) => {
        const data = this.state.data;
        this.setState({
            //selectedPlayer: data[key], 
            selectedKey: key,
        });
    }

    setColor = (color) => {
        let data = this.state.data;
        data[this.state.selectedKey].color = color;

        this.setState({
            data: data,
        })

    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setPlayerNameModalVisible = (visible) => {
        this.setState({
            playerNameModalVisible: visible
        });
    }

    setBackGroundModalVisible = (visible) => {
        this.setState({ backgroundModalVisible: visible });
    }

    //function for decrementing token value - passed to playerview - not working currently
    decrementToke = () => {
        let tokens = this.state.tokens;
        tokens.defaultToke--;

        this.setState({
            tokens: tokens,
        })
    }

    // function for adding a token counter. No opacity uses this yet.
    addToken = () => {
        let tokens = this.state.tokens;
        const tokensLength = tokens.length;

        tokens.push({ defaultToke: 5, key: dataLength });

        this.setState({
            tokens: tokens,
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>


                <LifeTotalBox setModalVisible={this.setPlayerNameModalVisible} data={this.state.data} selectedKey={this.state.selectedKey} />

                <View style={{ flex: 1, backgroundColor: 'blue' }} >
                    <AddPlayer onAddPlayer={this.addPlayer} data={this.state.data} openEdit={this.setBackGroundModalVisible} />
                </View>

                <View style={{ flex: 1.50, backgroundColor: 'green' }}>
                    <PlayerHolder data={this.state.data} onSelectPlayer={this.selectPlayer} />
                </View>

                <BackgroundModal data={this.state.data} selectedKey={this.state.selectedKey}
                    modalVisible={this.state.backgroundModalVisible} setModalVisible={this.setBackGroundModalVisible}
                    setColor={this.setColor} deletePlayer={this.deletePlayer} />

                <PlayerNameModal 
                    modalVisible={this.state.playerNameModalVisible} 
                    setModalVisible = {this.setPlayerNameModalVisible}
                    setPlayerName = {this.setPlayerName}
                    data = {this.state.data} 
                    selectedKey = {this.state.selectedKey}
                    />

                <CounterContainer />

                <SettingsBar />

            </View>
        )
    }
}

/**
 * Old render return 
 * 
 *              <LifeTotalBox selectedKey={this.state.selectedKey} data={this.state.data} 
                plus={this.incrementLife} minus={this.decrementLife} resetLife={this.resetLife} openBackground={this.setBackGroundModalVisible}
                />
                <BackgroundModal data={this.state.data} selectedKey={this.state.selectedKey} modalVisible = {this.state.backgroundModalVisible} setModalVisible={this.setBackGroundModalVisible} setColor={this.setColor}/>
                <Edit modalVisible = {this.state.modalVisible} setModalVisible = {this.setModalVisible}/>
                <PlayerHolder data={this.state.data} onAddPlayer={this.addPlayer} onSelectPlayer={this.selectPlayer} openEdit={this.setModalVisible}/>
 */