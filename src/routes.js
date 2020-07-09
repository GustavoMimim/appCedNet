import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

//Screens
import dashboardView from './views/dashboard/Dashboard.js'
import homeView from './views/home/Home.js'
import mapView from './views/map/Map.js'
import orderView from './views/order/Order.js'
import Tecnicos from './views/tecnicos/Tecnicos.js'; /* Técnicos disponíveis e indisponíveis */
import gerenciarTecnicos from './views/tecnicos/GerenciarTecnicos.js'; /* Gerenciar Informações dos Técnicos */
import listaTecnicos from './views/tecnicos/ListaTecnicos.js'; /* Lista de todos os técnicos */
import Veículos from './views/veiculos/Veiculos.js'; /* Veículos disponíveis e indisponíveis */
import listaVeiculos from './views/veiculos/ListaVeiculos.js'; /* Lista de todos os veículos */
import gerenciarVeiculos from './views/veiculos/GerenciarVeiculos.js'; /* Gerenciar Informações do Veículo CDU-2532 */

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
      <HomeStack.Screen name="Gerenciar Técnico" component={gerenciarTecnicos} />
      <HomeStack.Screen name="Lista de Técnicos" component={listaTecnicos} />
      <HomeStack.Screen name="Veículos" component={Veículos} /> 
      <HomeStack.Screen name="Gerenciar Veículo" component={gerenciarVeiculos} />
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

        }}
      />
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
        </Tab.Navigator>
      </NavigationContainer >
    );
}