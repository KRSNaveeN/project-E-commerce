import { useRef } from 'react';
import classes from './Contact.module.css';

const Contact= ()=>{

    const email = useRef();
    const name = useRef();
    const num = useRef();
  async function submitHandler(e){
    e.preventDefault();
    let obj = {
        email : email.current.value,
        name : name.current.value,
        num : num.current.value
    }
     let response = await fetch("https://contactdetails-96801-default-rtdb.firebaseio.com/contacts.json", {
        method : 'POST',
        body : JSON.stringify(obj),
     });

     let data = await response.json();
     console.log(data);

     email.current.value ="";
     name.current.value ='';
     num.current.value ='';
  }

    return<>
        <form className={classes.backdrop} onSubmit={submitHandler}>
            <label>Name</label>
            <input ref={name} type="text"/>

            <label>Email</label>
            <input ref={email} type="text"/>

            <label>Phone Number</label>
            <input ref={num} type="number"/>
             
             <button className={classes.button}>Submit</button>
         </form>
    </>
}
export default Contact;