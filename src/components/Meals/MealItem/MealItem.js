import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
const MealItem = (prpos) => {
  const price = `$${prpos.price.toFixed(2)}` // 소수점 2자리
  // $ 기호와 중괄호죠즉, 두 개의 달러 기호가 있지만 하나는 단순히 $ 기호를 출력하는 거고요 중괄호와 같이 쓴 다른 달러 기호는이 템플릿 리터럴에 동적 콘텐츠를 삽입하기 위해 쓴 것입니다
  return (
    <li className={classes.meal}>
      <div>
        <h3>{prpos.name}</h3>
        <div className={classes.description}>{prpos.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm></MealItemForm>
      </div>
    </li>
  )
}

export default MealItem
