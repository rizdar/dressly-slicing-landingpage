import SubscribeIcon from '../ui/SubscribeIcon';

export default function Subscribe() {
  return (
    <section className="px-1 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32  sm:py-12 md:py-16 lg:py-20 xl:py-24 text-center">
      <h2 className="text-neutral-900 font-serif font-semibold  sm:text-4xl md:text-5xl mb-3 sm:mb-8 text-2xl">Subscribe Our Newsletter</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ">
        <div className="flex items-center justify-center gap-4 w-full">
          <input type="text" name="subscribe" id="subscribe" className="rounded-md border-neutral-400 w-[70%]  md:max-w-lg px-4 py-2 sm:py-3" placeholder="Type your mail" />
          <button type="submit" className="flex-shrink-0">
            <SubscribeIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
