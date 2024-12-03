import arcade from '../images/mobile/arcade.jpg'
import curiosity from '../images/mobile/curiosity.jpg'
import deepEarth from '../images/mobile/deepEarth.jpg'
import fishEye from '../images/mobile/fishEye.jpg'
import fromAbove from '../images/mobile/fromAbove.jpg'
import grid from '../images/mobile/grid.jpg'
import soccer from '../images/mobile/soccer.jpg'
import pocket from '../images/mobile/pocket.jpg'

import desktopArcade from '../images/desktop/desktopArcade.jpg'
import desktopCuriosity from '../images/desktop/desktopCuriosity.jpg'
import desktopDeepEarth from '../images/desktop/desktopDeepEarth.jpg'
import desktopFishEye from '../images/desktop/desktopFishEye.jpg'
import desktopFromAbove from '../images/desktop/desktopFromAbove.jpg'
import desktopGrid from '../images/desktop/desktopGrid.jpg'
import desktopSoccer from '../images/desktop/desktopSoccer.jpg'
import desktopPocket from '../images/desktop/desktopPocket.jpg'
import { useEffect, useState } from 'react'


const Pictures = () => {

    const [image, setImage] = useState({
        setArcade: window.innerWidth <= 720 ? arcade : desktopArcade,
        setCuriosity: window.innerWidth <= 720 ? curiosity : desktopCuriosity,
        setDeepEarth: window.innerWidth <= 720 ? deepEarth : desktopDeepEarth,
        setFishEye: window.innerWidth <= 720 ? fishEye : desktopFishEye,
        setFromAbove: window.innerWidth <= 720 ? fromAbove : desktopFromAbove,
        setGrid: window.innerWidth <= 720 ? grid : desktopGrid,
        setSoccer: window.innerWidth <= 720 ? soccer : desktopSoccer,
        setPocket: window.innerWidth <= 720 ? pocket : desktopPocket,
    })

   useEffect(() => {
    const handleResize = () => {
        setImage({
            setArcade: window.innerWidth <= 720 ? arcade : desktopArcade,
            setCuriosity: window.innerWidth <= 720 ? curiosity : desktopCuriosity,
            setDeepEarth: window.innerWidth <= 720 ? deepEarth : desktopDeepEarth,
            setFishEye: window.innerWidth <= 720 ? fishEye : desktopFishEye,
            setFromAbove: window.innerWidth <= 720 ? fromAbove : desktopFromAbove,
            setGrid: window.innerWidth <= 720 ? grid : desktopGrid,
            setSoccer: window.innerWidth <= 720 ? soccer : desktopSoccer,
            setPocket: window.innerWidth <= 720 ? pocket : desktopPocket,
            })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
   }, [])

    return(
        <>
            <div className="min-h-screen mt-10 ">
                <div className="flex justify-center md:justify-between items-center">
                    <p className="text-4xl josefin">OUR CREATIONS</p>
                    <button className="hidden md:block border border-2 alata tracking-widest border-Black py-1 w-[140px]">SEE ALL</button>
                </div>

                <div className='my-[50px] grid gap-5 grid-flow-col grid-rows-2'>
                   <div className='grid gap-3 grid-cols-1 md:grid-cols-4 place-items-center w-full'>
                        <img className='' src={image.setArcade} alt="" />
                        <img className='' src={image.setFromAbove} alt="" />
                        <img className='' src={image.setCuriosity} alt="" />
                        <img className='' src={image.setDeepEarth} alt="" />
                   </div>
                   <div className='grid grod-cols-1 md:grid-cols-4 w-full place-items-center gap-3'>
                        <img className='' src={image.setFishEye} alt="" />
                        <img className='' src={image.setGrid} alt="" />
                        <img className='' src={image.setSoccer} alt="" />
                        <img className='' src={image.setPocket} alt="" />
                   </div>
                </div>

                <div className='w-full flex block  md:hidden items-center flex-col justify-center mt-5'>
                 <button className="border border-2 alata tracking-widest border-Black py-1 w-[140px]">SEE ALL</button> 
                </div>
            </div>
        </>
    )
}

export default Pictures