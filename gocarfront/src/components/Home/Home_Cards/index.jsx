import React, { useContext, useEffect } from "react";

import { Context } from "../../../Context/Context";

import { Link } from "react-router-dom";

import { eachDayOfInterval, isEqual } from "date-fns";
import { CardGroup } from "react-bootstrap";

function HomeCards({ search }) {
  const { products, productImages, productBookings } = useContext(Context);
  const ids = [43, 37, 31, 13, 25, 19, 7, 1];

  const images = productImages?.filter((url) => ids.includes(url.id));

  let product = products.map((cars) => {
    const names = cars.name.split(" ");
    const fotos = images.find((fotos) => fotos.title.includes(names[0]));
    return { ...cars, urlImage: fotos?.urlImage };
  });

  let recomended = product.slice(6,8)

  let dataescolhida = [];
  let produtoreservado = [];
  let carrosproibidos = [];
  let carroruim = [];
  let nomes = [];
  let carrobom = [];

  useEffect(() => {
    if (search.checkin != "" && search.checkout != "") {
      dataescolhida = eachDayOfInterval({
        start: new Date(search.checkin),
        end: new Date(search.checkout)
      })
      // console.log("dataescolhida :", dataescolhida)
    }

    for (let z = 0; z < dataescolhida.length; z++) {
      for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < l[i]?.f?.length; j++) {
          if (isEqual(l[i].f[j], dataescolhida[z])) {
            produtoreservado.push(l[i].idProduct);
          }
        }
      }
    }

    // console.log(produtoreservado)

    carrosproibidos = [... new Set(produtoreservado)]
    
    product.map((car) => {

      for(let w = 0 ; w< produtoreservado.length ; w++){
          
        if(car.id == carrosproibidos[w]){
           console.log("Esse carro não pode :", w , car)
           carroruim.push(car);
  
          }
    
      }
    })

    product.map((cars)=> {
        for(let d = 0 ; d <carroruim.length; d++){
          
          if(cars!= carroruim[d]){
            carrobom.push(cars)
          }


        }

        // console.log("carro bom", carrobom)

    })

    for(let ç = 0 ; ç <carrobom.length; ç++){
        nomes.push(carrobom[ç].name)
    }


    // alert(JSON.stringify(nomes));
    

   


  }, [search]);


  



  // console.log("sssssssssssss",carroruim)

  const l = productBookings?.map((reservas) => {
    const f = eachDayOfInterval({
      start: new Date(reservas.initalDay),
      end: new Date(reservas.finalDay)
    })

    return { f, idProduct: reservas?.product?.id };
  });

  // console.log(l);


  
// Ao final, descomentar a l
  
const carrosalugados = () => {
 product?.map((car) => {
    const carg = carroruim.filter((carro) => carro.id === car.id)
    //  console.log("oi", carg)
    //  console.log("oi", carroruim.id)

})} 
 carrosalugados()
  return (
    <>
      <div id="galeria_carro" className="galeria_carro">
      {(search.checkin === "" && search.checkout === "") ? 
        (recomended?.map((car) => (
          <div key={images.id} className="card_main">
            <div className="card_image">
              
              <img src={car?.urlImage} alt="" />
            </div>
            <div className="card_description">
              <div className="card_title">
              
                  <h3>{car?.name}</h3>

                  <h4>{car.category.qualification}</h4>

                  <p>{car.description}</p>

                  <div className="car_button">
                    <Link to={"/product/" + car.id} className="link_button">
                      <button className="button_car">Ver mais</button>
                    </Link>
                  </div>

              </div>
            </div>
          </div>
        ))) : (product?.map((car) => (
          <div key={images.id} className="card_main">
            <div className="card_image">
              {" "}
              <img src={car?.urlImage} alt="" />{" "}
            </div>
            <div className="card_description">
              <div className="card_title">
                {" "}
                <h3>{car?.name}</h3>{" "}
              </div>

              <div className="car_description">
                <h6>{car.category.qualification}</h6>
                <p>{car.description}</p>

                <div className="car_button">
                  <Link to={"/product/" + car.id} className="link_button">
                    <button className="button_car">Ver mais</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )))
        }
      </div>
    </>
  );
}

export default HomeCards;