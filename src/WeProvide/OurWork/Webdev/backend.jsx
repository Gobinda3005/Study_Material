import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
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
                  Backend
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Backend web development involves the server-side logic,
                  database interactions, and application functionality that
                  power the frontend of a website or web application. Unlike
                  frontend development, which focuses on what users see and
                  interact with directly, backend development ensures that the
                  underlying processes, data management, and server
                  communications operate smoothly and efficiently. This aspect
                  of web development is crucial for managing the functionality
                  and data integrity of web applications.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                At the core of backend development are server-side languages
                such as Python, Ruby, Java, PHP, and Node.js. These languages
                are used to build the server logic that handles requests from
                the frontend, processes information, and returns the appropriate
                responses. Backend developers write APIs (Application
                Programming Interfaces) that define how different software
                components should interact, enabling the frontend and backend to
                communicate seamlessly. This communication often involves
                handling user authentication, data retrieval, and form
                submissions, ensuring secure and reliable transactions.Databases
                play a vital role in backend development, serving as the storage
                systems for application data. Backend developers work with
                relational databases like MySQL, PostgreSQL, and SQLite, as well
                as NoSQL databases like MongoDB and Redis. They design and
                maintain the database schema, write queries to manage data, and
                implement methods to ensure data consistency and security.
                Effective database management is essential for applications that
                handle large volumes of data and require robust
                performance.Security is a paramount concern in backend
                development. Developers must implement measures to protect
                sensitive data from unauthorized access and attacks. This
                includes encrypting data, validating inputs to prevent SQL
                injection and other forms of attacks, and managing user
                authentication and authorization. Additionally, maintaining
                secure server configurations and applying updates and patches
                promptly are critical practices to safeguard the application's
                integrity.
              </p>
              {/* <NavDropdown.Item>
                <Link className="text-indigo-500 inline-flex items-center" to="/backend">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </NavDropdown.Item> */}
              <NavDropdown
                title="Backend"
                id="basic-nav-dropdown"
                className="mr-5 hover:text-red-500 text-center align item:center text-indigo-500 inline-flex items-center"
              >
                <NavDropdown.Item
                  className="mr-5 hover:text-red-500 text-center"
                  as={Link}
                  to="/Java"
                >
                  Java
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="mr-5 hover:text-red-500 text-center"
                  as={Link}
                  to="/DotNet"
                >
                  DotNet
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="mr-5 hover:text-red-500 text-center"
                  as={Link}
                  to="/Springboot"
                >
                  Sptingboot
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
