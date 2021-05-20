import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localDb';

/*console.log(db['for'].chunks);
console.log(db['for'].phones);*/

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayChunks: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#f45a66'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#ffffff', fontSize: 20 },
          }}
        />
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(input) => {
            this.setState({ text: input });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.buttonStyling}
          onPress={() => {
            this.setState({ displayChunks: db[this.state.text].chunks });
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 25,
              padding: 7,
            }}>
            Go
          </Text>
        </TouchableOpacity>

        
        <View>
        {this.state.displayChunks.map((item) => {
           return(
             <TouchableOpacity style = {styles.chunkButtonStyle}>
              <Text style = {styles.chunkText}>
               {item}
              </Text>
             </TouchableOpacity>
           )
        })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    height: 30,
    width: 200,
    textAlign: 'center',
    borderWidth: 5,
    marginTop: '10%',
    marginLeft: '25%',
  },
  buttonStyling: {
    width: 150,
    height: 50,
    alignSelf: 'center',
  },
  imageStyle: {
    height: 100,
    width: 100,
    marginLeft: '30%',
  },
  chunkText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    fontSize: 20,
  },
  chunkButtonStyle: {
    height: 50,
    width: 100,
    alignSelf: 'center',
    backgroundColor: 'skyblue',
    marginTop: 10,
  },
});
