import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import SearchBarStyle from "./SearchBar.style";
import search from "../../images/search.png";

const SearchBar: React.FC = () => {
    return (<View style={SearchBarStyle.container}>
        <View style={SearchBarStyle.searchBar}>
            <Image style={{ width: 25, height: 25 }} source={search} />
            <TextInput style={{ marginLeft: 5, flex: 9, display: 'flex', fontSize: 20, height: 42 }} placeholder={"Search Foods"}/>
        </View>
    </View>)
}

export { SearchBar }