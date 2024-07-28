import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            {/* <img alt="content" className="object-cover object-center h-full w-full" src="https://itechnolabs.ca/wp-content/uploads/2022/10/frontend-img-1.jpeg" /> */}
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="public\Slice 1 (1).png"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="public\Slice 1 (1).png"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Frontend
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Frontend web development is the practice of producing HTML,
                  CSS, and JavaScript for a website or web application so that a
                  user can see and interact with them directly. It involves
                  creating the layout, design, and interactivity of a website,
                  ensuring that the interface is user-friendly, visually
                  appealing, and responsive across various devices and screen
                  sizes. Frontend developers work closely with designers to
                  translate their designs into functional code, bridging the gap
                  between graphical design and technical implementation.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                A key component of frontend web development is responsive
                design, which ensures that websites function well on a variety
                of devices, from desktop computers to mobile phones. This
                involves using flexible grids and layouts, images that scale,
                and CSS media queries. Frontend developers must also consider
                cross-browser compatibility, ensuring that their code works
                seamlessly across different web browsers. This requires thorough
                testing and debugging to maintain a consistent user
                experience.Modern frontend development leverages frameworks and
                libraries such as React, Angular, and Vue.js, which streamline
                the development process and enhance performance. These tools
                provide reusable components and structures, allowing developers
                to build complex applications more efficiently. Additionally,
                the use of preprocessors like Sass and LESS for CSS and
                TypeScript for JavaScript adds functionality and helps manage
                large-scale projects by offering enhanced features and better
                organization of code.Performance optimization is another
                critical aspect of frontend development. Developers use various
                techniques to enhance the speed and efficiency of web pages,
                such as minifying CSS and JavaScript files, optimizing images,
                and leveraging browser caching. Fast load times and smooth
                interactions are essential for retaining users and improving
                search engine rankings. Thus, a frontend developer's role is
                pivotal in creating a seamless and engaging user experience,
                combining technical skills with a keen eye for design and
                usability.
              </p>
              {/* <a href="#" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
              <NavDropdown
                title="Frontend"
                id="basic-nav-dropdown"
                className="mr-5 hover:text-red-500 text-center align item:center text-indigo-500 inline-flex items-center"
              >
                <NavDropdown.Item
                  className="mr-5 hover:text-red-500 text-center"
                  as={Link}
                  to="/Reactjs"
                >
                  ReactJS
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="mr-5 hover:text-red-500 text-center"
                  as={Link}
                  to="/Angular"
                >
                  Angular
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="mr-5 hover:text-red-500 text-center"
                  as={Link}
                  to="/HTML"
                >
                  HTML
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="mr-5 hover:text-red-500 text-center"
                  as={Link}
                  to="/CSS"
                >
                  CSS
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="mr-5 hover:text-red-500 text-center"
                  as={Link}
                  to="/JS"
                >
                  JS
                </NavDropdown.Item>
                {/* <NavDropdown.Item className="mr-5 hover:text-red-500 text-center" as={Link} to="/ASP">ASP</NavDropdown.Item> */}
                {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg> */}
              </NavDropdown>
              <br />
              {/* <a href="#" className="text-indigo-500 inline-flex items-center">Watch Video
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
