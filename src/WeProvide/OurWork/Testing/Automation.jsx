import React from 'react';

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="public\Automation.png" />
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
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Automation</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Automation testing is a software testing methodology that employs specialized tools and scripts to execute test cases automatically. This approach contrasts with manual testing, which relies on human intervention to perform test procedures. Automation testing is particularly effective for repetitive and extensive test scenarios, ensuring that these tests are conducted consistently and without human error. The automated execution of tests not only enhances accuracy but also allows for the efficient management of time and resources.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">One of the key advantages of automation testing is its ability to provide rapid feedback on code changes. In the context of continuous integration and continuous deployment (CI/CD) pipelines, automated tests are crucial for ensuring that new code commits do not introduce new bugs or regressions. This immediate feedback loop enables developers to identify and address issues promptly, maintaining the integrity and stability of the software throughout its development cycle. Automation testing is also highly scalable, making it ideal for large projects with frequent updates and complex requirements. It enables extensive test coverage that would be impractical to achieve through manual testing alone. By automating repetitive tasks, testers can allocate their time to more strategic activities, such as exploratory testing and designing new test cases, which require human intuition and creativity.Furthermore, automation testing supports a wide range of test types, including unit tests, integration tests, functional tests, and performance tests. This versatility ensures that different aspects of the software are thoroughly evaluated, contributing to higher quality and reliability. The use of automation tools also facilitates the generation of detailed test reports and logs, which help in tracking the progress of testing activities and in identifying trends and patterns in test results.</p>
              <a href="https://www.geeksforgeeks.org/automation-testing-software-testing/" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <br />
              <a href="https://youtu.be/FRn5J31eAMw?si=Sa-HrU1FfkaS5jZY" className="text-indigo-500 inline-flex items-center">Watch Video
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/FRn5J31eAMw?si=Sa-HrU1FfkaS5jZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
