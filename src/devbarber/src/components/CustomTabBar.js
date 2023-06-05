import React, { useContext } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';


import { UserContext } from '../contexts/UserContext';
const TabArea = styled.View`
  height: 60px;
  background-color: #4EADBE;
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 35px;
  border: 3px solid #4EADBE;
  margin-top: -20px;
`;
const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;


export default ({ state, navigation }) => {
   const { state:user } = useContext(UserContext);

const goTo = (screenName) => {
        navigation.navigate(screenName);
    }
  return (
    <TabArea>
      <TabItem onPress={()=>goTo('Home')}>
        <Image
          source={require('../assets/homeIcon.png')}
          style={{
             opacity: state.index===0? 1 : 0.5,
            width: 24,
            height: 24,
            resizeMode: 'contain',
          }}
        />
      </TabItem>

      <TabItem onPress={()=>goTo('Search')}>
        <Image
          source={require('../assets/search.png')}
          style={{
             opacity: state.index===1? 1 : 0.5,
            width: 24,
            height: 24,
            resizeMode: 'contain',
          }}
        />
      </TabItem>

      <TabItemCenter onPress={()=>goTo('Appointments')}>
        <Image
          source={require('../assets/calendario.png')}
          style={{
            width: 32,
            height: 32,
            resizeMode: 'contain',
          }}
        />
      </TabItemCenter>

      <TabItem onPress={()=>goTo('Favorites')}>
        <Image
          source={require('../assets/favorito.png')}
         style={{
            opacity: state.index===3? 1 : 0.5,
            width: 24,
            height: 24,
            resizeMode: 'contain',
          }}
        />
      </TabItem>

      <TabItem onPress={()=>goTo('Profile')}>
       {user.avatar != '' ?
                    <AvatarIcon source={{uri: user.avatar}} />
                    : 
        <Image
          source={require('../assets/account.png')}
           style={{
            opacity: state.index===4? 1 : 0.5,
            width: 24,
            height: 24,
            resizeMode: 'contain',
          }}
        />
       }
      </TabItem>
    </TabArea>
  );
};
