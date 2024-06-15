import React from 'react'

const Transcations = ({transctions}) => {

    const data = transctions 
    console.log(transctions)
  return ( 
    <div>
        <div className="border-2 border-[#223534] text-[12px] rounded-lg sm:text-[18px] h-[400px] no-scrollbar overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="p-2 text-[#0CA3E7]">
              <th className="p-2 sticky top-0 bg-[#050618]">#</th>
              <th className="p-2 sticky top-0 bg-[#050618]">Category</th>
              <th className="p-2 sticky top-0 bg-[#050618]">Amount</th>
              <th className="p-2 sticky top-0 bg-[#050618]"> 
                Transaction ID
              </th>
            </tr>
          </thead>
          <tbody>
            {
            data.map((ele,index) => {
              return (
                <tr key={index + ele.name }>
                  <td className="p-2  text-center">{index + 1}</td>
                  <td className="p-2  text-center ">{ele.category}</td>
                  <td className="p-2  text-center">{ ele.category =='debit' ? -ele.amount/100 : ele.amount/100 }</td>
                  <td className="p-2  text-center">{ele._id}</td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transcations
