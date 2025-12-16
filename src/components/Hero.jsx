import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#6B4638]">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-leaf/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-olive/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-leaf text-sm font-medium mb-6 border border-white/20">
                        The Future of Energy
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Powering a <br />
                        <span className="text-black bg-clip-text bg-gradient-to-r from-leaf to-olive">
                            Sustainable Future
                        </span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Nawasena provides cutting-edge renewable energy solutions designed to transform how industries consume power. Efficient, clean, and reliable.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="group bg-leaf hover:bg-olive text-charcoal px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-leaf/20">
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 rounded-full text-white border border-white/20 hover:bg-white/10 transition-all text-lg font-medium">
                            Learn More
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
