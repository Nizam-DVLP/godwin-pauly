import React from 'react';
import { Building2, Coins, GraduationCap, Globe, Rocket, LineChart } from 'lucide-react';

export function Features() {
    return (
        <section id="features" className="py-16 md:py-24 border-b border-b-gray-200">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-6">
                    <p className="text-xs uppercase font-semibold text-gray-500 tracking-widest">
                        CORE CAPABILITIES
                    </p>
                    <h2 className="text-balance text-4xl font-bold text-black lg:text-5xl">
                        What I Do
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        I design and execute structured income models across real estate transactions, retail distribution, education advisory, and scalable platforms.
                    </p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl border border-gray-200 divide-y divide-gray-200 sm:grid-cols-2 lg:grid-cols-3 sm:divide-y-0 sm:divide-x [&>div]:p-8 md:[&>div]:p-10 bg-white rounded-xl shadow-shadowOne overflow-hidden">
                    <div className="space-y-3 sm:border-b border-gray-200 hover:bg-gray-50/80 transition-colors duration-200">
                        <div className="flex items-center gap-2.5">
                            <Building2 className="w-5 h-5 text-black" />
                            <h3 className="text-base font-bold text-black">Real Estate Advisory</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Helping clients buy, sell, or structure property decisions aligned with long-term financial growth and equity.
                        </p>
                    </div>

                    <div className="space-y-3 sm:border-b border-gray-200 hover:bg-gray-50/80 transition-colors duration-200">
                        <div className="flex items-center gap-2.5">
                            <Coins className="w-5 h-5 text-black" />
                            <h3 className="text-base font-bold text-black">Retail &amp; Cashflow</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Identifying margin-driven retail distribution opportunities and executing short-cycle revenue models.
                        </p>
                    </div>

                    <div
                        onClick={() => window.open('https://rightin.in', '_blank', 'noopener,noreferrer')}
                        className="space-y-3 sm:border-b border-gray-200 hover:bg-gray-50/80 transition-colors duration-200 group cursor-pointer"
                    >
                        <div className="flex items-center gap-2.5">
                            <GraduationCap className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-200" />
                            <h3 className="text-base font-bold text-black">Education Advisory</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Guiding students in selecting PG/UG programs aligned with real earning clarity, ROI, and background.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-gray-50/80 transition-colors duration-200 border-t border-gray-200 sm:border-t-0">
                        <div className="flex items-center gap-2.5">
                            <Globe className="w-5 h-5 text-black" />
                            <h3 className="text-base font-bold text-black">Digital Systems</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Creating leveraged digital channels designed for structured, scalable, and compounding cashflow.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-gray-50/80 transition-colors duration-200 border-t border-gray-200 sm:border-t-0">
                        <div className="flex items-center gap-2.5">
                            <Rocket className="w-5 h-5 text-black" />
                            <h3 className="text-base font-bold text-black">Soft Launch Platform</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            A structured income experimentation platform where operators test, execute, and scale revenue models.
                        </p>
                    </div>

                    <div className="space-y-3 hover:bg-gray-50/80 transition-colors duration-200 border-t border-gray-200 sm:border-t-0">
                        <div className="flex items-center gap-2.5">
                            <LineChart className="w-5 h-5 text-black" />
                            <h3 className="text-base font-bold text-black">Multi-Channel Design</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Designing sustainable revenue systems: clarity first, structure second, and execution always.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
