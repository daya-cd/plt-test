import React from 'react';
import Tabnav from './tabNav';
import {NavigationContainer} from '@react-navigation/native';

const RootNav = () => {
  return (
    <NavigationContainer>
      <Tabnav />
    </NavigationContainer>
  );
};

export default RootNav;
