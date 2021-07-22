import React from 'react';
import { Text, View , KeyAvoidingView ,TouchableOpacity , TextInput , StyleSheet , Image, ToastAndroid, KeyboardAvoidingView  } from 'react-native';
// import { styleSheets } from 'min-document';
import {Header} from "react-native-elements"

import db from './config'

export default class ReadStoryscreen extends React.Component {
  constructor (props){
    super(props)
    this.state={
     author:'',
     storyText:'',
     title:''
    }
  }

  submitStory=async()=>{
    db.collection('stories').add({
      author:this.state.author,
      storyText:this.state.storyText,
      title:this.state.title
    });
    this.setState({
      author:'',
      storyText:'',
      title:''
    });
    ToastAndroid.show('STORY SUBMITTED', ToastAndroid.SHORT)
  }

  render(){
    return(
      <KeyAvoidingView styles={styles.container}>
        <Header
        backgroundColor={"blue"}
        centerComponent={{
          text:"Bed Time Stories",
          style:{color:"white",fontSize:20}
        }}
        />
         <TextInput
         placeHolder="Story Title"
         onChangeText={(text)=>{
           this.setState({
             title:text
           })
         }}
         value={this.state.title}
         style={styles.title}
         />
         <TextInput
         placeHolder="Author"
         onChangeText={(text)=>{
           this.setState({
             author:text
           })
         }}
         value={this.state.author}
         style={styles.author}
         />
         <TextInput
         placeHolder="Write Your Story"
         onChangeText={(text)=>{
           this.setState({
             storyText:text
           })
         }}
         value={this.state.storyText}
         style={styles.storyText}
         multiline={true}
         />
         <TouchableOpacity
           style={styles.submitButton}
           onPress={this.submitStory}
           >
             <Text style={styles.buttonText}>SUBMIT</Text>
         </TouchableOpacity>
      </KeyAvoidingView>
    );
  }
}
    

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'yellow'
  },
  buttonText:{
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'white'
  },
  submitButton:{
    justifyContent:'center',
    backgroundColor:'#FBC02D',
    width:80,
    height:40,
    alignSelf:'center',
  },
  storyText:{
    height:250,
    borderWidth:2,
    margin:10
  },
  author:{
    height:40,
    borderWidth:2,
    margin:10
  },
  title:{
    height:40,
    borderWidth:2,
    margin:10,
    marginTop:10
  },
})