import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OffersMain from '~/pages/Offers/Main';


const Stack = createStackNavigator();
export default function Login() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="OffersMain" component={OffersMain} />
    </Stack.Navigator>
  );
}
