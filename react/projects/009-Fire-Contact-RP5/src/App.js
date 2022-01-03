import './App.css';
import { useState } from 'react';
import FormComponent from './components/form/FormComponent';
import Contacts from './components/contacts/Contacts';
<<<<<<< HEAD
const initialValues={username:"", phoneNumber:"", gender:"NO INFO"}
function App() {
  const[info,setInfo]=useState()
=======
import { addInfo, updateInfo } from './utils/functions';
import { ToastContainer } from 'react-toastify';

const initialValues={username:"",phoneNumber:"",gender:"NO INFO"}

function App() {
  const [info,setInfo]=useState(initialValues)

  const handleFormSubmit=()=>{
    if(info.id){
    updateInfo(info)}
    else{
      addInfo(info)
    }
  }

  const editHandler=(id,username,phoneNumber,gender)=>{
    setInfo({id,username,phoneNumber,gender});
  };

>>>>>>> 8410a72d7829e84803f5f21bfd6fab0c81aa8b17
  return (
    <div className="App">
     <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit} />
     <Contacts editHandler={editHandler}/>
     <ToastContainer />
    </div>
  );
}

export default App;
