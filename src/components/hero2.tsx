import { ArrowUpRight } from "lucide-react"


const capabilities = () => {
    return (
        <div className="w-full gradient h-[80vh] flex items-center justify-center mt-20">
            <div className=" bg-[#E8EBE6] w-5/6 h-3/4 flex flex-wrap">
                <div className=" relative w-2/4 h-full flex items-center justify-center flex-col gap-15">
                    <span className="absolute right-2 top-2 w-10 h-10 flex items-center justify-center rounded-full"><ArrowUpRight size={30} color="black" /></span>
                    <p className="mb-3 w-auto">Anncouncing</p>
                    <h1 className="font-semibold text-6xl">25M$ Series B</h1>
                    <div className="flex w-3/4 gap-5 flex-wrap justify-center">

                        <img className="w-1/4" src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fbaa65c6b9e41d2071f_40f325bbab724a97844646c4eda9f38a_Framework.svg" alt="" />
                        <img className="w-1/4" src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fba1d24937c2d2a5d09_c86bd57b923b22f2215d04be11d6ba00_Decibel.svg" alt="" />
                        <img className="w-1/4" src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fba6c0a7e33559ffa97_df7b451423d343dca540dfbc0564cf90_Inovia.svg" alt="" />
                        <img className="w-1/4" src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fba48d725e347a5aad7_68b3ad076a4e27c9b4ced23db21a790e_Hubspot.svg" alt="" />
                        <img className="w-1/4" src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/68546fbaae6f30e584e42bf2_d6ef04b6a7215a1d6aacb10ae01fc6b3_Delloite.svg" alt="" />
                    </div>
                </div>
                <div className="w-2/4 h-full bg-red-50">
                    <img src="https://cdn.prod.website-files.com/635c4eeb78332f7971255095/6830c4359cf7fec4432fc1d0_2c582af6ad6317b55dba6b6876fcf52d_series-b.gif" alt="tea" className="h-full" />
                </div>
            </div>
        </div>
    )
}

export default capabilities