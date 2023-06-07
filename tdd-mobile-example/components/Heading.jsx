import React from "react"
import { Text, StyleSheet} from "react-native"
import styling from "../styling"


const styles = StyleSheet.create(styling)

function Heading () {
    return <Text style={styles.test}>Test1</Text>
}

export default Heading