import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, ShieldCheck } from 'lucide-react';

const benefits = [
    {
        icon: <Leaf className="w-8 h-8 text-leaf" />,
        title: "Eco-Friendly",
        description: "Reduce your carbon footprint with our 100% renewable energy sources sourced from sustainable biomass."
    },
    {
        icon: <Zap className="w-8 h-8 text-olive" />,
        title: "High Efficiency",
        description: "Optimized energy output ensures you get the most power for every unit of fuel consumed."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-leaf" />,
        title: "Reliable Supply",
        description: "Guaranteed consistent supply chain management to keep your operations running 24/7."
    }
];

const Benefits = () => {
    return (
        <section className="py-24 bg-[#6B4638] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Nawasena?</h2>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        We combine sustainability with performance to deliver energy solutions that matter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl border border-white/10 hover:border-leaf hover:shadow-xl hover:shadow-leaf/20 transition-all group"
                        >
                            <div className="bg-[#6B4638]/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#6B4638]/10 group-hover:border-leaf text-[#6B4638]">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-olive transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-charcoal/70 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
