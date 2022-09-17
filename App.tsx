import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { LocationMap } from './screen/LocationMap';
import { Home } from './screen/Home';
import { LocationProvider } from './context/locationContext';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <LocationProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'cloudo'
                  : 'cloud';
              } else if (route.name === 'location') {
                iconName = focused ? 'enviroment' : 'enviromento';
              }

              // You can return any component that you like here!
              return <AntDesign name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="location" component={LocationMap} />
        </Tab.Navigator>
      </NavigationContainer>
    </LocationProvider>
  );
}