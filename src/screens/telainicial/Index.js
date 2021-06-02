import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    tela:{
        flex: 1,
        width:'100%',
        height: '100%',
        paddingTop: 80,
        alignItems: 'center',
        backgroundColor: '#15191e'
    },
    titulo:{
        color:'#E5ECF4',
        marginTop:250,
        marginRight: 130,
        marginBottom: 15,
        fontSize: 40,
        fontWeight: '700'

    },
    input:{
        backgroundColor:'#e6edf4cf',
        borderWidth: 1,
        borderColor:'#9599A2',
        borderRadius:5,
        padding:8,
        width:330
    },
    botao:{
        backgroundColor:'#E5ECF4',
        borderRadius:22,
        padding:10,
        width: 120,
        marginTop:25
    },
    buscar:{
        marginLeft: 25,
    }
})
export default style;