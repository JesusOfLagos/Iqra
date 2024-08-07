import Image from "next/image"
import image from "@/public/community.png"
import { BiArrowToRight } from "react-icons/bi"
import { CgArrowRight } from "react-icons/cg"


export const Community: React.FC = () => {
    return (
        <div className="">
            <div className="flex flex-col lg:flex-row lg:m-16 gap-20 -mt-36">
                <div className="flex-1 justify-center mt-40">
                    <div className="space-y-5 m-8">
                        <h1 className="text-3xl font-semibold"><span className="text-[#1A44EC]">Empowering</span> and making the <span className="text-[#DB18DE]">next generation’s Islam</span> better</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Mi ornare ipsum pulvinar justo tortor dui magnis sed. In vel senectus aliquam volutpat adipiscing sit nisi vulputate sed. Nibh turpis neque non eget velit. Est massa sed vitae sed suscipit</p>
                        <button className="bg-[#1A44EC] flex gap-4 px-8 py-3 rounded-full text-white hover:bg-[#061036]">Join Our Community<CgArrowRight size={30} className="-mt-1 font-extrabold" /></button>
                    </div>
                </div>
                <div className="lg:flex-1 mx-6 my-4">
                    <Image src={image} alt="Community" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}