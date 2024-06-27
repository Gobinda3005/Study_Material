import React from 'react';

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/07/Black-Blue-background-with-CSS-logos.jpg" />
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
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">CSS</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Late 1990s when it was introduced as a way to style HTML documents. It quickly gained popularity as a means to separate content from presentation, allowing web developers to define the visual appearance of web pages independently of their structure. Over the years, CSS has evolved through various versions, with CSS3 being the latest major version that introduced a wide range of new features and capabilities, including advanced layout options, animations, transitions, and more.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">CSS, or Cascading Style Sheets, is an essential language used in web development to style and design the appearance of HTML elements. It serves as a powerful tool for controlling layout, colors, typography, backgrounds, and various visual aspects of web pages, allowing developers to create aesthetically pleasing and user-friendly interfaces.One of the primary benefits of CSS is its ability to separate content from presentation, promoting cleaner and more maintainable code. By defining styles separately from HTML structure, developers can easily update and modify the design without affecting the underlying content.CSS provides a wide range of styling capabilities, such as defining layouts using Flexbox and Grid, customizing typography with fonts and text properties, creating rich backgrounds with colors, gradients, and images, and implementing responsive designs that adapt to different screen sizes and devices. Additionally, CSS supports animations, transitions, and interactive effects, enhancing user experience and engagement. With CSS preprocessors like Sass and Less, developers can write more organized and modular stylesheets, improving code reusability and scalability.</p>
              <a href="https://www.geeksforgeeks.org/css-tutorial/" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <br/>
              <a href="https://youtu.be/G3e-cpL7ofc?si=WPo-7e9rweWcIuTH" className="text-indigo-500 inline-flex items-center">Watch Video
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/OXGznpKZ_sA?si=qvk_HL7H50NDoP7b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
