// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screens/authScreen/loginScreen';
import OtpScreen from '../screens/authScreen/otpScreen';
import SplashScreen from '../screens/splash';

const AuthStack = createNativeStackNavigator();

function AuthStackNavigation() {
  const [load, setload] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setload(false);
    }, 1000);
  }, []);
  return (
    <AuthStack.Navigator>
      {load && (
        <AuthStack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      )}

      <AuthStack.Screen
        name="login"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="otp"
        component={OtpScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigation;
