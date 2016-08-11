// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai20TextInput extends Component {

  constructor(props) {

    super(props);

    // Khai báo state
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (

      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>

        <Text>{this.state.text}</Text>
        
      </View>
    );
  }
}

// Khai báo CSS
var ao = StyleSheet.create({


});


// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai20TextInput', () => Bai20TextInput);
