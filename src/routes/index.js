import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './dashboard';


const RootStack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
