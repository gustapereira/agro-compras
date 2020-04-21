import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Image } from 'react-native';

import IconChatEnable from '~/assets/icons/chat-enable.png';
import IconChatDisable from '~/assets/icons/chat-disable.png';
import IconCoinEnable from '~/assets/icons/coin-enable.png';
import IconCoinDisable from '~/assets/icons/coin-disable.png';
import IconSaleEnable from '~/assets/icons/sale-enable.png';
import IconSaleDisable from '~/assets/icons/sale-disable.png';
import IconSettingsEnable from '~/assets/icons/settings-enable.png';
import IconSettingsDisable from '~/assets/icons/settings-disable.png';
import { colors } from '~/styles';

import OffersStack from './offersStack';
import BudgetStack from './budgetStack';
import SettingsStack from './settingsStack';

function Page() {
  return <View />;
}

const Tab = createBottomTabNavigator();
function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.GREEN,
        style: {
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          shadowColor: colors.BLACK,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        }
      }}
    >
      <Tab.Screen
        name="Offers"
        options={{
          title: 'Ofertas',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? IconSaleEnable : IconSaleDisable} />
          ),
        }}
        component={OffersStack}
      />
      <Tab.Screen
        name="Estimate"
        options={{
          title: 'Orçamentos',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? IconCoinEnable : IconCoinDisable} />
          ),
        }}
        component={BudgetStack}
      />
      <Tab.Screen
        name="Messages"
        options={{
          title: 'Mennsagens',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? IconChatEnable : IconChatDisable} />
          ),
        }}
        component={Page}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? IconSettingsEnable : IconSettingsDisable} />
          ),
        }}
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
}

export default App;
