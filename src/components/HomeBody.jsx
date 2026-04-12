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
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                


            </div>






        </>
    )
}

export default HomeBody
