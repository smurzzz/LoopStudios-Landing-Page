import Navbar from "./Navbar"
import desktopHero from "../images/desktop/desktopHero.jpg"
import mobileHero from "../images/mobile/hero.jpg"
import { useState } from "react"
import { useEffect } from "react"

const Hero = () => {

    const [image, setImage] = useState(window.innerWidth <= 768 ? mobileHero : desktopHero)

    useEffect(() => {
        const handleResize = () => {
            setImage(window.innerWidth <= 768 ? mobileHero : desktopHero)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(
        <>
            <section className="h-screen lg:px-[100px] py-[50px] px-5 relative" style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <Navbar/>

                <div className="w-full flex md:mt-0 md:px-[100px] md:py-[50px] w-full p-5 items-center h-screen absolute justify-center lg:justify-start top-0  left-0">
                    <div className="p-10 border w-[500px]">
                        <p className="text-White josefin text-3xl md:text-5xl">IMMERSIVE EXPERCIENCES THAT DELIVER</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero