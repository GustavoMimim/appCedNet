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
import gerenciarTecnicoGustavo from './views/tecnicos/GerenciarTecnicoGustavo.js'; /* Gerenciar Informações do Técnico Gustavo */
import gerenciarTecnicoVinicius from './views/tecnicos/GerenciarTecnicoVinicius.js'; /* Gerenciar Informações do Técnico Vinicius */
import gerenciarTecnicoRenan from './views/tecnicos/GerenciarTecnicoRenan.js'; /* Gerenciar Informações do Técnico Vinicius */
import gerenciarTecnicoAline from './views/tecnicos/GerenciarTecnicoAline.js'; /* Gerenciar Informações do Técnico Aline */
import listaTecnicos from './views/tecnicos/ListaTecnicos.js'; /* Lista de todos os técnicos */
import Veículos from './views/veiculos/Veiculos.js'; /* Veículos disponíveis e indisponíveis */
import listaVeiculos from './views/veiculos/ListaVeiculos.js'; /* Lista de todos os veículos */
import gerenciarVeiculoCDU from './views/veiculos/GerenciarVeiculoCDU.js'; /* Gerenciar Informações do Veículo CDU-2532 */
import gerenciarVeiculoTYA from './views/veiculos/GerenciarVeiculoTYA.js'; /* Gerenciar Informações do Veículo TYA-8991 */
import gerenciarVeiculoMTR from './views/veiculos/GerenciarVeiculoMTR.js'; /* Gerenciar Informações do Veículo MTR-4318 */
import gerenciarVeiculoQMM from './views/veiculos/GerenciarVeiculoQMM.js'; /* Gerenciar Informações do Veículo QMM-2353 */

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
      <HomeStack.Screen name="Informações - Gustavo" component={gerenciarTecnicoGustavo} />
      <HomeStack.Screen name="Informações - Vinicius" component={gerenciarTecnicoVinicius} />
      <HomeStack.Screen name="Informações - Renan" component={gerenciarTecnicoRenan} />
      <HomeStack.Screen name="Informações - Aline" component={gerenciarTecnicoAline} />
      <HomeStack.Screen name="Lista de Técnicos" component={listaTecnicos} />
      <HomeStack.Screen name="Veículos" component={Veículos} /> 
      <HomeStack.Screen name="Gerenciar Veículo - CDU-2532" component={gerenciarVeiculoCDU} />
      <HomeStack.Screen name="Gerenciar Veículo - TYA-8991" component={gerenciarVeiculoTYA} />
      <HomeStack.Screen name="Gerenciar Veículo - MTR-4318" component={gerenciarVeiculoMTR} />
      <HomeStack.Screen name="Gerenciar Veículo - QMM-2353" component={gerenciarVeiculoQMM} />
      <HomeStack.Screen name="Lista de Veículos" component={listaVeiculos} />
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
          <Tab.Screen name="Serviços" component={orderView} />
          <Tab.Screen name="Configurações" component={settingsView} />
        </Tab.Navigator>
      </NavigationContainer >
    );
}