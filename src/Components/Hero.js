import './Hero.css'
function Hero(props) {
    let{id,name,status,species,gender,image} = props;
     return (
         <div  className={'target'}>
             <p>{id}</p>
             <h2>{name}</h2>
             <p>{status}</p>
             <div>{species}</div>
             <p>{gender}</p>
             <img src={image} alt=""/>
         </div>
     )
 }
 export default Hero;