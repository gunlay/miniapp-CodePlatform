Page({
  data: {},
  onLoad() {
    const { checkRole } = require('../../utils/role')
    checkRole()
  }
}) 