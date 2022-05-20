import { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import {View } from 'react-native'
import * as React from 'react';

interface ILandingProps {
}

const Landing: React.FunctionComponent<ILandingProps> = ({}) => {
  return (
    <View>
      <AntDesign name="codesquare" size={24} color="black" />
    </View>
  );
};

export default Landing;
