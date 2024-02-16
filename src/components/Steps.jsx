const steps = [
  {
    no: 1,
    title: 'Select Product',
  },
  {
    no: 2,
    title: 'Login/Register',
  },
  {
    no: 3,
    title: 'Shopping Bag',
  },
  {
    no: 4,
    title: 'Payment',
  },
];

export default function Steps() {
  return (
    <section className="mx-2 md:mx-28  bg-primary-300 py-6 md:py-20 ">
      <h1 className="font-serif font-bold text-2xl md:text-5xl text-center  mb-8">The Easy Way to Order</h1>
      <div className="relative">
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-x-4 mx-auto w-[70%] items-start ">
          {steps.map((step) => (
            <li key={step.no} className="flex z-30 ">
              <div className="flex-col mx-auto">
                <div className="h-11 w-11 flex items-center justify-center bg-primary-200 rounded-full mb-2 z-20 mx-auto ">{step.no}</div>
                <div className="text-center mb-4 md:mb-0">{step.title}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t-2 border-dashed border-gray-900  md:h-px w-[50%] my-1  absolute top-5 right-1/4 z-10 hidden md:block"></div>
      </div>
    </section>
  );
}
