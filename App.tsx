import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';


export default function App() {
  const [ActivateState, setActivateState] = useState(false);


  function handleSymbol(){
    setActivateState((oldValue:boolean) =>{
      return !oldValue;
    })
  }

  return (
    <View style={ActivateState? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={()=>{handleSymbol()}}>
        <Image 
          source={ActivateState? symbolOn : symbolOff}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff:{
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
