import React, { useState } from 'react';
import { StyleSheet, View, Alert, StatusBar } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default Authenticate = (props) => {
	const [isLoading, setLoading] = useState(false);
	const [userName, setUserName] = useState('');
	const [userPass, setPassword] = useState('');

	const Login = async event => {
		event.preventDefault();
		setLoading(true);

		// Validar os dados enviados
		try {

			if (!userName || !userPass)
				throw new TypeError('Por favor, informe o usuário e senha para continuar!');

			// Buscar no back-end			
			try {

				fetch('http://192.168.0.114:80/apiCedApp/logar.php', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({

						user_name: userName,

						user_pass: userPass

					})

				}).then((response) => response.json())

					.then((responseJson) => {

						// If server response message same as Data Matched
						if (responseJson === 'Logado com sucesso!') {

							//Alert.alert('Atenção!', JSON.stringify(responseJson));
							//Then open Profile activity and send user email to profile activity.
							props.navigation.navigate('Main');


						} else {

							Alert.alert('Falha ao entrar!', JSON.stringify(responseJson));

						}

					}).catch((error) => {

						console.error(error);
						//Alert.alert('Um erro ocorreu!', 'Desculpe-nos pelo inconveniente, iremos trabalhar para resolver esse problema.');

					});

			} catch (error) {

				console.error(error);

			}

		}

		catch (error) {

			Alert.alert('Atenção!', error.message)

		}

		finally {

			setLoading(false);

		}

	};

	return (
		
		<View style={styles.container}>

			<StatusBar hidden={false} color="white" backgroundColor='#004B8D' translucent={true} />

			<Input
				placeholder='Usuário'
				autoComplete={userName}
				value={userName}
				onChangeText={text => setUserName(text)}
				autoFocus
				containerStyle={{
					height: 40,
					marginBottom: 10
				}}
				inputStyle={{
					color: 'white'
				}}
			/>

			<Input
				placeholder='Senha'
				secureTextEntry={true}
				autoComplete={userPass}
				value={userPass}
				onChangeText={text => setPassword(text)}
				containerStyle={{
					height: 40,
					marginBottom: 20
				}}
				inputStyle={{
					color: 'white'
				}}
			/>

			<Button
				title="Entrar"
				onPress={Login}
				disabled={isLoading}
				buttonStyle={{
					backgroundColor: 'white',
					borderRadius: 20,
					height: 50
				}}
				titleStyle={{
					color: '#004B8D',
				}}
			>
				{isLoading ? "Loading..." : "OK"}
			</Button>

		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: 'center',
		backgroundColor: '#004B8D',
		paddingHorizontal: 20,
	},
});
