import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import sneakerImg from '../assets/sneaker.png';
import robesImg from '../assets/robes.png';
import bagImg from '../assets/bag.png';
import mensRobesImg from '../assets/mens-robes.png';
import StarIcon from '../ui/StarIcon';

const products = [
  {
    id: 1,
    title: 'Sneaker',
    img: sneakerImg,
    rating: 4.5,
    ratinger: 325,
    price: 965500,
    normal_price: 1097500,
  },
  {
    id: 2,
    title: "Women's Robes",
    img: robesImg,
    rating: 4.5,
    ratinger: 325,
    price: 755000,
    normal_price: null,
  },
  {
    id: 3,
    title: 'Bag',
    img: bagImg,
    rating: 4.5,
    ratinger: 325,
    price: 920500,
    normal_price: 1000500,
  },
  {
    id: 4,
    title: "Men's Robes",
    img: mensRobesImg,
    rating: 4.5,
    ratinger: 325,
    price: 680000,
    normal_price: null,
  },
];

function formatPrice(price) {
  let priceStr = price.toString();
  let parts = priceStr.split('.');

  let mainPart = parts[0];

  let decimalPart = parts.length > 1 ? '.' + parts[1] : '';

  let formattedPrice = mainPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + decimalPart;
  return formattedPrice;
}
export default function BestSeller() {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="px-6 md:px-28 py-12 md:py-20 overflow-x-hidden">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-serif text-neutral-900 font-semibold text-2xl md:text-5xl">Bestsellers</h3>
        <a href="#" className="md:bg-primary-500 md:text-neutral-900 font-bold md:px-6 md:py-2 md:rounded-md text-sm text-primary-500">
          See All
        </a>
      </div>

      <motion.div ref={carousel} drag="x" dragConstraints={{ right: 0, left: -width }} className="flex justify-between md:grid md:grid-cols-4  gap-4 md:gap-6 w-[966px] h-[371px]  md:w-full">
        {products.map((product) => (
          <div className="border rounded-md p-2 md:p-4" key={product.id}>
            <img src={product.img} alt={product.title} className="mb-4 w-full" />
            <h3 className="mb-2 font-sans text-neutral-900 font-semibold text-xl">{product.title}</h3>
            <div className="mb-2 flex gap-2 items-center">
              <StarIcon />
              <div>
                <span className="text-sm text-neutral-500">{product.rating}</span>
                <span className="text-sm text-neutral-300">({product.ratinger})</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm text-neutral-900 font-semibold">Rp. {formatPrice(product.price)}</span>
              {product.normal_price ? <span className="text-xs text-red-500 line-through">Rp. {formatPrice(product.price)}</span> : null}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
