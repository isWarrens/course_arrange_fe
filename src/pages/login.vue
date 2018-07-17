<template>
  <div class="form_container" ref="loginpage">
      <div class="container" ref="container">
        <div class="logo_container">
          <img src="../assets/logo.jpg" class="logo">
        </div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
        </FormItem>
       </Form>
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
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        clientHeight: ''
      }
    },
    mounted(){
      this.clientHeight = document.documentElement.clientHeight;
      this.$refs.loginpage=this.$refs.loginpage;
      this.$refs.container=this.$refs.container;
    },
    watch: {
        clientHeight: function(){
          this.changeFixed(this.clientHeight)
        }
    },

    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      changeFixed(clientHeight){
        console.log(clientHeight);
        this.clientHeight = document.documentElement.clientHeight;
        this.$refs.loginpage.style.height=clientHeight+'px';
        this.$refs.container.style.position='relative';
        this.$refs.container.style.top=(clientHeight-300)/2+'px';
      }
    }
  }
</script>
<style>
  .form_container{
    width: 100%;
    background: url("../assets/loginpage_img.jpg") 50%  no-repeat fixed;
  }
  .container{
    width: 20%;
    height: 300px;
    background-color: white;
    margin: 0 auto;
    border-radius: 4px;
  }
  .logo_container{
    width: 100%;
    text-align: center;
  }
  .logo{
    width: 90px;
    height: 90px;
  }
</style>
