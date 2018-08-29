<template>
  <Table border :columns="columns11" :data="data10"></Table>
</template>

<script>
    export default {
        name: "already_examine",
        data () {
          // noinspection JSAnnotator
          return {
            columns11: [
              {
              title: '工号',
              key: 'work_number'
            },
              {
              title: '课程名',
              key: 'course_name'
            },
              /* {
                  title: '年龄',
                  key: 'age',
                  filters: [
                    {
                      label: 'Greater than 25',
                      value: 1
                    },
                    {
                      label: 'Less than 25',
                      value: 2
                    }
                  ],
                  filterMultiple: false,
                  filterMethod (value, row) {
                    if (value === 1) {
                      return row.age > 25;
                    } else if (value === 2) {
                      return row.age < 25;
                    }
                  }
                },*/
              {
              title: '班级名',
              key: 'class_name'
            },
              {
              title: '教室名',
              key: 'room_name'
            },
              {
              title: '节次',
              key: 'when'
            },
              {
                title: '周次',
                key: 'weekly'
              }
            ],
            data10: [
              {
                work_number: 520,
                course_name:'物理',
                class_name:'软工1709班',
                room_name:'软件楼217',
                when:'第5节',
                weekly:'周一',
              },
              {
                work_number: 520,
                course_name:'物理',
                class_name:'软工1709班',
                room_name:'软件楼217',
                when:'第5节',
                weekly:'周一',
              },
              {
                work_number: 520,
                course_name:'物理',
                class_name:'软工1709班',
                room_name:'软件楼217',
                when:'第5节',
                weekly:'周一',
              },
              {
                work_number: 520,
                course_name:'物理',
                class_name:'软工1709班',
                room_name:'软件楼217',
                when:'第5节',
                weekly:'周一',
              },
              {
                work_number: 520,
                course_name:'物理',
                class_name:'软工1709班',
                room_name:'软件楼217',
                when:'第5节',
                weekly:'周一',
              },
              {
                work_number: 520,
                course_name:'物理',
                class_name:'软工1709班',
                room_name:'软件楼217',
                when:'第5节',
                weekly:'周一',
              },
              {
                work_number: 520,
                course_name:'物理',
                class_name:'软工1709班',
                room_name:'软件楼217',
                when:'第5节',
                weekly:'周一',
              }
            ],
          }
        }
    }
</script>

<style scoped>

</style>
