var postsData = require('../../data/posts-data.js')    //只能用绝对路径../

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      postList:postsData.postList
      });
  },

 
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({  
      url: 'post-detail/post-detail?id=' + postId,
    })
  },

  // onSwiperItemTap: function (event) {
  // currentTarget指的是事件捕获的组件
  // currentTarget指的是Swiper
  //   var postId = event.currentTarget.dataset.postid;
  //   wx.navigateTo({
  //     url: 'post-detail/post-detail?id=' + postId,
  //   })
  // },

  onSwiperTap:function(event){
    // target指的是当前点击的组件，
    // target在这里指的的image
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })

    console.log(postId)
  },


  onShareAppMessage: function () {
    
  }
})