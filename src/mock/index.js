//造轮子的地方
import Mock from 'mockjs'
const seeCourse=Mock.mock(
  '/class/seeCourse','get', (req, res) =>{
    return{
      code:200,
      data: [{
        work_number: '521',
        teacher_name: '汪4额',
        course_name: '物理',
        class_name: '软工1794',
        room_name: '软件楼135',
        when: '第五节',
        weekly: '6'
      },
      {
      work_number: '521',
      teacher_name: '汪额',
      course_name: '物理',
      class_name: '软工1792',
      room_name: '软件楼136',
      when: '第五节',
      weekly: '7'
    },
     {
       work_number: '521',
       teacher_name: '汪4',
       course_name: '物理',
       class_name: '软工1791',
       room_name: '软件楼138',
       when: '第五节',
       weekly: '5'
     }]
    }
  }
)
const applyCourse=Mock.mock(
  '/class/applyCourse','post', (req, res) =>{
    return{
      message: '操作成功'  //后端直接返回结果
    }
  }
)
