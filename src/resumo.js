import React from 'react'
import  Resumoitem  from './resumoitem'
import Ups from './icons/up.svg'
import Down from './icons/down.svg'
import Money from './icons/money.svg'

const itemup=()=>{
    return(
        <img src={Ups} style={ {width: 20, height: 25,}} />
    )
}
const itemdows=()=>{
  return(
      <img src={Down} style={ {width: 20, height: 25}} />
  )
}
const itemtotal=()=>{
  return(
      <img src={Money} style={ {width: 20, height: 25}} />
  )
}

const Resumo = ( {income, expense, total} ) => {
  return (
    <div className='conteiner'>
       <Resumoitem title="Entrada" Icon={itemup} value={expense}  /> 
       <Resumoitem title="Saida" Icon={itemdows} value={income} />
       <Resumoitem title="Total" Icon={itemtotal} value={total} />
    </div>
  )
}

export default Resumo