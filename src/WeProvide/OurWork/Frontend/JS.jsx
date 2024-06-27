import React from 'react';

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="https://i0.wp.com/itbulls.in/wp-content/uploads/2021/02/JS-interview.png?fit=1920%2C1080&ssl=1" />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">JavaScript</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">The language continues to evolve, with new features and enhancements introduced in ECMAScript standards. ECMAScript is the standardized specification for JavaScript, and major versions such as ES6 (ECMAScript 2015) and subsequent updates have brought modern syntax, new data structures, arrow functions, modules, and other improvements to the language.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">JavaScript is a dynamic, high-level programming language primarily used for client-side web development. It was created by Brendan Eich while working at Netscape Communications Corporation and was first introduced in 1995. JavaScript quickly gained popularity due to its ability to add interactivity and dynamic behavior to web pages.One of the key strengths of JavaScript is its versatility, as it can be used not only in web browsers but also in server-side environments (Node.js) and for developing mobile and desktop applications. JavaScript is known for its ease of learning and adoption, making it accessible to developers of all skill levels.JavaScript enables developers to manipulate and interact with HTML elements, CSS styles, and the Document Object Model (DOM) of a web page, allowing for the creation of interactive features such as forms, animations, dynamic content updates, and event handling.</p>
              <a href="https://www.geeksforgeeks.org/javascript/" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <br/>
              <a href="https://youtu.be/EerdGm-ehJQ?si=5jQbxv6E-fHvz4ag" className="text-indigo-500 inline-flex items-center">Watch Video
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/W6NZfCO5SIk?si=z3FV720ISac7MJXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
