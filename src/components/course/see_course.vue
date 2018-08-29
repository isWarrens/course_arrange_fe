<template>
  <Table border :columns="columns11" :data="data10"></Table>
</template>

<script>
export default {
  name: "see_course",
  data() {
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
      data10: [],
    }
  },
  mounted(){
    this.$ajax({url: '/class/seeCourse', method: 'get'}).then(res => {
        this.data10 = res.data.data
    })
  }
}
</script>

<style scoped>

</style>
