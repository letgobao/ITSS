import React from 'react'
import './Tabs.css'
const Tabs = ({setTab, tab}) => {
  return (
    <div className='Tabs'>
        <div className={ tab === 1 ? 'tab-active' : ''} onClick={()=>setTab(1)}>学生一覧</div>
        <div className={ tab === 2 ? 'tab-active' : ''} onClick={()=>setTab(2)}>科目一覧</div>
        <div className={ tab === 3 ? 'tab-active' : ''} onClick={()=>setTab(3)}>クラス一覧</div>
    </div>
  )
}

export default Tabs