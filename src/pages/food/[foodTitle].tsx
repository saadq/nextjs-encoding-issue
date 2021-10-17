import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import type { ParsedUrlQuery } from 'querystring'
import { Food, foods } from '../../foods'

interface Props {
  food: Food
}

interface Params extends ParsedUrlQuery {
  foodTitle: string
}

export const getStaticProps: GetStaticProps<Props, Params> = (ctx) => {
  const title = ctx.params?.foodTitle as string
  const food = foods.find((food) => food.title === title) as Food

  return {
    props: {
      food
    }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = foods.map((food) => `/food/${encodeURIComponent(food.title)}`)

  return {
    paths,
    fallback: false
  }
}

const FoodPage: NextPage<Props> = ({ food }) => {
  return (
    <>
      <Link href='/'>Go Back</Link>
      <h1>{food.title}</h1>
      <h2>Amount: {food.amount}</h2>
    </>
  )
}

export default FoodPage
