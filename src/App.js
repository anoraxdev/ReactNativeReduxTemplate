/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RegistrationForm from './components/pages/RegistrationForm';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginForm from './components/pages/LoginForm';
import Home from './components/pages/Home';
import Alerts from './components/pages/Alerts';

class App extends Component {
  HomeTabs() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Alerts" component={Alerts} />
      </Tab.Navigator>
    );
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    return (
      <Provider store={store} style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={this.HomeTabs} />
            <Stack.Screen name="Login" component={LoginForm} />
            <Stack.Screen name="Register" component={RegistrationForm} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
