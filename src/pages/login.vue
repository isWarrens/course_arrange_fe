<template>
  <div class="form_container" ref="loginpage">
      <div class="container" ref="container">
        <div class="logo_container" >
          <img src="../assets/images/logo.jpg" class="logo" style="inline">
        </div>
        <hr class="hr" />
        <Form ref="formInline" :model="formInline" :rules="ruleInline" style="margin-top: 10px">
          <FormItem prop="user" align="center" >
            <Input type="text" v-model="formInline.user" placeholder="Username" class="in">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="工号" align="center">
            <Input type="工号" v-model="formInline.password" placeholder="Password" class="in">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem align="center">
            <Button type="primary" @click="handleSubmit('formInline')" long class="button">登录</Button>
          </FormItem>
        </Form>
        <div class="footer_container">
          <p>请输入学号或者职工号</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    changeHeight () {
      var clientHeight = this.$refs.loginpage.style.height
      console(clientHeight)
      this.$refs.container.style.position = 'relative'
      this.$refs.container.style.top = (clientHeight - 300) / 2 + 'px'
    }
  }
}
</script>
<style>
  .form_container{
    height: 100%;
    width: 100%;
    background: url("../assets/images/loginpage_img.jpg") 50%  no-repeat fixed;
    display: flex;
    align-items: center;
  }
  .container{
    width: 23%;
    height: 340px;
    background-color: white;
    margin:auto;
    border-radius: 4px;
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
  }
  .logo_container{
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .logo{
    width: 90px;
    height: 90px;
  }
  .hr{
    width: 75%;
    display: inline-block;
    margin: 0 auto;
  }
  .button{
    width:76%;
  }
  .in{
    width: 76%;
  }
  .form_container{
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #d2d2d2;
  }
  .form_container p{
    font-size: 16px;
  }
</style>
