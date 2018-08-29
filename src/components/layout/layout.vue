<style scoped>
  .layout{
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .content{
    height: 100%;
  }
  .content_container{
    height: 650px;
    width: 100%;
  }
  .logo{
    float: left;
    width:250px;
    line-height: 70px;
  }
</style>
<template>
  <div class="layout">
    <Header :style="{backgroundColor:'#49507F'}"><div class="logo">后台管理系统</div></Header>
    <Sider  :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu theme="dark" width="auto">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            课程模块
          </template>
          <router-link to="/layout/applyCourse"><MenuItem name="1-1">申请课程</MenuItem></router-link>
          <router-link to="/layout/seeCourse"><MenuItem name="1-2">查看课程</MenuItem></router-link>
          <router-link to="/layout/transferCourse"><MenuItem name="1-3">申请调课</MenuItem> </router-link>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            老师管理模块
          </template>
          <router-link to="/layout/addTeacher"><MenuItem name="2-1">增加老师 </MenuItem></router-link>
          <router-link to="/layout/deleteTeacher"><MenuItem name="2-2">删除老师</MenuItem></router-link>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            账号管理模块
          </template>
          <router-link to="/layout/resetPsd"><MenuItem name="3-1">修改密码</MenuItem></router-link>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            审核模块
          </template>
          <router-link to="/layout/waitExamine"><MenuItem name="4-1">未审核</MenuItem></router-link>
          <router-link to="/layout/alreadyExamine"><MenuItem name="4-2">已审核</MenuItem></router-link>
        </Submenu>
        <Submenu name="5">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            查看课表模块
          </template>
          <router-link to="/layout/viewTimetable"><MenuItem name="5-1"> 查看课表</MenuItem></router-link>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '20px'}">
      <Content :style="{padding: '16px 16px 16px 16px'}">
        <Breadcrumb :style="{margin: '16px'}">
        </Breadcrumb>
        <Card>
          <div class="content">
            <keep-alive>
            <router-view></router-view>
            </keep-alive>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
</script>
