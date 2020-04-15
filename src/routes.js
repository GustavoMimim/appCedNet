import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import loginView from './views/login/index.js';
import mainView from './views/main/index.js';
import startView from './views/start/index.js';

const Routes = createAppContainer(
	createStackNavigator({
		Start: {
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
					backgroundColor: '#004B8D',
				},
				headerTitleStyle: {
					color: 'white',
				},
				headerTintColor: 'white',
			}
		},
		Main: {
			screen: mainView,
			navigationOptions: {
				title: 'GRUPO CEDNET',
				headerShown: true,
				headerStyle: {
					elevation: 0,
					shadowOpacity: 0,
				},
				headerTitleStyle: {
					color: '#004B8D',
				},
				headerLeft: () => null,
				headerRight: () =>
					<TouchableOpacity style={[{ paddingHorizontal: 30 }]}
						onPress={() => alert('Desculpe, ainda não temos isso!')}>
						<Icon
							name='user'
							size={18}
						/>
					</TouchableOpacity>,
			},
		},
	})
);

export default Routes;
