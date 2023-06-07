import React from "react"
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create(
    {board: {
        backgroundColor: "blue",
        width: "50%",
        height: "50%",
}, 
})

function Board () {
    return <View style={styles.board}></View>
}

export default Board