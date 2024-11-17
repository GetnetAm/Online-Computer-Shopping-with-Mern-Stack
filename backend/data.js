import bcrypt from "bcryptjs"

const data= {
  users: [
    {
      name:"Admin",
      email:"admin1@gmail.com",
      password:bcrypt.hashSync("123", 8),
      isAdmin:true,
    },
    {
      name:"User",
      email:"user1@gmail.com",
      password:bcrypt.hashSync("123", 8),
      isAdmin:false,
    },
  ],
    products: [
      {
        name: 'Hp Desctop 1',
        category: 'Desktop',
        image: '/images/d1.jpeg',
        price: 460,
        brand: 'Hp',
        rating: 4.5,
        countInStock:10,
        numReviews: 10,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Hp laptop 2',
        category: 'laptop',
        image: '/images/c3.jpeg',
        price: 350,
        brand: ' Hp',
        rating: 4.2,
        countInStock:5,
        numReviews: 5,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Desktop 1',
        category: 'Desktop',
        image: '/images/d2.jpeg',
        price: 270,
        brand: ' lenvo',
        rating: 4.5,
        countInStock:2,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      }, {
        name: 'Toshiba Pc 2',
        category: 'laptop',
        image: '/images/c4.jpeg',
        price: 170,
        brand: ' toshiba',
        rating: 4.5,
        countInStock:6,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Hp Desctop5 1',
        category: 'Desktop',
        image: '/images/d3.jpeg',
        price: 460,
        brand: 'Hp',
        rating: 4.5,
        countInStock:10,
        numReviews: 10,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Hp laptop 23',
        category: 'laptop',
        image: '/images/c5.jpeg',
        price: 350,
        brand: ' Hp',
        rating: 4.2,
        countInStock:5,
        numReviews: 5,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Desktop 12',
        category: 'Desktop',
        image: '/images/d5.jpeg',
        price: 270,
        brand: ' lenvo',
        rating: 4.5,
        countInStock:2,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      }, {
        name: 'Toshiba Pc 12',
        category: 'laptop',
        image: '/images/c6.jpeg',
        price: 170,
        brand: ' toshiba',
        rating: 4.5,
        countInStock:6,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Hp Desctop21',
        category: 'Desktop',
        image: '/images/d7.jpeg',
        price: 460,
        brand: 'Hp',
        rating: 4.5,
        countInStock:10,
        numReviews: 10,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Hp laptop 234',
        category: 'laptop',
        image: '/images/c7.jpeg',
        price: 350,
        brand: ' Hp',
        rating: 4.2,
        countInStock:5,
        numReviews: 5,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Desktop 43',
        category: 'Desktop',
        image: '/images/d8.jpeg',
        price: 270,
        brand: ' lenvo',
        rating: 4.5,
        countInStock:2,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      }, {
        name: 'Toshiba Pc22',
        category: 'laptop',
        image: '/images/c9.jpeg',
        price: 170,
        brand: ' toshiba',
        rating: 4.5,
        countInStock:5,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },

      {
        name: 'Apple Pc21',
        category: 'laptop',
        image: '/images/c15.jpeg',
        price: 170,
        brand: ' apple',
        rating: 4.5,
        countInStock:0,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },

      {
        name: 'apple Pc14',
        category: 'laptop',
        image: '/images/c16.jpeg',
        price: 170,
        brand: ' apple',
        rating: 4.5,
        countInStock:0,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'apple Pc12',
        category: 'laptop',
        image: '/images/c17.jpeg',
        price: 170,
        brand: ' apple',
        rating: 4.5,
        countInStock:0,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'apple Pc11',
        category: 'laptop',
        image: '/images/c18.jpeg',
        price: 170,
        brand: ' toshiba',
        rating: 4.5,
        countInStock:0,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Apple Pc4...',
        category: 'apple',
        image: '/images/c26.jpeg',
        price: 170,
        brand: ' apple',
        rating: 4.5,
        countInStock:0,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Hp Pc3',
        category: 'laptop',
        image: '/images/c20.jpeg',
        price: 170,
        brand: ' hp',
        rating: 4.5,
        countInStock:0,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'apple2',
        category: 'laptop',
        image: '/images/c21.jpeg',
        price: 170,
        brand: ' apple',
        rating: 4.5,
        countInStock:0,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },
      {
        name: 'Apple Pc 1',
        category: 'laptop',
        image: '/images/c22.jpeg',
        price: 170,
        brand: ' apple',
        rating: 4.5,
        countInStock:0,
        numReviews: 8,
        description:"core i 9 gen 10 ssd 1 tra"
      },
    ]
  };
  export default data;