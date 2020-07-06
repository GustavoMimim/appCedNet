import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, Card, ListItem } from 'react-native-elements';

const technical = [
  {
    name: 'Gustavo Bergamo Mimim',
    avatar: 'https://scontent.fmii6-1.fna.fbcdn.net/v/t1.0-9/78975144_2589224154526037_7678468795790262272_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_oc=AQkWednD4nLHu4WZMZJBEcTXwvHPwtL2VhlPh24ziHlopB36GYkKxlBmilYpQ3ZKAgo&_nc_ht=scontent.fmii6-1.fna&oh=f46d5f5bb19d0f95a977dc46e097982c&oe=5ED373E7'
  },
  {
    name: 'Renan Leonardo',
    avatar: 'https://scontent.fmii6-1.fna.fbcdn.net/v/t1.0-9/67800804_2403703813056803_5865220211434586112_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_oc=AQkqN8t8HVP7maTchR-uOUeY5O3O9RFwFU9Q2s_Mpr7JhDVVPkA2Tlc2sIKm5cAKoKU&_nc_ht=scontent.fmii6-1.fna&oh=6d91985be9a946aef20efec361d619fe&oe=5ED600D7'
  },
  {
    name: 'Vinicius Andrade Ribeiro',
    avatar: 'https://scontent.fmii6-1.fna.fbcdn.net/v/t1.0-9/60420035_2577508522333975_5697119778494218240_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_oc=AQnnpDOFxGtN8Gl5z2C5VgGZzaG79iTw3a46SzvUe-8SHgV37Rrw_gyJMf-tOtQcPmg&_nc_ht=scontent.fmii6-1.fna&oh=47a3097a09e4015d19728c8203ce896c&oe=5ED4EE90'
  },
]

const vehicles = [
  {
    name: 'FP5T71Q',
    avatar: 'https://www.firstcarrental.co.za/images/group-b-suzuki-swift-june2019.jpg',
    subtitle: 'Ford Ka - 2020'
  },
  {
    name: 'FP5TZ1Q',
    avatar: 'https://i2.wp.com/blog.twwhiteandsons.co.uk/wp-content/uploads/2014/08/siwft-sport.png?fit=447%2C237&ssl=1',
    subtitle: 'Kwid - 2019'
  },
  {
    name: 'BEE4R22',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1VdYdn_6WEgG-g405G05ScMlCHysgwIjtwN8RGQu-QqSuxYPd&usqp=CAU',
    subtitle: 'Mobi - 2020'
  },
]

export default function Home ({ navigation: { navigate } }) {

  return (
    <View>

      <StatusBar barStyle="dark-content" backgroundColor='white' translucent />

      <ScrollView>

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Card
            title='Ordens de serviço'
            containerStyle={{ width: 150 }}
          >
            <Text>15</Text>
          </Card>
          <Card
            title='Protocolos'
            containerStyle={{ width: 150 }}
          >
            <Text>50</Text>
          </Card>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Card
            title='Ordens já atendidas'
            containerStyle={{ width: 150 }}
          >
            <Text>1</Text>
          </Card>
          <Card
            title='Novos clientes'
            containerStyle={{ width: 150 }}
          >
            <Text>15</Text>
          </Card>
        </View >

        <View>
          <Card
            title='Técnicos em plantão disponíveis'
          >
            {
              technical.map((u, i) => {
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.name}
                    leftAvatar={{ source: { uri: u.avatar } }}
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron
                  />
                );
              })
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>

              <Text style={{ alignSelf: 'flex-start', color: '#004B8D' }}>Gerenciar</Text>
              <Text style={{ alignSelf: 'flex-end', color: 'gray' }}>Mais</Text>


            </View>
          </Card>
        </View>

        <View style={{ paddingBottom: 15 }}>
          <Card
            title='Veículos disponíveis'
          >
            {
              vehicles.map((u, i) => {
                return (
                  <ListItem
                    key={i}
                    roundAvatar
                    title={u.name}
                    subtitle={u.subtitle}
                    leftAvatar={{ source: { uri: u.avatar } }}
                    containerStyle={{ height: 60 }}
                    bottomDivider
                    chevron
                  />
                );
              })
            }
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20 }}>
              <Text style={{ alignSelf: 'flex-start', color: '#004B8D' }}>Gerenciar</Text>
              <Text style={{ alignSelf: 'flex-end', color: 'gray' }}>Mais</Text>
            </View>
          </Card>
        </View>

      </ScrollView>
    </View>


  );
}
