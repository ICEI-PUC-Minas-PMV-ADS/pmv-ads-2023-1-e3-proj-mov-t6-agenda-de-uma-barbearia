import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './styles';
import { Text, Image } from 'react-native';

export default () => {
  const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
   

      const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if(result == 'granted') {
            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                getBarbers();
            });

        }
    }

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <Image
              source={require('../../assets/search.png')}
              style={{
                width: 26,
                height: 26,
                resizeMode: 'contain',
              }}
            />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={t=>setLocationText(t)}
            
            
          />
          <LocationFinder onPress={handleLocationFinder}>
            <Image
              source={require('../../assets/localizacao.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};
