import { Slide } from './components/pages/MainPage/HorizontalSlider'
import { Dish, RestaurantOptions } from './types/restaurant'

export const MOCK_RESTAURANTS: RestaurantOptions[] = [
  {
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
  },
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
      image: 'https://static.vecteezy.com/system/resources/thumbnails/026/721/935/small_2x/indian-national-food-close-up-generative-ai-photo.jpg',
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

export const FEATURED_RESTAURANT: RestaurantOptions = MOCK_RESTAURANTS[0]

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

export const mockDishes: Dish[] = [
  {
    id: 1,
    name: 'BBQ Jackfruit Burger',
    image:
      'https://www.campomeat.com/cdn/shop/articles/chapter-9-fast-food-and-globalization-beef-beyond-borders-763638_800x.jpg?v=1697278692',
    description: 'Smoky BBQ jackfruit served on a toasted bun with lettuce, tomato, and vegan mayo.',
    ingredients: ['Jackfruit', 'Lettuce', 'Tomato', 'BBQ Sauce', 'Bun'],
    details: {
      vegan: true,
      gluten_free: false,
      spicy: false,
    },
    options: [
      {
        id: 1,
        name: 'Side Options',
        required: true,
        maximum_options: 1,
        options: [
          {
            id: 1,
            name: 'Fries',
            price: 0,
          },
          {
            id: 2,
            name: 'Salad',
            price: 0,
          },
        ],
      },
    ],
    price: {
      price: 14.99,
      discounted_price: 12.99,
    },
  },
  {
    id: 2,
    name: 'Quinoa Salad Bowl',
    image: 'https://mitsidesgroup.com/wp-content/uploads/2021/02/beetroot_400_800_crp-1.jpg',
    description: 'Fresh quinoa salad with avocado, cucumbers, cherry tomatoes, and lemon dressing.',
    ingredients: ['Quinoa', 'Avocado', 'Cucumber', 'Cherry Tomatoes', 'Lemon'],
    details: {
      vegan: true,
      gluten_free: true,
      spicy: false,
    },
    options: [
      {
        id: 1,
        name: 'Dressing Options',
        required: true,
        maximum_options: 1,
        options: [
          {
            id: 1,
            name: 'Lemon Dressing',
            price: 0,
          },
          {
            id: 2,
            name: 'Balsamic Vinegar',
            price: 0,
          },
        ],
      },
    ],
    price: {
      price: 9.99,
      discounted_price: 8.99,
    },
  },
  {
    id: 3,
    name: 'Mushroom Risotto',
    image: 'https://media.lacucinaitaliana.com/photos/5e9ec73bce78a60008d606d8/2:1/w_800,c_limit/saffron%20risotto.jpg',
    description: 'Creamy arborio rice risotto with sautéed mushrooms and fresh herbs.',
    ingredients: ['Arborio Rice', 'Mushrooms', 'Garlic', 'Herbs', 'Vegan Cream'],
    details: {
      vegan: true,
      gluten_free: true,
      spicy: false,
    },
    options: [
      {
        id: 1,
        name: 'Herbs Preference',
        required: false,
        maximum_options: 2,
        options: [
          {
            id: 1,
            name: 'Basil',
            price: 0.5,
          },
          {
            id: 2,
            name: 'Parsley',
            price: 0.5,
          },
        ],
      },
    ],
    price: {
      price: 16.99,
      discounted_price: 14.99,
    },
  },
  {
    id: 4,
    name: 'Falafel Wrap',
    image:
      'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://www.thewingkingz.co.uk/wp-content/uploads/2023/07/Fried-Wing-kingz-Chicken-Wrap-copy.jpg',
    description: 'Crispy falafel with hummus, cucumbers, tomatoes, and tahini wrapped in a flatbread.',
    ingredients: ['Falafel', 'Hummus', 'Cucumber', 'Tomato', 'Flatbread'],
    details: {
      vegan: true,
      gluten_free: false,
      spicy: false,
    },
    options: [
      {
        id: 1,
        name: 'Spicy Sauce',
        required: false,
        maximum_options: 1,
        options: [
          {
            id: 1,
            name: 'Yes',
            price: 0,
          },
          {
            id: 2,
            name: 'No',
            price: 0,
          },
        ],
      },
    ],
    price: {
      price: 11.99,
      discounted_price: 9.99,
    },
  },
  {
    id: 5,
    name: 'Vegan Sushi Platter',
    image: 'https://a3.cdn.japantravel.com/photo/24474-132879/800x400!/chiba-making-rose-sushi-132879.jpg',
    description: 'A selection of avocado, cucumber, and sweet potato sushi rolls served with soy sauce.',
    ingredients: ['Avocado', 'Cucumber', 'Sweet Potato', 'Rice', 'Nori'],
    details: {
      vegan: true,
      gluten_free: true,
      spicy: false,
    },
    options: [
      {
        id: 1,
        name: 'Wasabi',
        required: true,
        maximum_options: 1,
        options: [
          {
            id: 1,
            name: 'Yes',
            price: 0,
          },
          {
            id: 2,
            name: 'No',
            price: 0,
          },
        ],
      },
    ],
    price: {
      price: 18.99,
      discounted_price: 15.99,
    },
  },
  {
    id: 6,
    name: 'Buffalo Cauliflower Wings',
    image: 'https://workweeklunch.com/wp-content/uploads/2018/06/buffalo-cauliflower-wings-baked.png',
    description: 'Crispy cauliflower wings tossed in buffalo sauce, served with vegan ranch.',
    ingredients: ['Cauliflower', 'Buffalo Sauce', 'Flour', 'Vegan Ranch'],
    details: {
      vegan: true,
      gluten_free: false,
      spicy: true,
    },
    options: [
      {
        id: 1,
        name: 'Ranch Dressing',
        required: true,
        maximum_options: 1,
        options: [
          {
            id: 1,
            name: 'Yes',
            price: 0,
          },
          {
            id: 2,
            name: 'No',
            price: 0,
          },
        ],
      },
    ],
    price: {
      price: 13.99,
      discounted_price: 11.99,
    },
  },
  {
    id: 7,
    name: 'Lentil Soup',
    image:
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_800,h_400/k%2FPhoto%2FRecipes%2F2019-12-How-To-Classic-Minestrone-Soup%2FHT-Classic-Minestrone-Soup_036',
    description: 'Hearty lentil soup with carrots, celery, onions, and spices, perfect for a chilly day.',
    ingredients: ['Lentils', 'Carrots', 'Celery', 'Onion', 'Spices'],
    details: {
      vegan: true,
      gluten_free: true,
      spicy: false,
    },
    options: [
      {
        id: 1,
        name: 'Spiciness Level',
        required: false,
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
    ],
    price: {
      price: 8.99,
      discounted_price: 7.99,
    },
  },
  {
    id: 8,
    name: 'Vegetable Stir-Fry',
    image:
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_800,h_400/k%2FPhoto%2FRecipes%2F2019-09-15-minute-shrimp-veggie-stir-fry%2F15-Minute-Shrimp-Veggie-Stir-Fry_088',
    description: 'Stir-fried vegetables with tofu, served over jasmine rice with a savory soy sauce.',
    ingredients: ['Tofu', 'Broccoli', 'Bell Pepper', 'Carrot', 'Jasmine Rice', 'Soy Sauce'],
    details: {
      vegan: true,
      gluten_free: true,
      spicy: false,
    },
    options: [
      {
        id: 1,
        name: 'Rice Options',
        required: true,
        maximum_options: 1,
        options: [
          {
            id: 1,
            name: 'Jasmine Rice',
            price: 0,
          },
          {
            id: 2,
            name: 'Brown Rice',
            price: 0,
          },
        ],
      },
    ],
    price: {
      price: 13.99,
      discounted_price: 12.99,
    },
  },
  {
    id: 9,
    name: 'Vegan Mac & Cheese',
    image:
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_800,h_400/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2015%2F09%2Fe73344b9cdfdedc315f380c25d0c9e89cdad696f.jpeg',
    description: 'Classic macaroni made with a creamy cashew-based cheese sauce.',
    ingredients: ['Macaroni', 'Cashew Cheese', 'Garlic', 'Nutritional Yeast'],
    details: {
      vegan: true,
      gluten_free: false,
      spicy: false,
    },
    options: [
      {
        id: 1,
        name: 'Add Toppings',
        required: false,
        maximum_options: 2,
        options: [
          {
            id: 1,
            name: 'Breadcrumbs',
            price: 0.5,
          },
          {
            id: 2,
            name: 'Chili Flakes',
            price: 0.5,
          },
        ],
      },
    ],
    price: {
      price: 10.99,
      discounted_price: 9.99,
    },
  },
  {
    id: 10,
    name: 'Sweet Potato Buddha Bowl',
    image:
      'https://celebratewomantoday.com/wp-content/uploads/2016/05/Buddah-bowl-Brown-Rice-Lentils-Tahini-Sauce-CWT-5-e1567563076746-800x400.jpg',
    description: 'Roasted sweet potatoes, quinoa, chickpeas, and avocado in a tangy tahini dressing.',
    ingredients: ['Sweet Potatoes', 'Quinoa', 'Chickpeas', 'Avocado', 'Tahini'],
    details: {
      vegan: true,
      gluten_free: true,
      spicy: false,
    },
    options: [
      {
        id: 1,
        name: 'Tahini Dressing',
        required: true,
        maximum_options: 1,
        options: [
          {
            id: 1,
            name: 'On the Side',
            price: 0,
          },
          {
            id: 2,
            name: 'Mixed In',
            price: 0,
          },
        ],
      },
    ],
    price: {
      price: 12.99,
      discounted_price: 11.99,
    },
  },
]
