import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Factory, Truck, Flame } from 'lucide-react';

const steps = [
    {
        icon: <Sprout size={32} />,
        title: "Sourcing",
        description: "We partner with local farmers to collect organic agricultural waste."
    },
    {
        icon: <Factory size={32} />,
        title: "Processing",
        description: "Raw materials are converted into high-density biomass pellets."
    },
    {
        icon: <Truck size={32} />,
        title: "Delivery",
        description: "Reliable logistics ensure timely delivery to your facility."
    },
    {
        icon: <Flame size={32} />,
        title: "Energy",
        description: "Clean combustion provides efficient power for your operations."
    }
];

const Process = () => {
    return (
        <section className="py-24 bg-[#6B4638] relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        A seamless supply chain from farm to factory.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-white border-4 border-white/50 flex items-center justify-center text-leaf mb-6 relative z-10 shadow-xl shadow-black/20">
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-leaf text-charcoal flex items-center justify-center font-bold text-sm border-2 border-primary">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
