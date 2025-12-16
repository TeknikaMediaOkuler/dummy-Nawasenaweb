import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">About Us</h2>
                <div className="max-w-3xl mx-auto space-y-6 text-charcoal/80 text-lg">
                    <p>
                        About Us section placeholder content. This is where you can tell the story of your company, mission, and vision.
                    </p>
                    <div className="h-64 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300">
                        <span className="text-slate-400 font-medium">About Us Content / Image Placeholder</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
