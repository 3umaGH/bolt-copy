import { Slide } from './components/pages/MainPage/HorizontalSlider'
import { Dish, RestaurantOptions } from './types/restaurant'

export const FEATURED_RESTAURANT: RestaurantOptions = {
  restaurant: {
    id: 0,
    name: 'Bolt Market Soola',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/005/577/796/small_2x/salad-quail-egg-tomato-mix-leaves-vegetable-healthy-meal-vegan-or-vegetarian-food-photo.jpg',
    ratings: {
      average_rating: 4.8,
      total_ratings: 501,
    },
  },
  delivery: {
    time_range: [20, 40],
    price: { price: 2.7 },
  },
}

export const MOCK_RESTAURANTS: RestaurantOptions[] = [
  {
    restaurant: {
      id: 1,
      name: 'Pasta Palace',
      image: 'https://sharethepasta.org/wp-content/uploads/2021/09/Tagliatelle-2-scaled-800x400.jpg',
      badge_text: 'Popular',
      ratings: {
        average_rating: 4.7,
        total_ratings: 1345,
      },
    },
    delivery: {
      time_range: [25, 35],
      price: {
        price: 15.99,
        discounted_price: 12.99,
      },
    },
  },
  {
    restaurant: {
      id: 2,
      name: 'Sushi World',
      image: 'https://emirateswoman.com/wp-content/uploads/2020/04/3a.rainbow-roll.jpg',
      ratings: {
        average_rating: 4.5,
        total_ratings: 875,
      },
    },
    delivery: {
      time_range: [30, 40],
      price: {
        price: 22.49,
      },
    },
  },
  {
    restaurant: {
      id: 3,
      name: 'Burger Haven',
      image: 'https://citrusthediner.com/wp-content/uploads/2023/10/iStock-1412706551-res.jpg',
      badge_text: 'Best Seller',
      ratings: {
        average_rating: 4.3,
        total_ratings: 2189,
      },
    },
    delivery: {
      time_range: [15, 25],
      price: {
        price: 9.99,
      },
    },
  },
  {
    restaurant: {
      id: 4,
      name: 'Taco Town',
      image: 'https://aquaworld.com.mx/wp-content/uploads/2021/11/tacos-de-cochinita-pibil-e1637691441188.jpeg',
      ratings: {
        average_rating: 4.1,
        total_ratings: 590,
      },
    },
    delivery: {
      time_range: [20, 30],
      price: {
        price: 14.49,
      },
    },
  },
  {
    restaurant: {
      id: 5,
      name: 'Pizza Express',
      image: 'https://franchise.yourpie.com/wp-content/uploads/2021/07/Large-Pizza-Collection-800x400.jpg',
      badge_text: 'New',
      ratings: {
        average_rating: 4.8,
        total_ratings: 2450,
      },
    },
    delivery: {
      time_range: [25, 35],
      price: {
        price: 19.99,
        discounted_price: 17.99,
      },
    },
  },
  {
    restaurant: {
      id: 6,
      name: 'Vegan Delights',
      image: 'https://www.mindfulnessassociation.net/wp-content/uploads/2019/08/So-you-want-to-be-a-vegan-800x400.jpg',
      ratings: {
        average_rating: 4.6,
        total_ratings: 430,
      },
    },
    delivery: {
      time_range: [20, 30],
      price: {
        price: 12.99,
      },
    },
  },
  {
    restaurant: {
      id: 7,
      name: 'Curry House',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/026/721/935/small_2x/indian-national-food-close-up-generative-ai-photo.jpg',
      ratings: {
        average_rating: 4.9,
        total_ratings: 1520,
      },
    },
    delivery: {
      time_range: [30, 40],
      price: {
        price: 18.49,
        discounted_price: 16.99,
      },
    },
  },
  {
    restaurant: {
      id: 8,
      name: 'BBQ Shack',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrKjmAijBGEsQRG7I7-b063OG3x6TL-mkmQ&s',
      ratings: {
        average_rating: 4.4,
        total_ratings: 980,
      },
    },
    delivery: {
      time_range: [15, 25],
      price: {
        price: 20.99,
      },
    },
  },
  {
    restaurant: {
      id: 9,
      name: 'Seafood Sensation',
      image: 'https://hogr.app/blog/wp-content/uploads/2023/11/22803-800x400.jpg',
      badge_text: 'Top Rated',
      ratings: {
        average_rating: 4.7,
        total_ratings: 1675,
      },
    },
    delivery: {
      time_range: [35, 45],
      price: {
        price: 29.99,
      },
    },
  },
  {
    restaurant: {
      id: 10,
      name: 'Deli Dreams',
      image: 'https://chilliindia.com.au/wp-content/uploads/2024/03/regional-indian-dishes.webp',
      ratings: {
        average_rating: 4.2,
        total_ratings: 780,
      },
    },
    delivery: {
      time_range: [10, 20],
      price: {
        price: 8.49,
      },
    },
  },
  {
    restaurant: {
      id: 11,
      name: 'Steak Central',
      image: 'https://eatersmarket.sg/wp-content/uploads/2022/09/affordable-steak-cuts-singapore.jpg',
      badge_text: 'Premium',
      ratings: {
        average_rating: 4.8,
        total_ratings: 2110,
      },
    },
    delivery: {
      time_range: [45, 55],
      price: {
        price: 34.99,
      },
    },
  },
  {
    restaurant: {
      id: 12,
      name: 'Healthy Bites',
      image: 'https://www.invigormedical.com/wp-content/uploads/Invigor-Standard-2023-01-08T191545401.png',
      ratings: {
        average_rating: 4.5,
        total_ratings: 960,
      },
    },
    delivery: {
      time_range: [20, 30],
      price: {
        price: 13.99,
        discounted_price: 11.99,
      },
    },
  },
  {
    restaurant: {
      id: 13,
      name: 'Italian Bistro',
      image: 'https://www.liguriaristorante.co.za/wp-content/uploads/2023/05/medium-images-2.png',
      badge_text: 'Customer Favorite',
      ratings: {
        average_rating: 4.7,
        total_ratings: 1320,
      },
    },
    delivery: {
      time_range: [25, 35],
      price: {
        price: 21.99,
      },
    },
  },
  {
    restaurant: {
      id: 14,
      name: 'Ramen World',
      image: 'https://il-letterato.ru/upload/medialibrary/e8e/e8e8354be08fa37541038ce92bd0003f.jpg',
      ratings: {
        average_rating: 4.6,
        total_ratings: 620,
      },
    },
    delivery: {
      time_range: [30, 40],
      price: {
        price: 16.49,
        discounted_price: 14.99,
      },
    },
  },
  {
    restaurant: {
      id: 15,
      name: 'Fried Chicken Feast',
      image: 'https://miro.medium.com/v2/resize:fit:800/0*uuovY4pBr7cyXsgS.png',
      ratings: {
        average_rating: 4.3,
        total_ratings: 1740,
      },
    },
    delivery: {
      time_range: [15, 25],
      price: {
        price: 11.99,
      },
    },
  },
]

