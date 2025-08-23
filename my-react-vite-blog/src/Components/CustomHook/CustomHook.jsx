import { useState } from "react"

const UseToggle = (defaultVal) => {
    const[value, setValue] = useState(defaultVal);

    function togglevalue (val){
        
        console.log(val);
        

        if(typeof val!='boolean'){
            console.log("if");
            setValue(!value)
        }else{
            console.log("else");
            
            setValue(val)
        }
    }
    return [value, togglevalue];
}

export default UseToggle;