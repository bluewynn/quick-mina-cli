//index.js
Page({
  data: {
    text: "This is page data.",
  },
  onLoad(options) {
    // Do some initialize when page load.
  },
  onShow() {
    // Do something when page show.
  },
  onReady() {
    // Do something when page ready.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onShareTimeline() {
    // return custom share data when user share timeline
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onResize() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  },
});
