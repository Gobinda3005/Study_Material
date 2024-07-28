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
              src="https://miro.medium.com/v2/resize:fit:1000/1*XtjiQD35ja0DcA9H-JuM-g.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-40 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://miro.medium.com/v2/resize:fit:1000/1*XtjiQD35ja0DcA9H-JuM-g.png"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Spring Boot
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Spring Boot, a project of the Spring framework, is a powerful
                  and versatile platform for creating production-ready
                  applications with minimal effort. It is designed to simplify
                  the process of building stand-alone, production-grade Spring
                  applications that can run independently without the need for
                  an external application server. This is achieved through its
                  extensive use of conventions over configuration and its
                  embedded server capabilities, allowing developers to focus on
                  coding the business logic rather than boilerplate
                  configurations.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                One of the most significant advantages of Spring Boot is its
                ability to auto-configure a wide range of applications.
                Auto-configuration is a feature that automatically configures
                your Spring application based on the jar dependencies you have
                added to the project. This means that as long as you have the
                necessary libraries in your classpath, Spring Boot will set up
                the required beans and configurations, significantly reducing
                the amount of manual setup needed. For instance, if you include
                Spring Data JPA in your project dependencies, Spring Boot will
                automatically configure a DataSource, an EntityManagerFactory,
                and a TransactionManager, among others.Spring Boot also excels
                in its support for microservices architecture. With built-in
                features such as embedded web servers (like Tomcat, Jetty, or
                Undertow), developers can quickly spin up microservices that are
                self-contained and can run independently. This is complemented
                by Spring Cloud, a suite of tools that works seamlessly with
                Spring Boot to provide essential features for building
                microservices, such as service discovery with Eureka,
                configuration management with Spring Cloud Config, and circuit
                breakers with Hystrix. These tools help developers build robust
                and scalable microservice architectures efficiently.
              </p>
              <a
                href="https://www.geeksforgeeks.org/spring-boot/"
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
                href="https://youtu.be/Ch163VfHtvA?si=4edFHqv5GXc3tvZ0"
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
                src="https://www.youtube.com/embed/Ch163VfHtvA?si=9Y65j0aERM7o375-"
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
