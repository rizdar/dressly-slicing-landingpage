import imgHero from '../assets/img-hero.png';

export default function Hero() {
  return (
    <div className="px-6 md:px-28 pt-6 md:pt-12 flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-1/2 md:pr-12 ">
        <h1 className="font-serif font-semibold text-3xl md:text-6xl mb-2 md:mb-6 text-neutral-900">Discover the Latest Fashion Trends</h1>
        <p className="text-sm md:text-base font-normal mb-6  md:mb-10 text-neutral-500">
          From stylish dresses to trendy tops and must-have accessories, we have everything you need to stay on top of the latest fashion trends. Our expertly curated collection features the hottest styles from top designers, so you can
          always find the perfect look for any occasion. Shop now and discover your new favorite fashion pieces.
        </p>
        <a href="#" className="bg-primary-500 px-6 py-2 text-neutral-900 font-bold md:px-8 md:py-2 rounded-md w-full block text-center md:inline mb-8">
          Shop Now
        </a>
      </div>
      <div className="md:w-1/2 flex-1 mb-8">
        <img src={imgHero} alt="hero image" className="w-full" />
      </div>
    </div>
  );
}
