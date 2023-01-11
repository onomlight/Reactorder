import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <input
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaulValue: '1',
        }}
      />
      <button>+ ADD</button>
    </form>
  )
}

export default MealItemForm
