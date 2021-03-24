import * as React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Header} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { ListItem } from 'react-native-elements'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class ReadMovieReviewScree extends React.Component{
    constructor(){
       super();
       this.state = {
           movieReviewList : []
       }
       this.Requestref = null
    }

    getReveiwedMoviesList = ()=>{
        this.Requestref = db.collection('writeReviews')
        .onSnapshot((snapshot)=>{
            var movieReviewList = snapshot.docs.map((doc) => doc.data())
            this.setState({
             movieReviewList : movieReviewList
            })
        })
    }

    componentDidMount(){
        this.getReveiwedMoviesList()
    }

   

    keyExtractor = (time,index) => index.toString()


renderItem = ( {item, i} ) =>{
    return(
        <ListItem
        key={i} bottomDivider>
            <ListItem.Content>
             <ListItem.Title>
                 {item.MovieName}
             </ListItem.Title>
            
            </ListItem.Content>
        </ListItem>
    )
    }
    render(){
        return(
          <SafeAreaProvider>
              <View style = {{flex:1}}>
                  <Header  backgroundColor = 'yellow'
             centreComponent = {{text : 'Read Movie Reviews' , style : {fontSize : '20' , fontWeight : 'bold'}}}/>
              <View style = {{flex :1}}>
                  {this.state.movieReviewList.length === 0}
                  ?(
                      <View style={styles.subContainer}>
                          <Text style={{fontSize : 20}}>List of all Movie Reviews</Text>
                      </View>
                  )
                  :(
                      <FlatList
                      keyExtractor={this.keyExtractor}
                      data = {this.state.movieReviewList}
                      renderItems = {this.renderItem}
                      />
                  )
   
              
              </View>
              </View>
          </SafeAreaProvider>
        )
    }
}
const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})

