import React, {useState} from 'react'
import Tabs from '../../component/Tabs/Tabs'
import StudentManager from '../../component/studentManager/StudentManager'
import ClassManager from '../../component/classManager/ClassManager'
import SubjectManager from '../../component/subjectManager/SubjectManager'
const Manager = () => {
  const [tab, setTab] = useState(1)
  return (
    <div>
        <Tabs tab={tab} setTab={setTab}/>
        {tab === 1 && <StudentManager/>}
        {tab === 3 && <ClassManager/>}
        {tab === 2 && <SubjectManager/>}
    </div>
  )
}

export default Manager