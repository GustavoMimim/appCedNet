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
import Tecnicos from './views/tecnicos/Tecnicos.js'; /* Técnicos disponíveis e indisponíveis */
import gerenciarTecnicos from './views/tecnicos/GerenciarTecnicos.js'; /* Gerenciar Informações do Técnico */
import listaTecnicos from './views/tecnicos/ListaTecnicos.js'; /* Lista de todos os técnicos */
import Veículos from './views/veiculos/Veiculos.js'; /* Veículos disponíveis e indisponíveis */
import listaVeiculos from './views/veiculos/ListaVeiculos.js'; /* Lista de todos os veículos */
import gerenciarVeiculo from './views/veiculos/GerenciarVeiculos.js'; /* Gerenciar Informações do Veículo */
import selectedOrderView from './views/order/orderSelected.js'

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
      <HomeStack.Screen name="Técnicos" component={Tecnicos} /> 
      <HomeStack.Screen name="Informações do Técnico" component={gerenciarTecnicos} />
      <HomeStack.Screen name="Lista de Técnicos" component={listaTecnicos} />
      <HomeStack.Screen name="Veículos" component={Veículos} /> 
      <HomeStack.Screen name="Gerenciar Veículos" component={gerenciarVeiculo} />
      <HomeStack.Screen name="Lista de Veículos" component={listaVeiculos} />
    </HomeStack.Navigator>
  );
}

function HomeStackOrder ({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="SERVIÇOS"
        component={orderView}
        options={{
          title: 'SERVIÇOS',
          headerShown: true,
          headerTitleStyle: {
            color: '#004B8D'
          },
          headerRight: () =>
            <TouchableOpacity
              style={[{ paddingHorizontal: 30 }]}
              /* onPress={() => navigation.navigate('Dashboard')} */
            >
              <Icon
                name='filter'
                size={28}
                color='#004B8D'
              />
            </TouchableOpacity>

        }}
      />
      <HomeStack.Screen name="Serviços" component={orderView} />
      <HomeStack.Screen name="Serviço" component={selectedOrderView} />
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
          <Tab.Screen name="Serviços" component={HomeStackOrder} />
          <Tab.Screen name="Configurações" component={settingsView} />
        </Tab.Navigator>
      </NavigationContainer >
    );
}