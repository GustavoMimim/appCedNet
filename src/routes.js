import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

import loginView from './views/login/Login.js'
import dashboardView from './views/dashboard/Dashboard.js'
import startView from './views/start/Initial.js'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Routes = createAppContainer(
  createStackNavigator({
/*     Start: {
      screen: startView,
      navigationOptions: {
        headerShown: false,
        headerStyle: {
          backgroundColor: 'red'
        }
      }
    },
    Login: {
      screen: loginView,
      navigationOptions: {
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#004B8D'
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
      }
    }, */
    Dashboard: {
      screen: dashboardView,
      navigationOptions: {
        headerShown: false
      }
      /*      navigationOptions: {
              title: 'GRUPO CEDNET',
              headerShown: false,
              headerTitleStyle: {
                color: '#004B8D'
          },
              headerLeft: () =>
                <TouchableOpacity
                  style={[{ paddingHorizontal: 30 }]}
                  onPress={() => alert('Desculpe, ainda não temos isso!')}
                >
                  <Icon
                    name='bars'
                    size={18}
                    color='#004B8D'
                  />
                </TouchableOpacity>,
              headerRight: () =>
                <TouchableOpacity
                  style={[{ paddingHorizontal: 30 }]}
                  onPress={() => alert('Desculpe, ainda não temos isso!')}
                >
                  <Icon
                    name='user'
                    size={18}
                    color='#004B8D'
                  />
                </TouchableOpacity>
            } */
    }
  })
)

export default Routes
