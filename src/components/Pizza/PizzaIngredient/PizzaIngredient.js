import React from 'react';
import ReactSVG from 'react-svg'
import Spinner from '../../UI/Spinner/Spinner';

const PizzaIngredient = ({type}) => {
    console.log('PizzaIngredient')
    let randomSize = Math.floor(Math.random() * 10) + 10;
    let randomPositionTop = Math.floor(Math.random() * 55) + 15;
    let randomPositionLeft = Math.floor(Math.random() * 55) + 15;
    let radomRotation = Math.floor(Math.random() * 360);
    let radomZindex = Math.floor(Math.random() * 10);

    let ingredient = (
        <ReactSVG 
            svgStyle={{ 
                width: '100%',
                height: '100%'
                }}
            src={require(`../../../assets/svgs/basic.svg`)} />
    )
    if (type){
        ingredient = <ReactSVG 
        svgStyle={{ 
            position: 'absolute',
            width: `${randomSize}%`,
            height: `${randomSize}%`,
            top: `${randomPositionTop}%`,
            left: `${randomPositionLeft}%`,
            transform: `rotate(${radomRotation}deg)`,
            zIndex: `${radomZindex}`
        }}
        loading={() => <span style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: '20'
        }}><Spinner/></span>}
        wrapper="span"
        src={require(`../../../assets/svgs/${type}.svg`)} />
    }
  return ingredient
}

export default React.memo(PizzaIngredient);
