import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import Udforsk from './screen/Udforsk';
import Kamera from './screen/Kamera';
import About from './screen/About';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Choose the icon set you prefer

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home'; // Vælg andre ikoner
            } else if (route.name === 'Udforsk') {
              iconName = 'explore'; // Vælg andre ikoner
            } else if (route.name === 'Kamera') {
              iconName = 'camera'; // Vælg andre ikoner
            } else if (route.name === 'About') {
              iconName = 'person'; // Vælg andre ikoner
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato'
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Udforsk" component={Udforsk} />
        <Tab.Screen name="Kamera" component={Kamera} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
