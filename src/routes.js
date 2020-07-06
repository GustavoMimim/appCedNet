import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

//Screens
import loginView from './views/login/Login.js'
import dashboardView from './views/dashboard/Dashboard.js'
import startView from './views/start/Initial.js'
import homeView from './views/home/Home.js'
import mapView from './views/map/Map.js'
import settingsView from './views/settings/Settings.js'
import orderView from './views/order/Order.js'
import aboutView from './views/about/About.js'
import { isSignedIn } from './services/auth.js'
import User from './views/teste/User.js';
import Tecnicos from './views/tecnicos/Tecnicos.js';

const HomeStack = createStackNavigator();

function HomeStackScreen ({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="GRUPO CEDNET"
        component={homeView}
        options={{
          title: 'GRUPO CEDNET',
          headerShown: true,
          headerTitleStyle: {
            color: '#004B8D'
          },
          headerRight: () =>
            <TouchableOpacity
              style={[{ paddingHorizontal: 30 }]}
              onPress={() => navigation.navigate('Dashboard')}
            >
              <Icon
                name='pie-chart'
                size={28}
                color='#004B8D'
              />
            </TouchableOpacity>

        }}
      />
      <HomeStack.Screen name="Dashboard" component={dashboardView} />
      <HomeStack.Screen name="Tecnicos" component={Tecnicos} />
    </HomeStack.Navigator>
    
  );
}

const Tab = createBottomTabNavigator();

export default function App () {

    return (
      < NavigationContainer >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let colorHex
              let iconName

              colorHex = focused ? '#004B8D' : 'gray'

              if (route.name === 'Inicio') {
                iconName = 'home'
              } else if (route.name === 'Mapa') {
                iconName = 'map'
              } else if (route.name === 'Serviços') {
                iconName = 'list'
              } else if (route.name === 'Configurações') {
                iconName = 'sliders'
              } else if (route.name === 'User') {
                iconName = 'sliders'
              }

              return <Icon name={iconName} size={24} color={colorHex} />;

            },
          })}
          tabBarOptions={{
            activeTintColor: '#004B8D',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Inicio" component={HomeStackScreen} />
          <Tab.Screen name="Mapa" component={mapView} />
          <Tab.Screen name="Serviços" component={orderView} />
          <Tab.Screen name="Configurações" component={settingsView} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      </NavigationContainer >
    );
}