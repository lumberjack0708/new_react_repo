import joker from '../assets/joker.jpg';
// 商品資料庫
const productData = [
  {
    id: 1,
    name: "Formula1 Car",
    image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/f_auto,c_fill,q_auto,w_1320,t_16by9Centre,g_faces,ar_16:9/fom-website/2025/Ferrari/GettyImages-2200587536",
    description: "法拉利SF-25是7屆世界冠軍Lewis加盟後的第一台賽車。",
    price: 20000000,
    rating: 3,
    quantity: 1
  },
  {
    id: 2,
    name: "Tire",
    image: "https://www.autoracing1.com/wp-content/uploads/2024/f1/misc/pirelli-soft-tire.jpg",
    description: "F1專用的軟胎，能在排位賽上有更好的表現",
    price: 5000,
    rating: 4,
    quantity: 2
  },
  {
    id: 3,
    name: "Helmet",
    image: "https://e0.365dm.com/21/11/2048x1152/skysports-lewis-hamilton-helmet_5588618.jpg?20211119191915",
    description: "Lewis 2020年奪冠時所使用的頭盔",
    price: 150000,
    rating: 2,
    quantity: 1
  },
  {
    id: 4,
    name: "Racing Suit",
    image: "https://i.guim.co.uk/img/media/500c9be414cf1795f1ce62d1cc8683c7886396a3/179_409_2955_1773/master/2955.jpg?width=1200&quality=85&auto=format&fit=max&s=c8ed05833f0eeee4a1ae01b1faa407da",
    description: "F1賽車服使用防火面料製成，能在高溫下保護車手安全。",
    price: 8000,
    rating: 5,
    quantity: 0
  },
  {
    id: 5,
    name: "Ferrari policy group",
    image: joker,
    description: "法拉利F1策略組，因其昏厥的策略調度導致目前售出中。",
    price: 199,
    rating: 5,
    quantity: 0
  }
];

export default productData;