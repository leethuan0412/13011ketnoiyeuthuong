import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
const forget = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);
  //const [number, onChangeNumber] = React.useState(null);
  const image = {uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1642377600&Signature=NyYuEauHy5gCxcocLEYX2i8DHdYKdZdw6DUdf3y4VnejgIwdqfajmWu~NvKGwdUVM694hyA0dgJTzC6BsfsB27jFaDYnjt6SUjnzQhwNmkY0nrn4sTLGPxWfkRaskvsiBTeV30f7derrE5I7HfV9Aiv~lW-QS757OF52mZS1IjXN~6GwQ~Cea2E4HwowzJO3497OthDlRfL-abqrRT08b-rIvopbLDJIzF61Puz0ABg29POPD24tE5uX5iu5tCdwU8jjHLKOPEOe-KhNJ~IDGhmCPuTLjoU3Rm6dixtFa1iKiEqaiHeNjptGf~AEiUbeAD-HkvzY4wWyK20~Li3xxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"};
//  const [isSecureText, setSecureText] = React.useState(true);
  return (
    <SafeAreaView>
      <Image source={image} resizeMode="center" style={styles.image} />
      <Text style={styles.password}>Đặt lại mật khẩu</Text>
      <Text style={styles.Text}> Tạo mật khẩu mới</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập mật khẩu"
      />  
        <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={text1}
        placeholder="Nhập lại mật khẩu"
      />    
      <TouchableOpacity  onPress={()=>{navigation.navigate('login')}}>
      <Text style={styles.login}>Xác nhận</Text>
      </TouchableOpacity>
    
     
      
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 20,
    borderColor:"#C4C4C4"
  },
  password:{
    fontWeight:'bold',
    alignSelf:'center',
    fontSize: 15,
    color:'black',
  },
  Text:{
    fontSize: 15,
    marginTop:10,
    alignSelf:'center',
  //  fontWeight:'bold',
  
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
    paddingHorizontal:150,
  },
 
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#E5E5E5'
  },
});

export default forget;