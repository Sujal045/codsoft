import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonials">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard name={"Urvesh"} feedback={"Good Work"} />
        <TestimonialCard
          name={"Abhishek"}
          feedback={"Understanding of project is very nice"}
        />
        <TestimonialCard
          name={"Margi"}
          feedback={"Your Designs are very good"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
