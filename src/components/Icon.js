import React from 'react';
import Iconicons from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Block from './Block';

const Icon = ({
  size = 20,
  color = '#000',
  name = 'slightly-smile',
  bg,
  type = 'iconicons',
  ...props
}) => {
  return (
    <Block w={size} h={size} borderRadius={size / 2} bg={bg} {...props}>
      {type === 'antDesign' && (
        <AntDesign name={name} size={size} color={color} />
      )}
      {type === 'iconicons' && (
        <Iconicons name={name} size={size} color={color} />
      )}
      {type === 'maturialIcons' && (
        <MaterialIcons name={name} size={size} color={color} />
      )}
      {type === 'fontAwesome' && (
        <FontAwesome name={name} size={size} color={color} />
      )}
      {type === 'entypo' && <Entypo name={name} size={size} color={color} />}
      {type === 'octicons' && (
        <Octicons name={name} size={size} color={color} />
      )}
      {type === 'feather' && <Feather name={name} size={size} color={color} />}
      {type === 'simpleLineIcons' && (
        <SimpleLineIcons name={name} size={size} color={color} />
      )}
      {type === 'ionicons' && (
        <Ionicons name={name} size={size} color={color} />
      )}
      {type === 'fontisto' && (
        <Fontisto name={name} size={size} color={color} />
      )}
      {type === 'evilIcons' && (
        <EvilIcons name={name} size={size} color={color} />
      )}
    </Block>
  );
};

export default Icon;
