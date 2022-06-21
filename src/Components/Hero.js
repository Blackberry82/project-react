import './Hero.css'
function Hero(props) {
    let{id,name,status,species,gender,image} = props;
     return (
         <div>
             <p>{id}</p>
             <h2 className={'target'}>{name}</h2>
             <p>{status}</p>
             <div>{species}</div>
             <p>{gender}</p>
             <img src={image} alt=""/>
         </div>
     )
 }
 export default Hero;