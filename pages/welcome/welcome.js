Page({
  onTap:function(){
    // wx.navigateTo({
      // 跳转只能有五级
    //   url: '../posts/post',
    // });

    wx.switchTab({
      // 两个页面平行跳转
      url: '../posts/post',
    })
  }
})
