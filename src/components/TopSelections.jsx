import elegantImage from '../assets/elegant.png';
import accesoryImage from '../assets/accesory.png';
import shoesImage from '../assets/shoes.png';

const items = [
  { title: 'Elegant Eid Attire', img: elegantImage },
  { title: 'Accessory Essentials', img: accesoryImage },
  { title: 'Everyday Shoes', img: shoesImage },
];

export default function TopSelections() {
  return (
    <section className="px-6 md:px-28 py-8 md:py-20">
      <h3 className="text-neutral-900 font-semibold text-2xl md:text-5xl font-serif mb-4 md:mb-8">Top Selections</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.title} className="bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${item.img})`, height: '391px' }}></div>
        ))}
      </div>
    </section>
  );
}
