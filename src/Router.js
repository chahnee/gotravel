import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Settings from './screens/Settings';
import UserDetail from './screens/UserDetail';

// bottom taps
import Search from './screens/Search';
import Ask from './screens/Ask';
import Create from './screens/Create';
import NearMe from './screens/NearMe';
import Feed from './screens/Feed';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const Tabs = TabNavigator({
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarLabel: 'Search',
                //tabBarIcon: ({ tintColor }) => <Icon name="list1" size={5} color={tintColor} />,
            },
        },
        Ask: {
            screen: Ask,
            navigationOptions: {
                tabBarLabel: 'Ask',
                //tabBarIcon: ({ tintColor }) => <Icon name="list2" size={5} color={tintColor} />
            },
        },
        Create: {
            screen: Create,
            navigationOptions: {
                tabBarLabel: 'Create',
                //tabBarIcon: ({ tintColor }) => <Icon name="list3" size={5} color={tintColor} />,
            },
        },
        NearMe: {
            screen: NearMe,
            navigationOptions: {
                tabBarLabel: 'Near Me',
                //tabBarIcon: ({ tintColor }) => <Icon name="list4" size={5} color={tintColor} />,
            },
        },
        Feed: {
            screen: FeedStack,
            navigationOptions: {
                tabBarLabel: 'Feed',
                //tabBarIcon: ({ tintColor }) => <Icon name="list5" size={5} color={tintColor} />,
            },
        },
    }, 
    { 
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
              fontSize: 10,
            },
            style: {
              backgroundColor: 'black',
            }
        },
    });

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
