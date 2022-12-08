import React from "react";
import {Text, TouchableOpacity } from "react-native";
import styles from "./TaskCard.style";

function TaskCard (props) {


    return (

        <TouchableOpacity  style={styles.container} onPress={props.touch}>
            <Text style={styles.text}>{props.card}</Text>
        </TouchableOpacity >



    )

}

export default TaskCard;