import Image from "next/image"

const Podcast = ({ num, image, epi, hashtag }) => (
    <div className="w-full flex items-center gap-5 py-10 border-b-2">
        <p className="text-xl md:text-2xl xl:text-3xl font-bold">{num}</p>
        <Image src={image} width={130} height={100} alt="Podcast Image" />
        <span>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">{epi}</p>
            <p className="text-sm md:text-lg lg:text-xl font-bold uppercase">{hashtag}</p>
        </span>
    </div>
)

export default Podcast