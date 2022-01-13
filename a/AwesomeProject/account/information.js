import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { greaterThan } from "react-native-reanimated";
const image={uri: "https://icon2.cleanpng.com/20180315/vdw/kisspng-computer-icons-scalable-vector-graphics-symbol-cli-plus-sign-5aaad88d06c221.6107098215211459970277.jpg"};
const information = () => {
  
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  const [text2, onChangeText2] = React.useState(null);
  

  
  return (
    <SafeAreaView>
        <View> 
    <Text style={styles.text}>Tên của bạn*</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập họ tên"
      />
      </View>
      <View>
      <Text style={styles.basetext}>Ngày sinh</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={text1}
         
          placeholder="dd/mm/yyyy"
        />
      </View>
      <View >
      <Text style={styles.basetext}>Số điện thoại</Text>
        <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          maxLength={10}
          placeholder="Xác minh" 
        />
        <TouchableOpacity
          style={{ flexDirection: 'row', width: 25, height: 25, position: 'absolute', top: 27, right: 25 }} >
     <Image style={{ width: '100%', height: '100%' }} resizeMode="contain" source={{ uri: 'https://icon2.cleanpng.com/20180315/vdw/kisspng-computer-icons-scalable-vector-graphics-symbol-cli-plus-sign-5aaad88d06c221.6107098215211459970277.jpg' }} />
        </TouchableOpacity>
        </View>
      </View>
      <View>
      <Text style={styles.basetext}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={text2}
          maxLength={5}
          placeholder="Xác minh"
        />
      </View>
      <TouchableOpacity style={styles.container} >
        <Text style={styles.login}>Hoàn Thành</Text>
      </TouchableOpacity>


    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
   alignSelf:"center",
  },
  input: {
   // padding: 30,
    height: 60,
    margin: 10,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 20,
    borderColor: "#C4C4C4",
    backgroundColor:"#DDDDDD",
    
  },
 
  login: {
    backgroundColor: '#60B939',
    color: 'white',
    padding: 20,
    borderRadius: 16,
    paddingHorizontal: 140,
    marginTop: 15,
    fontSize: 15,
  },
  text:{
      color:"#60B939",
      fontSize:15,
  },
  basetext:{
    fontSize: 15,
    color:"black"
  },
  image:{
      height:20,
      width:20,
  },
});

export default information;