import React from 'react'
import './List.css'

const List = ({lists, special, ratio }) => {
    let labels = []
  return (
    <div className='list-container'>
        <div className='list-row' style={{gridTemplateColumns: ratio}}>
          {Object.keys(lists[0]).map((label, index) => {
            labels.push(label)
            return (
                <div key={index}>{label}</div>
            )
          })}
        </div>
        {lists.map((item,index) => {
          return (
            <div key={index} className='list-row item' style={{gridTemplateColumns: ratio}}>
              {labels.map((label, index)=> {
                return (
                    <div key={index} className={special.includes(index) ? 'special-font' : ''}>{item[label]}</div>
                )
              })}
            </div>
          );
        })}
      </div>
  )
}

export default List