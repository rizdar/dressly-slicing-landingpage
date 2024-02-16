import balanciagaLogo from '../assets/Balenciaga-Logo.wine.png';
import berlutiLogo from '../assets/Berluti-Logo.wine.png';
import burberryLogo from '../assets/Burberry-Logo.wine.png';
import gucciLogo from '../assets/Gucci-Logo.wine.png';
import louisLogo from '../assets/Louis_Vuitton-Logo.wine.png';
import jimmyLogo from '../assets/Jimmy_Choo_Ltd-Logo.wine.png';

export default function Brand() {
  return (
    <div className="px-6 md:px-28 pt-6 md:pt-16">
      <div className="flex flex-wrap justify-center gap-6 md:justify-between">
        <img src={berlutiLogo} alt="berluti logo" className="w-32 md:w-40" />
        <img src={gucciLogo} alt="gucci logo" className="w-32 md:w-40" />
        <img src={jimmyLogo} alt="jimmy logo" className="w-32 md:w-40" />
        <img src={burberryLogo} alt="burberry logo" className="w-32 md:w-40" />
        <img src={balanciagaLogo} alt="balenciaga logo" className="w-32 md:w-40" />
        <img src={louisLogo} alt="louis logo" className="w-32 md:w-40" />
      </div>
    </div>
  );
}
