import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Our Services</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center justify-center h-48 group hover:border-leaf transition-colors">
                            <span className="text-charcoal/60 font-medium mb-2 group-hover:text-olive transition-colors">Service {item}</span>
                            <div className="w-12 h-12 bg-stone-100 rounded-full group-hover:bg-leaf/20 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
