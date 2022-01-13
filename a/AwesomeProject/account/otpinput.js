import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const forgetpassword = () => {
    
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [isSecureText, setSecureText] = React.useState(true);
  return (
    <SafeAreaView>
      <Text style={styles.Text}>Xác minh số điện thoại của bạn.</Text>
      <Text style={styles.baseText}>Nhập mã OTP chúng tôi vừa gửi qua tin nhắn của bạn</Text>
      
      
      <OTPInputView style={{width: '92  %', height: 70, alignSelf:'center'}}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.under}
          codeInputHighlightStyle={styles.underonclick}
        />
      <View style={{flexDirection:'row', alignSelf:'center',}}>
      <Text style={styles.baseText} >Chưa nhận được mã?</Text>
      <TouchableOpacity  >
      <Text style={{color:'green'}}>Gửi lại</Text>
      </TouchableOpacity> 
      </View>
      <TouchableOpacity  >
      <Text style={styles.login}>Xác nhận</Text>
      </TouchableOpacity>
    
     
      
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  // borderStyleHighLighted: {
  //   borderColor: "red",
  // },

  under: {
    width: 40,
    height: 45,
    borderWidth: 1,
    color:'black',
    borderColor:'#DDDDDD',
    backgroundColor:"#DDDDDD",

  },

  underonclick: {
    borderColor: "red",
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 20,
    borderColor:"#C4C4C4"
  },
baseText:{
    fontSize: 15,
    marginLeft:15,
   
},
  Text:{
    fontSize: 30,
    marginTop:10,
    //alignSelf:'center',
  //  fontWeight:'bold',
  marginLeft:15,
  
  },
  image: {
    height: 100,
    width:200,
    alignSelf:'center',
    marginTop:80,
  },

  login:{
    backgroundColor:'#60B939',
    color:'white',
    padding:16,
    borderRadius:16,
    marginTop:15,
    fontSize:15,
    alignSelf:'center',
    paddingHorizontal:160,
  },
});

export default forgetpassword;