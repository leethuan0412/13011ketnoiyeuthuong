import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from "react-native";
const image = { uri: "https://i.pinimg.com/564x/d8/c0/f0/d8c0f03b7cdccb027967e8a59267a752.jpg" };
const image1 = { uri: "https://massageishealthy.com/wp-content/uploads/2018/12/avartar-massage-healthy-cu.png" };
const image2 = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidsd_i3yjiWrWgSDkmwlWwv50VkUldmXZWw&usqp=CAU" };
const image3 = { uri: "https://toppng.com/uploads/preview/orange-transparent-email-icon-red-email-icons-11563007385mpkiku3cqg.png" };
const image4 = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1200px-Facebook_icon_%28black%29.svg.png" };
const image5 = { uri: "data:image/png;base64,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" };

const DATA = [
    {
        id: "data:image/png;base64,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",
        title: "Cài đặt tài khoản",
        icon: "https://e7.pngegg.com/pngimages/1009/847/png-clipart-greater-than-icons-logos-emojis-mathematical-signs-thumbnail.png",
    },

    {
        id: "https://icons-for-free.com/iconfiles/png/512/favourite+like+rating+special+star+icon-1320086047224423788.png",
        title: "Đánh giá ứng dụng",
        icon: "https://e7.pngegg.com/pngimages/1009/847/png-clipart-greater-than-icons-logos-emojis-mathematical-signs-thumbnail.png",
    },
    {
        id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinduY34riszSF06-mqzSeVYsQDsgzAevWEQ&usqp=CAU",
        title: "Trợ giúp",
        icon: "https://e7.pngegg.com/pngimages/1009/847/png-clipart-greater-than-icons-logos-emojis-mathematical-signs-thumbnail.png",
    },
];
const Item = ({ item }) => (
    // <TouchableOpacity style={{ flexDirection: 'row' }}>
    <Text style={[styles.title]}>{item.title}</Text>
    //</TouchableOpacity>
);
const FlatListItem = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
            <Image source={{ uri: item.id }} resizeMode="cover" style={{height:30,width:30,}} />
        </View>
        <View >
            <Text style={[styles.title]}>{item.title}</Text>
        </View>
        <View>
            <Image source={{ uri: item.icon }} resizeMode="cover" style={{height:30,width:30,}} />
        </View>
         </View>
        // <View>
        //     <Text style={[styles.title]}>{item.icon}</Text>
        //     <Image source={{ uri: 'https://i.pinimg.com/originals/89/01/50/890150dd80c23d9afe7fe0ab6e9066a6.png' }} resizeMode="cover" style={{width: 100, height: 30}} />
        // </View>
    )
       
}
const UselessTextInput = () => {
    // const renderItem = ({ item }) => {

    //     return <FlatListItem item={item} />
    // }
    return (
        <SafeAreaView style={{ backgroundColor: '#E5E5E5', height: '100%' }}>
            <View style={{ flexDirection: 'row', }}>

                <View stlye={{ flexDirection: 'row' }}>
                    <Image source={image} style={styles.image} />
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 5, bottom: 5 }}>
                        <Image source={image1} style={styles.image1} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, marginLeft: 10, }}>
                    <Text style={{ color: 'black', fontSize: 25, }}>Lê Đức Thuận</Text>
                    <Text style={{ color: 'grey', fontSize: 15 }}>Sóc Sơn, Hà Nội</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#60B939', fontSize: 15 }}>Xem tài khoản như khách thăm</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ridesFriends}>
                <View style={{ flex: 0.33 }}>
                    <Text style={styles.numbers}>132</Text>
                    <Text style={styles.Text}>Đã cho</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View style={{ flex: 0.33 }}>
                    <Text style={styles.numbers}>2</Text>
                    <Text style={styles.Text}>Theo dõi</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View style={{ flex: 0.33 }}>
                    <Text style={styles.numbers}>2</Text>
                    <Text style={styles.Text}>Đang theo dõi</Text>
                </View>
            </View>
            <View style={styles.square}>
                <View >
                    <Text style={{ borderBottomWidth: 1 }}></Text>
                    <Text style={{ fontSize: 15, alignSelf: 'center', marginTop: 20, }}>Đã xác minh</Text>
                    <Text style={{ borderBottomWidth: 1 }}></Text>

                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, }}>
                    <Image source={image3} style={styles.baseimage} />
                    <Image source={image2} style={styles.baseimage} />
                    <Image source={image4} style={styles.baseimage} />
                    <Image source={image5} style={styles.baseimage} />
                </View>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={FlatListItem} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    square: {
        marginTop: 20,
        height: '30%',
        width: '95%',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        alignSelf: "center",

    },
    ridesFriends: {
        //paddingTop: 70,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        //marginBottom: 20,
    },
    Text: {
        fontSize: 15,
        alignSelf: 'center',

    },

    numbers: {
        fontSize: 30,
        color: 'black',
        //fontWeight: 'bold',
        alignSelf: 'center',
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: 'black',
    },
    image: {
        height: 100,
        width: 100,
        //alignSelf: 'center',
        marginTop: 20,
        borderRadius: 100,


    },
    baseimage: {
        height: 45,
        width: 45,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 10,

    },
    image1: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20,

    }
});

export default UselessTextInput;