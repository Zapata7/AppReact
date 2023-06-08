import React,{useState}from 'react'
import { Alert, Pressable,Modal, SafeAreaView,ScrollView,Text,TextInput,StyleSheet,View } from 'react-native'

const Formulario = ({modalVisible, setModalVisible,setPacientes,pacientes,editarPaciente,setEditarPaciente}) => {

 const[paciente,setPaciente] = useState ('')
 const[propietario,setPropietario] = useState ('')
 const[email,setEmail] = useState ('')
 const[telefono,setTelefono] = useState ('')
 const[sintomas,setSintomas] = useState ('')




 const handleCita =() =>{
    if ([paciente,propietario,email,telefono,sintomas].includes('')){
          Alert.alert('Error', 'Todos los campos son obligatorios')
         return
    }

  
    
     const nuevoPaciente= {
      id: editarPaciente ? editarPaciente.id : Date.now(),
      paciente,
      propietario,
      email,
      telefono,
      sintomas
    }
    

    if (editarPaciente) {
      const index = pacientes.findIndex(item => item.id === editarPaciente.id);
      const Actualizar = [...pacientes];
      Actualizar[index] = nuevoPaciente;
      setPacientes(Actualizar);
      setEditarPaciente(null);
    } else {
      setPacientes([...pacientes, nuevoPaciente]);
    }

       setPaciente('')
       setPropietario('')
       setEmail('')
       setTelefono('')
       setSintomas('')
       setModalVisible(false)
 }
 

  return (
 <Modal
   animationType='slide'
   visible ={modalVisible}
 >
    <SafeAreaView style={styles.contenido}>
        <ScrollView>
            <Text style={styles.tituloBold}>Nueva Cita</Text>
                <View>
                  <Pressable
                    style={styles.btnCancelar}
                    onLongPress={() => {
                    // setEditarPaciente(null);
                      setModalVisible(false);
                    }}>
                    <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                  </Pressable>
                </View>
            
             <View style={styles.campo}>
                <Text
                  style={styles.label}
                  >NOMBRE DEL PACIENTE:</Text>
                  <TextInput style={styles.input} 
                  placeholder='Nombre de la Paciente'
                  placeholderTextColor={'#666'}
                  value={paciente}
                  onChangeText={setPaciente}
                ></TextInput>
              </View>
            
              <View style={styles.campo} >
                <Text
                  style={styles.label}
                  >NOMBRE DEL PROPIETARIO:</Text>
                  <TextInput style={styles.input} 
                  placeholder='Nombre del propietario'
                  placeholderTextColor={'#666'}
                  value={propietario}
                  onChangeText={setPropietario}
                ></TextInput>
              </View>
          
             <View style={styles.campo}>
                <Text
                  style={styles.label}
                  >EMAIL:</Text>
                  <TextInput style={styles.input} 
                  placeholder='Email'
                  placeholderTextColor={'#666'}
                  keyboardType='email-address'
                  value={email}
                  onChangeText={setEmail}
                ></TextInput>
             </View>

             <View style={styles.campo} >
                <Text
                  style={styles.label}
                  >TELEFONO:</Text>
                  <TextInput style={styles.input} 
                  placeholder='Telefono'
                  placeholderTextColor={'#666'}
                  value={telefono}
                  keyboardType='number-pad'
                  onChangeText={setTelefono}
                ></TextInput>
             </View>

              <View style={styles.campo}>
                <Text
                  style={styles.label}
                  >SINTOMAS:</Text>
                  <TextInput style={styles.input} 
                  placeholder='Sintomas'
                  placeholderTextColor={'#666'}
                  value={sintomas}
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={setSintomas}
                ></TextInput>
              </View>
             
               

          <View>
              <Pressable 
                     style={styles.btnNuevaCita}onPress={handleCita} >
                     <Text style={styles.btnNuevaCitaTexto}>
                     {editarPaciente ? 'Actualizar' : 'Nueva cita'}
                     </Text>
              </Pressable>
          </View>

              
        
        </ScrollView>
    </SafeAreaView>
</Modal>
     
  )
}

//ESTILOS
const styles = StyleSheet.create({
contenido:{
  backgroundColor:'#0EA907',
  flex:1,
},

 titulo:{
   fontSize:30,
   fontWeight:'600',
   textAlign:'center',
   marginTop:30,
   fontStyle:'italic',
   color:'#FFF'

},
    
 tituloBold:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#fcfafa'
},

 campo:{
 marginTop:10,
 marginHorizontal:30,
 color: '#9d71eb'

},

label:{
 color: '#f0f8ff',
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

sintomasInput:{
 height:100
 },
    
btnNuevaCita:{
  marginVertical:10,
  backgroundColor:"#28d969",
  paddingVertical:15,
  marginHorizontal:30,
  borderRadius:15
  },

btnNuevaCitaTexto:{
    textAlign: 'center',
    color:'#FFF',
    fontSize: 20,
    fontStyle:'italic',
    fontWeight: '900',
    textTransform: 'uppercase'
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
    fontStyle:'italic',
    fontSize:16,
    textTransform: 'uppercase'
   },

})

export default Formulario