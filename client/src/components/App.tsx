import React, { FormEvent,useState } from "react";
import ArrowIcon from "./ArrowIcon";
import {motion} from 'framer-motion'
 

const App=()=>{
const [url,setUrl]=useState<string>('')
const [response,setResponse]=useState<string>('')

const options = {
    initial: { opacity: 0,y:-15 },
    animate: { opacity: 1,y:0 },
    exit: { opacity: 0,y:-15 },
  };
const sumbitHandler=(e:FormEvent)=>{
e.preventDefault()
 
}

const inputHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
const inputUrl=e.target.value
setUrl(inputUrl)
//fetch data
}

    return(
    <form onSubmit={sumbitHandler} className="w-full flex justify-center items-center flex-col text-xl">
<div>
<input type='text' className="p-1 focus: outline-none text-black" onChange={inputHandler}/>
<button className="ml-4 p-1 px-4   outline  outline-2 outline-white hover:-translate-y-1  hover:transition-all hover:duration-150 duration-150 hover:shadow-md hover:shadow-white "> press</button>

</div>
{url && (<motion.div variants={options}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{duration:0.5}} className="flex flex-col justify-start items-center w-full mt-5">
    <ArrowIcon/>
    <p className="mt-2">{url}</p>
{/* <span>to</span>
<span>become shorter:</span> */}
</motion.div>)}

</form>)
}

export default App