import classes from './MealsSummary.module.css'
// props 매개변수를 받아들일 필요도 없습니다

// 왜냐하면 여기서는 props를 절대 사용하지 않을 것이기 때문입니다
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛잇는 음식들</h2>
      <p>가장 좋아하는 음식중 하나를 골라주세요!</p>
      <p>수량은 최대 5개까지만 가능합니다 :)</p>
    </section>
  )
}

export default MealsSummary
