import React from 'react';

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="public\Oracle.png" />
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
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">ORACLE</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Oracle Database, developed by Oracle Corporation, is a multi-model database management system (DBMS) known for its robust performance, comprehensive feature set, and enterprise-grade capabilities. As one of the leading database systems globally, Oracle Database is widely used in various industries for managing large volumes of data and supporting critical applications.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">One of the standout features of Oracle Database is its support for a multi-model architecture, which allows it to manage various data types, including relational, JSON, XML, and spatial data. This flexibility enables organizations to handle diverse data formats and requirements within a single database platform. The database is also renowned for its high performance and scalability, capable of handling extensive workloads and large datasets efficiently.Oracle Database offers advanced transaction management capabilities, adhering to ACID (Atomicity, Consistency, Isolation, Durability) principles to ensure reliable and consistent transaction processing. Its sophisticated concurrency control mechanisms, such as multiversion concurrency control (MVCC), allow multiple users to access and modify data simultaneously without conflicts, making it suitable for high-transaction environments.Security is a cornerstone of Oracle Database, with a comprehensive suite of security features designed to protect sensitive data. These include advanced encryption, robust access control mechanisms, data masking, and auditing capabilities. Oracle's security model helps organizations meet stringent compliance requirements and safeguard their data against unauthorized access and breaches.</p>
              <a href="https://www.geeksforgeeks.org/oracle-architecture/" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <br />
              <a href="https://youtu.be/ObbNGhcxXJA?si=WSZQ8pl3Y-zhJfgA" className="text-indigo-500 inline-flex items-center">Watch Video
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ObbNGhcxXJA?si=WSZQ8pl3Y-zhJfgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
