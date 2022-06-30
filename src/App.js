import {useForm} from "react-hook-form";

function App() {
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:
                {name:'name',
                    username:'username',
                    email:'email'
                }
        });
    const submit = (obj) => {

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8',},
        })
            .then(response => response.json())
            .then(result => console.log(result))
    };

    return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text"
               {...register('name', {required:true})}/>
          {
              errors.name && <span>Поле обов'язкове до заповнення</span>
          }

        <input type="text"
               {...register('username')}/>

          {
              errors.username && <span>Поле обов'язкове до заповнення</span>
          }

          <input type="text"
                 {...register('email')}/>

          <select {...register('id')}>
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

        <button>save</button>
      </form>
    </div>
  );
}

export default App;
