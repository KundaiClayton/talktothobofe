import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const form = useRef();
  const YOUR_SERVICE_ID = "service_yxtcyrm";
  const YOUR_TEMPLATE_ID = "template_iyk82m9";
  const YOUR_PUBLIC_KEY = "lq9poSpUg6uzt2197";
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);
    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for getting in touch");
        },
        (error) => {
          alert("an error occured");
        }
      );
  };

  const options = [
    "Business & Executive Coaching",
    "Organisational Development",
    "Personal Development",
  ];

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col sm:flex-col  "
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="to_name"
        >
          Name
        </label>
        <input
          type="text"
          name="to_name"
          id="to_name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="user_email"
        >
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
        ></textarea>
      </div>
      <div className="mb-4">
        <span className="text-gray-700">Options</span>
        <div className="mt-2">
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="option"
                value={option}
                id={`option-${index}`}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label className="ml-2" htmlFor={`option-${index}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};
