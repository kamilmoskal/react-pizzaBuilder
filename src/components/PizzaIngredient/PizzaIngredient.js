import React from 'react';
import ReactSVG from 'react-svg'

const PizzaIngredient = ({type}) => {

    let randomSize = Math.floor(Math.random() * 10) + 5;
    let randomPositionTop = Math.floor(Math.random() * 60) + 10;
    let randomPositionLeft = Math.floor(Math.random() * 60) + 15;
    let radomRotation = Math.floor(Math.random() * 360);

    let ingredient = (
        <ReactSVG 
            svgStyle={{ 
                width: '100%',
                height: '100%'
                }}
            src={require(`../../assets/svgs/basic.svg`)} />
    )
    if (type){
        ingredient = <ReactSVG 
        svgStyle={{ 
            position: 'absolute',
            width: `${randomSize}%`,
            height: `${randomSize}%`,
            top: `${randomPositionTop}%`,
            left: `${randomPositionLeft}%`,
            transform: `rotate(${radomRotation}deg)`
         }}
        src={require(`../../assets/svgs/${type}.svg`)} />
    }
  return ingredient
}

export default PizzaIngredient;
