import React from 'react'
import  Resumoitem  from './resumoitem'


const itemup=()=>{
    return(
        <img src='./icons/up.svg' color="green" />
    )
}
const Resumo = ( {income, expense, total} ) => {
  return (
    <div className='conteiner'>
       <Resumoitem title="Entrada" Icon={itemup} value={expense}  /> 
       <Resumoitem title="Saida" Icon={itemup} value={income} />
       <Resumoitem title="Total" Icon={itemup} value={total} />
    </div>
  )
}

export default Resumo