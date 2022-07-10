/** @format */

import React from "react";
import AddAndSearch from "../addAndSearch/AddAndSearch";
import List from "../List/List";

import "./SubjectManager.css";

const SubjectManager = () => {
  const subjects = [
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
    {
      ID: 123,
      科目名: "IT日本語",
      学部: "SoICT",
      クレジット: 3,
      クラス数: 3,
    },
  ];
  return (
    <div className='subject-manager'>
      <AddAndSearch />
      <List lists={subjects} special={[2]} ratio='5% auto 21%  18% 14%'/>
    </div>
  );
};

export default SubjectManager;
