import React from 'react'

const GridItem = ({item, onDelet}) => {

  return (
    <tr>
        <td>{item.desc}</td>
        <td>{item.amount}</td>
        <td alignCenter>
            {item.expense ? (
               
               <p>Entrada</p>
            ) : (
                <p>Saida</p>
            )}

        </td>
        <td>
           <button className='btnExclui' onClick={()=> onDelet(item.id)}>Excluir</button>
        </td>
    </tr>
  )
}
export default GridItem