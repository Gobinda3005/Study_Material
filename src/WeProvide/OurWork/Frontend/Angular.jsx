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
              src="https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  ANGULAR
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Angular's component-based architecture enables developers to
                  create reusable UI components that can be composed together to
                  build complex applications. Components encapsulate HTML, CSS,
                  and JavaScript logic, making it easier to manage and maintain
                  codebases
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Angular is a powerful JavaScript framework developed and
                maintained by Google. It's widely used for building dynamic,
                single-page web applications (SPAs) and is known for its robust
                features and comprehensive tooling. One of the key strengths of
                Angular is its adherence to the Model-View-Controller (MVC)
                architecture, which helps in organizing code and separating
                concerns.Angular provides a rich set of features, including
                two-way data binding, which allows automatic synchronization of
                data between the model and the view. This makes it easier to
                create interactive and real-time user interfaces without writing
                excessive code for data manipulation. Another notable feature of
                Angular is its dependency injection system, which facilitates
                the management and injection of dependencies into components,
                services, and other parts of the application. This promotes code
                reusability, testability, and maintainability.
              </p>
              <a
                href="https://www.geeksforgeeks.org/angular-tutorial/"
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
                href="https://www.youtube.com/watch?v=k5E2AVpwsko&list=PLTjRvDozrdlxAhsPP4ZYtt3G8KbJ449oT"
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
                src="https://www.youtube.com/embed/k5E2AVpwsko?si=T_3rL3PLUQsrZsrq"
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
