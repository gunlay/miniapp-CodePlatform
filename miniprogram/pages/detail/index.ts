Page({
  data: {
    detail: {
      image: '/images/content/programmer.png',
      title: '百度前端工程师每晚 8 点在线接单，可靠',
      price: '250',
      duration: '1.5h',
      orderCount: '5000+',
      userInfo: {
        avatar: '/images/avatars/avatar1.png',
        nickname: '程序员的微信昵称',
        title: '百度前端工程师',
        isVerified: true
      },
      services: [
        '1. 我可以协助沟通需求、梳理技术方案',
        '2. 提供代码讲解',
        '3. 提供代码源文件......',
        '4. 我的优势在于 xxxxx',
        '5. 我可以协助沟通需求、梳理技术方案',
        '6. 提供代码讲解',
        '7. 提供代码源文件......'
      ],
      availableTime: {
        workDays: ['10:00 前', '10:00-12:00'],
        restDays: ['全天']
      },
      publishTime: '2025.1.22 14:35'
    }
  },

  onLoad() {
    // 移除 options 参数，使用固定数据
  },

  // 联系按钮点击
  onContactTap() {
    wx.showToast({ title: '联系功能开发中', icon: 'none' })
  },

  // 下单按钮点击
  onOrderTap() {
    wx.showToast({ title: '下单功能开发中', icon: 'none' })
  }
}) 