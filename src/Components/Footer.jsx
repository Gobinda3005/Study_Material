import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font rounded-lg ">
        <div className="container px-5 py-0 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 shadow-2xl shadow-slate-300">
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none shadow-2xl shadow-slate-400">
                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">
                  Download on the
                </span>
                <span className="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-44 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium flex items-center text-gray-400 mb-4 md:mb-0">
              {/* <a href='https://notionpress.com/author/321668'><span className='ml-3 text-xl'>BFB</span></a> */}
              <Link className="ml-12 text-xl" to="/Home">
                {/* <span className="ml-3 text-xl text-red-500 shadow-xl">
                        BFW Study
                      </span> */}
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="public\B (2).png"
                  />
                </div>
              </Link>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Online Study platform which is provide education to Engineering
              Aspirants
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                OUR WORK
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Provide Education
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Build Path
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Who We Are
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                WE PROVIDE
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Project</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Studu Material
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Top Lectures Notes
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Watch Video
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                LEARN MOPRE
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Privacy</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Security</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Terms</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                FOR BRANCH
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    App For You
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-white-800 shadow-inner shadow-slate-300 rounded-lg sm:mx-10 mx-4 2xl:mx-10 md:mt-8 mt-6 items-center">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2021-2024 ©
              BirthForStudy™ Ltd. All rights reserved. © 2024 BirthForStudy —
              <a
                href="https://notionpress.com/author/321668"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @BFW
              </a>
            </p>
            {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=100080115802004&mibextid=ZbWKwL"
                className="ml-4 text-gray-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/gobinda-panda-b70b9b120/"
                className="ml-4 text-gray-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/i/flow/Gobindapanda4"
                className="ml-4 text-gray-500"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/gobinda_panda?igsh=MWUwcXBpMWo3Z2F0ZQ=="
                className="ml-4 text-gray-500"
              >
                <FaInstagram />
              </a>
            </span> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
