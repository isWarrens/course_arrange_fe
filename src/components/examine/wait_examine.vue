<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>

<script>
  export default {
    name: 'wait_examine',
    data () {
      return {
        columns7: [
          {
            title: 'Name',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.name)
              ]);
            }
          },
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
          },
          {
            title: 'Action',
            key: 'action',
            width: 174,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, 'Accpect'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, 'Delete')
              ]);
            }
          }
        ],
        data6: [
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
        ]
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `工号：${this.data6[index]. work_number}<br>课程：${this.data6[index].course_name}<br>班级：${this.data6[index].class_name}教室：${this.data6[index].room_name}<br>节次：${this.data6[index].when}<br>周次：${this.data6[index]. weekly}<br>`
        })
      },
      remove (index) {
        this.data6.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>
