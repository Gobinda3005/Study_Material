// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       <div class="bg-gray-200 p-4 md:mt-10 mt-6">
//         <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure alias, tenetur amet in quod dolore voluptatem laborum! Veniam facere eius sit architecto. Dignissimos ad eum, maxime commodi impedit beatae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veritatis cumque excepturi numquam repellat fuga ipsum, a, aperiam odio quos et aspernatur debitis modi iure. Nemo aperiam laboriosam delectus ad. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, modi reiciendis! Molestiae possimus magnam eveniet inventore quod deleniti nemo, recusandae incidunt tempore eaque assumenda praesentium quam quidem earum modi hic!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores quisquam aliquam velit iusto nisi temporibus est ut alias, dolor minima cupiditate repellat amet sequi ipsam? Aliquid, iure sunt. Quidem.Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure alias, tenetur amet in quod dolore voluptatem laborum! Veniam facere eius sit architecto. Dignissimos ad eum, maxime commodi impedit beatae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veritatis cumque excepturi numquam repellat fuga ipsum, a, aperiam odio quos et aspernatur debitis modi iure. Nemo aperiam laboriosam delectus ad. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, modi reiciendis! Molestiae possimus magnam eveniet inventore quod deleniti nemo, recusandae incidunt tempore eaque assumenda praesentium quam quidem earum modi hic!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores quisquam aliquam velit iusto nisi temporibus est ut alias, dolor minima cupiditate repellat amet sequi ipsam? Aliquid, iure sunt. Quidem.Lorem </p>
//       </div>
//     </div>
//   )
// }

// export default About

import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex justify-center items-center">
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="public\Birthforwrite.png"
            />
          </div>
          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
            Path Towards Success
          </h2>
          <p className="leading-relaxed text-base">
            <i>
              Welcome to Birth For Write, your premier destination for
              comprehensive study materials and video tutorials tailored for
              engineering aspirants and students. Our platform is dedicated to
              providing high-quality educational resources designed to help
              students excel in their studies and achieve their academic goals.
              At Birth For Write, we understand the challenges faced by students
              in their academic journey. Our extensive library of study
              materials covers a wide range of engineering subjects, ensuring
              that students have access to the information they need to succeed.
              Our video tutorials are crafted by experts to offer clear,
              concise, and engaging explanations, making complex concepts easier
              to grasp. We are committed to supporting students in finding
              answers to their questions and overcoming academic challenges.
              Birth For Write is not just a resource hub; it is a community
              where students can explore different learning pathways and
              discover effective study techniques. Join us at Birth For Write
              and take advantage of the opportunities we offer to enhance your
              learning experience. Together, we can unlock your full potential
              and pave the way for your success in the engineering field.
            </i>
          </p>
          <br />
          {/* <Button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" as={Link} to="/Reactjs">
            HOME
          </Button> */}
          <Button
            className="d-flex justify-content-center"
            variant="outline-warning"
            as={Link}
            to="/Home"
          >
            Home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
