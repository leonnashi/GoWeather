import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import index from "./Index";
import parcialmenteNublado from "../../assets/img/ParcialmenteNublado.png";
import chuvoso from "../../assets/img/Chuvoso.png";
import ensolarado from "../../assets/img/Ensolarado.png";
import nublado from "../../assets/img/Nublado.png";
import style from "../dadosprevisao/Index";

export function Dados({navigation,route}) {
  
  const localidade = route.params.localidade;
  const temperatura = convertToc(route.params.temperatura);
  const tempMin =  convertToc(route.params.tempMin);
  const tempMax =  convertToc(route.params.tempMax);

  function convertToc(kelvin){
    const graus = parseInt(kelvin)
    const convertToc= graus - 273
    return(convertToc)
  }


  
  return (
    <SafeAreaView style={index.tela}>
      <View style>
        <Text style={index.texto}>{localidade}</Text>
        <Text style={index.subtexto}>MIN {tempMin}º MAX {tempMax}º</Text>
      </View>
      <View style={index.view}>
        
          {temperatura >= 9 && temperatura <= 14 && 
            <Image source={chuvoso} style={style.imagem}/>
          }
          {temperatura >= 15 && temperatura <= 18 && 
            <Image source={nublado} style={style.imagem}/>
          }
          {temperatura >= 19 && temperatura <= 23 && 
            <Image source={parcialmenteNublado} style={style.imagem}/>
          }
          {temperatura >= 24 && temperatura <= 30 && 
            <Image source={ensolarado} style={style.imagem}/>
          }

          <Text style={index.graus}>{temperatura}º</Text>
          {temperatura >= 9 && temperatura <= 15 && 
            <Text style={index.tempo}>Tempo Frio</Text>
          }
          {temperatura >= 16 && temperatura <= 19 && 
            <Text style={index.tempo}>Tempo Nublado</Text>
          }
          {temperatura >= 20 && temperatura <= 24 && 
            <Text style={index.tempo}>Tempo Parcialmente Nublado</Text>
          }
          {temperatura >= 25 && temperatura <= 40 && 
            <Text style={index.tempo}>Tempo Ensolarado</Text>
          }
      </View>
    </SafeAreaView>
  );
}
