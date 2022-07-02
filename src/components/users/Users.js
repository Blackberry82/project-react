import {useForm} from "react-hook-form";

import {getUser} from "../../services/user.service";

export default function Users() {

    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            name:'name',
            username:'username',
            email:'example@gmail.com'
        }
    });

    const submit = (obj) => {
        getUser(obj).then(responce => console.log(responce));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required:true})}/>

                {
                    errors.name && <span>Поле обов'язкове</span>
                }

                <input type="text" {...register('username')}/>

                <input type="text" {...register('email')}/>

                <select{...register('id')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button>Save</button>
            </form>
        </div>
    );
}