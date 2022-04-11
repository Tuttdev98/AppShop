import { View, Text, StyleSheet, Dimensions, Image, TextStyle, ViewStyle } from "react-native"

const container: ViewStyle = {
    flex: 1,
    backgroundColor: '#FFF'
}

const navigation: ViewStyle = {
    flex: 2,
}

const body: ViewStyle = {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
}

const location: ViewStyle = {
    marginTop: 20,
    flex: 3,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
}

const search: ViewStyle = {
    flex: 8,
    display: 'flex',
    height: '60',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 4
}

export default {
    container,
    navigation,
    body,
    location,
    search
}