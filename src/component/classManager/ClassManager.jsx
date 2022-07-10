import React from 'react'
import AddAndSearch from '../addAndSearch/AddAndSearch'
import List from '../List/List'

import './ClassManager.css'

const ClassManager = () => {
  const classes = [
    {ID: 123, クラス名: 'IT日本語', 担当者: 'Tagashira Nobuyuki', 学生数: 35, 終了日: '2022/07/05'},
    {ID: 123, クラス名: 'IT日本語', 担当者: 'Tagashira Nobuyuki', 学生数: 35, 終了日: '2022/07/05'},
    {ID: 123, クラス名: 'IT日本語', 担当者: 'Tagashira Nobuyuki', 学生数: 35, 終了日: '2022/07/05'},
    {ID: 123, クラス名: 'IT日本語', 担当者: 'Tagashira Nobuyuki', 学生数: 35, 終了日: '2022/07/05'},
    {ID: 123, クラス名: 'IT日本語', 担当者: 'Tagashira Nobuyuki', 学生数: 35, 終了日: '2022/07/05'},
    {ID: 123, クラス名: 'IT日本語', 担当者: 'Tagashira Nobuyuki', 学生数: 35, 終了日: '2022/07/05'},
    {ID: 123, クラス名: 'IT日本語', 担当者: 'Tagashira Nobuyuki', 学生数: 35, 終了日: '2022/07/05'},
    {ID: 123, クラス名: 'IT日本語', 担当者: 'Tagashira Nobuyuki', 学生数: 35, 終了日: '2022/07/05'},
    {ID: 123, クラス名: 'IT日本語', 担当者: 'Tagashira Nobuyuki', 学生数: 35, 終了日: '2022/07/05'}

  ]
  return (
    <div className='class-manager'>
      <AddAndSearch/>
      <List lists={classes} special={[1,2,3]} ratio='5% 20% auto 15% 15%'/>
    </div>
  )
}

export default ClassManager