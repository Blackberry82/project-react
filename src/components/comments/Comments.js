import {useForm} from "react-hook-form";

import {getComment} from "../../services";

export default function Comments() {
    let usersId = [
        {id:1, name:'Milan'},
        {id:2, name:'Teresa'},
        {id:3, name:'Iryna'},
        {id:4, name:'Vadym'},
        {id:5, name:'Yuriy'},
        {id:6, name:'Igor'},
        {id:7, name:'Olena'},
        {id:8, name:'Radek'},
        {id:9, name:'Peter'},
        {id:10, name:'Denisa'},
    ];

    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            name: 'name',
            email: 'example@gmail.com'
        }
    })

    const submit = (obj) => {
      getComment(obj).then(({data}) => console.log(data));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required:true})}/>
                {
                    errors.name && <span>Field is required</span>
                }
                <input type="text" {...register('email')}/>

                <input type="text" {...register('body')}/>

                <select {...register('userId')}>
                    {
                        usersId.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </select>

                <button>Save</button>
            </form>
        </div>
    );
}