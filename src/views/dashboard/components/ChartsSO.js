import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { LineChart, PieChart } from 'react-native-chart-kit'
import { Card, Button } from 'react-native-elements'

function ChartsSO (props) {
  const labelsGraph = ['24:00', '01:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00']

  return (
    <View>
      <ScrollView
        scrollToOverflowEnabled
        horizontal={false}
      >
        <View style={[styles.scene]}>

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

{/*             <Button
              title="VISUALIZAR DETALHES"
              buttonStyle={{ backgroundColor: 'green' }}
            /> */}
          </Card>

          <Card title="QUANTO AOS MOTIVOS..." containerStyle={{ marginBottom: 20, borderRadius: 10}}>
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
        </View>
      </ScrollView>
    </View>
  )
}

export default React.memo(ChartsSO);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black'
  },
  controlText: {
    color: 'white'
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10
  }
})
