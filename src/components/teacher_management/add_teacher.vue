<template>
  <div class="container">
    <Row>
      <Col span="8" offset="8">
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80" class="formitem">
          <FormItem label="工学" prop="num">
            <Input type="text" v-model="formCustom.num"></Input>
          </FormItem>

          <FormItem label="教师名" prop="teacher">
            <Input type="text" v-model="formCustom.teacher"></Input>
          </FormItem>

          <FormItem label="密码" prop="passwd">
            <Input type="password" v-model="formCustom.passwd"></Input>
          </FormItem>
          <FormItem label="确认密码" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck"></Input>
          </FormItem>

          <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')" class="bt">提交</Button>
            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 5px" class="bt">重置</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入你的密码'));
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次确认密码'));
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次密码不一致'));
        } else {
          callback();
        }
      };

      const validateNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('工号不能为空'));
        }
      };
      const validateTeacher = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('教师名不能为空'));
        }
      };
      return {
        formCustom: {
          passwd: '',
          passwdCheck: '',
          num:"",
          teacher:""
        },
        ruleCustom: {
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
          num: [
            { validator: validateNum, trigger: 'blur' }
          ],
          teacher: [
            { validator: validateTeacher, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
<style scoped>
  .container{
    width: 100%;
    margin: 0 auto;
  }
  .formitem{
    width: 100%;
  }
  .bt{
    width: 50px;
    text-align: center;
  }

</style>
