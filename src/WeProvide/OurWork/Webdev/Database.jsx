import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="public\Slice 1 (1).png" />
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
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">DataBase</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Database management is a fundamental aspect of backend development, involving the storage, retrieval, and management of data essential for web applications and other software systems. Three prominent database systems in this domain are Oracle, DB2, and SQL Server, each offering robust features and capabilities tailored to various enterprise needs.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">Oracle Database is renowned for its high performance, scalability, and security features, making it a popular choice for large-scale enterprises. Oracle's architecture supports complex data warehousing and online transaction processing (OLTP) environments. It offers advanced features such as Real Application Clusters (RAC) for high availability, Automatic Storage Management (ASM), and comprehensive backup and recovery solutions. Oracle's PL/SQL (Procedural Language/SQL) extends SQL with procedural constructs, allowing developers to write complex scripts for data manipulation and business logic implementation. Oracle databases are often used in industries requiring stringent compliance and robust performance, such as finance, telecommunications, and government.IBM DB2 is another powerful database management system, known for its efficiency, reliability, and integration with IBM's broader suite of enterprise solutions. DB2 supports both relational and non-relational data models, enabling versatility in managing diverse data types. Its high availability disaster recovery (HADR) feature ensures continuous operation and minimal downtime, crucial for mission-critical applications. DB2 also offers advanced data compression, which reduces storage costs and improves performance. The SQL procedural language (SQL PL) used by DB2 allows developers to create stored procedures, triggers, and functions, facilitating sophisticated data operations and business processes. DB2 is often deployed in sectors like banking, healthcare, and retail, where robust transaction processing and data integrity are paramount.</p>
              {/* <a href="#" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
              <NavDropdown title="DataBase" id="basic-nav-dropdown" className="mr-5 hover:text-red-500 text-center align item:center text-indigo-500 inline-flex items-center">
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center" as={Link} to="/Oracle">Oracle</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center" as={Link} to="/SQL">SQL</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center" as={Link} to="/DB2">DB2</NavDropdown.Item>
              {/* <NavDropdown.Item className="mr-5 hover:text-red-500 text-center" as={Link} to="/ASP">ASP</NavDropdown.Item> */}
              {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg> */}
              </NavDropdown>
              <br/>
              {/* <a href="#" className="text-indigo-500 inline-flex items-center">Watch Video
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
