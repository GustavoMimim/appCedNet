// User.js

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ajax from '../../services/FetchUsers';
import UserList from '../../componentes/UserList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  }
})

export class User extends Component {

  state = {
    usuarios: []
  }

  async componentDidMount() {
    const usuarios = await ajax.fetchUsers();
    this.setState({usuarios});
  }

  render() {
    return (
      <View style={styles.container}>
      {
        <UserList usuarios={this.state.usuarios} />
      }
      </View>
    )
  }
}

export default User;