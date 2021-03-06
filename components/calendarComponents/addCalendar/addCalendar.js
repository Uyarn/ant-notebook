// components/calendarComponents/addCalendar/addCalendar.js
const camera = require('../../../utils/useCamera.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    addCalendar: {
      type: Boolean
    },
    types:{
      type:String
    },
    today: {
      type: String
    },
    tomorrow: {
      type: String
    },
    title: {
      type: String
    },
    radio: {
      type: Boolean,
      default: false
    },
    placehold: {
      type: String
    },
    user: {
      type: String
    },
    memoLists:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    defaultDate: null,
    camSrc:'../../../images/camera.png',
    image:null,
    uploadImg: null,
    scale: false,
    dialogDetail: '',
    time:"00:00"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancelDialog: function (e) {
      let that = this;
      this.setData({
        time:"00:00",
        image:null
      })
      this.triggerEvent('hiddenDialog', true);
    },
    // 保存备忘事项
    determineDialog: function () {
      let data = this.data
      //在日历备忘中
      let memo = this.data.memoLists
      memo.push({ 
          titles: data.titles , 
          content: data.content, 
          image: data.uploadImg,
          time: data.time
           })
      this.triggerEvent('updateMemo', memo);
      this.cancelDialog()
    },
    // 输入内容
    calTitleChange: function (e) {
      this.setData({
        titles: e.detail.value
      })
    },
    calContentChange: function (e){
      this.setData({
        content: e.detail.value
      })
    },
   bindTimeChange:function(e){
     this.setData({
       //给当前time进行赋值
       time: e.detail.value
     })
   },
  //  使用图片
  useAblum : function(){
    let openid = wx.getStorageSync('userId')
    let _this = this
    camera.useCamera(openid,this);
  },
  // 放大图片
  toggleScale: function(e){
    let current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: [current]
      }) 
  }
  }
})
