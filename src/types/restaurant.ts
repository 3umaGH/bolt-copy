export type RestaurantOptions = {
  restaurant: {
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
