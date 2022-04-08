import React from "react";

const Payment = () => {
  return (
    <fieldset>
      <legend class="sr-only">Payment</legend>

      <div class="flex items-center mb-3">
        <input
          id="payment-option-1"
          type="radio"
          name="payment"
          value="Direct Payments"
          class="w-5 h-5 border-gray-300 focus:ring-2 focus:ring-none"
          aria-labelledby="payment-option-1"
          aria-describedby="payment-option-1"
        />
        <label
          for="payment-option-1"
          class="block ml-2 text-sm font-medium text-gray-900"
        >
          Direct Payments
        </label>
      </div>
      <p className=" mt-2 mb-4 text-[#88939e]">
        Make your payment directly into our bank account. Please use your Order
        ID as the payment reference.order won’t be shipped until the funds have
        cleared.
      </p>

      <div class="flex items-center mb-4">
        <input
          id="payment-option-2"
          type="radio"
          name="payment"
          value="Cheque Payment"
          class="w-5 h-5 border-gray-300 focus:ring-2 focus:ring-blue-300"
          aria-labelledby="payment-option-2"
          aria-describedby="payment-option-2"
        />
        <label
          for="payment-option-2"
          class="block ml-2 text-sm font-medium text-gray-900 "
        >
          Cheque Payment
        </label>
      </div>

      <div class="flex items-center mb-4">
        <input
          id="payment-option-3"
          type="radio"
          name="payment"
          value="Credit Card"
          class="w-5 h-5 border-gray-300 focus:ring-2 focus:ring-blue-300 "
          aria-labelledby="payment-option-3"
          aria-describedby="payment-option-3"
        />
        <label
          for="payment-option-3"
          class="block ml-2 text-sm font-medium text-gray-900"
        >
          Credit Card
        </label>
      </div>

      <div class="flex items-center mb-4">
        <input
          id="payment-option-4"
          type="radio"
          name="payment"
          value="Paypal"
          class="w-5 h-5 border-gray-300 focus:ring-2 focus:ring:blue-300 "
          aria-labelledby="payment-option-4"
          aria-describedby="payment-option-4"
        />
        <label
          for="payment-option-4"
          class="block ml-2 text-sm font-medium text-gray-900"
        >
          Paypal
        </label>
      </div>

      <div class="flex items-center">
        <input
          id="payment-option-5"
          type="radio"
          name="payment"
          value="Mobile Money"
          class="w-5 h-5 border-gray-200 focus:ring-2 focus:ring-blue-300 "
          aria-labelledby="payment-option-5"
          aria-describedby="payment-option-5"
        />
        <label
          for="payment-option-5"
          class="block ml-2 text-sm font-medium text-gray-900"
        >
          Mobile Money
        </label>
      </div>
    </fieldset>
  );
};

export default Payment;
