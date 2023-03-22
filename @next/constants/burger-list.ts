interface BurgerType {
  name: string
  image: string
  description: string
  price: number
  rating: number
}
export const BURGERS_LIST: BurgerType[] = [
  {
    name: 'Hamburger',
    image: '/images/hamburger.jpg',
    price: 5.0,
    rating: 5,
    description:
      'Introducing our new line of all-natural skincare products! Made with only the finest ingredients, our skincare line is free from harmful chemicals and synthetic fragrances!'
  },
  {
    name: 'Cheese Burger',
    image: '/images/cheeseburger.jpg',
    price: 6.0,
    rating: 4.0,
    description:
      'Our Cheese Burger is a delicious twist on the classic hamburger, featuring a juicy beef patty topped with melted cheese and served on a soft bun. !'
  },
  {
    name: 'Chilli Cheeseburger',
    image: '/images/chilliburger.jpg',
    price: 8.0,
    rating: 3.0,
    description:
      'Our Chilli Cheeseburger is a flavor-packed twist on the classic burger, featuring a juicy beef patty topped with melted cheese and a generous helping of savory chilli.'
  }
]
