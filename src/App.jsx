import { useState } from "react";
import logo from "./img/card-logo.svg";
import complete from "./img/icon-complete.svg";

const App = () => {
  const [cvv, setCVV] = useState("000");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if ((cvv && name && cardNumber && month, year)) {
      setSuccess(true);
    } else {
      setErr(true);
      setSuccess(false);
    }
  }

  const validateCVV = (e) => {
    setCVV(e.target.value);
  };

  return (
    <section className="flex flex-col sm:flex-row min-h-screen">
      <div className="bg-img sm:w-1/4  sm:h-auto flex flex-col-reverse sm:flex-col space-y-8 justify-center items-center text-white">
        <div
          id="card"
          className="bg-front-card z-10 sm:w-full w-[75%] sm:h-52 h-auto rounded-md sm:-mr-48 p-4 -mb-8 sm:-mb-0 -ml-16 sm:-ml-0 -mt-[69px]"
        >
          <img src={logo} className="h-8" alt="Logo" />

          <div className="mt-14">
            <h1 className="sm:text-3xl text-xl w-full">
              {cardNumber || "0000 0000 0000 0000"}
            </h1>

            <div className="flex justify-between sm:mt-6 mr-6 sm:mr-4">
              <p>{name || "Jane Appleseed"}</p>
              <p>{`${month || "00"}/${year || "00"}`}</p>
            </div>
          </div>
        </div>
        <div className="bg-back-card z-9 sm:w-full h-52 rounded-md sm:-mr-72 -mr-10">
          <p className=" mt-[110px] sm:ml-72 ml-72 pr-8">{cvv || "000"}</p>
        </div>
      </div>
      <div
        id="form"
        className="sm:w-3/4 flex justify-center items-center bg-white p-8 sm:p-0"
      >
        {success ? (
          <div className="complete flex flex-col justify-center items-center w-full">
            <img className="w-16 mb-8" src={complete} alt="" />
            <div>
              <h1 className="text-center text-xl my-4">Thank you!</h1>
              <p className="text-darkGrayishViolet">
                {"We've added your card details"}
              </p>
              <button className="mt-8 bg-veryDarkViolet text-white py-2 px-8 rounded-md w-full">
                Continue
              </button>
            </div>
          </div>
        ) : (
          <form
            className="sm:w-2/5 w-full mt-10 sm:mt-0"
            onSubmit={handleSubmit}
          >
            {/* Card name */}
            <div>
              <label htmlFor="name" className="">
                cardholder name
              </label>
              <input
                placeholder={`e.g Jane Appleseed`}
                type="text"
                name="name"
                id="name"
                className="w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {err && <p className="text-xs text-red">{"Can't be blank"}</p>}
            </div>
            {/* Card number */}
            <div className="mt-3 flex flex-col">
              <label htmlFor="number" className="">
                card number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="e.g 1234 5678 9123 0000"
              />
              {err && <p className="text-xs text-red">{"Can't be blank"}</p>}
              {err && (
                <p className="text-xs text-red">
                  {"Wrong format, numbers only!"}
                </p>
              )}
            </div>

            {/* Expiry date */}
            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <label htmlFor="month">exp. date (mm/yy)</label>
                <div className="flex gap-3 w-full">
                  <input
                    placeholder="MM"
                    type="text"
                    className="w-1/2"
                    id="month"
                    name="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                  <input
                    placeholder="YY"
                    type="text"
                    className="w-1/2"
                    id="year"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                {err && <p className="text-xs text-red">{"Can't be blank"}</p>}
              </div>
              <div className="w-1/2">
                <label htmlFor="cvv">CVV</label>
                <input
                  placeholder="e.g 123"
                  className="w-full"
                  type="number"
                  onChange={validateCVV}
                  name="cvv"
                  id="cvv"
                />
                {err && <p className="text-xs text-red">{"Can't be blank"}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full hover:cursor-pointer bg-veryDarkViolet p-3 rounded-md text-white mt-2"
            >
              Confirm
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
export default App;
