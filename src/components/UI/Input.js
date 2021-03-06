import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* Trick to assure that all value pairs input object receive as props 
            from props.input.id are added as props to input
            Make the input component highly configurable from outside the component 
            through the input props */}
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input; 