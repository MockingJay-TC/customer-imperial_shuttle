import React from "react";
import Banner from "../../components/Banner/Banner";
import BookingInput from "../../components/BookingInput/BookingInput";
import carProp from "../../components/CarProp/CarProp";
import Payment from "../../components/Payment/Payment";

const CarBooking = () => {
  return (
    <div>
      <Banner title="Car Booking" />
      {/* Car Features */}
      <div className="py-8 bg-[#fbfbfb]">
        <div className="md:my-7  max-w-6xl md:mx-auto">
          <div className="flex gap-4 flex-col md:flex-row">
            {/* Image */}
            <div className="w-full">
              <img src="assets/images/listing.jpg" alt="Listing" />
            </div>
            {/* rental */}
            <div className="w-full px-3 md:px-0">
              <button className="bg-[#ec3323] py-1 px-5 text-center text-white rounded-sm font-semibold">
                Rental
              </button>
              <div className="font-bold text-3xl my-3">Mercedes S-Class</div>
              {/* rate and ratings */}
              <div className="flex gap-2">
                {/* Rate */}
                <div className="font-semibold">
                  $50.00 <span className="text-[#ec3323]">/ Day</span>
                </div>
                {/* Rating */}
                <div class="flex items-center">
                  <svg
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    class="w-5 h-5 text-gray-300 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    4.95 out of 5
                  </p>
                </div>
              </div>
              <p className="text-[#88939e] my-3">
                consectetur adipiscing elit. Donec luctus tincidunt aliquam.
                Aliquam gravida massa at sem vulputate interdum et vel eros.
                Maecenas eros enim, tincidunt vel turpis vel,dapibus tempus
                nulla. Donec vel nulla dui.
              </p>
              <div className="text-left my-4 text-[#88939e]">
                <div className="grid md:grid-cols-3 grid-cols-2 gap-1">
                  {carProp.map((prop) => {
                    return (
                      <label for="checkbox-2" className="text-sm font-medium">
                        {prop}
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form, Personal Details*/}

      <div className="bg-white">
        {/* form */}
        <div className="max-w-6xl flex justify-between md:my-7 md:mx-auto">
          {/* left-Side */}
          <div className="w-8/12">
            <h2 className="text-2xl font-bold tracking-wide">
              Personal Information
            </h2>
            <hr className="border-[#f3f3f3] my-3" />
            <div className="md:grid grid-cols-2 gap-4 mt-3 mb-6">
              <BookingInput type="text" placeholder="Your First Name" />
              <BookingInput type="text" placeholder="Your Last Name" />
              <BookingInput type="email" placeholder="Your Email Address" />
              <BookingInput type="text" placeholder="Your Phone Number" />
            </div>
            <h2 className=" text-2xl font-bold tracking-wide">
              Booking Details
            </h2>
            <hr className="border-[#f3f3f3] my-3" />
            <div className="md:grid grid-cols-2 gap-4 my-3">
              <input
                type="text"
                placeholder="Your First Name"
                className="outline-none border-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323] "
              />
              <input
                type="text"
                placeholder="Your Last Name"
                className="outline-none border-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323] "
              />
              <input
                type="text"
                placeholder="Your Email Address"
                className="outline-none border-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323] "
              />
              <input
                type="text"
                placeholder="Your Phone Number"
                className="outline-none border-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323] "
              />
            </div>
            <textarea
              id="message"
              rows="4"
              class="w-full outline-none border-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323] my-2"
              placeholder="Write here..."
            ></textarea>
          </div>
          <div className="w-3/12">
            <h2 className="text-2xl font-bold tracking-wide">Payment Method</h2>
            <hr className="border-[#f3f3f3] my-3" />
            <Payment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBooking;
