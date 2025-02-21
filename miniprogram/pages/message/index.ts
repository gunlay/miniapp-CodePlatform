Page({
  data: {
    categories: [
      { id: 'all', name: '全部' },
      { id: 'system', name: '系统消息' },
      { id: 'chat', name: '聊天消息' },
      { id: 'order', name: '订单消息' }
    ],
    currentCategory: 'all',
    messages: [
      {
        id: 1,
        type: 'system',
        title: '系统通知',
        content: '您的账号已完成实名认证',
        time: '2024-03-13 14:30',
        unread: true
      },
      {
        id: 2,
        type: 'chat',
        avatar: '/images/avatars/avatar1.png',
        name: '张三',
        content: '请问Python课程还可以约吗？',
        time: '2024-03-13 14:20',
        unread: true
      },
      {
        id: 3,
        type: 'order',
        avatar: '/images/avatars/avatar2.png',
        name: '李四',
        content: '订单已完成，等待确认',
        time: '2024-03-13 14:10',
        unread: false
      }
    ]
  },

  onLoad() {
    const { checkRole } = require('../../utils/role')
    checkRole()
  },

  switchCategory(e: WechatMiniprogram.TouchEvent) {
    const { category } = e.currentTarget.dataset
    this.setData({ currentCategory: category })
  }
}) 