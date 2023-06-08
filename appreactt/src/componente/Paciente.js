import React, { useState } from 'react';
import {Text, View, StyleSheet, SafeAreaView,TouchableOpacity,Pressable, Modal, TextInput } from 'react-native';

const Paciente = ({ item,Eliminar,setEditModalVisible,
  editModalVisible, 
  editedPaciente,
  setEditedPaciente,
  pacientes,
  setPacientes }) => {

  const {id, paciente, propietario, email, telefono, sintomas} = item

    const handleEditarPaciente = () => {

      setEditedPaciente(item)
      setEditModalVisible(true);
      };
      const guardarEdicion = () => {
        const index = pacientes.findIndex(p => p.id === id);
  if (index !== -1) {
    const updatedPacientes = [...pacientes];
    updatedPacientes[index] = editedPaciente;
    setPacientes(updatedPacientes)
    ;}
 setEditModalVisible(false);
  
    };
    return (
      
     <SafeAreaView>        
    
    <View style={styles.contenidoLista}>

        
        <Text style={styles.texView}>NOMBRE MASCOTA: {paciente}</Text>
    
        <Text style={styles.texView}>NOMBRE PROPIETARIO: {propietario}</Text>

        <Text style={styles.texView }>EMAIL PROPIETARIO: {email}</Text>

        <Text style={styles.texView}>TELEFONO PROPIETARIO: {telefono}</Text>

        <Text style={styles.texView}>SINTOMAS MASCOTA: {sintomas}</Text>


        <Pressable
        style={styles.btnNuevaCita} 
        onPress={handleEditarPaciente}
      >
        <Text style={styles.btnNuevaCitaTexto}>Editar</Text>
      </Pressable>
              
        <TouchableOpacity
          style={styles.btnCancelar}
          onPress={() => Eliminar(item.id)}>
          <Text style={styles.btnCancelarTexto}>Eliminar</Text>
        </TouchableOpacity>

        {editedPaciente && editedPaciente.id === item.id ? (
  <Modal visible={editModalVisible} animationType="slide" >


    <View style={styles.contenido}>

      <View >

         <Text style={styles.tituloBold}>EDITAR</Text>

         <Text style={styles.label}>NOMBRE PACIENTE:</Text>
                  <TextInput style={styles.input}
                    placeholder='Nombre de mascota'
                    placeholderTextColor={'#666'}
                    value={editedPaciente.paciente}
                    onChangeText={(text) =>
                    setEditedPaciente((prevState)=>({
                    ...prevState,
                   paciente:text,}))}/>

          <Text style={styles.label}>NOMBRE DEL PROPIETARIO:</Text>
                  <TextInput style={styles.input}
                   placeholder='Propietario'
                   placeholderTextColor={'#666'}
                   value={editedPaciente.propietario}
                   onChangeText={(text) =>
                   setEditedPaciente((prevState)=>({
                   ...prevState,
                   propietario:text,})) }/>

          <Text style={styles.label}>CORREO DEL PROPIETARIO:</Text>
                    <TextInput style={styles.input}
                    placeholder='Email'
                    placeholderTextColor={'#666'}
                    keyboardType='email-address'
                    value={editedPaciente.email}
                    onChangeText={(text) =>
                    setEditedPaciente((prevState)=>({
                    ...prevState,
                    email:text,}))}/>

           <Text style={styles.label}>TELEFONO DEL PROPIETARIO:</Text>
                    <TextInput style={styles.input}
                    placeholder='Numero de telefono'
                    placeholderTextColor={'#666'}
                    keyboardType='number-pad'
                    maxLength={10}
                    value={editedPaciente.telefono}
                    onChangeText={(text) =>
                    setEditedPaciente((prevState)=>({
                    ...prevState,
                    telefono:text, }))}/>


            <Text style={styles.label}>SINTOMAS DEL PACIENTE:</Text>
                    <TextInput style={styles.input}
                    placeholder='Sintomas'
                    placeholderTextColor={'#666'}
                   value={editedPaciente.sintomas}
                   onChangeText={(text) =>
                   setEditedPaciente((prevState)=>({
                   ...prevState,
                   sintomas:text, })) }/>


         <View style={styles.btnNuevaCita}>
            <Pressable
              style={styles.btnNuevaCita}
              onPress={guardarEdicion}>
              <Text style={styles.btnNuevaCitaTexto}>Guardar</Text>
            </Pressable>
          
          </View>

       <View style={styles.btnCancelar}>
         <Pressable 
            style={styles}
            onPress={() => setEditModalVisible(false)}>
            <Text style={styles.btnCancelarTexto}>Cancelar </Text>
          </Pressable>
        </View>

      </View>
   </View>

</Modal>
  ): null}
  </View>
   
</SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({

    contenidoLista:{
        backgroundColor:'#09DA0C',
        flex:1,
        borderRadius:10,
        padding:15,
        marginTop: 30,
        marginHorizontal: 20,
    },

    texView:{
      fontSize: 15,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: '#080808',
      marginBottom: 1,
      marginTop: 15,
      fontWeight: '500',
    },

      contenido:{
        backgroundColor:'#566bf5',
        flex:1,
      },
   
      label:{
        color: '#fafafa',
        marginBottom:10,
        marginTop:15,
        fontSize:20,
        fontWeight:'600'
        },
        input:{
          backgroundColor:'#FFF',
          padding:15,
          borderRadius:10
           },
           tituloBold:{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: '600',
            color: '#fcfafa'
        },

        btnCancelar:{
          marginVertical:10,
          backgroundColor:"#d92828",
          paddingVertical:15,
          marginHorizontal:30,
          borderRadius:15
       },
       
       btnCancelarTexto:{
           color:"#FFF",
           textAlign:'center',
           fontWeight:'900',
           fontStyle: 'italic',
           fontSize:16,
           textTransform: 'uppercase'
          },

          btnNuevaCita:{
            marginVertical:10,
            backgroundColor:"#28d969",
            paddingVertical:4,
            marginHorizontal:30,
            borderRadius:15
            },
          
          btnNuevaCitaTexto:{
              textAlign: 'center',
              color:'#FFF',
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: '900',
              textTransform: 'uppercase'
             },
          
         
       
        
  });
  
  export default Paciente;
