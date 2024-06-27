import React from 'react';

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="public\MySql.png" />
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
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">My SQL</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">MySQL is an open-source relational database management system (RDBMS) that uses structured query language (SQL) for database access and management. Developed by Oracle Corporation, MySQL is widely recognized for its reliability, ease of use, and performance, making it a popular choice for web applications, data warehousing, and other data-driven applications.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">One of the key features of MySQL is its support for a variety of storage engines, including InnoDB and MyISAM, which provide different capabilities for transaction handling and performance optimization. InnoDB, for instance, offers ACID-compliant transactions, foreign key support, and row-level locking, making it suitable for applications requiring high data integrity and complex transactions. MyISAM, on the other hand, is optimized for read-heavy operations, making it ideal for applications that require fast read access.MySQL is highly scalable, capable of handling large databases with millions of rows of data. It supports replication, which allows data to be copied and maintained across multiple servers, enhancing redundancy and enabling load balancing. This feature is particularly beneficial for high-availability applications and distributed systems. Additionally, MySQL Cluster provides an even higher level of scalability and availability by distributing data across multiple nodes.Security is a significant focus in MySQL, with features such as user authentication, access control, and data encryption. MySQL supports secure connections using SSL, ensuring that data transmitted between clients and the server is protected. The database also provides robust backup and recovery options, allowing administrators to create regular backups and restore data in case of failure or corruption.</p>
              <a href="https://www.geeksforgeeks.org/mysql-tutorial/" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <br/>
              <a href="https://youtu.be/WmGgxTpGs_8?si=W0CFf77Z7iL8emfb" className="text-indigo-500 inline-flex items-center">Watch Video
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WmGgxTpGs_8?si=W0CFf77Z7iL8emfb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
