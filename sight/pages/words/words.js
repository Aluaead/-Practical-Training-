// pages/words/words.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //事件处理函数
  goPic: function () {
    var _this = this
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        wx.uploadFile({
          url: 'https://sight.masure.cn/uploadRouter',
          filePath: 'tempFilePaths[0]',
          name: 'test',
        })
        _this.setData({
          src: res.tempFilePaths
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
    console.log(this.picture)
  },
  
  go(){
    // 判断内容字数、
    function wordsNum() {
      return new Promise((resolve) => {
        if (that.content == '') {
          that.showToast('文章内容不能为空！');
        } else if (that.content.length > 20) {
          that.showToast('字数不能超过20字！');
        } else {
          resolve();
        }
      });
    }


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title:'发文章'
    })
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