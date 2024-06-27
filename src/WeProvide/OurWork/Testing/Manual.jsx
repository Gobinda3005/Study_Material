import React from 'react';

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="public\Manual.png" />
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
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Manual</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Manual testing is a software testing process where testers execute test cases manually without the assistance of automated tools. This hands-on approach involves a tester playing the role of an end user and using most of the application's features to ensure correct behavior. Manual testing is crucial for understanding the software from a user's perspective and for uncovering issues that automated tests might miss, such as usability and interface problems.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">One of the primary advantages of manual testing is its flexibility. Testers can quickly adapt to changes in the software and can easily test new features or modifications without needing to write new scripts. This makes manual testing particularly effective during the early stages of development when features are frequently changing and evolving. Testers can explore the application intuitively, identifying potential issues through exploratory testing, which relies on their experience and creativity rather than predefined test cases.Manual testing is also valuable for its ability to provide immediate and direct feedback on the software's user experience. Human testers can evaluate the look and feel of the application, ensuring it is user-friendly and intuitive. They can also identify visual discrepancies, navigation issues, and other user interface problems that automated tools might overlook. This qualitative assessment is crucial for delivering a polished and user-centric product.Despite its benefits, manual testing has limitations, particularly in terms of efficiency and scalability. It is time-consuming and resource-intensive, as each test case must be executed individually by a human tester. This can lead to slower feedback cycles and can be impractical for large projects with extensive test suites. Furthermore, manual testing is prone to human error, which can result in inconsistent test results.</p>
              <a href="https://www.geeksforgeeks.org/software-testing-manual-testing/" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <br />
              <a href="https://www.youtube.com/live/sO8eGL6SFsA?si=Ir8UEtLNtsNhTqN6" className="text-indigo-500 inline-flex items-center">Watch Video
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/sO8eGL6SFsA?si=Ir8UEtLNtsNhTqN6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
