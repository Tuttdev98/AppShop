import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IOffer } from '../../models/IOffer';

export const OfferItem = (props: IOffer) => {

    return (
        <View style={style.offerItem}>
            <Image source={props.img} style={style.img} />
            <View style={style.offerItemContent}>
                <View style={style.OfferContent}>
                    <Text style={style.offerText}>{props.offer} OFF</Text>
                    <Text style={style.offerTitle}>{props.title}</Text>
                    <Text style={style.offerDesc}>{props.desc}</Text>
                </View>
                <View style={style.blockImg}>
                    <Image source={props.icon} style={style.imgIcon} />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    offerItem: {
        display: 'flex',
        flexDirection: "row",
        margin: 10,
        backgroundColor: "#fff",
    },
    offerItemContent: {
        display: 'flex',
        flexDirection: "row"
    },
    img: {
        height: 120,
        width: 100
    },
    blockImg: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    },

    imgIcon: {
        height: 40,
        width: 40
    },
    OfferContent: {
        padding:10
    },
    offerText: {
        fontSize: 20
    },
    offerTitle: {
        fontWeight:'bold',
        lineHeight:16,
        fontSize:16,
        marginBottom:5,
        marginTop:5
    },
    offerDesc: {
        fontSize:12,
        width:200,
        height:29,
        overflow:'scroll'
    },
})