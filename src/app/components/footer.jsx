import Link from "next/link";
import { TbMessageCircleCheck } from "react-icons/tb";
import { MdOutlineMarkEmailRead } from "react-icons/md";


const Footer = () => {
    return (
        <footer className="w-full text-white  flex flex-col px-6 sm:px-10 md:px-16 lg:px-20 gap-10 pb-5">
            <h1 className="text-lg text-center uppercase sm:text-xl md:text-2xl font-bold">“Astronomy compels the soul to look upwards and leads us from this world to another”</h1>
            <div className="flex flex-col items-center gap-10">
                <span className="flex gap-4 px-2 flex-wrap justify-center">
                    {['home', 'events', 'about', 'podcasts', 'contact']?.map((item) => (
                        <Link key={item} className=" text-lg capitalize" href={item === 'home' ? '/' : `/${item}`}>{item}</Link>
                    ))}
                </span>
                <span className="w-full flex justify-between">
                    <span className="flex items-center gap-3">
                        <TbMessageCircleCheck />
                        Let&apos;s chat
                    </span>
                    <span className="flex items-center gap-3">
                        <MdOutlineMarkEmailRead />
                        info@info.com
                    </span>
                </span>
            </div>
        </footer>
    )
}

export default Footer;