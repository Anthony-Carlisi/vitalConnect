import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SmsChatWindow from './components/SmsChatWindow';

import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SmsChatHeader from './components/SmsChatHeader';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Button title="Info" color="black" />,
            headerTitleAlign: 'center',
            headerRight: () => <Button title="Info" color="black" />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={SmsChatWindow}
          options={{
            headerTitle: () => <SmsChatHeader />,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>

      {/* <SmsChatWindow /> */}
    </NavigationContainer>
  );
}

export default App;
