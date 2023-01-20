import React, {useState} from 'react'
import VaccineCard from './VaccineCard'
import './Vaccine.css'

function Vaccine({vaccineStats}) {

  const [searchValue, setSearchValue] = useState('')
  

console.log(vaccineStats);


    // search functionality
    const getFilteredVaccines = () => {
      if (!searchValue) return vaccineStats
      return vaccineStats.filter(
          vaccine => vaccine.phase.toLowerCase().includes(searchValue.toLowerCase())
      )
  }

  const filteredVaccines = getFilteredVaccines()

console.log(filteredVaccines)
  return (
    <>
     <div className="vaccine_title" id='vaccine'><b>The following are some of the various vaccine names and their categories</b></div>
       <div className='ml-4  flex justify-end mt-4 '>
                    <div className=''>
                        <label>Search Vaccine phase </label>
                        <input  onChange={(e) => setSearchValue(e.target.value)} className='rounded-3xl text-center w-7/12 bg-black text-white' type='search' placeholder='search vaccine....' />
                    </div>
                </div>

                <section className='bg-slate-200 m-auto h-[65vh] mt-2 w-11/12  pb-2 overflow-hidden hover:overflow-y-scroll rounded-md'>
                   
                   <div className=' m-2  grid grid-cols-3 gap-4 '>
                       {filteredVaccines?.map((vaccine, index) => {
                           return (
                            <VaccineCard
                            key={index}
                            title={vaccine.trimedName}
                            content={vaccine.category}
                            phase={vaccine.phase}
                         
                         />
                           )
                       })}

                   </div>
               </section>
   
  
    
     {/* { vaccineStats?.map((vaccine, index) => {
    return(


<VaccineCard
   key={index}
   title={vaccine.trimedName}
   content={vaccine.category}
   phase={vaccine.phase}

/>
        )

})} */}
    
     </>
  )
}

export default Vaccine