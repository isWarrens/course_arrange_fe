import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/pages/index')
const login = () => import('@/pages/Login')
const header = () => import('@/components/layout/header')
const layout = () => import('@/components/layout/layout')
const resetPsd = () => import('@/components/accout_number/reset_psd')
const applyCourse = () => import('@/components/course/apply_course')
const seeCourse = () => import('@/components/course/see_course')
const transferCourse = () => import('@/components/course/transfer_course')
const alreadyExamine = () => import('@/components/examine/already_examine')
const waitExamine = () => import('@/components/examine/wait_examine')
const addTeacher = () => import('@/components/teacher_management/add_teacher')
const deleteTeacher = () => import('@/components/teacher_management/delete_teacher')
const viewTimetable = () => import('@/components/timetable/view_timetable')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/layout',
      component: layout,
      children: [
        {
          path: '/layout/h',
          component: Index
        },
        {
          path: '/layout/resetPsd',
          component: resetPsd
        },
        {
          path: '/layout/applyCourse',
          component: applyCourse
        },
        {
          path: '/layout/seeCourse',
          component: seeCourse
        },
        {
          path: '/layout/transferCourse',
          component: transferCourse
        },
        {
          path: '/layout/alreadyExamine',
          component: alreadyExamine
        },
        {
          path: '/layout/waitExamine',
          component: waitExamine
        },
        {
          path: '/layout/addTeacher',
          component: addTeacher
        },
        {
          path: '/layout/deleteTeacher',
          component: deleteTeacher
        },
        {
          path: '/layout/viewTimetable',
          component: viewTimetable
        }
      ]
    }
  ]
})
