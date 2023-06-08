import React,{useState} from 'react';
//import {useState}from 'react'


import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  Alert,
  View
} from 'react-native';

import Formulario from './src/componente/Formulario';
import Paciente from './src/componente/Paciente';

const App = () => { 
  
   const[modalVisible,setModalVisible] = useState(false);
   const [editModalVisible, setEditModalVisible] = useState(false);
   const[pacientes, setPacientes] = useState ([])
   const [editedPaciente, setEditedPaciente] = useState({
    paciente: '',
    propietario: '',
    email: '',
    telefono: '',
    sintomas: '',
  });
  const editarPaciente = (item) => {
    setEditedPaciente(item);
    setEditModalVisible(true)
  };
   

   const handleEliminarPaciente = id => {
    const Actualizar = pacientes.filter(item => item.id !== id);
    setPacientes(Actualizar);
  };


   return(
    <SafeAreaView style={styles.contenido} >
      <ScrollView>

      <Text style={styles.titulo}> ADMINISTRACIÓN DE CITAS </Text>
      <Text style={styles.tituloBold}>VETERINARIA</Text>

      <Pressable style={styles.btnNuevaCita}onPress={ () => setModalVisible(true)} >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
       
       
     {pacientes.length === 0 ?(
        <Text style={styles.textnohaypaciente}>NO HAY PACIENTES</Text> ) : (

          <View>
            <Text style={styles.titulo}>LISTADO DE PACIENTES </Text>
        <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id}
        renderItem={({item})=>{
        return(
          <Paciente
          item={item}
          Eliminar={handleEliminarPaciente}
          setPacientes={setPacientes}
          pacientes={pacientes}
          setModalVisible={setModalVisible}
          editedPaciente={editedPaciente} 
          setEditedPaciente={setEditedPaciente} 
          editarPaciente={editarPaciente}
          editModalVisible={editModalVisible} 
          setEditModalVisible={setEditModalVisible} 
          />
        )
        }}
       />
             
      </View>
      )}
      
        <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setPacientes = {setPacientes}
          pacientes = {pacientes}      

        />
        </ScrollView>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  titulo:{
    textAlign:'center',
    fontSize: 20,
    fontWeight: '900',
    color: '#f0f8ff',
    marginTop: 30
    },
  tituloBold:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '700',
      color: '#f0f8ff',
      marginTop: 10
    
    },
  btnNuevaCita:{
      backgroundColor:'#28d969',
      padding: 20,
      marginHorizontal: 20,
      borderRadius: 20,
     },
  btnTextoNuevaCita:{
      textAlign: 'center',
      color:'#0E400C',
      fontSize: 20,
      fontWeight: '900',
      textTransform: 'uppercase'
     },
     titulo2:{
      textAlign:'center',
      fontSize: 20,
      fontWeight: '900',
      color: '#280E09',
     
      },
      contenido:{
        backgroundColor:'#0EA907',
        flex:1,
      },
     
btnCancelar:{
 textAlign:'center',
  backgroundColor:"#d92828",
  paddingVertical:15,
  marginHorizontal:30,
  borderRadius:40
},

btnCancelarTexto:{
   color:"#FFF",
   textAlign:'center',
   fontWeight:'900',
   fontStyle: 'italic',
   fontSize:20
  
  },
  btnEditar:{
    marginVertical:10,
    textAlign:'center',
    backgroundColor:"#28d969",
    paddingVertical:15,
    marginHorizontal:30,
    borderRadius:40,
    padding: 100
    },
  
    btnEditartxt:{
      textAlign: 'center',
      color:'#FFF',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: '900',
      textTransform: 'uppercase'
     },

     listaFlash:{
      padding: 10,
      borderRadius: 50
      },

      textnohaypaciente:{
        textAlign:'center',
        fontSize: 30,
        fontWeight: '900',
        color: '#010B01',
        marginTop: 10
        },
     
});

export default App;
