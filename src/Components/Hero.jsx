import 'boxicons/css/boxicons.min.css'
import Spline from '@splinetool/react-spline'



const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
     <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e25555] rounded-full shadow-[0 0 150px rgba(255, 255, 255, 0.4)]'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                    <i className='bx bx-code text-2xl'></i>
                    <span>Developer Mode</span>
                </div>
            </div>
            {/* Main Heading */}
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                Frontend Development
                </h1>
                <p className='sm:text-lg md:text-xl tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
                Crafting responsive, accessible, and visually engaging user interfaces using modern frameworks like React, Tailwind CSS, and more.
                </p>
                <div>
                    <button className='mt-8 bg-white text-black font-medium px-8 py-3 rounded-full border-none hover:bg-red-500 hover:text-white transition-colors cursor-pointer tracking-wider'>
                        Get Started <i className='bx bx-link-external'></i>
                    </button>
                </div>
        </div>

        {/* 3D ROBOT */}
        <Spline className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:lfet-[-2%] h-full' scene="https://prod.spline.design/L592cFNIJSnluzuW/scene.splinecode" />

    </main>
  )
}

export default Hero
