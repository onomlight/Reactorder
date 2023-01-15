import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '모듬 초밥',
    description: '연어 고등어 계란 새우 ',
    price: 22.99,
  },
  {
    id: 'm2',
    name: '종합 타코야끼',
    description: '매운맛 파타코 치즈 참치',
    price: 16.5,
  },
  {
    id: 'm3',
    name: '돈카츠',
    description: '등심 안심',
    price: 12.99,
  },
  {
    id: 'm4',
    name: '소불고기 덮밥',
    description: '맛잇음',
    price: 18.99,
  },
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
