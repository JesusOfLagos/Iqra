import Image from 'next/image'
import image from '@/public/iqrastu.png'


export const HomeHero: React.FC = () => {
    return (
        <div className='bg-white'>
            <div className="flex flex-col lg:flex-row lg:-space-x-36 lg:py-4 lg:mx-12">
                <div className="flex-1 -mb-24 mt-6">
                    <Image src={image} alt="Community" width={500} height={500} />
                </div>
                <div className="flex-1 justify-center mt-40">
                    <div className="space-y-5 m-8">
                        <h1 className="text-3xl font-semibold">Learn Pristine Islam to be <span className="text-[#1A44EC]">a mu’min</span> not the <span className="text-[#E72020]">Gen-z muslims.</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Mi ornare ipsum pulvinar justo tortor dui magnis sed. In vel senectus aliquam volutpat adipiscing sit nisi vulputate sed. Nibh turpis neque non eget velit. Est massa sed vitae sed suscipit</p>
                        <button className="bg-[#1A44EC] px-8 py-3 rounded-full text-white hover:bg-[#061036]">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}