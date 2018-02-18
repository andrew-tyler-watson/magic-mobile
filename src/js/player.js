/*****************************************************
 * 
 * A basic model to represent an individual player. 
 * 
 ****************************************************/

export default function Player(playerName, lifeTotal, color, key, counters) {
    var player = {
        name: playerName,
        lifeTotal: lifeTotal,
        color: color,
        key: key,
        counters: []
    }

    return player; 
}