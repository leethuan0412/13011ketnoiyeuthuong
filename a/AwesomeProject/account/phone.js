import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
const phone = () => {

  const [text, onChangeText] = React.useState("    +84");
  const [text1, onChangeText1] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView >

      <Text style={{ fontSize: 30, color: "black",marginLeft:15 }}>Xác minh số điện thoại của bạn.</Text>
      <Text style={styles.baseText}>Để tăng tính xác thực cho tài khoản, chúng tôi khuyên{"\n"}bạn nên nhập chính xác số điện thoại của mình.</Text>
      <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'row' }} >
        <TextInput
          style={styles.input1}
          onChangeText={onChangeText}
          value={text}
          //placeholder="+84"
        />
        <Image style={{ width:30, height: 20 ,top:30,right:70, position: 'absolute'}} resizeMode="contain" source={{ uri: 'https://product.hstatic.net/200000122283/product/c-e1-bb-9d-vi-e1-bb-87t-nam_2c0683597d2d419fac401f51ccbae779_master.jpg' }} />
        </View>
        <TextInput
          style={styles.input2}
          onChangeText={onChangeText1}
          value={text1}
          placeholder="Nhập số điện thoại"
        />

      </View>
      <Text style={styles.baseText}>Chúng tôi sẽ gửi tin nhắn có kèm OTP cho bạn qua số (+84)</Text>
      <TouchableOpacity  >
        <Text style={styles.login}>Tiếp tục</Text>
      </TouchableOpacity>



    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  input1: {
    marginTop: 10,
    height: 60,
    borderWidth: 1,
    paddingHorizontal: 30,
    borderColor: "#C4C4C4",
    backgroundColor: "#DDDDDD",
    marginRight: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 15,
  },
  input2: {
    height: 60,
    marginTop: 10,
    borderWidth: 1,
    paddingHorizontal: 70,
    borderColor: "#C4C4C4",
    backgroundColor: "#DDDDDD",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  baseText: {
    fontSize: 15,
    marginTop: 10,
    //alignSelf: 'center',
    marginLeft:15,
    //  fontWeight:'bold',

  },

  login: {
    backgroundColor: '#60B939',
    color: 'white',
    padding: 16,
    borderRadius: 16,
    marginTop: 15,
    fontSize: 15,
    alignSelf: 'center',
    paddingHorizontal: 160,
  },
});

export default phone;