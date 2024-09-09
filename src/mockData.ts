import { Slide } from './components/pages/MainPage/HorizontalSlider'
import { RestaurantOptions } from './types/restaurant'

export const FEATURED_RESTAURANT: RestaurantOptions = {
  restaurant: {
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
  { id: 0, img: 'https://miro.medium.com/v2/resize:fit:800/0*uuovY4pBr7cyXsgS.png', href: '' },
  { id: 1, img: 'https://il-letterato.ru/upload/medialibrary/e8e/e8e8354be08fa37541038ce92bd0003f.jpg', href: '' },
  { id: 2, img: 'https://www.liguriaristorante.co.za/wp-content/uploads/2023/05/medium-images-2.png', href: '' },
]
