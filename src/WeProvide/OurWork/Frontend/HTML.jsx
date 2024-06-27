import React from 'react';

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="public\Slice 2.png" />
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
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">HTML</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">HTML, which stands for Hypertext Markup Language, is the standard markup language used to create and structure web pages. It provides the foundation for building web content by defining the structure and layout of elements on a webpage. HTML was first introduced by Tim Berners-Lee in 1991 as a way to share scientific documents at CERN, and it has since evolved through various versions, with HTML5 being the latest major revision.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">HTML, or Hypertext Markup Language, is the backbone of the World Wide Web, serving as the standard markup language for creating web pages. It provides a structured way to define the content and layout of a webpage by using tags and attributes to mark up elements. HTML documents are composed of elements like headings, paragraphs, images, links, forms, and more, each serving a specific purpose in organizing and presenting content.The history of HTML dates back to its inception by Tim Berners-Lee in 1991, as a means to share and format scientific documents on the internet. Since then, HTML has gone through several iterations, with HTML5 being the latest major version. HTML5, introduced in 2014, brought significant improvements and new features to the language, including support for multimedia elements, semantic structuring tags, form enhancements, and better compatibility with modern web standards. HTML works in conjunction with CSS (Cascading Style Sheets) and JavaScript to create interactive and visually appealing web pages. CSS is used to style and design the appearance of HTML elements, while JavaScript adds interactivity and dynamic functionality to web pages.</p>
              <a href="https://www.geeksforgeeks.org/html-tutorial/" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <br/>
              <a href="https://www.youtube.com/watch?v=qz0aGYrrlhU" className="text-indigo-500 inline-flex items-center">Watch Video
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU?si=M-WxR8t7Y-6oFHIn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
