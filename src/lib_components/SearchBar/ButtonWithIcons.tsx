import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ViewStyle } from 'react-native'
import ButtonWithIconsStyle from "./ButtonWithIcons.style";
import hambar from "../../images/hambar.png"

const ButtonWithIcons: React.FC = () => {
    return (
        <TouchableOpacity style={ButtonWithIconsStyle.btn}>
            <Image style={{width: 58, height: 38}} source={hambar} />
        </TouchableOpacity>
    )
}

export {ButtonWithIcons}