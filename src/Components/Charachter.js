import './Charachter.css'
function Character(props) {
    let{name, desc, photo} = props;
     return (
         <div>
             <h2 className={'target'}>{name}</h2>
             <p>{desc}</p>
             <img src={photo}alt=""/>
         </div>
     )
 }
 export default Character;