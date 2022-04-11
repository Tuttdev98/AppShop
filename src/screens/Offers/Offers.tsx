import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { IOffer } from '../../models/IOffer';
import cusin_1 from '../../images/cusin_1.jpg';
import cusin_2 from '../../images/cusin_2.jpg';
import cusin_3 from '../../images/cusin_3.jpg';
import offericon from '../../images/offer.jpg';
import offer_icon from '../../images/offer_icon.png';
import offer_n_icon from '../../images/offer_n_icon.png';
import order_process from '../../images/order_process.png';
import { OfferItem } from '../../lib_components/OfferItem/OfferItem';


export const Offers = () => {

    const data: IOffer[] = [
        {
            img: cusin_1,
            offer: "40%",
            title: "Hot Food Online",
            desc: "Applicable on Weekdays Only",
            icon: offericon
        },
        {
            img: cusin_2,
            offer: "400$",
            title: "Hot Food Online",
            desc: "Applicable on Weekdays Only, Applicable on Weekdays Only,",
            icon: offer_icon
        },
        {
            img: cusin_3,
            offer: "400$",
            title: "Hot Food Online",
            desc: "Applicable on Weekdays Only, Applicable on Weekdays Only,",
            icon: offericon
        },
        {
            img: cusin_2,
            offer: "400$",
            title: "Hot Food Online",
            desc: "Applicable on Weekdays Only, Applicable on Weekdays Only,",
            icon: offer_n_icon
        },
        {
            img: cusin_3,
            offer: "400$",
            title: "Hot Food Online",
            desc: "Applicable on Weekdays Only, Applicable on Weekdays Only,",
            icon: order_process
        },

    ]
    return (
        <View style={{overflow:'scroll'}}>
            {
                data.map((e, i) => <OfferItem key={i} {...e} />)
            }
            {/* <Image source={cusin_1}/> */}
        </View>
    )
}