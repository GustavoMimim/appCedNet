import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { LineChart, PieChart } from "react-native-chart-kit";
import { ButtonGroup } from 'react-native-elements';

const FirstRoute = () => {

	const [buttonIndex, setIndex] = useState(0);
	var labelsGraph = [];

	if (buttonIndex === 0) {
		labelsGraph = ['24:00', '01:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00']
	}
	else if (buttonIndex === 1) {
		labelsGraph = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	}
	else {
		labelsGraph = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
	}

	return (

		<View style={[styles.scene]}>

			<ButtonGroup
				onPress={index =>
					setIndex(index)
				}
				selectedIndex={buttonIndex}
				buttons={['Hoje', 'Semana', 'Mês']}
				containerStyle={{
					borderRadius: 10,
					padding: 0,
					marginTop: 10,
					marginBottom: 10,
				}}
				selectedButtonStyle={{
					backgroundColor: '#004B8D'
				}}
			/>

			<ScrollView
				scrollToOverflowEnabled={true}
				horizontal={true}
				style={[styles.scene]}>

				<LineChart
					data={{
						labels: labelsGraph,
						datasets: [
							{
								data: [
									Math.floor(Math.random() * (100 - 1)) + 1,
									Math.floor(Math.random() * (100 - 1)) + 1,
									Math.floor(Math.random() * (100 - 1)) + 1,
									Math.floor(Math.random() * (100 - 1)) + 1,
									Math.floor(Math.random() * (100 - 1)) + 1,
									Math.floor(Math.random() * (100 - 1)) + 1
								]
							}
						]
					}}
					width={Dimensions.get("window").width * 2} // from react-native
					height={220}
					chartConfig={{
						backgroundGradientFromOpacity: 0,
						backgroundGradientToOpacity: 0,
						color: () => '#004B8D',
						strokeWidth: 2, // optional, default 3
					}}
					bezier
					style={{
						borderRadius: 16
					}}
				/>

			</ScrollView>

			<PieChart
				data={[
					{
						name: 'Conexão',
						population: 20,
						color: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
						legendFontColor: '#7F7F7F',
						legendFontSize: 15,
					},
					{
						name: 'Cancelamento',
						population: 5,
						color: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
						legendFontColor: '#7F7F7F',
						legendFontSize: 15,
					},
					{
						name: 'Não sei',
						population: 11,
						color: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
						legendFontColor: '#7F7F7F',
						legendFontSize: 15,
					},
					{
						name: 'Não sei',
						population: 1,
						color: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')',
						legendFontColor: '#7F7F7F',
						legendFontSize: 15,
					},
				]}
				width={Dimensions.get('window').width - 16}
				height={220}
				chartConfig={{
					decimalPlaces: 0,
					color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
					style: {
						borderRadius: 6,
					},
				}}
				style={{
					marginVertical: 16,
					borderRadius: 16,
				}}
				accessor="population"
				backgroundColor="transparent"
				paddingLeft="15"
				absolute //for the absolute number remove if you want percentage
			/>

		</View>

	);

};

const SecondRoute = () => (
	<View style={[styles.scene]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'Geral' },
		{ key: 'second', title: 'Minhas estatísticas' },
	]);

	const renderScene = SceneMap({
		first: FirstRoute,
		second: SecondRoute,
	});

	return (

		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			renderTabBar={(props) =>
				<TabBar
					{...props}
					style={{
						backgroundColor: 'white',
						height: 40,
						elevation: 0,
					}}
					indicatorStyle={{ backgroundColor: '#004B8D' }}
					activeColor='black'
					inactiveColor='gray'
				/>
			}
		/>

	);
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		backgroundColor: 'white'
	},
});