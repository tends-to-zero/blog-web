import { useParams } from "react-router-dom";
import data from '../assets/data';
import {motion} from 'motion/react'
import Lazyimage from "./Lazyimage";

const Blogpost = () => {
  const {id} = useParams();
  const post = data.find(b => b.id == id);
  return (
    <motion.div initial={{opacity:0, y : 20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="px-5 md:px-10 lg:px-20">
      <h1 className="text-6xl my-10">{post.title}</h1>
      <Lazyimage src={post.image} alt={post.title} className="w-full max-h-96 mb-2 object-cover rounded-lg" />
      <div className="flex items-center gap-5 mb-5 justify-between text-muted-foreground">
        <span>By {post.author}</span>
        <span>{post.date}</span>
        <span>{post.readingTime}</span>
      </div>
      <div className="mb-2">
        {post.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-500/30 text-blue-500 px-3 py-1 rounded-full text-sm mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-xl">{post.excerpt}</p>
    </motion.div>
  )
}

export default Blogpost
