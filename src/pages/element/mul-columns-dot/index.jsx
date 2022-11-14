import React, { useState } from 'react';
import { Tooltip } from 'antd';
import './index.less';

const InteractItem = (props) => {
  const [groupInfo, setGroupInfo] = useState({
    id: 380,
    institutionId: 2481870,
    classTypeId: 137158,
    userId: 2755814,
    groupName: '111111',
    year: -1,
    semester: '',
    period: -1,
    classCycle: '',
    timeInterval: '',
    beginTime: '1970-01-01 00:00:00',
    endTime: '1970-01-01 00:00:00',
    createTime: '2022-09-21T03:26:42.000+00:00',
    updateTime: '2022-09-21T03:26:42.000+00:00',
    enableStatus: 1,
    createId: 2755814,
    updateId: -1,
    hideStatus: 0,
    classCycleStr: '',
    timeIntervalStr: '',
    periodStr: '无期次',
    itvCourseName: '2021秋初一英语wyl课程测试专用',
    studentNum: 0,
    teacherName: '李鹏',
    correctionNum: 0,
    correctionDivisionNum: 0,
    xkhStudentCourseList: null,
    experience: 0,
    classStyle: null,
    cardType: null,
  });
  const [lessonInfo, setLessonInfo] = useState({
    id: 10251,
    institutionId: 2481870,
    classTypeId: 137158,
    xkhTeacherCourseId: 380,
    lessonId: 1127535123,
    aiLessonId: 7092,
    lockStatus: 2,
    enableStatus: 1,
    createTime: '2022-09-21T03:26:42.000+00:00',
    updateTime: '2022-09-21T07:46:46.000+00:00',
    createId: 2755814,
    updateId: 2755814,
    coursewareVersion: '12',
    palyState: 0,
    giveLessonState: 0,
    beforeClassState: -1,
    customsPassState: 0,
    startTeachingTime: '1969-12-31T16:00:00.000+00:00',
    coursewareConfig:
      '[{"after":false,"among":false,"before":false,"beginTime":0.0,"duration":14.52,"endTime":14.52,"firstImgUrl":"https://doubletea-video.aixuexi.com/itv/img/07g11/135/2207/13/07g11135220713uhq3h7r3wk6l5.jpg","index":0,"lastPush":false,"name":"东方闪电1","study":true},{"after":false,"among":false,"before":false,"beginTime":14.52,"duration":36.24,"endTime":50.76,"firstImgUrl":"https://doubletea-video.aixuexi.com/itv/img/07g013210816xh7yqg6nvah20.jpg","index":1,"lastPush":false,"name":"豆腐丝2","study":true},{"after":false,"among":true,"before":false,"beginTime":50.76,"duration":17.12,"endTime":67.88,"firstImgUrl":"https://doubletea-video.aixuexi.com/itv/img/07g013210816xh7yqg6nvah20.jpg","index":2,"lastPush":false,"name":"dfsd","study":false}]',
    lessonName: 'wyl新教研自我巩固wwwww',
    xkhTeacherCourseName: null,
    groupStudentNum: null,
    lessonNum: 1,
    studyNum: 0,
    correctionNum: 0,
    correctionDivisionNum: 0,
    repulseNum: 0,
    repulseDivisionNum: 0,
    excellentNum: 0,
    excellentDivisionNum: 0,
    correctionRate: 0,
    lessonTag: 0,
    correctCount: 0,
    correctUserCount: 0,
    studyUserCount: 0,
    completeUserCount: 0,
    submitUserCount: 0,
    studentSubmitRate: 0,
  });

  return (
    <div className="lesson-in-info-title-wrapper">
      <span className="lesson-in-info-title">
        <span className="title">
          {groupInfo.groupName}
          <span className="split" />
          {groupInfo.itvCourseName.length > 10 ? (
            <Tooltip
              placement="top"
              title={
                <span>
                  <span>{groupInfo.itvCourseName}</span>
                </span>
              }
            >
              <span className="limit-content">{groupInfo.itvCourseName}</span>
            </Tooltip>
          ) : (
            <span className="limit-content">{groupInfo.itvCourseName}</span>
          )}
        </span>
        {/* <!--  --> */}
        <span className="item">第{lessonInfo.lessonNum}讲</span>
        {/* <!--  --> */}
        <span className="item">
          {lessonInfo.lessonName.length > 10 ? (
            <Tooltip
              placement="top"
              title={
                <span slot="title">
                  <span>{lessonInfo.lessonName}</span>
                </span>
              }
            >
              <span className="limit-content">{lessonInfo.lessonName}</span>
            </Tooltip>
          ) : (
            <span className="limit-content">{lessonInfo.lessonName}</span>
          )}
        </span>
        {/* <!--  --> */}
        <span className="item">共{groupInfo.studentNum}人</span>
        {/* <!--  --> */}
        <span className="item">课程ID：{groupInfo.classNameTypeId}</span>
      </span>
    </div>
  );
};

export default InteractItem;
