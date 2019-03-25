import React, { useState } from 'react';
import classes from './PizzaControls.module.scss';
import Button from '../../UI/Button/Button';


const PizzaControls = (props) => {
  const [selectedValue, setSelectedValue] = useState('onion');

  const changeSelectedValueHandler = (e) => {
    setSelectedValue(e.target.value)
  }
  return (
    <div className={classes.PizzaControls}>
        <select 
          className={classes.select} 
          value={selectedValue}
          onChange={changeSelectedValueHandler}>
            <option value="onion">onion</option>
            <option value="salami">salami</option>
            <option value="mushrooms">mushrooms</option>
            <option value="olives">olives</option>
            <option value="basil">basil</option>
            <option value="pineapple">pineapple</option>
            <option value="redPepper">red pepper</option>
            <option value="greenPepper">green pepper</option>
        </select> 
        <input 
            type="range" 
            min="0"
            max="100" 
            value={props.ingredients[selectedValue].amount}
            className={classes.slider} 
            onChange={(e) => props.onChangeRange(e.target.value, selectedValue)}/>
        <p className={classes.gramValue}>
          {props.ingredients[selectedValue].amount} grams
        </p>
        <Button 
          btnType="Primary" 
          clicked={props.resetIng}>
          Reset
        </Button>
        <Button 
          btnType="Primary" 
          clicked={props.randomPizza}>
          Make random Pizza
        </Button>
    </div>
  )
}

export default PizzaControls
