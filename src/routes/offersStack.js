import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OffersMain from '~/pages/Offers/Main';
import Products from '~/pages/Offers/Products';


const Stack = createStackNavigator();
export default function Login() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="OffersMain" component={OffersMain} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}
