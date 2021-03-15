const app = getApp();

Component({
  behaviors: [],

  options: {
    addGlobalClass: true,
  },

  properties: {
    prop1: {
      type: String,
      value: "",
    },
  },

  data: {
    text: "hello",
  },

  behaviors: [],

  // 属性定义（详情参见下文）
  properties: {
    myProperty: {
      // 属性名
      type: String,
      value: "",
    },
    myProperty2: String, // 简化的定义方式
  },

  data: {}, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {},
    moved() {},
    detached() {},
  },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() {},
    hide() {},
    resize() {},
  },

  methods: {
    onMyButtonTap() {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      });
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod() {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        "A[0].B": "myPrivateData",
      });
    },
    _propertyChange(newVal, oldVal) {},
  },
});
