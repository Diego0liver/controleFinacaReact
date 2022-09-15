

import React, { useState } from 'react'


const Form = ({ add }) => {
  const [desc, setDesc] = useState("")
  const [amount, setAmount] = useState("")
  const [isExpense, setExpense] = useState(true)

  const geraID = () => Math.random(Math.random() * 1000)

  const salve = () => {
    if (!desc || !amount){
      alert("Informe descrição e valor")
      return}else if(amount < 1){
          alert("O valor precisa ser positivo")
      }
      const transacaos = {
        id: geraID(),
        desc: desc,
        amount: amount,
        expense: isExpense
      }
      add(transacaos)
      setAmount("");
      setDesc("");
  }
  return (
    <div className='contForm'>
      <div className='contInputForm'>
      <label>Descrição</label>
      <input value={desc} onChange={(e) => setDesc(e.target.value)}
      ></input>
      </div>
      <div className='contInputForm'>
      <label>Valor</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} ></input>
      </div>
      <div className='radioGrup'>
        <input  
        type="radio" 
        id='rIcon' defaultChecked
        name='grup1'
        onChange={() => setExpense(!isExpense)}
        ></input>
        <label htmlFor='rIcon' >Entrada</label>
        <input 
        type="radio" 
        id='rExpress' 
        name='grup1'
        onChange={() => setExpense(!isExpense)}
        ></input>
        <label htmlFor='rExpress' >Saida</label>    
      </div>
      <button onClick={salve}>Adicionar</button>
      
    </div> 
     
  )
}

export default Form