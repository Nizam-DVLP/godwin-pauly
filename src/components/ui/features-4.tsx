import React from 'react';
import { Building2, Coins, GraduationCap, Globe, Rocket, LineChart } from 'lucide-react';

export function Features() {
    return (
        <section id="features" className="w-full py-12 sm:py-16 md:py-20 lgl:py-24 border-b border-b-gray-200">
            <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10 md:space-y-12 lgl:space-y-16 px-4 sm:px-6 md:px-8">
                <div className="relative z-10 mx-auto max-w-xl space-y-3 sm:space-y-4 md:space-y-5 text-center">
                    <p className="text-xs uppercase font-semibold text-gray-500 tracking-widest">
                        CORE CAPABILITIES
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-titleFont tracking-tight">
                        What I Do
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        I design and execute structured income models across real estate transactions, retail distribution, education advisory, and scalable platforms.
                    </p>
                </div>

                <div className="relative mx-auto grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3 max-w-2xl lgl:max-w-5xl border border-gray-200 bg-white rounded-xl shadow-shadowOne overflow-hidden">
                    {/* Card 1: Real Estate Advisory */}
                    <div className="p-6 sm:p-7 md:p-8 lgl:p-10 space-y-3 border-b border-gray-200 mdl:border-r lgl:border-r hover:bg-gray-50/80 transition-colors duration-200 group cursor-default">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <Building2 className="w-5 h-5 shrink-0 text-black group-hover:scale-110 transition-transform duration-200" />
                            <h3 className="text-base sm:text-lg font-bold text-black">Real Estate Advisory</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Helping clients buy, sell, or structure property decisions aligned with long-term financial growth and equity.
                        </p>
                    </div>

                    {/* Card 2: Retail & Cashflow */}
                    <div className="p-6 sm:p-7 md:p-8 lgl:p-10 space-y-3 border-b border-gray-200 mdl:border-r-0 lgl:border-r hover:bg-gray-50/80 transition-colors duration-200 group cursor-default">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <Coins className="w-5 h-5 shrink-0 text-black group-hover:scale-110 transition-transform duration-200" />
                            <h3 className="text-base sm:text-lg font-bold text-black">Retail &amp; Cashflow</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Identifying margin-driven retail distribution opportunities and executing short-cycle revenue models.
                        </p>
                    </div>

                    {/* Card 3: Education Advisory */}
                    <div
                        role="link"
                        tabIndex={0}
                        aria-label="Visit RightIn Education Advisory"
                        onClick={() => window.open('https://rightin.in', '_blank', 'noopener,noreferrer')}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                window.open('https://rightin.in', '_blank', 'noopener,noreferrer');
                            }
                        }}
                        className="p-6 sm:p-7 md:p-8 lgl:p-10 space-y-3 border-b border-gray-200 mdl:border-r lgl:border-r-0 hover:bg-gray-50/80 transition-colors duration-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset"
                    >
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <GraduationCap className="w-5 h-5 shrink-0 text-black group-hover:scale-110 transition-transform duration-200" />
                            <h3 className="text-base sm:text-lg font-bold text-black flex items-center gap-1.5">
                                Education Advisory
                                <span className="text-xs text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Guiding students in selecting PG/UG programs aligned with real earning clarity, ROI, and background.
                        </p>
                    </div>

                    {/* Card 4: Digital Systems */}
                    <div className="p-6 sm:p-7 md:p-8 lgl:p-10 space-y-3 border-b border-gray-200 mdl:border-b mdl:border-r-0 lgl:border-b-0 lgl:border-r hover:bg-gray-50/80 transition-colors duration-200 group cursor-default">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <Globe className="w-5 h-5 shrink-0 text-black group-hover:scale-110 transition-transform duration-200" />
                            <h3 className="text-base sm:text-lg font-bold text-black">Digital Systems</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Creating leveraged digital channels designed for structured, scalable, and compounding cashflow.
                        </p>
                    </div>

                    {/* Card 5: Soft Launch Platform */}
                    <div className="p-6 sm:p-7 md:p-8 lgl:p-10 space-y-3 border-b border-gray-200 mdl:border-b-0 mdl:border-r lgl:border-b-0 lgl:border-r hover:bg-gray-50/80 transition-colors duration-200 group cursor-default">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <Rocket className="w-5 h-5 shrink-0 text-black group-hover:scale-110 transition-transform duration-200" />
                            <h3 className="text-base sm:text-lg font-bold text-black">Soft Launch Platform</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            A structured income experimentation platform where operators test, execute, and scale revenue models.
                        </p>
                    </div>

                    {/* Card 6: Multi-Channel Design */}
                    <div className="p-6 sm:p-7 md:p-8 lgl:p-10 space-y-3 border-b-0 mdl:border-b-0 mdl:border-r-0 lgl:border-b-0 lgl:border-r-0 hover:bg-gray-50/80 transition-colors duration-200 group cursor-default">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <LineChart className="w-5 h-5 shrink-0 text-black group-hover:scale-110 transition-transform duration-200" />
                            <h3 className="text-base sm:text-lg font-bold text-black">Multi-Channel Design</h3>
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
