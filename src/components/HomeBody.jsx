import React from 'react'
import SearchBar from './SearchBar'
import CategoryCard from './CategoryCard'
import CompanyCard from './CompanyCard'

function HomeBody() {
    return (
        <>
            <div className='h-[27vh] w-full text-black  flex flex-col items-center '>

                <div className='h-[19vh] w-[50vw] mt-[6%] text-5xl font-extrabold pl-[5%]
                '>Find your dream job now
                    <div className='h-[5vh] w-[40vw]  mt-[3%] text-2xl text-black pl-[20%] font-semibold'>5 lakh+ jobs for you to explore
                    </div>
                </div>
            </div>
            <SearchBar />

            <div className=' h-70 w-[85%] mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-6'>
                <CategoryCard text="Remote" />
                <CategoryCard text="MNC" />
                <CategoryCard text="Marketing" />
                <CategoryCard text="Engineering" />
                <CategoryCard text="Sales" />
                <CategoryCard text="Fresher" />
                <CategoryCard text="Startup" />
                <CategoryCard text="Internship" />

            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 p-6 ml-[3%]'>
                <CompanyCard companyLink="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_logo.width-500.format-webp.webp" title="Google" />
                <CompanyCard  companyLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s" title="Microsoft"/>
                <CompanyCard companyLink="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png" title="Amazon" />
                <CompanyCard companyLink="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png" title="Apple" />
                <CompanyCard companyLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIT6YFPiNkWOhpi1KhzbKKGWAUn-v-OFr0Q&s" title="PayPal"/>
                <CompanyCard companyLink="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/1280px-Rakuten_Global_Brand_Logo.svg.png" title="Rakuten" />
            </div>
        </>
    )
}

export default HomeBody
