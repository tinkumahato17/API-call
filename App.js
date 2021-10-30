import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { Text, View,FlatList} from 'react-native';
import Card from './component/card';

export default App = ()=> {

 // const[isLoading,setLoading] = useState(true);
  const[data,setData] =useState();

  const getDetails = ()=>{
    
     // const response = await fetch('http://192.168.43.80/fetch_test.php');
      //const json =await response.json();
      const fd = new FormData();
      fd.append('case','radiology');
      fetch('http://192.168.43.80/fetch_test.php',{
        method:'post',
        body:fd
      })
      .then((res)=> res.json())
      .then((json) =>{
      
     // return json.res;
     setData(json);
     console.log(data);
       })

  }
  useEffect(() => {
    getDetails();
  })
  return (
 <View style={{}}>
   
      <Text style ={{fontSize:80,padding:20}}>Api Call </Text>
      
      <StatusBar style="auto" />
   
        <FlatList
        data={data}
        horizontal={true}
        renderItem={({item}) => (
           <Card style={{flex:1}}>
               <View style={{borderRadius:3,height:150,width:150,}}>
                   <Text style={{fontSize:18,flex:1,flexDirection:'column'}}>
                     {item.testType}
                  </Text>
                  <Text style={{flex:1,flexDirection:'column'}}>
                    {item.TestDescription}
                  </Text>
                  <Text style={{fontSize:20,}}>̥₹ {item.testAmount}</Text>
                  
                  <View style={{alignSelf:'center',}}>
                        <Text style={{fontSize:18,color:'#0af9f9'}}>ADD</Text>
                      </View>
                 </View>
              

           </Card>
                     
        )}
    />
        
        
</View>
  );
};

