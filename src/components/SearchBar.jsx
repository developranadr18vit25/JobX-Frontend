import React from 'react'
import SearchButton from './SearchButton'

function SearchBar() {
    return (
        <>

            <div className='h-[15vh] w-full mt-[2%] text-black  flex justify-center '>
                <input type="text" placeholder='Enter skills / designations / companies' className='w-[40vw] h-[9vh] mt-[1%] ml-[10%] pl-[3%] border-2 rounded-xl'/>
                <SearchButton />
            </div>
        </>
    )
}

export default SearchBar
