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
              src="public\AWS.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="public\AWS.png"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  AWS
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Amazon Web Services (AWS) is a comprehensive and widely
                  adopted cloud platform offered by Amazon, providing over 200
                  fully featured services from data centers globally. AWS
                  enables businesses and developers to leverage its scalable,
                  reliable, and low-cost infrastructure to build and deploy a
                  wide range of applications. The platform covers a vast array
                  of services, including computing power, storage, databases,
                  machine learning, analytics, and security, making it a
                  versatile choice for various use cases across different
                  industries.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                One of the core services of AWS is Amazon Elastic Compute Cloud
                (EC2), which offers scalable virtual servers to handle diverse
                computational needs. Users can easily scale their applications
                up or down based on demand, ensuring optimal performance and
                cost-efficiency. Additionally, AWS provides a robust storage
                solution through Amazon Simple Storage Service (S3), which
                offers secure, durable, and scalable object storage. S3 is
                designed to store and retrieve any amount of data from anywhere,
                making it ideal for data backup, archiving, and big data
                analytics.AWS also excels in database services, with options
                like Amazon Relational Database Service (RDS) for managed
                relational databases, and Amazon DynamoDB for fast and flexible
                NoSQL databases. These services allow users to offload the heavy
                lifting of database management, enabling them to focus on
                application development and optimization. For organizations
                looking to leverage artificial intelligence and machine
                learning, AWS offers services such as Amazon SageMaker, which
                provides tools to build, train, and deploy machine learning
                models at scale.Security and compliance are paramount in AWS,
                with a robust set of controls in place to help protect customer
                data. AWS's infrastructure is designed to meet the most
                stringent security requirements, providing features like
                encryption, identity and access management, and extensive
                monitoring capabilities. AWS also complies with various global
                standards and regulations, ensuring that organizations can meet
                their compliance requirements while using the platform.
              </p>
              <a
                href="https://www.geeksforgeeks.org/aws-tutorial/"
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
                href="https://youtu.be/k1RI5locZE4?si=F9zbchVKw-Zsr6Lr"
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
                src="https://www.youtube.com/embed/k1RI5locZE4?si=F9zbchVKw-Zsr6Lr"
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
