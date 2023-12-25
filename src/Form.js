import { useRef } from "react";
import classes from './Form.module.css';
import Button from "react-bootstrap/esm/Button";

let Form = ({collectdata})=>{

   let title =  useRef();
   let text = useRef();
   let date = useRef();


     function addHandler(e){
      e.preventDefault();
         let x = title.current.value;
         let y = text.current.value;
         let z = date.current.value;
        collectdata(x,y,z);
        title.current.value = "";
        text.current.value ="";
        date.current.value="";
     }

    return<div className={classes.backdrop}>
        <form onSubmit={addHandler} className={classes.form}>
          <div>
          <label htmlFor="">Title</label>
          <br/>
          <input  type="text" ref={title}/>
          </div>

          <div>
          <label>Opening Text</label>
          <br/>
          <textarea  ref={text} type="text" />
          </div>
    
          <div>
          <label>Release Date</label>
          <br/>
           <input ref={date} />
          </div>
    
        <div className={classes.butn}>
           <button  className={classes.btn}>Add Movie</button>
        </div>
          
    </form>
    </div>
    
}

export default Form;