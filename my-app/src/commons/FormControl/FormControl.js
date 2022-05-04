import React from "react"
import styles from './FormControl.module.css';
import {Field } from 'redux-form'



 const Element =(Element)=>{
    return ({meta:{touched,error},input,...restProps}) => {
      const hasError = touched && error;
      return(
          <div className={styles.formControl + " " + (hasError && styles.error) } >
             <div >
               <Element {...input} {...restProps}/>
             </div>
          
               {hasError && <span className={styles.errorMessage} >{error}</span>} 
          
           
          </div>
         
      ) 
    }
 }

export const Textarea = Element("textarea")
export const Input = Element("input")

export const createField = (placeholder, name, component, validators, props={},text ="") => (
   <div>
    <Field  name={name} placeholder={placeholder} component={component} validate ={validators} {...props} />  {text}
  
</div>
)