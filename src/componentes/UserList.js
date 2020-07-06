// UserList.js

import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class UserList extends Component {

  static propTypes = {
        usuarios: PropTypes.array.isRequired
  }; 
  render() {
    return (

      <View style={styles.usersList}>
        {this.props.usuarios.map((user) => {
            return (
                <View key={user.id}>
                    <Text style={styles.userstext}>{user.login} | { user.password }</Text>
                </View>
            )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    usersList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    userstext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});