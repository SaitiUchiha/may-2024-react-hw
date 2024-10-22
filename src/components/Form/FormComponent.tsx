import React from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../Validators/post.validator";
import axios from "axios";

type FormProps = {
    title: string;
    body: string;
    userId: number;
}


const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }

    } = useForm<FormProps>({mode: 'all', resolver: joiResolver(postValidator)});

    const customHandler = (dataFromForm: FormProps) => {
        console.log(dataFromForm);
        axios
            .post("https://jsonplaceholder.typicode.com/posts", dataFromForm)
            .then((res) => {
                console.log(res);
            });
    };
    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <div>
                <label>
                    <input type="text" placeholder={'your title'} {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
            </div>
            <div>
                <label><input type="text" placeholder={'body'} {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input type="number" placeholder={'userId'} {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
            </div>
            <button disabled={!isValid} type={'submit'}>save</button>
        </form>


    );
};

export default FormComponent;