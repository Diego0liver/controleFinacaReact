import React from 'react'

import Exclui from './icons/lixo.svg'






const GridItem = ({item, onDelet}) => {

  return (
    <tr>
        <td>{item.desc}</td>
        <td>{item.amount}</td>
        <td alignCenter>
            {item.expense ? (
               
               <p className='i'>Entrada</p>
            ) : (
                <p className='i'>Saida</p>
            )}

        </td>
        <td>
           <img src={Exclui}
           style={ {width: 35, height: 45}} 
           className='btnExclui'  
           onClick={()=> onDelet(item.id)}></img>
        </td>
    </tr>
  )
}
export default GridItem