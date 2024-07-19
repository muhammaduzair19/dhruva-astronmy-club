import Image from "next/image"
import { leaders } from "../utils/data"

const About = () => {
    return (
        <div className="w-full min-h-screen text-white z-40">
            <section className="w-full h-screen py-10 flex flex-col justify-evenly gap-10 px-6 sm:px-10 md:px-16 lg:px-20">
                <h1 className="text-center z-40 text-4xl md:text-6xl md:text-left xl:text-8xl font-extrabold uppercase ">about us.</h1>
                <div className="flex items-center justify-between gap-2 space-x-2 md:space-x-5 flex-col-reverse md:flex-row">
                    <Image src={'/Images/icon.svg'} width={500} className="w-1/2 absolute opacity-40 md:relative md:opacity-100" height={200} />
                    <p className="text-xs sm:text-sm lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus consequat.
                    </p>
                </div>
            </section>
            <section className="w-full px-0 md:px-16 lg:px-20  my-5">
                <Image className="w-full" src={'/Images/employees.png'} width={600} height={600} />
            </section>

            <section className="w-full flex flex-col min-h-screen px-3 md:px-16 lg:px-20 py-10 gap-10 items-center">
                <h1 className="text-xl sm:text-3xl  text-center md:text-5xl  font-bold uppercase">team leaders of our club</h1>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-4 justify-items-center">
                    {
                        leaders?.map(({ name, post, avatar }) => <Post key={name+post} name={name} post={post} avatar={avatar} />)
                    }
                </div>
            </section>

        </div>
    )
}

export default About


const Post = ({ name, post, avatar }) => (
    <div className="w-48 sm:w-52  flex flex-col items-center">
        <Image className="w-36 h-36 object-fit" src={avatar} width={200} height={200} alt="leader pic" />
        <span className="flex flex-col items-center">
            <p className="text-xl font-bold" > {name}</p>
            <p className="text-xl font-bold" > {post}</p>
        </span>
    </div>
)
