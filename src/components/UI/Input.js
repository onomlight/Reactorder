import classes from './Input.module.css'
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
      {/* ...<전개연산자 사용  */}
    </div>
  )
}

export default Input
