import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationActions } from 'react-navigation';
const login = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1642377600&Signature=NyYuEauHy5gCxcocLEYX2i8DHdYKdZdw6DUdf3y4VnejgIwdqfajmWu~NvKGwdUVM694hyA0dgJTzC6BsfsB27jFaDYnjt6SUjnzQhwNmkY0nrn4sTLGPxWfkRaskvsiBTeV30f7derrE5I7HfV9Aiv~lW-QS757OF52mZS1IjXN~6GwQ~Cea2E4HwowzJO3497OthDlRfL-abqrRT08b-rIvopbLDJIzF61Puz0ABg29POPD24tE5uX5iu5tCdwU8jjHLKOPEOe-KhNJ~IDGhmCPuTLjoU3Rm6dixtFa1iKiEqaiHeNjptGf~AEiUbeAD-HkvzY4wWyK20~Li3xxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" };
  const [isSecureText, setSecureText] = React.useState(true);
  
  return (
    <SafeAreaView>
      <Image source={image} resizeMode="center" style={styles.image} />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nhập email hoặc số điện thoại"
      />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          maxLength={5}
          secureTextEntry={isSecureText}
          placeholder="Mật khẩu"
        />
        <TouchableOpacity
          style={{ flexDirection: 'row', width: 24, height: 24, position: 'absolute', top: 20, right: 20 }} onPress={() => { setSecureText(!isSecureText) }}>

          {!isSecureText ?

            <Image style={{ width: '100%', height: '100%' }} resizeMode="contain" source={{ uri: 'https://icons.iconarchive.com/icons/iconsmind/outline/256/Eye-2-icon.png' }} />
            : <Image style={{ width: '100%', height: '100%' }} resizeMode="contain" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMD3IcMCiSshEopomEAVcP--CPjx9lvVDlw&usqp=CAU' }} />}
        </TouchableOpacity>


      </View>
      <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate('password')}}>
        <Text style={styles.baseText}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} >
        <Text style={styles.login}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20 }}>
           <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 20, }}>Bạn chưa có tài khoản?</Text>
           <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate('sigin')}}>
              <Text style={styles.dangki}>Đăng kí</Text>
          </TouchableOpacity>

      </View >
      <Text style={styles.Text}>-Hoặc đăng nhập với-</Text>
      <View style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}>
        <TouchableOpacity>
          <Image
            style={styles.google}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image
              style={styles.facebook}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
              }}
            />
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 20,
    borderColor: "#C4C4C4",
  },
  dangki: {
    color: '#60B939',
    fontSize: 15,
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 15,
    marginTop: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  image: {
    height: 100,
    width: 200,
    alignSelf: 'center',
    marginTop: 0,
  },
  google: {
    borderRadius: 16,
    height: 40,
    width: 40,
    //  alignSelf:'center',
    // marginLeft:10,
  },
  facebook: {
    borderRadius: 16,
    height: 40,
    width: 40,
    marginLeft: 15,
    //  alignSelf:'center',
  },
  login: {
    backgroundColor: '#60B939',
    color: 'white',
    padding: 16,
    borderRadius: 16,
    paddingHorizontal: 150,
    marginTop: 15,
    fontSize: 15,
  },
  baseText: {
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 10,
    fontSize: 15,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default login;