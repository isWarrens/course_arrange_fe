<template>
  <div class="container">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" style="margin-top: 10px">
      <FormItem>
        <Input v-model="work_number"  placeholder="原密码" class="input"><span slot="prepend">原密码</span></Input>
      </FormItem>
      <FormItem>
        <Input v-model="course_name" placeholder="新密码" class="input"><span slot="prepend">新密码</span></Input>
        </Input>
      </FormItem>
      <FormItem>
        <Input v-model="class_name" placeholder="再次确认" class="input"><span slot="prepend">再次确认新密码</span></Input>
      </FormItem>
    </Form>
    <div class="btn_container">
      <Button type='success' class="btn">确认提交</Button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "reset_psd",
        data (){
          return{

          }
      }
    }
</script>

<style scoped>
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
