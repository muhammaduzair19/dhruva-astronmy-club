import Image from "next/image"
import Podcast from "../components/podcast"

const Podcasts = () => {
    return (
        <div className="w-full min-h-screen text-white px-3 sm:px-10 md:px-16 lg:px-20 z-40">
            <section className="w-full min-h-screen py-10 gap-5 flex flex-col">
                <div className="w-full flex items-center gap-3 justify-between">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-extrabold uppercase">P</h1>
                    <Image src={'/Images/moon1.png'} className="w-14 sm:w-16 md:w-24 lg:w-28 xl:w-36 spin" width={200} height={200} alt="moon" />
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-extrabold uppercase">c</h1>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-extrabold uppercase">a</h1>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-extrabold uppercase">s</h1>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-extrabold uppercase">t</h1>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-extrabold uppercase">s</h1>
                </div>
                <div className="relative p-4 w-full h-[50vh] md:h-[75vh] xl:h-screen bg-[url('/Images/podcastCover1.png')] rounded-2xl bg-no-repeat bg-cover bg-center flex items-end">
                    <span className="absolute">
                        <Image src={'/Images/availableon.png'} width={100} height={100} alt="available on" />
                        <Image src={'/Images/youtube.png'} width={100} height={100} alt="youtube" />
                    </span>
                </div>
                <div className="relative p-4 mt-20 w-full h-[50vh] md:h-[75vh] xl:h-screen bg-[url('/Images/podcastCover2.png')] rounded-2xl bg-no-repeat bg-cover bg-center flex items-end">
                    <span className="absolute ">
                        <Image src={'/Images/availableon.png'} width={100} height={100} alt="available on" />
                        <Image src={'/Images/youtube.png'} width={100} height={100} alt="youtube" />
                    </span>
                </div>
            </section>
            <section className="w-full min-h-screen flex flex-col gap-20 py-20 items-center ">
                <div className="w-full flex justify-between items-center flex-col gap-4 md:flex-row">
                    <h1 className="w-full md:w-1/2 text-5xl md:text-6xl lg:text-8xl font-extrabold uppercase">Podcast of the week</h1>
                    <span className="w-full md:w-1/2 flex flex-col items-start">
                        <p className="text-sm lg:text-lg">Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.</p>
                        <button className="border-2 rounded-md px-6 py-1 mt-3 hover:bg-white hover:text-black duration-700 delay-300 ease-in-out">Learn more</button>
                    </span>
                </div>
                <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Podcast num={'01.'} image={'/Images/podcast1.png'} epi={'SPace buzz ep. 1'} hashtag={'#space #astronmy'} />
                    <Podcast num={'02.'} image={'/Images/podcast2.png'} epi={'SPace buzz ep. 2'} hashtag={'#astronaut #astronmy'} />
                    <Podcast num={'03.'} image={'/Images/podcast3.png'} epi={'SPace buzz ep. 3'} hashtag={'#cosmos #astronmy'} />
                    <Podcast num={'04.'} image={'/Images/podcast4.png'} epi={'SPace buzz ep. 4'} hashtag={'#space #astronmy'} />
                </div>
            </section>


        </div>
    )
}

export default Podcasts



