import React from "react";
import {Field } from 'redux-form';
import { Textarea } from "../../../commons/FormControl/FormControl";
import { required} from "../../../utilies/validator/validator";



const MyPostForm =({handleSubmit})=>{

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                component={Textarea}
                name="profileAddPost"
                validate ={[required]}
                placeholder="Add post"
                  />
            </div>
            <div>
                <button type="submit">Add Post</button>
            </div>
        
        </form>
    )
}
export default MyPostForm;