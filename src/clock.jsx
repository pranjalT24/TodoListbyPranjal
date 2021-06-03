import React ,{useState} from 'react';


const Clock = ()=>{
    let newTime=new Date().toLocaleTimeString();
    let [state, setstate] = useState(newTime);

   
    setInterval(() => {
        newTime=new Date().toLocaleTimeString();
        setstate(newTime);
    }, 1000);

    return (
        <>
        <h1>{state}</h1>
        
        </>
    );
};

export default Clock;
