<template>
  <div class="container">
    <Input v-model="work_numeber" placeholder="请输入工号" class="input"><span slot="prepend">工号</span></Input>
    <Input v-model="course_name" placeholder="请输入课程名" class="input"><span slot="prepend">课程</span></Input>
    <Input v-model="class_name" placeholder="请输入班级名" class="input"><span slot="prepend">班级</span></Input>
    <Input v-model="room_name" placeholder="请输入教室名" class="input"><span slot="prepend">教室</span></Input>
    <Input v-model="when" placeholder="请输入节次" class="input"><span slot="prepend">节次</span></Input>
    <Input v-model="weekly" placeholder="请输入周次" class="input"><span slot="prepend">周次</span></Input>
    <div class="btn_container">
      <Button type='success' class="btn">确认提交</Button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      work_number: ''
    }
  }
}
</script>
<style>
  .container{
    width: 100%;
    margin: 0 auto;
  }
  .input{
    width: 20%;
    margin: 10px auto 0 auto;
  }
  .btn_container{
    width: 100%;
    text-align: center;
  }
  .btn{
    width: 20%;
    margin-top: 20px;
  }
</style>
