

import React, {useState, useEffect} from "react";
import Form from "./form";
import Hader from "./hader";
import Resumo from "./resumo";
import Gred from './gred'



const App = () =>{
  const data = localStorage.getItem("transacao");
  const [transList, setTransList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, seIncome] = useState(0);
  const [expense, setexpense] = useState(0);
  const [total, setTotal] = useState(0);
   useEffect(() => {
    const saidatotal = transList
    .filter((item) => item.expense)
    .map((transacaos) => Number(transacaos.amount));
    const amouttotal = transList
    .filter((item) => !item.expense)
    .map((transacaos) => Number(transacaos.amount));

    const expense = saidatotal.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amouttotal.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const total = Math.abs(income - expense).toFixed(2);

    seIncome(`R$ ${income}`);
    setexpense(`R$ ${expense}`);
    setTotal(`${Number(income) > Number(expense) ? "-" : ""} R$ ${total}`)
   },[transList])

   const add = (transacaos) => {
      const newTransacao = [ ...transList, transacaos ]
      setTransList(newTransacao)

      localStorage.setItem("transacao", JSON.stringify(newTransacao))

   }

    return( 
    <div className="backgroud">
      <Hader />
      <Resumo income={income} expense={expense} total={total} />
      <Form add={add} transList={transList} setTransList={setTransList}/>
      <Gred item={transList} setItem={setTransList}  />
    </div>
    ); 
};

export default App;