import{d as f,a$ as j,r as i,n as e,J as n,o as t,p as r,M as b,aE as l,aI as u}from"./index.b7a14d4f.js";import{s as _}from"./data.a32591d5.js";import x from"./BaseSetting.96adf581.js";import g from"./SecureSetting.aceadfb4.js";import S from"./AccountBind.874c9f8d.js";import y from"./MsgNotify.ce4386d3.js";import{T as a}from"./index.44eb537e.js";import"./vendor.352e3120.js";import"./BasicForm.8a90524a.js";import"./useFormItem.3078eec7.js";import"./index.1fe375b7.js";import"./index.18e73f7c.js";import"./get.17b5f080.js";import"./conductUtil.b952d6da.js";import"./iconUtil.5323a4d2.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./user.d5977986.js";import"./transButton.928b71e3.js";import"./DeleteOutlined.123b484f.js";import"./commonEnum.da040d67.js";import"./useModal.cb74101d.js";import"./useWindowSizeFn.1c78bb1f.js";import"./FullscreenOutlined.c2c9b8db.js";import"./index.f8f362f5.js";import"./index.2fe134dc.js";import"./css.b1edd3c8.js";import"./index.b7943f07.js";import"./index.82115275.js";import"./uuid.2b29000c.js";import"./index.5cf0b4b1.js";import"./uniqBy.272154d9.js";import"./_baseIteratee.580b2020.js";import"./_baseProperty.74f89655.js";import"./findIndex.ca0f29b6.js";import"./toInteger.085db34b.js";import"./index.9cae10d5.js";import"./download.19f0ec6f.js";import"./index.ba68f563.js";import"./index.bf350d2a.js";import"./UpOutlined.08898d4e.js";import"./index.4c37e48f.js";import"./RedoOutlined.2970476a.js";import"./dayjs.77e2c65c.js";import"./useState.9469ce58.js";import"./index.b5e3a742.js";import"./Col.deca4875.js";import"./responsiveObserve.0e84fd18.js";import"./canUseDom.0bf35682.js";import"./useSize.a97ab731.js";import"./index.173fb3cc.js";import"./useForm.1103fde3.js";import"./header.d801b988.js";import"./index.280bdee5.js";import"./useBreakpoint.508a26d1.js";import"./PlusOutlined.5bcc416d.js";var m=f({components:{ScrollContainer:j,Tabs:a,TabPane:a.TabPane,BaseSetting:x,SecureSetting:g,AccountBind:S,MsgNotify:y},setup(){return{prefixCls:"account-setting",settingList:_,tabBarStyle:{width:"220px"}}}}),Pe=`.account-setting {
  margin: 12px;
  background: #fff;
}
.account-setting .base-title {
  padding-left: 0;
}
.account-setting .ant-tabs-tab-active {
  background-color: #e6f7ff;
}`;function B(o,v,C,$,T,k){const p=i("TabPane"),d=i("Tabs"),c=i("ScrollContainer");return t(),e(c,null,{default:n(()=>[r("div",{ref:"wrapperRef",class:o.prefixCls},[r(d,{"tab-position":"left",tabBarStyle:o.tabBarStyle},{default:n(()=>[(t(!0),e(b,null,l(o.settingList,s=>(t(),e(p,{key:s.key,tab:s.name},{default:n(()=>[(t(),e(u(s.component)))]),_:2},1032,["tab"]))),128))]),_:1},8,["tabBarStyle"])],2)]),_:1})}m.render=B;export default m;
