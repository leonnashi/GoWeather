import React, { useState } from "react";
import axios from 'axios';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import index from "./Index";

export function Home({navigation}) {
  const [getInput, setInput] = useState("");

  const api=()=>{
    const url= `http://api.openweathermap.org/data/2.5/weather?q=${getInput}&appid=68ee4debf4f2834e05c1d4cb3701aead`
  
    axios.get(url).then(
      (res)=>{
        const resultado={
          localidade:res.data.name,
          temperatura:res.data.main.temp,
          tempMax:res.data.main.temp_max,
          tempMin:res.data.main.temp_min
        }
        navigation.navigate("dados", resultado)
      }
    )
  }

  return (
    <SafeAreaView style={index.tela}>
      <View>
        <Text style={index.titulo}>Go Weather</Text>
      </View>

      <View>
        <TextInput
          style={index.input}
          value={getInput}
          onChangeText={setInput}
          placeholder="Localização: "
        />
      </View>

      <View>
        <TouchableOpacity onPress={()=>api()} style={index.botao}>
          <Text style={index.buscar}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
