Page({
  data: {
    userInfo: {
      avatar: '/images/avatars/default-avatar.png',
      nickname: '学生的微信昵称',
      userId: 'xxxx'
    },
    stats: {
      orders: 12,
      following: 30,
      savings: 600
    },
    orderTypes: [
      { icon: '💻', text: '全部订单' },
      { icon: '💰', text: '待支付' },
      { icon: '⌛', text: '进行中' },
      { icon: '✅', text: '已完成' }
    ],
    menuItems: [
      { icon: '🎫', text: '优惠券' },
      { icon: '🎯', text: '邀请好友' },
      { icon: '🍀', text: '帮助中心' },
      { icon: '⚙️', text: '设置' },
      { icon: '📝', text: '我的发布' },
      { icon: '👀', text: '浏览记录' }
    ]
  },

  onLoad() {
    const { checkRole } = require('../../utils/role')
    checkRole()
  }
}) 