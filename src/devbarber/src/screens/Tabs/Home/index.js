import React, {useState, useEffect} from 'react';
import {Platform, RefreshControl} from 'react-native';
import { Image } from 'react-native';
import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  LocationArea,
  LocationFinder,
  LocationInput,
  SearchButton,
  LoadingIcon,
  ListArea
} from './styles';
import { request, PERMISSIONS } from 'expo-permissions';
import Geolocation from 'expo-location';


import {useNavigation} from '@react-navigation/native';

import Api from '../../../Api';
import BarberItem from '../../../components/BarberItem'

export default () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false)

  useEffect(()=>{
    getBarbers()
  },[])

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    if (result === 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);

      Geolocation.getCurrentPosition((info) => {
        setCoords(info.coords);
        getBarbers();
      });
    }
  };
  const getBarbers = async () => {
    setLoading(true)
    setList([])

    let lat = null;
    let lgn = null;
    if(coords){
      lat = coords.latitude;
      lgn = coords.longitude;
    }

    let res = await Api.getBarbers(lat, lgn, locationText);
      if(res.error == ""){
          if(res.loc){
            setLocationText(res.loc)
          }
          setList(res.data)
      } else {
        alert("Oops: " + res.error)
      }
      setLoading(false)
  };

  const onRefresh = () => {
    setRefreshing(false)
    getBarbers()
  }

  const handleLocationSearch = () => {
    setCoords({})
    getBarbers()
  }

  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito.
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <Image
              source={require('../../../assets/search.png')}
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
            placeholder="Onde você está ?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={(e) => setLocationText(e)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
          <Image
              source={require('../../../assets/localizacao.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          </LocationFinder>
        </LocationArea>

        {loading && <LoadingIcon size="large" color="#FFFFFF" />}

        <ListArea>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  ); 
}; 