// In App.js in a new project

import React, {useState, useEffect} from 'react';
import HomeStackNavigation from './HomeStackNavigation';
import AuthStackNavigation from './AuthStackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../../App';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {sigingStatus} from '../redux/reducers/selectors/userSelector';
import {Logout, STORETOKEN} from '../redux/actions';

function InitialNavigation() {
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState(null);
  const siginResponse = useSelector(sigingStatus);
  useEffect(() => {
    asyncFunction();
  }, [!siginResponse]);

  const asyncFunction = async () => {
    const data = await AsyncStorage.getItem('token');
    let res = await JSON.parse(data);
    setToken(res);
    dispatch(STORETOKEN(res));
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    asyncResponse();
  }, []);

  const asyncResponse = async () => {
    try {
      const res = await AsyncStorage.getItem('token');
      if (res != null) {
        dispatch(Logout(true));
      }
    } catch (error) {
      console.log('show error from app file', error);
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {token ? <HomeStackNavigation /> : <AuthStackNavigation />}
    </NavigationContainer>
  );
}

export default InitialNavigation;
