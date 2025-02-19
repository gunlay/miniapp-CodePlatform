Page({
  data: {
    roles: [
      { 
        id: 'programmer',
        name: '我是程序员',
        icon: '/images/role/programmer.png',
        features: [
          '我要提供代码讲解',
          '我要提供面试辅导',
          '我要技术变现！'
        ]
      },
      { 
        id: 'student',
        name: '我是大学生',
        icon: '/images/role/student.png',
        features: [
          '我要咨询技术方案',
          '我要寻找代码讲解',
          '我要寻找面试辅导'
        ]
      }
    ],
    selectedRole: ''
  },

  onLoad() {
    // 检查是否已经选择过角色
    const role = wx.getStorageSync('userRole')
    if (role) {
      // 如果已选择角色，直接跳转到首页
      wx.switchTab({
        url: '/pages/home/index'
      })
    }
  },

  selectRole(e: WechatMiniprogram.TouchEvent) {
    const { role } = e.currentTarget.dataset
    this.setData({ selectedRole: role })
  },

  confirmRole() {
    if (!this.data.selectedRole) return
    
    wx.setStorageSync('userRole', this.data.selectedRole)
    wx.switchTab({
      url: '/pages/home/index'
    })
  }
})