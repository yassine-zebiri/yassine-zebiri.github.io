import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LinksWindow(){
    return(
        <div className="bg-slate-800 text-white p-12">
            <div className="flex gap-10 items-center text-center justify-center text-6xl text-slate-300">
                <Link href={'/e'} target="blank" className="hover:text-white hover:scale-110">
                    <FontAwesomeIcon icon={faFacebook} />
                    <p className="text-sm font-bold">Facebook</p>
                </Link>
                <Link href={'/e'} target="blank" className="hover:text-white hover:scale-110">
                    <FontAwesomeIcon icon={faInstagram} />
                    <p className="text-sm font-bold">Instagram</p>
                </Link>
                <Link href={'/e'} target="blank" className="hover:text-white hover:scale-110">
                    <FontAwesomeIcon icon={faGithub} />
                    <p className="text-sm font-bold">Github</p>
                </Link>
                <Link href={'/e'} target="blank" className="hover:text-white hover:scale-110">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <p className="text-sm font-bold">Linkedin</p>
                </Link>
                </div>
        </div>
    )
}