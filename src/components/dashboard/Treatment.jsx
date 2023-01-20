import React, {useState} from 'react'
import TreatmentCard from './TreatmentCard'
import "./Treatment.css"

function Treatment({treatmentStats, treatData}) {
  
  const [searchValue, setSearchValue] = useState('')
  
    // search functionality
    const getFilteredTreatments = () => {
      if (!searchValue) return treatmentStats
      return treatData?.filter(
          treatment => treatment.category.toLowerCase().includes(searchValue.toLowerCase())
      )
  }

  const filteredTreatment = getFilteredTreatments()


  return (
    <>
     <div className="vaccine_title" id='treatment'><b>The following are some of the treatments and their categories</b></div>
       <div className='ml-4  flex justify-end mt-4 '>
                    <div className=''>
                        <label>Search Treatment </label>
                        <input  onChange={(e) => setSearchValue(e.target.value)} className='rounded-3xl text-center w-7/12 bg-white text-danger' type='search' placeholder='search treatment category....' />
                    </div>
                </div>

                <section className='bg-slate-200 m-auto h-[65vh] mt-2 w-11/12  pb-2 overflow-hidden hover:overflow-y-scroll rounded-md'>
                   
                   <div className=' m-2  grid grid-cols-3 gap-4 '>
                       {filteredTreatment?.map((treatment, index) => {
                           return (
                            <TreatmentCard
                            key={index}
                            title={treatment.trimedName}
                            content={treatment.category}       
                         />
                           )
                       })}

                   </div>
               </section>

               </>
  )
}
  {/* return (
    <>
    <div id='treatment'><b>The following are some of the covid 19 treatments that have been done</b></div>
    <div className='treatment_class'>

   
         { treatmentStats?.map((treatment, index) => {
    return(

<TreatmentCard
   key={index}
   title={treatment.trimedName}
   content={treatment.category}

/>
        )

})}
    </div>
    </>
  )
} */}

export default Treatment