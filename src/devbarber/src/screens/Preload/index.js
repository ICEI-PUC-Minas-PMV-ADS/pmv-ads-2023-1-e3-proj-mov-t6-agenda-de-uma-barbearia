import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Text, Image } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        let res = await Api.checkToken(token);
        if (res.token) {
          await AsyncStorage.setItem('token', res.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar,
            },
          });

          navigation.reset({
            routes: [{ name: 'MainTab' }],
          });
        } else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Image
        source={require('../../assets/LogoBook.png')}
        style={{ width: '100%' }}
        resizeMode="contain"
      />
      <LoadingIcon delay="500" size="large" color="#FFFFFF"  />
    </Container>
  );
};
