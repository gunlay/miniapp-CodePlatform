App({
  globalData: {
    userInfo: null,
    role: null
  },
  
  onLaunch() {
    // 读取本地存储的角色信息
    const role = wx.getStorageSync('userRole')
    if (role) {
      this.globalData.role = role
    }
  }
}) 