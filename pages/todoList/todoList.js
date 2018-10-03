// pages/todoList/todoList.js
const formDate = require('../../utils/util.js');
const updateTodo = require('../../utils/updateTodo.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
     textArea:false,
     date:'',
     addSrc:'../../images/add.png',
     dialogShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  addTodo:function(){
    this.setData({
      dialogShow:true
    })
  },
  hiddenDialog:function(e){
    console.log('testing')
    this.setData({
      dialogShow:false
    })
  },
  onLoad: function (options) {
    this.setData({
      date: formDate.formatTime(new Date())
    }) 
    console.log(updateTodo.updateTodo())
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
      
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})