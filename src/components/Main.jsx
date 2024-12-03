import { useEffect, useState } from "react"
import desktopinteractive from "../images/desktop/desktopinteractive.jpg"
import interactive from "../images/mobile/interactive.jpg"
import Pictures from "./Pictures"

const Main = () => {
    const [image, setImage] = useState(window.innerWidth <= 768 ? interactive : desktopinteractive)

    useEffect(() => {
        const handleResize = () => {
            setImage(window.innerWidth <= 768 ? interactive : desktopinteractive)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(
        <>
            <div className="min-h-screen md:px-[100px] py-[50px]">
                <div className="h-full md:h-screen flex flex-col  md:flex-row items-center md:relative">
                    <img className="h-1/2 p-5" src={image} alt="image"  />
                    <div className="h-1/2 sm:w-[500px] lg:w-[600px] w-[400px] md:absolute md:left-[30%] lg:left-[40%] top-[50%] bg-White p-5">
                        <p className="text-Black mt-5 sm:text-left text-center josefin text-4xl lg:text-5xl">THE LEADER IN INTERACTIVE VR</p>
                        <p className="alata text-DarkGray sm:text-left text-center mt-5">Founded in 2011, Loopstudios has been producing world-class virtual reality projects from some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experience that bind to their brand.</p>
                    </div>
                </div>
                <Pictures/>
            </div>
        </>
    )
}

export default Main