Page({
  data: {
    leftList: [
      {
        id: 1,
        image: '/images/content/python1.png',
        title: '每晚 8 点后可接Python',
        price: '200',
        orderCount: '5000',
        userAvatar: '/images/avatars/avatar1.png',
        userName: '程序员的微信昵称',
        userTitle: '百度前端工程师',
        isVerified: true
      },
      // 可以添加更多数据
    ],
    rightList: [
      {
        id: 2,
        image: '/images/content/python2.png',
        title: '每晚 8 点后可接Python',
        price: '200',
        orderCount: '5000',
        userAvatar: '/images/avatars/avatar2.png',
        userName: '程序员的微信昵称',
        userTitle: '前端工程师',
        isVerified: false
      },
      // 可以添加更多数据
    ]
  },

  onLoad() {
    // 检查角色
    const { checkRole } = require('../../utils/role')
    checkRole()
  },

  // 修改跳转路径
  onItemTap() {
    wx.navigateTo({
      url: '/pages/detail/index',  // 使用绝对路径，注意是 /pages 开头
      success: function() {
        console.log('Navigation successful')
      },
      fail: function(err) {
        console.error('Navigation failed:', err)
      }
    })
  }
}) 