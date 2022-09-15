import React from 'react'


export const Resumoitem = ({title, Icon, value}) => {
  return (
    <div className='contIntem'>
      <div className='haderItem'>
        <div className='titleItem'>{title}</div>
        <Icon />
      </div>
      <div className='totalItem'>{value}</div>
    </div>
  )
}

export default Resumoitem
