import React, {useState} from 'react'
import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function App() {

const [name,setName]=useState(" ");
const [email,setEmail]=useState(" ");
const[data,setData]=useState([]); 
// it will be array of object which contains two fields name and email.
const addData=()=>{
  setData([...data,{
    name:name,
    email:email
  }]);
  setName(" ");
  setEmail(" ");
}

const del= (index)=>{
  let arr=data;
  arr.splice(index,1);//remove 1 data from index 
  setData([...arr]);
}

  return (
    <div className="App">
      <Header />
      <div className='form'>
      <Stack direction="row" spacing={3}>
        <TextField 
        id="outlined-basic" 
        label="Name" 
        variant="outlined"
        onChange={(event)=>{
          setName(event.target.value)
        }}
        value={name}
        />
        <TextField 
        id="outlined-basic" label="Email" 
        variant="outlined" 
        onChange={(event)=>{
          setEmail(event.target.value)
        }}
        value={email}
        />
        <Button variant="contained" color="success" onClick={addData}><AddIcon/></Button>
      </Stack>
    </div>
    <div className='data'>
          <div className='data_val'>
            <h3 className='name'>Name</h3>
            <h3 className='email'>Email</h3>
            <h3>Remove</h3>
          </div>
          {
            data.map((element,index)=>{
              return(
                  <div className='data_val'>
                      <h3 >{element.name}</h3>
                      <h3>{element.email}</h3>
                      <Stack>
                      <Button variant="contained" color="error"
                      onClick={()=>del(index)}
                       ><DeleteOutlineIcon/></Button>
                      </Stack>
                  </div>
              )
            })
          
          }
      </div>
    </div>
  );
}

export default App;
