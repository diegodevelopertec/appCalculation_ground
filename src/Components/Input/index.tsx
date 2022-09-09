import { ChangeEvent } from 'react'
import './style.css'


type Props={
    placeholder:string,
    stateValue:string,
    funcValue:(e:ChangeEvent<HTMLInputElement>)=>void

}

export const Input=({placeholder,stateValue,funcValue}:Props)=>{
    return <>
       <input type="text"  placeholder={placeholder} value={stateValue}  onChange={funcValue}/>
       </>



}