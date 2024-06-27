import React from 'react';

const ProfileCard = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-65 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="public\Azure.png" />
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
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">AZURE</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Microsoft Azure is a comprehensive cloud computing platform offered by Microsoft, providing a broad range of services for building, deploying, and managing applications through a global network of data centers. Azure supports a variety of programming languages, frameworks, and tools, enabling businesses and developers to create and run applications seamlessly. Its extensive portfolio includes solutions for computing, storage, databases, machine learning, analytics, networking, and security, making it a versatile choice for numerous industries and use cases.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">One of the core services of Azure is Azure Virtual Machines (VMs), which offers scalable virtual servers to meet diverse computational needs. With Azure VMs, users can easily scale their applications up or down based on demand, ensuring cost-efficiency and optimal performance. Additionally, Azure provides robust storage solutions, such as Azure Blob Storage for scalable object storage and Azure Disk Storage for high-performance block storage, catering to various data storage and retrieval needs.Azure excels in database services, offering a range of options like Azure SQL Database, a managed relational database service, and Azure Cosmos DB, a globally distributed, multi-model database service. These managed database services allow users to offload database administration tasks, such as scaling, backups, and patching, so they can focus on developing their applications. Azure also supports open-source databases like MySQL and PostgreSQL, providing flexibility for different development preferences.For organizations interested in artificial intelligence and machine learning, Azure provides services like Azure Machine Learning, which offers tools to build, train, and deploy machine learning models efficiently. Azure Cognitive Services and Azure Bot Service further extend AI capabilities, enabling developers to integrate features like speech recognition, language understanding, and computer vision into their applications.</p>
              <a href="https://www.geeksforgeeks.org/microsoft-azure/" className="text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <br />
              <a href="https://youtu.be/tDuruX7XSac?si=R7f6j5iiqVJx21qW" className="text-indigo-500 inline-flex items-center">Watch Vide
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/tDuruX7XSac?si=R7f6j5iiqVJx21qW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
