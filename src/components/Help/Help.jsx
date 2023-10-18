import React from "react";

const Help = () => {
  return (
    <section className="py-10 px-5 w-full flex flex-col items-center">
      <h2 className="text-5xl text-center text-orange-500 uppercase mb-10">
        Welcome to the "Help" Section
      </h2>
      <p className="text-2xl w-2/3 text-justify mb-6">
        Welcome to our "Help" section. Here you will find answers to frequently
        asked questions, helpful tips, and contact information to reach our
        support team.
      </p>

      <h3 className="text-3xl text-center text-orange-500 uppercase mb-2">
        Frequently Asked Questions
      </h3>
      <p className="text-2xl w-2/3 text-justify mb-6">
        Before reaching out to us, make sure you're not the first to encounter a
        similar situation. In our Frequently Asked Questions section, you'll
        find answers to the most common questions from our customers. This can
        save you time and provide you with the necessary information.
      </p>
      <h3 className="text-3xl text-center text-orange-500 uppercase mb-2">
        How to Place an Order
      </h3>
      <p className="text-2xl w-2/3 text-justify mb-6">
        If you're visiting our store for the first time and you're unsure how to
        place an order, we have a step-by-step guide to help you familiarize
        yourself with the ordering process.
      </p>
      <h3 className="text-3xl text-center text-orange-500 uppercase mb-2">
        Order Status
      </h3>
      <p className="text-2xl w-2/3 text-justify mb-6">
        If you've already placed an order and want to track its status, you can
        use our order tracking service. Simply enter your order number and email
        address, and you'll receive information about the current status of your
        order.
      </p>
      <h3 className="text-3xl text-center text-orange-500 uppercase mb-2">
        Contact Us
      </h3>
      <p className="text-2xl w-2/3 text-justify mb-6">
        If you haven't found answers to your questions in our "Frequently Asked
        Questions" section or need further assistance, please feel free to
        contact our customer support team. We're always ready to help.
      </p>
      <h3 className="text-3xl text-center text-orange-500 uppercase mb-2">
        Customer Support
      </h3>
      <p className="text-2xl w-2/3 text-justify mb-6">
        We strive to provide you with the best service. Our customer support
        team is ready to answer all your questions and resolve any issues. You
        can reach out to us via the contact form or by phone.
      </p>
    </section>
  );
};

export default Help;
