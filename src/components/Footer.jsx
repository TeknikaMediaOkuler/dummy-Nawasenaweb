import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="inline-block mb-6">
                            <img src={logo} alt="Nawasena Logo" className="h-16 w-auto object-contain" />
                        </a>
                        <p className="text-gray-400 max-w-md leading-relaxed mb-8">
                            Pioneering the future of renewable energy through sustainable biomass solutions. Join us in creating a cleaner, greener planet.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Linkedin, Facebook].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Process', 'Sustainability', 'Careers', 'News'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                <span>Jl. Panglima Polim No.19A 1, RT.1/RW.6, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160,<br />Jakarta, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>+62 21 5555 0123</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>admin@nawasena.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Nawasena Energy. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
