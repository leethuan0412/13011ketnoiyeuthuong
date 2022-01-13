import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from "react-native";
const DATA = [
    {
        id: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png",
        title: "Thông tin cá nhân",
        icon: "https://e7.pngegg.com/pngimages/1009/847/png-clipart-greater-than-icons-logos-emojis-mathematical-signs-thumbnail.png",
    },

    {
        id: "https://png.pngtree.com/png-clipart/20190705/original/pngtree-notification-icon-vector-illustration-in-glyph-style-for-any-purpose-png-image_4246298.jpg",
        title: "Cài đặt thông báo",
        icon: "https://e7.pngegg.com/pngimages/1009/847/png-clipart-greater-than-icons-logos-emojis-mathematical-signs-thumbnail.png",
    },
    { 
        title: "Đăng xuất",
    },
    
];
const FlatListItem = ({ item }) => {
    return (
        <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', justifyContent:'flex-start', padding: 16, }}>
            <View>
                <Image source={{ uri: item.id }} resizeMode="cover" style={{ height: 30, width: 30,marginRight:15, }} />
            </View>
            <View >
                <Text style={{ fontSize: 20, }}>{item.title}</Text>
            </View>
            <View>
                <Image source={{ uri: item.icon }} resizeMode="cover" style={{ height: 30, width: 30, marginLeft:150, }} />
            </View>
        </TouchableOpacity>
    )

}
const UselessTextInput = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#E5E5E5', height: '100%' }}>
            <FlatList
                data={DATA}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'gray', width: '95%', alignSelf: 'center' }} />}
                renderItem={FlatListItem} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
});

export default UselessTextInput;