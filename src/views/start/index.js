import React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

export default initialScreen = (props) => {

	return (

		<View style={styles.container}>

			<ImageBackground source={require('../../assets/initialBackground6.jpg')} style={styles.image} resizeMode='cover'>

				<Text style={styles.text}>Bem vindo!</Text>
				<Text style={styles.text}>Nós te ajudaremos a fazer o melhor trabalho possível!</Text>
				<Button
					title="Conectar"
					onPress={() => props.navigation.navigate('Login')}
					buttonStyle={{
						backgroundColor: 'white',
						borderRadius: 20,
						height: 50,
						marginTop: 10
					}}
					titleStyle={{
						color: '#004B8D',
					}}
				/>

			</ImageBackground>

		</View>

	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	image: {
		flex: 1,
		resizeMode: 'contain',
		justifyContent: "flex-end",
		padding: 40
	},
	text: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold"
	}
});