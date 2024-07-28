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
              src="https://instil.co/static/44f1a7747f790856e1ca1adf2b2b19ed/aa014/course-hero-fast-track-to-netc.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://instil.co/static/44f1a7747f790856e1ca1adf2b2b19ed/aa014/course-hero-fast-track-to-netc.png"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  .NET
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  .NET is a versatile and powerful software development
                  framework created by Microsoft. It provides a comprehensive
                  platform for building a wide range of applications, from web
                  and desktop to mobile and cloud-based solutions. The .NET
                  ecosystem is designed to support multiple programming
                  languages, including C#, F#, and Visual Basic, giving
                  developers the flexibility to choose the language that best
                  suits their project requirements.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                At its core, .NET offers a unified development environment with
                a rich set of libraries and APIs. This allows developers to
                write code that can run on different operating systems and
                devices without significant modifications. One of the key
                features of .NET is the Common Language Runtime (CLR), which
                manages the execution of .NET programs and provides essential
                services such as memory management, security, and exception
                handling. The CLR ensures that .NET applications are performant
                and reliable, regardless of the underlying hardware or operating
                system..NET has evolved significantly since its inception in the
                early 2000s. Initially launched as a Windows-only framework, it
                has expanded to become cross-platform with the introduction of
                .NET Core. .NET Core, now integrated into the unified .NET 5 and
                later versions, enables developers to build and run applications
                on Windows, macOS, and Linux. This cross-platform capability is
                crucial in today's diverse technological landscape, where
                applications often need to operate seamlessly across multiple
                environments.
              </p>
              <a
                href="https://www.geeksforgeeks.org/introduction-to-net-framework/"
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
                href="https://youtu.be/E7Voso411Vs?si=2rY-CQJAbHes6JRZ"
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
                src="https://www.youtube.com/embed/E7Voso411Vs?si=XyMnTDXWuZRIJVil"
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
