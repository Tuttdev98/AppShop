import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ViewStyle } from 'react-native'

const container: ViewStyle = {
    flex: 1,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
}

const searchBar: ViewStyle = {
    display: 'flex',
    height: 32,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#E5E5E5',
    borderWidth: 2,
    backgroundColor: 'white'
}

export default {
    container,
    searchBar
}