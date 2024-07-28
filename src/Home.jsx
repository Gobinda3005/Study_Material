// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/esm/Button';
// import { Link } from 'react-router-dom';

// function DarkVariantExample() {
//   return (
//     <Carousel data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//           className="h-56 sm:h-64 xl:h-80 2xl:h-96"
//           src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           <Button type="button" className="btn btn-outline-warning" as={Link} to="/Reactjs">ReactJS</Button>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="h-56 sm:h-64 xl:h-80 2xl:h-96"
//           src="https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           <Button type="button" className="btn btn-outline-warning" as={Link} to="/Angular">Angular</Button>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="h-56 sm:h-64 xl:h-80 2xl:h-96"
//           src="https://i0.wp.com/itbulls.in/wp-content/uploads/2021/02/JS-interview.png?fit=1920%2C1080&ssl=1"
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//           <Button type="button" className="btn btn-outline-warning" as={Link} to="/JS">JS</Button>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default DarkVariantExample;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function DarkVariantExample() {
  const customFontStyle = {
    fontFamily: "Mistral, cursive",
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-3 py-24 mx-auto">
        <div className="xl:w-2/2 lg:w-3/4 w-full mx-auto text-center">
          <Carousel
            data-bs-theme="dark"
            style={{ width: "100%", margin: "auto" }}
          >
            <Carousel.Item>
              <img
                className="carousel-image"
                src="public\react.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <Button variant="outline-warning" as={Link} to="/Reactjs">
                  ReactJS
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="public\Angular.png"
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                <Button variant="outline-warning" as={Link} to="/Angular">
                  Angular
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="public\javascript.png"
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                <Button variant="outline-warning" as={Link} to="/JS">
                  JS
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="public\Html.png"
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                <Button variant="outline-warning" as={Link} to="/HTML">
                  HTML
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="public\css.png"
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                <Button variant="outline-warning" as={Link} to="/CSS">
                  CSS
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <br />
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Sample Projects
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="public\update web.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                News Web
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a
                className="text-indigo-500 inline-flex items-center mt-3"
                href="#"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="public\gaming web.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Gaming Web
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a
                className="text-indigo-500 inline-flex items-center mt-3"
                href="#"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="public\music web.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Music Web
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a
                className="text-indigo-500 inline-flex items-center mt-3"
                href="#"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-400 mb-8 mt-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <div className="container">
            <p className="leading-relaxed text-xl" style={customFontStyle}>
              <i>
                Welcome to Birth For Write, your premier destination for
                comprehensive study materials and video tutorials tailored for
                engineering aspirants and students. Our platform is dedicated to
                providing high-quality educational resources designed to help
                students excel in their studies and achieve their academic
                goals.At Birth For Write, we understand the challenges faced by
                students in their academic journey. Our extensive library of
                study materials covers a wide range of engineering subjects,
                ensuring that students have access to the information they need
                to succeed. Our video tutorials are crafted by experts to offer
                clear, concise, and engaging explanations, making complex
                concepts easier to grasp.We are committed to supporting students
                in finding answers to their questions and overcoming academic
                challenges. Birth For Write is not just a resource hub; it is a
                community where students can explore different learning pathways
                and discover effective study techniques.
                <br />
                <br />
                <b>Our Mission</b>
                <br />
                Our mission at Birth For Write is to empower students with the
                tools and knowledge they need to achieve their full potential.
                We believe that every student has the capability to succeed with
                the right guidance and resources. By providing high-quality,
                accessible educational materials, we aim to foster a love for
                learning and a deep understanding of engineering principles.
                <br />
                <br />
                <b>Our Vision</b>
                <br />
                We envision a world where every student has the opportunity to
                excel academically, regardless of their background or
                circumstances. Birth For Write strives to be a leader in
                educational innovation, continually improving and expanding our
                resources to meet the evolving needs of students. We are
                dedicated to creating an inclusive, supportive environment where
                students can thrive.
              </i>
            </p>
          </div>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Gobinda Panda
          </h2>
          <p className="text-gray-500">Founder</p>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Our Team
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              saepe voluptatum mollitia optio neque, expedita, reprehenderit
              temporibus incidunt nobis, vel exercitationem aperiam voluptates
              perferendis laboriosam ex minus doloribus qui libero.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="public\Gobinda passport (1).jpg"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore saepe voluptatum mollitia optio neque, expedita,
                  reprehenderit temporibus incidunt nobis, vel exercitationem
                  aperiam voluptates perferendis laboriosam ex minus doloribus
                  qui libero.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Gobinda Panda
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="public\Gobinda passport (1).jpg"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore saepe voluptatum mollitia optio neque, expedita,
                  reprehenderit temporibus incidunt nobis, vel exercitationem
                  aperiam voluptates perferendis laboriosam ex minus doloribus
                  qui libero.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Gobinda Panda
                </h2>
                <p className="text-gray-500">UI Developer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="public\Gobinda passport (1).jpg"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore saepe voluptatum mollitia optio neque, expedita,
                  reprehenderit temporibus incidunt nobis, vel exercitationem
                  aperiam voluptates perferendis laboriosam ex minus doloribus
                  qui libero.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Gobinda Panda
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />

          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              How to Use
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Login As a Student Email And Enroll Your Path As You Can.
            </p>
          </div>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 1
                    </h2>
                    <p className="leading-relaxed">
                      At First You Should Login or Register For Enroll
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 2
                    </h2>
                    <p className="leading-relaxed">Verify It's You Or Not</p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 3
                    </h2>
                    <p className="leading-relaxed">Search Your Material</p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      STEP 4
                    </h2>
                    <p className="leading-relaxed">Run Your Path On Your Own</p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      FINISH
                    </h2>
                    <p className="leading-relaxed">Build Your Career</p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src="public\View 2.png"
                alt="step"
              />
            </div>
          </div>
          <div className="h-1 bg-gray-200 rounded overflow-hidden shadow-2xl shadow-slate-400">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DarkVariantExample;
