import React from 'react'
import data from '../assets/data'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const Featured = () => {
  return (
    <div className='min-h-[90vh] py-5 md:py-10 lg:px-20'>
      <div>
        <h1 className='text-center text-3xl font-bold my-10 '>Featured Blogs</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {data.map((post, index) => (
          <motion.div
            key={post.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.4 }}
          >
            <Link to ={`/blog/${post.id}`}>
              <Card className="overflow-hidden pt-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />

                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Featured
