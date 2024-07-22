import Image from "next/image";

const Event = () => {
    return (
        <div className="w-full min-h-screen text-white px-3 sm:px-10 md:px-16 lg:px-20 z-40">


            <section className="w-full h-screen  py-6 md:py-16 xl:py-20">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/Images/eventpage.png')] object-contain flex items-end p-2 sm:p-5 md:p-8 lg:p-10">
                    <h1 className="uppercase text-4xl  md:text-5xl lg:text-7xl xl:text-8xl font-extrabold ">Our Stargazers <br /> Spectacle <span className="text-sm lg:text-xl ">A Journey through the Cosmos</span></h1>
                </div>
            </section>


            <section className="w-full min-h-screen mt-10 relative py-5 sm:py-10 md:py-15 lg:py-20 flex  justify-center flex-col-reverse lg:flex-col gap-6">
                <Image width={400} height={400} src={'/Images/moon1.png'} className='spin w-60 md:w-72 lg:w-80 lg:absolute self-center -top-10 z-30 -left-10' alt="Moon Image" />


                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center top-0 absolute self-center">RECENT EVENTS</h1>
                <div className="flex justify-between flex-col-reverse md:flex-row py-2 w-full h-screen md:px-10">
                    <div className="w-full px-3 lg:w-[3/4] h-full relative flex justify-center bg-cover md:bg-contain bg-center  bg-[url('/Images/event1.png')] bg-no-repeat items-center">
                        <div className="w-full lg:max-w-2xl  px-4 py-8 bg-[#a4a4a4b3] flex flex-col items-start space-y-6 md:space-y-2 drop-shadow-2xl shadow-zinc-800 md:ml-[200px] lg:ml-[400px]">
                            <span className="text-xs">18/07/2023</span>
                            <h2 className="text-2xl lg:text-3xl uppercase font-semibold">talk on dirty matter</h2>
                            <p className="text-xs sm:text-md lg:text-lg">Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.</p>
                            <button className="bg-white text-black px-3 py-1 font-semibold">Read More</button>
                        </div>
                    </div>
                    <span>
                        <h1 className="text-4xl font-bold">#1</h1>
                    </span>
                </div>

            </section>
            <section className="w-full min-h-screen relative  py-5 sm:py-10 md:py-15 lg:py-20 flex  justify-between lg:flex-col gap-3 flex-col md:flex-row h-screen md:px-10">

                <span className="w-1/4">
                    <h1 className="text-4xl font-bold">#2</h1>
                </span>
                <div className="w-full px-3 lg:w-[3/4] h-full relative flex justify-start bg-right bg-[url('/Images/event2.png')] bg-no-repeat items-center">

                    <div className="w-full lg:max-w-2xl  px-4 py-8 bg-[#a4a4a4b3] flex flex-col items-start space-y-3 drop-shadow-2xl shadow-zinc-800 ">
                        <span className="text-xs">18/07/2023</span>
                        <h2 className="text-2xl lg:text-3xl uppercase font-semibold">astronauts we know</h2>
                        <p className="text-xs sm:text-md lg:text-lg">Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.</p>
                        <button className="bg-white text-black px-3 py-1 font-semibold">Read More</button>
                    </div>
                </div>
            </section>

            <section className="w-full py-10 flex gap-24 items-center overflow-hidden group">
                <div className="w-full flex gap-5 animate-loop-scroll group-hover:paused">
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide1.png')]"></span>
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide2.png')]"></span>
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide3.png')]"></span>
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide4.png')]"></span>
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide5.png')]"></span>
                </div>
                <div className="w-full flex gap-5 animate-loop-scroll group-hover:paused" aria-hidden='true'>
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide1.png')]"></span>
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide2.png')]"></span>
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide3.png')]"></span>
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide4.png')]"></span>
                    <span className="min-w-[180px] h-32 md:min-w-[220px]  md:h-44 lg:min-w-[300px] lg:h-[200px] bg-center bg-cover bg-no-repeat bg-[url('/Images/eventSlide5.png')]"></span>
                </div>
            </section>
        </div>
    )
}

export default Event;