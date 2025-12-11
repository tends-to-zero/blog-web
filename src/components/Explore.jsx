import React from 'react'
import { Card } from './ui/card'
import { Book, Code, Cookie, PaintbrushIcon, WholeWord } from 'lucide-react'

const Explore = () => {
  return (
    <div className='px-5 py-10 lg:px-20'>
      <h1 className='text-center text-3xl font-bold mt-2'>Explore Topics</h1>
      <p className='text-center text-muted-foreground text-lg mt-2 mb-10'>Dive into subjects that spark curiosity and drive innovation</p>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4 mt-5'>
        <Card className='text-center flex flex-col items-center justify-center p-5 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Code />    
            <h2>Web Development</h2>
        </Card>
        <Card className='text-center flex flex-col items-center justify-center p-5 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Cookie />    
            <h2>Cooking</h2>
        </Card>
        <Card className='text-center flex flex-col items-center justify-center p-5 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <WholeWord />
            <h2>Language Learning</h2>
        </Card>
        <Card className='text-center flex flex-col items-center justify-center p-5 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Book />    
            <h2>Literature</h2>
        </Card>
        <Card className='text-center flex flex-col items-center justify-center p-5 hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <PaintbrushIcon />    
            <h2>Art & Design</h2>
        </Card>
      </div>

    </div>
  )
}

export default Explore
