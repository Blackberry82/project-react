import {useEffect, useState} from "react";

import {carService} from "../../services";
import Car from "../car/Car";
import CarForm from "../carForm/CarForm"

export default function Cars() {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, []);

    const addCar = (car) => {
      setCars([...cars, car])
    }
    const deleteCar = async (id) => {
      await carService.deleteById(id);
      const resultat = [...cars];
      const index = resultat.findIndex(value => value.id === id);
      if (index !== -1) {
          resultat.splice(index, 1)
          setCars(resultat)
      }
    }
    const updateCar = (car) => {
      const res = [...cars];
      const find = res.find(value => value.id === carForUpdate.id);
      if (find) {
          Object.assign(find, car);
          setCars(res)
          setCarForUpdate(null)
      }
    }

    return (
        <div>
            <CarForm addCar={addCar} carForUpdate={carForUpdate} updateCar={updateCar}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
}