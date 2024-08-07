import React from "react"
import Image from "next/image"
import image from "@/public/olympics.png"
import { LuBadgeCheck } from "react-icons/lu"

export interface CategoriesProps {
    id: number
    title: string
    description: string
    image: any
    color?: string
}

const data: CategoriesProps[] = [
    {
        id: 1,
        title: "Quran",
        description: "Learn the Quran",
        image: image,
        color: '#1A44EC'
    },
    {
        id: 2,
        title: "Hadith",
        description: "Learn the Hadith",
        image: image,
        color: '#DB18DE'
    },
    {
        id: 3,
        title: "Fiqh",
        description: "Learn the Fiqh",
        image: image,
        color: '#E72020'
    },
    {
        id: 4,
        title: "Aqeedah",
        description: "Learn the Aqeedah",
        image: image,
        color: '#FFCB00'
    },
    {
        id: 5,
        title: "Tajweed",
        description: "Learn the Tajweed",
        image: image,
        color: '#1AEC39'
    },
    {
        id: 6,
        title: "Arabic",
        description: "Learn the Arabic",
        image: image,
        color: '#000000'
    },
]


export const CategoriesContainer: React.FC<CategoriesProps> = (category) => {
    return (
        <div className="bg-white rounded-2xl mb-14 mx-4">
            <div className="flex mx-3 my-4 gap-5">
                <div className={`w-20 h-20 rounded justify-center bg-[${category.color}] bg-opacity-10`}>
                    {/* <Image className="my-6" src={category.image} alt="Evidence" width={50} height={50} /> */}
                    <LuBadgeCheck color={category.color} size={30} className="my-6 mx-6" />
                </div>
                <div>
                    <h1 className="font-semibold text-xl">{category.title}</h1>
                    <p className="text-sm break-all">{category.description}</p>
                </div>
            </div>
        </div>
    )
}


export const Categories: React.FC = () => {
    return (
        <div className="bg-[#1A44EC] bg-opacity-5 mb-10">
            <div className="my-10">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center mt-10">
                        <h1 className="text-center font-extrabold text-3xl mb-4">Categories</h1>
                        <p className="text-center text-gray-700">Lorem ipsum dolor sit amet consectetur. Mi ornare ipsum pulvinar justo tortor dui magnis <br /> sed. In vel senectus aliquam volutpat adipiscing sit nisi vulputa</p>
                    </div>
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-3 lg:-gap-y-16 lg:gap-x-6 lg:my-20 lg:mx-12">
                    {data.map((category) => (
                        <CategoriesContainer key={category.id} id={category.id} title={category.title} description={category.description} image={category.image} color={category.color} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}


export const ExportedCategories = () => {
    return (
        <div className="bg-[#1A44EC] bg-opacity-5">
            <Categories />
        </div>
    )
}