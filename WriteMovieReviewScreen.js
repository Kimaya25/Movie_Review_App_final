import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import {Text, View, TextInput, Button} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
export default class WriteMovieReviewScreen extends React.Component{
constructor(){
    super();  
    this.state = {
        MovieName : '',
        MovieReview : '',
        showFlatList : false,
        dataSource : ""
    }

}

addReview = (MovieReview, MovieName)=>{
    db.collection('movie_reviews').add({
        "MovieName" : MovieName,
        "MovieReview" : MovieReview,
        "date" : firebase.firestore().FieldValue.serverTimeStamp()
    })
}

getMoviesReviewed(){
db.collection("users").where().get()
.then().then((snapshot)=>{
    snapshot.forEach((doc)=>{
        db.collection('users').doc(doc.id).update({
            isMoviesReviewedActive : true
        })
    })
})

this.setState({
    MovieName: '',
    MovieReview: ''
})

return Alert.alert("Movie review has been submited")
}
 render(){
     return(
         <SafeAreaProvider>
         <View>
         <View>
             <Header backgroundColor = 'yellow'
             centreComponent = {{text : 'Write Movie Reviews' , style : {fontSize : '20' , fontWeight : 'bold'}}}/>
         </View>
             <TextInput style = {styles.textInput}
                placeholder = {"Enter Movie name here"}
                onChangeText = {(text)=>{
                    this.setState({
                        MovieName : text
                    })
                }}
             />

             <TextInput style = {styles.textInput}
                 placeholder = {"Enter Movie review here"}
                 multiline = {true}
                 numberOfLines = {10}
                 onChangeText = {(text)=>{
                     this.setState({
                         MovieReview : text
                     })
                 }}
             />

        
                 <Button title = "submit"/>

         </View>
         </SafeAreaProvider>
     )
 }




}
const styles = StyleSheet.create({
textInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  }
})
