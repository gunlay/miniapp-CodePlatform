Page({
  data: {
    title: '',
    content: '',
    durations: [
      { value: '0.5h', label: '0.5h', price: '50元' },
      { value: '1h', label: '1h', price: '100元', selected: true },
      { value: '1.5h', label: '1.5h', price: '150元' },
      { value: '2h', label: '2h', price: '200元' },
      { value: '2.5h', label: '2.5h', price: '250元' }
    ],
    workingHours: [
      { label: '全天', value: 'all' },
      { label: '10:00 前', value: 'before10' },
      { label: '10:00-12:00', value: '10to12' },
      { label: '12:00-14:00', value: '12to14' }
    ],
    selectedDuration: '1h',
    selectedWorkDay: 'all',
    selectedRestDay: 'all',
    startDate: ''
  },

  onLoad() {
    const { checkRole } = require('../../utils/role')
    checkRole()
  },

  // 输入标题
  onTitleInput(e: WechatMiniprogram.Input) {
    this.setData({ title: e.detail.value })
  },

  // 输入内容
  onContentInput(e: WechatMiniprogram.Input) {
    this.setData({ content: e.detail.value })
  },

  // 选择时长
  selectDuration(e: WechatMiniprogram.TouchEvent) {
    const { duration } = e.currentTarget.dataset
    this.setData({ selectedDuration: duration })
  },

  // 选择工作日时间
  selectWorkDay(e: WechatMiniprogram.TouchEvent) {
    const { time } = e.currentTarget.dataset
    this.setData({ selectedWorkDay: time })
  },

  // 选择休息日时间
  selectRestDay(e: WechatMiniprogram.TouchEvent) {
    const { time } = e.currentTarget.dataset
    this.setData({ selectedRestDay: time })
  },

  // 选择日期
  onDateChange(e: WechatMiniprogram.DatePicker) {
    this.setData({ startDate: e.detail.value })
  },

  // 保存草稿
  saveDraft() {
    // TODO: 实现保存草稿功能
    wx.showToast({ title: '已保存草稿', icon: 'success' })
  },

  // 发布
  publish() {
    if (!this.data.title) {
      wx.showToast({ title: '请输入标题', icon: 'none' })
      return
    }
    if (!this.data.content) {
      wx.showToast({ title: '请输入具体服务内容', icon: 'none' })
      return
    }
    // TODO: 实现发布功能
    wx.showToast({ title: '发布成功', icon: 'success' })
  }
}) 