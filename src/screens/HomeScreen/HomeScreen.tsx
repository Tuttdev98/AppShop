import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { ButtonWithIcons, SearchBar } from "../../lib_components/SearchBar"
import HomeScreenStyle from "./HomeScreen.style"

export const HomeScreen: React.FC = () => {
    return (
        <View style={HomeScreenStyle.container}>
            <View style={HomeScreenStyle.navigation}>
                <View style={HomeScreenStyle.location}>
                    <Text>458/30A ,Huỳnh Tấn Phát ,Quận 7 ,TP.HCM</Text>
                    <Text> Edit</Text>
                </View>
                <View style={HomeScreenStyle.search}>
                    <SearchBar/>
                    <ButtonWithIcons />
                </View>
            </View>
            <View style={HomeScreenStyle.body}>
                <Text>body</Text>
            </View>
        </View>
    )
}