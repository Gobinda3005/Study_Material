import React from "react";

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://e0.pxfuel.com/wallpapers/411/344/desktop-wallpaper-black-java-for-tech-java-programming.jpg"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://e0.pxfuel.com/wallpapers/411/344/desktop-wallpaper-black-java-for-tech-java-programming.jpg"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  JAVA
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Java is a widely-used programming language known for its
                  portability, reliability, and ease of use. Developed by James
                  Gosling and his team at Sun Microsystems in 1995, Java was
                  designed with the principle of "write once, run anywhere"
                  (WORA). This means that compiled Java code can run on any
                  platform that supports the Java Virtual Machine (JVM), making
                  Java applications highly portable across different computing
                  environments.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Java is a widely-used programming language known for its
                portability, reliability, and ease of use. Developed by James
                Gosling and his team at Sun Microsystems in 1995, Java was
                designed with the principle of "write once, run anywhere"
                (WORA). This means that compiled Java code can run on any
                platform that supports the Java Virtual Machine (JVM), making
                Java applications highly portable across different computing
                environments. This cross-platform capability is one of Java's
                most significant advantages, allowing developers to create
                applications that can operate seamlessly on various operating
                systems, including Windows, Mac, and Linux.The object-oriented
                nature of Java is another cornerstone of its design, promoting
                better organization and reuse of code. Object-oriented
                programming (OOP) principles such as inheritance, encapsulation,
                polymorphism, and abstraction are integral to Java, enabling
                developers to build modular, maintainable software. This
                structure allows for the creation of complex systems that are
                easier to manage and extend over time, making Java particularly
                suitable for large-scale enterprise applications.
              </p>
              <a
                href="https://www.geeksforgeeks.org/java/"
                className="text-indigo-500 inline-flex items-center"
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
              <br />
              <a
                href="https://youtu.be/eIrMbAQSU34?si=GWWxxLjVGLJ2jhUy"
                className="text-indigo-500 inline-flex items-center"
              >
                Watch Video
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
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eIrMbAQSU34?si=a-O8ibK5TG7MiL5x"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
