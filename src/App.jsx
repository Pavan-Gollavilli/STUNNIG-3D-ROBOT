import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App() {
      useEffect(() => {
        AOS.init({
        duration: 1500,
        once: true,
        })
    })
  return (
    <main>
      {/* Gradient Background Image */}
      <img src="../src/assets/gradient.png" alt="Gradient image" className="absolute top-0 left-0 opacity-60 -z-10"/>
      {/* bluer effect */}
      <div
        className="h-0 w-[40rem] absolute top-[20%] right-[-5%] -z-10"
        style={{
          boxShadow: "0 0 900px 20px #ff3636",
          transform: "rotate(-30deg)"
        }}
        ></div>
        <Header/>
        <Hero/>
    </main>
  )
}
