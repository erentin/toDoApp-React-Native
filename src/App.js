import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList
} from 'react-native';

import TaskCard from './components/TaskCard/TaskCard';

function App () {

  const [counter,setCounter] = useState(0)
  const [text,setText] = useState("");
  const [list,setList] = useState([]);

  function onTexted (text) {
    setText(text)
  }

  function onPressed () {
    const texted = text
    setList([...list,texted])
    setCounter(counter+1)
  }

  function onDelete (x) {
  }


  return (


    <View style={styles.container}>

      <View style={styles.topBar}>

        <Text style={styles.topText}>YAPILACAKLAR</Text>
        <Text style={styles.topText}>{counter}</Text>

      </View>

      <FlatList style={styles.midBar}
      
        data={list}
        renderItem={(item) => <TaskCard card={item.item} touch={() => onDelete(item.index)} />}


      />


      <View style={styles.bottomBar}>

        <TextInput
          style={styles.input}
          placeholder='YAZ...'
          placeholderTextColor={"#cbd5e1"}
          onChangeText={onTexted}
        />
        <Button
          color={"#1e293b"}
          style={styles.button}
          title='KAYDET'
          onPress={onPressed}
        />

      </View>

    </View>

  )

}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    height:"100%",
    width:"100%",
    backgroundColor:"gray"
  },
  topBar:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"100%",
    height:"15%",
    backgroundColor:"#0f172a"
  },
  topText:{
    color:"#cbd5e1",
    fontSize:24,
    fontWeight:"600",
  },
  midBar:{
    width:"100%",
    height:"70%",
    backgroundColor:"#1e293b",
  },
  bottomBar:{
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    width:"100%",
    height:"15%",
    backgroundColor:"#0f172a"
  },
  input:{
    width:"90%",
    borderBottomWidth:1,
    borderBottomColor:"#cbd5e1",
    color:"#cbd5e1",
  },
  button:{
    color:"#1e293b",
  },
})

export default App;
