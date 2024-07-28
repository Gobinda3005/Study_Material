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
              src="public\Db2.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="public\Db2.png"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  DB2
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  IBM Db2, developed by IBM, is a family of data management
                  products, including database servers, designed to store,
                  analyze, and manage structured and unstructured data. Known
                  for its high performance, reliability, and advanced features,
                  Db2 is widely used in various industries, including finance,
                  healthcare, and retail, to support mission-critical
                  applications and large-scale data processing.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                One of the key features of IBM Db2 is its robust support for SQL
                and NoSQL workloads, providing flexibility to handle a wide
                range of data types and access patterns. Db2's SQL compatibility
                allows for efficient handling of structured data, while its
                support for JSON and XML enables the management of
                semi-structured and unstructured data. This multi-model
                capability allows organizations to consolidate diverse data
                types within a single platform.Db2 excels in performance
                optimization, leveraging advanced technologies such as in-memory
                computing, data compression, and parallel processing to
                accelerate query execution and data retrieval. The BLU
                Acceleration feature, for instance, combines columnar storage,
                data skipping, and dynamic in-memory processing to deliver
                high-speed analytics and reporting. These optimizations enable
                Db2 to handle complex queries and large datasets efficiently,
                making it suitable for data warehousing and big data
                applications.Scalability is another significant advantage of
                Db2, with features like database partitioning and clustering
                allowing it to scale horizontally and vertically to meet growing
                data demands. Db2's multi-node clustering capabilities, provided
                by Db2 pureScale, ensure continuous availability and fault
                tolerance by distributing workloads across multiple servers and
                providing automatic failover in case of hardware or software
                failures.
              </p>
              <a
                href="https://www.ibm.com/products/db2"
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
                href="https://youtu.be/pQ5TtKDEab4?si=WFLEUgXdbpBuPcje"
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
                src="https://www.youtube.com/embed/pQ5TtKDEab4?si=WFLEUgXdbpBuPcje"
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
