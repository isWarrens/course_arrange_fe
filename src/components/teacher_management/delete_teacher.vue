<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
export default {
  data () {
    return {
      columns7: [
        {
          title: '工号',
          key: 'num',
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
          title: '教师',
          key: 'teacher'
        },
        {
          title: '密码',
          key: 'passwd'
        },
        {
          title: '指令',
          key: 'action',
          width: 150,
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
              }, 'View'),
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
          num:"8503",
          teacher:"饶泓",
          passwd: '0297'
        },
        {
          num:"8503",
          teacher:"饶泓",
          passwd: '0297'
        },
        {
          num:"8503",
          teacher:"饶泓",
          passwd: '0297'
        },
        {
          num:"8503",
          teacher:"饶泓",
          passwd: '0297'
        },
        {
          num:"8503",
          teacher:"饶泓",
          passwd: '0297'
        }
      ]
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: 'User Info',
        content: `工号：${this.data6[index].num}<br>教师：${this.data6[index].teacher}<br>密码：${this.data6[index].passwd}`
      })
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
}
</script>
