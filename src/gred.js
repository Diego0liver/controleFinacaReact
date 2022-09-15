import React from 'react'
import  GridItem  from './gridItem'

const Gred = ({ item, setItem }) => {

const onDelet = (ID => {
    const newArray = item.filter((transacaos) => transacaos.id !== ID)
    setItem(newArray)
    localStorage.setItem("transacao", JSON.stringify(newArray))
})

  return (
   <table>
    <thead>
    <tr>
        <th width={40} >Descricao</th>
        <th width={40} >Valor</th>
        <th width={10} >Tipo</th>
        <th width={10} ></th>
    </tr>
    </thead>
    <tbody>
        {item?.map((item, index) => (
            <GridItem key={index} item={item} onDelet={onDelet} />
        ))}
    </tbody>
   </table>
  )
}

export default Gred