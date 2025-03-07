'use client'

import Image from "next/image"
import React from "react"
import ImageSlider from "../components/slider"
import Logo from '../../../public/Images/icon.svg'

const Page = () => {
    return (

        <div className="w-full h-full px-3 sm:px-10 md:px-16 lg:px-20 z-40">
            <section className="text-white w-full h-full md:h-screen flex flex-col relative gap-8" >
                <div className="flex flex-col h-full gap-4 md:gap-8 justify-center mt-10">
                    <h1 className="uppercase text-4xl sm:text-5xl md:text-7xl font-bold">Let&apos;s travel to the edge <br /> of space</h1>
                    <p className="text-sm md:text-xl">We are a group that love to explore and learn new information related to our universe. <br /> Join us and Explore</p>
                    <button className="w-fit px-6 py-1 bg-transparent border-2 border-white uppercase">Discover More</button>
                </div>
                <Image width={300} height={400} src={'/Images/moon1.png'} alt="Moon Image" className="w-56 spin relative self-center md:w-60 xl:w-72 md:absolute md:-bottom-20 md:self-auto md:right-2 " />
            </section>

            <section className="w-full h-screen text-white  py-10 flex flex-col space-y-4">
                <h1 className="text-3xl uppercase text-center md:text-left font-semibold">recent events</h1>
                <div className="w-full h-full bg-[url('/Images/eventbg.png')] flex justify-end items-center px-3 md:px-20">
                    <div className="w-full md:max-w-2xl  px-4 py-8 bg-[#a4a4a4b3] flex flex-col items-start space-y-6 md:space-y-2 drop-shadow-2xl shadow-zinc-800">
                        <span className="text-xs">18/07/2023</span>
                        <h2 className="text-2xl md:text-3xl uppercase font-semibold">talk on cosmic nebula</h2>
                        <p className="text-xs sm:text-sm md:text-xl">Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.</p>
                        <button className="bg-white text-black px-3 py-1 font-semibold">Read More</button>
                    </div>
                </div>
            </section>
            <section className="w-full gap-10 flex flex-col text-white justify-between md:my-10 items-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">WHAT’S IT LIKE WHEN WE HAVE EVENTS</h1>
                <ImageSlider />
            </section>



            <section className="flex flex-col text-white w-full h-full pb-20 items-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">KNOW MORE ABOUT US</h1>

                <div className="flex flex-col-reverse md:flex-row justify-between w-full items-center gap-5 space-y-10">
                    <Image src={Logo} width={300} height={300} alt="Logo Dhruva" className="w-36 md:w-44 lg:w-56" />
                    <div className="w-full flex flex-col gap-2">
                        <h1 className="text-xl sm:text-2xl md:text-4xl uppercase font-bold leading-relaxed">wE ARE CLUB THAT LEARN, SHARE AND EXPLORE EVERYTHING RELATED TO OUR UNIVERSE.</h1>
                        <p className="text-sm sm:text-lg md:text-2xl uppercase leading-relaxed">Dhruva is a College club, we work toward increasing knowledge about space, cosmos and everything we are still learning about. We share and learn together.</p>
                    </div>
                </div>

            </section>



        </div>
    )
}

export default Page