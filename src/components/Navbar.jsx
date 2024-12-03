import logo from '../images/logo.svg'
import { navLinks } from '../constants'
import hamburger from "../images/hamburger.svg"
import close from "../images/close.svg"
import { useEffect, useState } from 'react'
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }
    
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 720){
                setToggleMenu(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return(
        <>
            <header>
                <nav className="flex z-10 relative justify-between">
                    <img src={logo} alt="logo" />
                    <div className='flex gap-5'>
                        {
                            navLinks.map((item, i) => (
                                <div key={i.id} className='flex hidden md:block'>
                                    <a className='alata text-White' href={item.path}>
                                        {item.name}
                                    </a>
                                </div>
                            ))
                        }

                        <div>
                            <img src={hamburger} className='md:hidden block' alt="menu" onClick={handleToggle} />
                        </div>
                    </div>
                </nav>
                {
                    toggleMenu ?   <div className='z-30 absolute h-screen bg-red-500 top-0 right-0 py-[50px] px-5 w-full'>
                    <div className='flex justify-between items-center'>
                    <img src={logo} alt="logo" />
                    <img src={close} alt="close" onClick={handleToggle} />
                    </div>
                    <div className='h-full gap-5 flex flex-col items-center justify-center josefin text-3xl text-White'>
                         {
                             navLinks.map((item, i) => (
                                 <div key={i.id}>
                                     <a href={item.path}>
                                         {item.name}
                                     </a>
                                 </div>
                             ))
                         }
                    </div>
                 </div> : null
                }
            </header>
        </>
    )
}

export default Navbar