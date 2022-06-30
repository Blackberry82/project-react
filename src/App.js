import {useForm} from "react-hook-form";


function App() {

  let usersId = [
    {id:1, name:'Milan'},
    {id:2, name:'Teresa'},
    {id:3, name:'Iryna'},
    {id:4, name:'Vadyn'},
    {id:5, name:'Yuriy'},
    {id:6, name:'Igor'},
    {id:7, name:'Olena'},
    {id:8, name:'Radek'},
    {id:9, name:'Peter'},
    {id:10, name:'Denisa'},
  ];

  const {register, handleSubmit, formState:{errors}} = useForm({
    defaultValues:
        {name:'name',
        email:'email'}
  });

  const submit = (obj) => {

      fetch("https://jsonplaceholder.typicode.com/comments", {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {'Content-type': 'application/json; charset=UTF-8',},
      })
          .then(response => response.json())
          .then(result => console.log(result))

  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>

        <input type="text" {...register('name', {required:true})}/>

        {
          errors.name && <div>Поле обов'язкове до заповнення</div>
        }

        <input type="text" {...register('email')}/>

        <input type="text" {...register('body')}/>

        <select {...register('userId')}>

          {
            usersId.map(value => <option key={value.id} value={value.id}>{value.name}</option>)
          }

        </select>

        <button>Save</button>

      </form>
    </div>
  );
}

export default App;
