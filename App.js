import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, ScrollView, Button, navigation } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";


const App = ({navigation}) =>{
  const [count, setCount] = useState(0);

  const user = {
    name: 'Selly ',
    fullname: 'Selly Resty Wijayanti',
    email: 'sellyresty17@gmail.com',
    bio: 'Halo semuanya, namaku selly resty wijayanti biasa dipanggil selly, Saya tertarik dalam bidang pemrograman, here is my projects.',
    title: 'My Projects',
  };

  const onPressLikes = () => {
    setCount(count + 1);
  };

  const onPressDislikes = () => {
    if (count === 0) {
      Alert.alert("Sudah mencapai batas");
    } else {
      setCount(count - 1);
    }
  };

  const BtnDislikesClicked = () => (
    <TouchableOpacity onPress={onPressDislikes}>
      <FontAwesome name="thumbs-down" size={25} />
    </TouchableOpacity>
  );

  const BtnLikesClicked = () => (
    <TouchableOpacity onPress={onPressLikes}>
      <FontAwesome name="thumbs-up" size={25} />
    </TouchableOpacity>
  );

  return (
    <ScrollView>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.text_top}>
            <Image style={styles.logo}
            source={require('./assets/images/gwww.jpg')} /> 
              <Text style={styles.text_headline}>
                Portofolio
              </Text>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.fullname}>{user.fullname}</Text>
              <Text style={styles.email}>{user.email}</Text>
              <Text style={styles.bio}>{user.bio}</Text>
            </View>
          </View>
          <View style={styles.main_content}>
      <Button checkPrimaryCondition={true} btnStyle={styles.btnC} title="Contact me" textStyle={styles.txtBtnC} />
      <Text style={styles.title}>{user.title}</Text>
      <Image source={require('./assets/images/hc.png')}style={styles.project} />
      <Text style={styles.hc}>House Cleaner App</Text>
      <Image source={require('./assets/images/sforum.png')}style={styles.project} />
      <Text style={styles.hc}>SForum Website</Text>
      <Text style={styles.likes}>Total Likes</Text>
      <Text style={styles.likesCount}>{count}</Text>
          <View style={styles.likesContainer}>
            <View style={styles.btnLikesSection}>
              <BtnDislikesClicked />
              <Text style={styles.likesDesc}>Dislikes</Text>
            </View>
            <View style={styles.btnLikesSection}>
              <BtnLikesClicked />
              <Text style={styles.likesDesc}>Likes</Text>
            </View>
          </View>
          </View>
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  top: {
    gap: 24,
    paddingTop: 38,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 200,
 },
  text_top: {
    gap: 8,
    alignItems: 'center',
  },
  text_headline: {
    fontSize: 23,
    color: "#FFFFFF",
    fontWeight: 'bold'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fullname: {
    fontSize: 16,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10
  },
  bio:{
    fontSize: 16,
    textAlign:'center',
    marginBottom: 20
  },

  title:{
    fontSize: 20,
    marginTop: 30,
    fontStyle: 'normal',
    marginBottom: 20,
  },
  project: {
    width: 300,
    height: 200,
  },
  btnC:{
    backgroundColor: '#5393F7',
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    width: "40%",
    marginVertical: 12,
  },
  txtBtnC:{
    color: '#FFFFFF',
  },
  likesContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    marginVertical: 6,
  },
  btnLikesSection: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  titleLikes: {
    marginBottom: 8,
    marginTop: 40,
    textAlign: "center",
  },
  likesCount: {
    textAlign: "center",
    color: '#E5141E',
  },
  likesDesc: {
    color: '#fff',
  },
  likes: {
    textAlign: "center",
    color:'#fff',
    marginTop:20,
  },
  hc: {
    right: 20,
    padding: 8,
  }

});

export default App;
