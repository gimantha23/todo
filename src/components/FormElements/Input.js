// import React from 'react';
// import './Input.css';

// const Input = props => {
//     // const [inputState, dispatch] = useReducer(inputReducer, {
//     //   value: props.initialValue || '',
//     //   isTouched: false,
//     //   isValid: props.initialValid || false
//     // });
  
//     // const { id, onInput } = props;
//     // const { value, isValid } = inputState;
  
//     // useEffect(() => {
//     //   onInput(id, value, isValid)
//     // }, [id, value, isValid, onInput]);
  
//     const changeHandler = event => {
//       dispatch({
//         type: 'CHANGE',
//         val: event.target.value,
//         validators: props.validators
//       });
//     };
  
//     const touchHandler = () => {
//       dispatch({
//         type: 'TOUCH'
//       });
//     };
  
//     const element =
//       props.element === 'input' ? (
//         <input
//           id={props.id}
//           type={props.type}
//           placeholder={props.placeholder}
//           onChange={changeHandler}
//           onBlur={touchHandler}
//           value={inputState.value}
//         />
//       ) : (
//         <textarea
//           id={props.id}
//           rows={props.rows || 3}
//           onChange={changeHandler}
//           onBlur={touchHandler}
//           value={inputState.value}
//           disabled={props.disabled}
//         />
//       );
  
//     return (
//       <div
//         className={`form-item ${!inputState.isValid && inputState.isTouched &&
//           'form-item--invalid'}`}
//       >
//         <label htmlFor={props.id}>{props.label}</label>
//         {element}
//         {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
//       </div>
//     );
//   };
  
//   export default Input;