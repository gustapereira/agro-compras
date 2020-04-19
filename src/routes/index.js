import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/pages/Login';


const RootStack = createStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
