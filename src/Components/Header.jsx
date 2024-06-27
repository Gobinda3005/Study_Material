// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <header className="text-gray-600 body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span className="ml-3 text-xl">Tailblocks</span>
//     </a>
//     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <Link Link='/Home'></Link>
//       <Link Link='/Home'></Link>
//       <Link Link='/Home'></Link>
//       <Link Link='/Home'></Link>
//     </nav>
//     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
//       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg>
//     </button>
//   </div>
// </header>
//   )
// }

// export default Header






// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;





import React from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import { AiOutlineLogin } from "react-icons/ai";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <header className=" sm:mx-10 mx-4 2xl:mx-10 md:mt-8 mt-6 ">
      <div className='bg-white-800 rounded-lg flex items-center shadow-2xl shadow-slate-400'>
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row ">
        {/* <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link> */}
        <a className='flex title-font font-medium flex items-center text-gray-400 mb-4 md:mb-0'>
					{/* <a href='https://notionpress.com/author/321668'><span className='ml-3 text-xl'>BFB</span></a> */}
					<Link
						className='ml-3 text-xl'
						to='/Home'>
						<span className='ml-3 text-xl text-red-500 shadow-xl'>BFW Study</span>
					</Link>
				</a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap flex items-center text-slate justify-center">
          {/* <Link to="/" className="mr-5 hover:text-gray-900">First Link</Link> */}
          <Link to="/Home" className="mr-5 hover:text-red-500 shadow-xl">Home</Link>
          <Link to="/About" className="mr-5 hover:text-red-500 shadow-xl">About</Link>
          {/* <NavDropdown title="WE Provide" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">WORK</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">OUR WORK</NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown title="We Provide"className="mr-5 hover:text-red-500 shadow-xl" id="basic-nav-dropdown">
              <NavDropdown.Item className='text-center' as={Link} to="/work">WORK</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown title="Study Material" id="basic-nav-dropdown" className="text-center mr-5 hover:text-red-500 ">
              <NavDropdown title="Frontend" id="basic-nav-dropdown"className="mr-5 hover:text-red-500 text-center">
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/Reactjs">ReactJS</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/Angular">Angular</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/HTML">HTML</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/CSS">CSS</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/JS">JS</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Backend" id="basic-nav-dropdown" className="mr-5 hover:text-red-500 text-center">
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/Java">Java</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/DotNet">DotNet</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/Springboot">Sptingboot</NavDropdown.Item>
              {/* <NavDropdown.Item className="mr-5 hover:text-red-500 text-center" as={Link} to="/ASP">ASP</NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="WebDev" id="basic-nav-dropdown" className="mr-5 hover:text-red-500 text-center">
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center" as={Link} to="/Frontend">Frontend</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center" as={Link} to="/backend">Backend</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center" as={Link} to="/Database">Database</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Testing" id="basic-nav-dropdown" className="mr-5 hover:text-red-500 text-center">
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/Automation">Automation</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/Manual">Manual</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cloud" id="basic-nav-dropdown" className="mr-5 hover:text-red-500 text-center">
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/AWS">AWS</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/Azure">Azure</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Database" id="basic-nav-dropdown" className="mr-5 hover:text-red-500 text-center">
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/Oracle">Oracle</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/SQL">My SQL</NavDropdown.Item>
              <NavDropdown.Item className="mr-5 hover:text-red-500 text-center shadow-lg" as={Link} to="/DB2">DB2</NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown.Item as={Link} to="/OurWork">Frontend</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/OurWork">Backend</NavDropdown.Item> */}
            </NavDropdown>
            </NavDropdown>
          <Link to="/Contact" className="mr-5 hover:text-red-500 shadow-xl">Contact</Link>
        </nav>
        
        <Link to="/Login">
        <button className="inline-flex flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0 shadow-xl">
          Login
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          // </svg>
          {/* <AiOutlineLogin /> */}
        </button>
        </Link>
        {/* <Link to="/Signup">
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-200 rounded text-base mt-4 md:mt-0">
          REGST
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          // </svg>
          
        </button>
        </Link> */}
        {/* <AwesomeButton type="secondary" after={<AiOutlineLogin />}>Login/Signup</AwesomeButton> */}
      </div>
      </div>
    </header>
  );
};

export default Header;
