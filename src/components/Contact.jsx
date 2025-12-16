import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Contact Us</h2>
                <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
                    Get in touch with us for any inquiries or collaborations.
                </p>

                <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                    <div className="space-y-4">
                        <div className="h-12 bg-slate-50 rounded-lg border border-slate-200 w-full"></div>
                        <div className="h-12 bg-slate-50 rounded-lg border border-slate-200 w-full"></div>
                        <div className="h-32 bg-slate-50 rounded-lg border border-slate-200 w-full"></div>
                        <div className="h-12 bg-emerald-500 rounded-full w-full opacity-50"></div>
                    </div>
                    <div className="mt-4 text-sm text-slate-400">Contact Form Placeholder</div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
