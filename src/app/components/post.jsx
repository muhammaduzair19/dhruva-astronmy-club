import Image from "next/image"

const Post = ({ name, post, avatar }) => (
    <div className="w-48 sm:w-52  flex flex-col items-center">
        <Image className="w-36 h-36 object-fit" src={avatar} width={200} height={200} alt="leader pic" />
        <span className="flex flex-col items-center">
            <p className="text-xl font-bold" > {name}</p>
            <p className="text-xl font-bold" > {post}</p>
        </span>
    </div>
)


export default Post