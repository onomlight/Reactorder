import classes from './MealsSummary.module.css'
// props 매개변수를 받아들일 필요도 없습니다

// 왜냐하면 여기서는 props를 절대 사용하지 않을 것이기 때문입니다
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  )
}

export default MealsSummary
