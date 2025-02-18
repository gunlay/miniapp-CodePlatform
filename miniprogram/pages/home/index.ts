Page({
  data: {},
  onLoad() {
    // 检查角色
    const { checkRole } = require('../../utils/role')
    checkRole()
  }
}) 