export const MOCK_OFFERS_SLIDES: Slide[] = [
  { id: 0, img: '/promo/1.webp', href: '' },
  { id: 1, img: '/promo/2.webp', href: '' },
  { id: 2, img: '/promo/3.webp', href: '' },
  { id: 3, img: '/promo/4.webp', href: '' },
  { id: 4, img: '/promo/5.webp', href: '' },
]

export const MOCK_GENERIC_SLIDES: Slide[] = [
  { id: 0, img: '/promo/generic.webp', href: '' },
  { id: 1, img: '/promo/generic.webp', href: '' },
  { id: 2, img: '/promo/generic.webp', href: '' },
  { id: 3, img: '/promo/generic.webp', href: '' },
]

export const mockDish: Dish = {
  id: 1,
  name: 'Spicy Vegan Tacos',
  image: 'https://static.vecteezy.com/system/resources/thumbnails/005/577/796/small_2x/salad-quail-egg-tomato-mix-leaves-vegetable-healthy-meal-vegan-or-vegetarian-food-photo.jpg',
  description: 'Delicious soft-shell tacos filled with seasoned tofu, fresh vegetables, and a spicy salsa.',
  ingredients: ['Tofu', 'Lettuce', 'Tomato', 'Onion', 'Salsa', 'Corn Tortilla'],
  details: {
    vegan: true,
    gluten_free: true,
    spicy: true,
  },
  options: [
    {
      id: 1,
      name: 'Spiciness Level',
      required: true,
      maximum_options: 1,
      options: [
        {
          id: 1,
          name: 'Mild',
          price: 0,
        },
        {
          id: 2,
          name: 'Medium',
          price: 0,
        },
        {
          id: 3,
          name: 'Hot',
          price: 0,
        },
      ],
    },
    {
      id: 2,
      name: 'Extras',
      required: false,
      maximum_options: 3,
      options: [
        {
          id: 4,
          name: 'Guacamole',
          price: 1.5,
        },
        {
          id: 5,
          name: 'Sour Cream',
          price: 1,
        },
        {
          id: 6,
          name: 'Cheese',
          price: 1.2,
        },
      ],
    },
  ],
  price: {
    price: 12.99,
    discounted_price: 10.99,
  },
}
