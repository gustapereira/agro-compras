import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BudgetMain from '~/pages/Budget/Main';
import Proposal from '~/pages/Budget/Proposal';


const Stack = createStackNavigator();
export default function Login() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="BudgetMain" component={BudgetMain} />
      <Stack.Screen name="Proposal" component={Proposal} />
    </Stack.Navigator>
  );
}
