import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';



const StarArea = styled.View`
  flex-direction: row;
`;
const StarView = styled.View``;
const StarText = styled.Text`
    font-size: 12px;
    font-weight: bold; 
    margin-left: 5px;
    color: #737373
`;

export default ({note, showN}) => {
  let s = [0, 0, 0, 0, 0];
  let floor = Math.floor(note)
  let left = note - floor;

  for(var i=0;i<floor;i++){
      s[i] = 2;
  }
  if(left > 0){
      s[i] = 1;
  }

  return (
    <StarArea>
      {s.map((i, key) => (
        <StarView key={key}>
          {i === 0 && <Image  source={require('../assets/estrela-vazia.png')}style={{tintColor:"#FF9200", width: 18,height: 18,resizeMode: 'contain',}}/>}
          {i === 1 && <Image  source={require('../assets/estrela-meio-vazia.png')}style={{tintColor:"#FF9200", width: 18,height: 18,resizeMode: 'contain',}}/>}
          {i === 2 && <Image  source={require('../assets/estrela.png')}style={{ tintColor:"#FF9200",width: 18,height: 18,resizeMode: 'contain',}}/>}
        </StarView>
      ))}
      {showN && <StarText>{note}</StarText>}
    </StarArea>
  );
};

 

 
   
   