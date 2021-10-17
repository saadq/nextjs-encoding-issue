import Link from 'next/link'
import type { NextPage } from 'next'
import { foods } from '../foods'

const HomePage: NextPage = () => (
  <>
    <h1>Home</h1>
    <ul>
      {foods.map((food) => (
        <li key={food.title}>
          <Link href={`/food/${encodeURIComponent(food.title)}`}>
            {food.title}
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default HomePage
