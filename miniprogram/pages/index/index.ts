// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const imageCdn = 'https://tdesign.gtimg.com/site/swiper';
const items = [
    {
        cls: 'item0',
        image: `${imageCdn}/01.png`,
    },
    {
        cls: 'item1',
        image: `${imageCdn}/02.png`,
    },
    {
        cls: 'item2',
        image: `${imageCdn}/03.png`,
    },
    {
        cls: 'item3',
        image: `${imageCdn}/04.png`,
    },
    {
        cls: 'item4',
        image: `${imageCdn}/05.png`,
    },
];

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    items,
    navigation1: { type: 'dots-bar' },
    navigation2: { type: 'fraction' },
    navigation3: { type: '', hasNavBtn: true },
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  onChange(e: any) {
    const { detail: { current, source }, } = e;
    console.log(current, source);
  },
  onAutoplayChange(e: any) {
      this.setData({
          autoplay: e.detail.value,
      });
  },
  onIntervalChange(e: any) {
      this.setData({
          interval: e.detail.value,
      });
  },
  onDurationChange(e: any) {
      this.setData({
          duration: e.detail.value,
      });
  },

  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
