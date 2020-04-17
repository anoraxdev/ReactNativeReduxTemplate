// // import {Scene, Router, Actions} from 'react-native-router-flux';
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import LoginForm from './components/pages/LoginForm';

// const RouterComponent = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginForm} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RouterComponent;

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginForm from './components/pages/LoginForm';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: LoginForm,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
