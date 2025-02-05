import React, { useState } from "react";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(10);
  const [numPeople, setNumPeople] = useState(1);
  const [totalTip, setTotalTip] = useState(0);
  const [totalAmountPerPerson, settotalAmountPerPerson] = useState(0);

  const calculatorTip = () => {
    const tip = (parseInt(billAmount) * tipPercentage) / 100;
    const totalBill = parseInt(billAmount) + tip;
    const amountPerPerson = totalBill / numPeople;

    setTotalTip(tip);
    settotalAmountPerPerson(amountPerPerson);
  };
  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillAmount(e.target.value);
  };
  const handleTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipPercentage(Number(e.target.value)); // Convert to number
  };
  const handleNumPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumPeople(Number(e.target.value)); // Convert to number
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Bill Amount:
        </label>
        <input
          type="number"
          value={billAmount}
          onChange={handleBillChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md "
          placeholder="Enter bill Amount"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Tip Percentage:
        </label>
        <input
          type="number"
          value={tipPercentage}
          onChange={handleTipChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md "
          placeholder="tip %"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Number of People:
        </label>
        <input
          type="number"
          value={numPeople}
          onChange={handleNumPeopleChange}
          min="1"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md "
          placeholder="Enter number of people"
        />
      </div>
      <button
        onClick={calculatorTip}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-semibold"
      >
        Calculator
      </button>

      {totalTip > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-gray-800">
          <h2 className="text-lg font-semibold"> Result:</h2>
          <p className="mt-2">
            Total Tip:
            <span className="font-semibold">${totalTip.toFixed(2)}</span>
          </p>
          <p>
            Total Amount:{" "}
            <span className="font-semibold">
              ${(parseFloat(billAmount) + totalTip).toFixed(2)}
            </span>
          </p>
          <p>
            Amount per Person:{" "}
            <span className="font-semibold">
              ${totalAmountPerPerson.toFixed(2)}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
