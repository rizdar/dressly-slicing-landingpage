import HumbergerMenuIcon from '../ui/HumbergerMenuIcon';
import logoImg from '../assets/logo.png';
import BagIcon from '../ui/BagIcon';
import SearchIcon from '../ui/SearchIcon';
import UserIcon from '../ui/UserIcon';

export default function Navbar() {
  return (
    <nav className="px-6 md:px-28 py-3 md:py-4 md:pt-12 items-center max-w-[1440]">
      <div className="flex justify-between items-center">
        <div className="order-2 md:order-none">
          <img src={logoImg} alt="logo dressly" />
        </div>
        <div className="md:hidden order-1 md:order-none">
          <button>
            <HumbergerMenuIcon />
          </button>
        </div>
        <div className="md:flex gap-8 text-neutral-700 font-semibold items-center hidden">
          <a href="#">Shop</a>
          <a href="#">New Arrivals</a>
          <a href="#">Sale</a>
          <a href="#">Blog</a>
        </div>

        <div className="md:flex md:gap-6 items-center order-3 md:order-none">
          <SearchIcon />
          <BagIcon />
          <UserIcon />
        </div>
      </div>
    </nav>
  );
}
