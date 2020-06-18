import React from 'react'
import { View, ScrollView, StatusBar, Text, Dimensions } from 'react-native'
import { LineChart, PieChart } from 'react-native-chart-kit'
import { Card } from 'react-native-elements'

function ChartsSO () {
  const labelsGraph = ['24:00', '01:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00']

  return (
    <View style={{ paddingTop: 0, paddingBottom: 15 }}>
      <ScrollView
        scrollToOverflowEnabled
        horizontal={false}
      >

        <Card title="QUANTIDADE DE O.S." containerStyle={{ borderRadius: 10 }}>
          <Text style={{ marginBottom: 10 }}>Quantidade de novas Ordens de Serviço agendadas hoje!</Text>

          <ScrollView
            scrollToOverflowEnabled
            horizontal
            style={{ marginBottom: 10 }}
          >

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
              width={Dimensions.get('window').width * 2} // from react-native
              height={220}
              chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                color: () => '#004B8D',
                strokeWidth: 2 // optional, default 3
              }}
              bezier
            />
          </ScrollView>
        </Card>

        <Card title="QUANTO AOS MOTIVOS..." containerStyle={{ borderRadius: 10 }}>
          <ScrollView
            scrollToOverflowEnabled
            horizontal
          >
            <PieChart
              data={[
                {
                  name: 'Conexão',
                  population: 20,
                  color: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 12
                },
                {
                  name: 'Cancelamento',
                  population: 5,
                  color: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 12
                },
                {
                  name: 'Retirada de equipamento',
                  population: 11,
                  color: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 12
                },
                {
                  name: 'Alteração de plano',
                  population: 1,
                  color: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`,
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 12
                }
              ]}
              width={Dimensions.get('window').width}
              height={220}
              chartConfig={{
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 6
                }
              }}
              accessor="population"
            />
          </ScrollView>
        </Card>

      </ScrollView>
    </View>
  )
}

function Dashboard () {

  return (
    <View>

      <StatusBar barStyle = "dark-content" backgroundColor = 'white' translucent/>

      <ScrollView>
        <ChartsSO />
      </ScrollView>

    </View>

  )
}

export default React.memo(Dashboard);