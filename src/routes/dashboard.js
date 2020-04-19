import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useSelector } from 'react-redux';
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


function Page() {
  return <View />;
}

const Tab = createBottomTabNavigator();
function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.GREEN,
        // inactiveTintColor: theme.type === 'light' ? colors.GRAY : colors.GRAY,
        // showLabel: false,
        style: {
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          // shadowColor: colors.BLACK,
          // shadowOffset: { width: 0, height: 0 },
          // shadowOpacity: 0.1,
          // shadowRadius: 5,
          // elevation: 5,
        }
      }}
    >
      <Tab.Screen
        name="Offer"
        options={{
          title: 'Ofertas',
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? IconSaleEnable : IconSaleDisable} />
          ),
        }}
        component={Page}
      />
      <Tab.Screen
        name="Estimate"
        options={{
          title: 'Orçamentos',
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? IconCoinEnable : IconCoinDisable} />
          ),
        }}
        component={Page}
      />
      <Tab.Screen
        name="Messages"
        options={{
          title: 'Mennsagens',
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? IconChatEnable : IconChatDisable} />
          ),
        }}
        component={Page}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? IconSettingsEnable : IconSettingsDisable} />
          ),
        }}
        component={Page}
      />
    </Tab.Navigator>
  );
}

export default App;
