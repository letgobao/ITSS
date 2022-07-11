import React, {useState} from 'react'
import List from '../List/List'
import Input from '../input/Input'
import MODAL from '../MODAL/MODAL'
import MySelect from '../Select/MySelect'
import Calendar from '../../img/calendar.svg'
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
  const subjects = [
    {
      label: "IT日本語1",
      value: 1
    },
    {
      label: "IT日本語2",
      value: 2
    },
    {
      label: "IT日本語3",
      value: 3
    },
    {
      label: "IT日本語4",
      value: 4
    },
    {
      label: "IT日本語5",
      value: 5
    }    
  ]
  const teachers = [
    { value: 'Tagashira Nobuyuki', label: 'Tagashira Nobuyuki'},
    { value: 'Ryo Kimura', label: 'Ryo Kimura'},
    { value: 'Toshikazu Matsunami', label: 'Toshikazu Matsunami'},
    { value: 'Nguyen Hong Diem', label: 'Nguyen Hong Diem'}
  ]
  const [modalOpen, setModalOpen] = useState(false)
  const ModalBody = ({closeModal}) => {
    return (
      <div className='class-modal'>
        <div>
          <div className='modal-label'>クラス名</div>
          <Input lineHeight='25px' width='75%'/>
        </div>
        <div>
          <div className='multi-label'>
            <div className='modal-label'>科目</div>
            <MySelect source={subjects} placeholder=''/>
          </div>
          <div className='multi-label'>
            <div className='modal-label'>担当者</div>
            <MySelect source={teachers} placeholder=''/>
          </div>
        </div>
        <div>
            <div className='modal-label'>担当者</div>
            <Input lineHeight='25px' width='175px'/>
            <img src={Calendar} style={{width: '30px', marginLeft: '10px'}} />
        </div>
        <div className='modal-button'>
            <button style={{background: '#3FAA9D'}} onClick={closeModal}>保存</button>
            <button style={{background: '#FF5656'}} onClick={closeModal}>キャンセル</button>
        </div>
      </div>
    )
  }
  return (    
    <div className='class-manager'>
      <div className='add-search'>
        <button onClick={()=> setModalOpen(true)}>追加</button>
        <Input />
      </div>
      <List lists={classes} special={[1,2,3]} ratio='5% 20% auto 15% 15%'/>
      <MODAL body={<ModalBody closeModal={()=>setModalOpen(false)}/>} open={modalOpen} setClose={()=>setModalOpen(false)}/>
    </div>
  )
}

export default ClassManager