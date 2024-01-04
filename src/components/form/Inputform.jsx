import { useState } from "react";
import { StarIcon } from "../../assets";
const Inputform = () => {
  const initialDetails = {
    name: "",
    email: "",
    number: "",
    message: "",
  };
  const [details, setDetails] = useState(initialDetails);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xkndnqar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        setDetails(initialDetails);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="m-7">
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/"
        method="POST"
      >
        <div className="flex">
          <h3 className="text-body-text-1 font-normal leading-8">Name</h3>
          <span className="ms-2 mt-2">
            <StarIcon />
          </span>
        </div>
        <input
          type="text"
          name="name"
          value={details.name}
          className="h-12 w-80 rounded-lg border ps-2"
          onChange={handleChange}
        />

        <div className="flex">
          <h3 className="text-body-text-1 font-normal leading-8">
            Email Address
          </h3>
          <span className="ms-2 mt-2">
            <StarIcon />
          </span>
        </div>
        <input
          type="text"
          name="email"
          value={details.email}
          className="h-12 w-80 rounded-lg border ps-2"
          onChange={handleChange}
        />

        <div className="flex">
          <h3 className="text-body-text-1 font-normal leading-8">
            Phone Number
          </h3>
          <span className="ms-2 mt-2">
            <StarIcon />
          </span>
        </div>
        <input
          type="text"
          name="number"
          value={details.number}
          className="h-12 w-80 rounded-lg border ps-2"
          onChange={handleChange}
        />

        <h3 className="text-body-text-1 font-normal leading-8">Message</h3>
        <textarea
          type="text"
          name="message"
          value={details.message}
          className="h-32 w-80 rounded-lg border ps-2"
          onChange={handleChange}
        />

        <div>
          <button
            type="submit"
            className="my-3 w-80 rounded-lg bg-secondary-700 p-2 text-neutral-100"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Inputform;
