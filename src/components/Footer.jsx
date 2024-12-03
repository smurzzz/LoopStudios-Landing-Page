import logo from '../images/logo.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import pinterest from '../images/pinterest.svg'
import twitter from '../images/twitter.svg'
import { navLinks } from '../constants'

const Footer = () => {
    return(
        <>
            <div className="w-full bg-Black text-White alata lg:px-[100px] px-5 mb-10 py-[50px]">
                <div className='flex items-center flex-col justify-center md:flex-row justify-between '>
                    <div className='flex flex-col items-center gap-5'>
                        <img src={logo} alt="" />
                        <div className='flex md:flex-row gap-3 flex-col'>
                            {
                                navLinks.map((item, i) => (
                                    <a href={item.path} key={i.id}>
                                        {item.name}
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    <div className='flex gap-5 mt-5 flex-col'>
                        <div className='flex gap-3 justify-center md:justify-end'>
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                            <img src={pinterest} alt="pinterest" />
                            <img src={twitter} alt="twitter" />
                        </div>
                        <p className='text-sm text-DarkGray'>&nbsp; 2021 Loopstudios. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer