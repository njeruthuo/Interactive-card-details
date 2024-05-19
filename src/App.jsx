// import { CardPage } from "./components";

import cardImg from "./img/bg-card-front.png";
import cardImgB from "./img/bg-card-back.png";

const App = () => {
  

  return (
    <section className="flex min-h-screen">
      <div className="bg-img w-1/4 flex flex-col space-y-8 justify-center items-center">
       
        <img className="-mr-56 z-20" src={cardImg} alt="" />
        <img className="-mr-80 z-20" src={cardImgB} alt="" />
      </div>
      <div
        id="form"
        className="w-3/4 flex justify-center items-center bg-white"
      >
        <form className="w-2/5">
          {/* Card name */}
          <div>
            <label htmlFor="name" className="">
              cardholder name
            </label>
            <input
              placeholder="e.g Jane Appleseed"
              type="text"
              name="name"
              id="name"
            />
          </div>
          {/* Card number */}
          <div className="mt-3">
            <label htmlFor="number" className="">
              card number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="e.g 1234 5678 9123 0000"
            />
          </div>

          {/* Expiry date */}
          <div className="w-full flex gap-4">
            <div className="w-1/2">
              <label htmlFor="date">exp. date (mm/yy)</label>
              <div className="flex gap-3 w-full">
                <input
                  placeholder="MM"
                  type="text"
                  id="month"
                  name="month"
                />
                <input
                  placeholder="YY"
                  type="text"
                  id="year"
                  name="year"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="cvv">CVV</label>
              <input
                placeholder="e.g 123"
                type="number"
                name="cvv"
                id="cvv"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full hover:cursor-pointer bg-veryDarkViolet p-3 rounded-md text-white mt-2"
          >
            Confirm
          </button>
        </form>
      </div>
    </section>
  );
};
export default App;
