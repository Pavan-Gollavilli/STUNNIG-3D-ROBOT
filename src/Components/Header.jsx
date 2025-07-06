import 'boxicons/css/boxicons.min.css'

const Header = () => {
  // Function to toggle the mobile menu visibility
    const toggleMobileMenu = () =>{
        const mobileMenu = document.getElementById('mobileMenu')

        {/*If it's hidden → remove the hidden class → show it.

          If it's not hidden → add the hidden class → hide it.*/}

        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden')
        }
        else{
            mobileMenu.classList.add('hidden')
        }



    }
  return (
    <header className="flex justify-between items-center p-4 lg:px-20">
      <h1 data-aos="fade-down"
       data-aos-easing="linear"
      data-aos-duration="1500"  className="text-3xl md:text-4xl lg:text-5xl m-0">
        Pavan.Dev
      </h1>
      <nav className="hidden md:flex items-center gap-12 text-lg font-semibold">
  <a
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000"
    href="#"
    className="group relative tracking-wider text-white hover:text-gray-300 transition-colors z-50"
  >
    Home
    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
  </a>
  <a
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
    href="#"
    className="group relative tracking-wider text-white hover:text-gray-300 transition-colors z-50"
  >
    About
    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
  </a>
  <a
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="2000"
    href="#"
    className="group relative tracking-wider text-white hover:text-gray-300 transition-colors z-50"
  >
    Skills
    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
  </a>
  <a
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="2500"
    href="#"
    className="group relative tracking-wider text-white hover:text-gray-300 transition-colors z-50"
  >
    Contact
    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-500 transition-all duration-500 group-hover:w-full"></span>
  </a>
</nav>
 <button
   
    href="#"
    className="md:block bg-red-500 text-white font-medium px-8 py-3 rounded-full border-none hover:bg-red-600 transition-colors cursor-pointer z-50"
  >
    SIGN-IN
    
  </button>

      {/* Mobile menu button - visible only on mobile */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className='bx bx-menu'></i>
      </button>

      {/* Mobile menu - Hidden by default */}
    <div id="mobileMenu" className="fixed top-16 left-0 right-0 bottom-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
        <nav className="flex flex-col gap-6 items-center">
            <a href="#" className="tracking-wider hover:text-gray-300 transition-colors z-50">Home</a>
            <a href="#" className="tracking-wider hover:text-gray-300 transition-colors z-50">About</a>
            <a href="#" className="tracking-wider hover:text-gray-300 transition-colors z-50">Skills</a>
            <a href="#" className="tracking-wider hover:text-gray-300 transition-colors z-50">Contact</a>
        </nav>
        </div>

    </header>
  )
}

export default Header
