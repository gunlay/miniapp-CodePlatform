export type UserRole = 'student' | 'programmer'

export const getRoleInfo = () => {
  return wx.getStorageSync('userRole') as UserRole
}

export const setRoleInfo = (role: UserRole) => {
  wx.setStorageSync('userRole', role)
}

export const checkRole = () => {
  const role = getRoleInfo()
  if (!role) {
    wx.redirectTo({
      url: '/pages/role/index'
    })
    return false
  }
  return true
} 