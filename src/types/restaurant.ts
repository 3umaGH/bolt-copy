export type RestaurantOptions = {
  restaurant: {
    id: number
    name: string
    image: string
    badge_text?: string
    ratings: {
      average_rating: number
      total_ratings: number
    }
  }
  delivery: {
    time_range: [number, number]
    price: {
      price: number
      discounted_price?: number
    }
  }
}

export type Dish = {
  id: number
  name: string
  image: string
  description: string
  ingredients: string[]
  details: {
    vegan: boolean
    gluten_free: boolean
    spicy: boolean
  }
  options: OptionCategory[]
  price: { price: number; discounted_price: number }
}

export type OptionCategory = {
  id: number
  name: string
  required: boolean
  maximum_options: number
  options: DishOption[]
}

export type DishOption = {
  id: number
  name: string
  price: number
}
