import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LinksWindow(){
    return(
        <div className="bg-slate-800 text-white sm:p-12 p-3">
            <div className="flex sm:gap-10 gap-3 items-center text-center flex-col sm:flex-row justify-center sm:text-6xl text-4xl text-slate-300">

                <Link href={'https://web.facebook.com/zebiri.yassine/'} target="blank" className="hover:text-white sm:hover:scale-110 border 
                rounded w-full flex sm:block sm:w-fit sm:border-0 items-center gap-3 p-3 sm:p-0">
                    <FontAwesomeIcon icon={faFacebook} />
                    <p className="sm:text-sm text-xl font-bold">Facebook</p>
                </Link>
                <Link href={'https://www.instagram.com/yassine_zebiri/'} target="blank" className="hover:text-white sm:hover:scale-110 border 
                rounded w-full flex sm:block sm:w-fit sm:border-0 items-center gap-3 p-3 sm:p-0">
                    <FontAwesomeIcon icon={faInstagram} />
                    <p className="sm:text-sm text-xl font-bold">Instagram</p>
                </Link>
                <Link href={'https://github.com/yassine-zebiri'} target="blank" className="hover:text-white sm:hover:scale-110 border 
                rounded w-full flex sm:block sm:w-fit sm:border-0 items-center gap-3 p-3 sm:p-0">
                    <FontAwesomeIcon icon={faGithub} />
                    <p className="sm:text-sm text-xl font-bold">Github</p>
                </Link>
                <Link href={'https://www.linkedin.com/in/yassine-zebiri/'} target="blank" className="hover:text-white sm:hover:scale-110 border 
                rounded w-full flex sm:block sm:w-fit sm:border-0 items-center gap-3 p-3 sm:p-0">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <p className="sm:text-sm text-xl font-bold">Linkedin</p>
                </Link>
                </div>
        </div>
    )
}