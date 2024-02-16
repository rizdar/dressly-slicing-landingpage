import logoImg from '../assets/logo.png';
import appstoreImg from '../assets/app-store.png';
import playstoreImg from '../assets/playstore.png';

export default function Footer() {
  return (
    <footer className="md:px-28 md:py-20 flex flex-col md:flex-row gap-4 justify-evenly px-6 pb-12">
      <div className="max-w-xs">
        <img src={logoImg} alt="logo dressly" className="mb-4" />
        <span className="text-xs md:text-sm text-neutral-500">
          We are an online fashion store that provides a variety of the latest and trendy fashion products for men and women. We always try to provide our customers with a pleasant and easy shopping experience.
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
        <div className="flex flex-col gap-2 md:gap-4">
          <h4 className="text-neutral-900 font-semibold text-base md:text-xl">Product Category</h4>
          <span className="text-neutral-500 text-sm">Women&apos;s clothing</span>
          <span>Menswear</span>
          <span>Accessories</span>
          <span>Shoes</span>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <h4 className="text-neutral-900 font-semibold text-base md:text-xl">Company</h4>
          <span className="text-neutral-500 text-sm">About</span>
          <span>Privacy Policy</span>
          <span>Accessories</span>
          <span>Terms of Service</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-neutral-900 font-semibold text-base md:text-xl">Download Our App</h4>
        <div className="flex gap-2">
          <img src={appstoreImg} alt="app store image" className="w-40" />
          <img src={playstoreImg} alt="playstore store image" className="w-40" />
        </div>
      </div>
    </footer>
  );
}
