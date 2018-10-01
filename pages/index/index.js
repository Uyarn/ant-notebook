//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '每天起床第一句, 先给自己打个气',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    iconType:'success',
    saveEncourage:false,
    btnImg:{
      src: '../../images/save.png',
      model:'aspectFit'
    }
  },
  //事件处理函数,保存鼓励的话。
  saveEncourage: function() {
    let date = wx.getStorageSync('date')||''
    let now = new Date();
    let encourage;
    console.log(now.getDate())
    if(now.getDate()==date)
       encourage = wx.getStorageSync('encourage')||''
    else
      encourage = wx.setStorageSync('encourage', this.data.encourage)
  },
  // 实时保存input的值
  bindInput:function(e){
    this.setData({
      encourage:e.detail.value
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      let userInfo = app.globalData.userInfo
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
       
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } 
    else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
