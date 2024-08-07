import Image from "next/image"
import image from '@/public/olympics.png'
import { LuBadgeCheck } from "react-icons/lu"


interface Evidence {
    id: number,
    title: string,
    description: string,
    image: any,
    color: string
}

interface EvidenceProps {
    evidence: Evidence
}


const data: Evidence[] = [
    {
        id: 1,
        title: "Moral and Ethical Development ",
        description: "The app emphasises moral stories and character-building content, helping children and teenagers develop strong ethical foundations in line with Islamic teachings.",
        image: image,
        color: "bg-[#1A44EC]"
    },
    {
        id: 2,
        title: "Community and Support",
        description: "We foster a sense of community by providing a safe and secure environment where children can learn and grow together, under the supervision of their parents.",
        image: image,
        color: "bg-[#1A44EC]"
    },
    {
        id: 3,
        title: "Engagement and Reflection",
        description: "Interactive elements such as videos, audio, and illustrations encourage deep engagement and reflection, making learning a dynamic and enriching experience.",
        image: image,
        color: "bg-[#1A44EC]"
    },
    {
        id: 4,
        title: "Parental Involvement",
        description: "Parental controls and monitoring features enable parents to actively participate in their children's educational journey, promoting mutual respect and family bonding. By embedding these principles, we aim to create a holistic learning platform that nurtures faith, knowledge, and moral excellence.",
        image: image,
        color: "bg-[#1A44EC]"
    },
    {
        id: 5,
        title: "Knowledge and Education",
        description: "We prioritise the dissemination of Islamic knowledge through structured sections on Seerah, Hadith, Quran, and Moral Stories, ensuring that content is authentic, age-appropriate, and easily accessible.",
        image: image,
        color: "bg-[#1A44EC]"
    }
]


const EvidenceContainer: React.FC<EvidenceProps> = ({ evidence }) => {
    return (
        <div className="bg-white rounded-2xl">
            <div className="flex flex-col gap-3 mx-3 my-4">
                <div className={`w-10 h-10 rounded ${evidence.color}`}>
                    {/* <Image src={evidence.image} alt="Evidence" width={50} height={50} /> */}
                    <LuBadgeCheck color={'white'} size={20} className="mx-2.5 my-2.5" />
                </div>
                <h1 className="font-semibold text-xl">{evidence.title}</h1>
                <p className="text-sm break-all">{evidence.description}</p>
            </div>
        </div>
    )
}



export const Evidence: React.FC = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <div className="flex flex-col gap-5 justify-center m-20">
                <div className="flex flex-col justify-center">
                    <h1 className="text-center font-extrabold text-3xl mb-4">Our Evidence Based Approach</h1>
                    <p className="text-center text-gray-700">Lorem ipsum dolor sit amet consectetur. Mi ornare ipsum pulvinar justo tortor dui magnis <br/> sed. In vel senectus aliquam volutpat adipiscing sit nisi vulputa</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-5 justify-center m-10 mb-20 bg-[#FAFAFA]">
                <div className="flex flex-col lg:flex-row gap-5 space-y-5">
                    {data.slice(0, 3).map((evidence) => (
                        <EvidenceContainer key={evidence.id} evidence={evidence} />
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row group-first:w-2/3 group-last:w-1/3 gap-5">
                    {data.slice(3, 5).map((evidence) => (
                        <EvidenceContainer key={evidence.id} evidence={evidence} />
                    ))}
                </div>
            </div>
        </div>
    )
}