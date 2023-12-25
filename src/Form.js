import { useRef } from "react";

let Form = ({collectdata})=>{

   let title =  useRef();
   let text = useRef();
   let date = useRef();


     function addHandler(){
         let x = title.current.value;
         let y = text.current.value;
         let z = date.current.value;
        collectdata(x,y,z);
     }

    return <form onSubmit={addHandler}>
    <label htmlFor=""></label>
    <input ref={title}/>
    <label>Opening Text</label>
    <input ref={text} type="text" />
    <label>Release Date</label>
    <input ref={date} />
    <button>Add Movie</button>
    </form>
}

export default Form;