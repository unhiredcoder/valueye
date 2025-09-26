import { ArrowUpRight } from "lucide-react"

const Capabilities = () => {
    return (
        <div className="w-full gradient h-auto min-h-[50vh] md:h-[80vh] flex items-center justify-center mt-10 md:mt-20 py-10 md:py-0 px-4 sm:px-6 lg:px-8">
            <div className="bg-[#E8EBE6] w-full max-w-6xl h-auto md:h-3/4 flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
                {/* Left Content Section */}
                <div className="relative w-full md:w-1/2 h-auto md:h-full flex items-center justify-center flex-col gap-4 md:gap-8 p-6 md:p-8 lg:p-12">
                    <span className="absolute right-3 top-3 md:right-4 md:top-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/80">
                        <ArrowUpRight size={20} color="black" />
                    </span>
                    
                    <p className="mb-1 md:mb-3 text-xs md:text-sm lg:text-base text-gray-600 font-medium">Announcing</p>
                    
                    <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight">
                        25M$ Series B
                    </h1>
                    
                    {/* Logo Grid */}
                    <div className="flex w-full max-w-xs sm:max-w-md md:max-w-lg gap-2 sm:gap-3 md:gap-4 justify-center mt-4 md:mt-6">
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 md:gap-4 w-full flex-wrap items-center justify-center">
                            
                            <img 
                                className="w-full h-auto max-w-[60px] md:max-w-none" 
                                src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fbaa65c6b9e41d2071f_40f325bbab724a97844646c4eda9f38a_Framework.svg" 
                                alt="Framework" 
                            />
                            <img 
                                className="w-full h-auto max-w-[60px] md:max-w-none" 
                                src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fba1d24937c2d2a5d09_c86bd57b923b22f2215d04be11d6ba00_Decibel.svg" 
                                alt="Decibel" 
                            />
                            <img 
                                className="w-full h-auto max-w-[60px] md:max-w-none" 
                                src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fba6c0a7e33559ffa97_df7b451423d343dca540dfbc0564cf90_Inovia.svg" 
                                alt="Inovia" 
                            />
                            <img 
                                className="w-full h-auto max-w-[60px] md:max-w-none" 
                                src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fba48d725e347a5aad7_68b3ad076a4e27c9b4ced23db21a790e_Hubspot.svg" 
                                alt="Hubspot" 
                            />
                            <img 
                                className="w-full h-auto max-w-[60px] md:max-w-none" 
                                src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fbaae6f30e584e42bf2_d6ef04b6a7215a1d6aacb10ae01fc6b3_Delloite.svg" 
                                alt="Deloitte" 
                            />
                        </div>
                    </div>
                </div>
                
                {/* Right Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-full bg-red-50 flex-shrink-0">
                    <img 
                        src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/6830c4359cf7fec4432fc1d0_2c582af6ad6317b55dba6b6876fcf52d_series-b.gif" 
                        alt="Series B Funding Announcement" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Capabilities