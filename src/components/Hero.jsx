import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react";
import Blurball from "./Blurball";
import { useTheme } from "@/components/theme-provider"

const Hero = () => {
    const { theme } = useTheme();
    return (
        <div className="relative flex mt-10 md:mt-0 justify-around flex-col-reverse md:flex-row items-center md:min-h-[90vh] px-5 md:px-10 gap-10 md:gap-20">
            {theme == 'dark' && <Blurball
                size={300}
                className="bg-primary top-10 left-10"
            />}
            {theme == 'dark' && <Blurball
                size={300}
                className="bg-primary bottom-10 right-10"
            />}

            <div className="text-center md:text-left max-w-2xl">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="text-4xl md:text-7xl lg:text-8xl font-semibold italic mb-5 leading-tighter">
                    Writing That <span className="text-blue-400">Resonates</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="text-lg md:text-xl mb-6">
                    Insights on tech, design, and creativity from a digital craftsman who
                    believes in the power of thoughtful storytelling.
                </motion.p>

                <Button size="lg" className="w-full md:w-auto group gap-2 cursor-pointer">
                    Read the latest post
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
            </div>

            <div className="md:flex justify-center items-center">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, }} className="w-56 h-56 md:w-80 md:h-80 bg-blue-900/30 rounded-2xl backdrop-blur-lg rotate-6" />
            </div>
        </div>
    );
};

export default Hero;
