import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import { Header, ListItem, Avatar } from 'react-native-elements'
import ChartsSO from './components/ChartsSO'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

/* eslint-plugin-disable-all-except react, jsx-a11y */

const styles = StyleSheet.create(
  {
    scene: {
      backgroundColor: 'white',
    },
    menu: {
      flex: 1,
      backgroundColor: 'white'
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      zIndex: 0
    },
    animatedBox: {
      flex: 1,
      backgroundColor: "#38C8EC",
      padding: 10
    },
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F04812'
    }
  }
)

export default function Main () {
  const [menuExpanded, setMenuExpanded] = useState(false)

  /* global toggleMenu:writable */
  toggleMenu = () => {
    setMenuExpanded(!menuExpanded)
  }

  const list = [
    {
      title: 'Inicio',
    },
    {
      title: 'Dashboard',
    },
    {
      title: 'Atividades',
    },
    {
      title: 'Mapa'
    }
  ]

  /* global menuComponent:writable */
  menuComponent = () => {
    displayName = 'menuComponent'
    return (
      <View style={styles.menu}>
        <TouchableOpacity onPress={toggleMenu}>
          <Avatar
            rounded
            icon={{ name: 'user', type: 'font-awesome' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
          />
        </TouchableOpacity>
        <View style={{ top: 60 }}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                bottomDivider
                chevron
              />
            ))
          }
        </View>
      </View>
    )
  }

  React.memo(menuComponent);

  return (
    <View style={{flex: 1}}>
    <DrawerLayout
      drawerWidth={200}
      drawerPosition={DrawerLayout.positions.Left}
      drawerType='slide'
      drawerBackgroundColor="#ddd"
      renderNavigationView={menuComponent}
      
      >
        <View style={styles.scene, { flex: 1 }}>
          <StatusBar hidden={false} color="white" backgroundColor="#004B8D" translucent />

          <Header
            placement="left"
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => toggleMenu() }}
            centerComponent={{ text: 'GRUPO CEDNET', style: { color: '#fff', fontWeight: 'bold' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{ backgroundColor: '#004B8D' }}
          />

          <ScrollView>
            <ChartsSO />
          </ScrollView>

        </View>
    </DrawerLayout>
  </View>

  )
}
