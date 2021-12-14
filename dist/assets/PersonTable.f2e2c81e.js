import{_ as x}from"./TableImg.10c90ed7.js";import{f as h}from"./BasicForm.8a90524a.js";import{u as _}from"./useTable.718a222d.js";import{d as k,r,n as C,p as m,J as c,o as w,L as g}from"./index.b7a14d4f.js";import"./useForm.1103fde3.js";import"./index.bf350d2a.js";import"./UpOutlined.08898d4e.js";import"./index.4c37e48f.js";import"./index.18e73f7c.js";import"./uuid.2b29000c.js";import"./get.17b5f080.js";import"./useWindowSizeFn.1c78bb1f.js";import"./useModal.cb74101d.js";import"./FullscreenOutlined.c2c9b8db.js";import"./onMountedOrActivated.64fcf717.js";import"./useSortable.f7e6c10b.js";import"./SettingOutlined.522a0031.js";import"./index.f8f362f5.js";import"./RedoOutlined.2970476a.js";import"./useFullScreen.d88d5206.js";import"./index.cb0a297c.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.9469ce58.js";import"./conductUtil.b952d6da.js";import"./index.1fe375b7.js";import"./scrollTo.f06f0aa0.js";import"./useBreakpoint.508a26d1.js";import"./responsiveObserve.0e84fd18.js";import"./useExpose.da4b76ce.js";import"./index.2fe134dc.js";import"./useFormItem.3078eec7.js";import"./iconUtil.5323a4d2.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./user.d5977986.js";import"./transButton.928b71e3.js";import"./DeleteOutlined.123b484f.js";import"./commonEnum.da040d67.js";import"./index.b7943f07.js";import"./index.82115275.js";import"./index.5cf0b4b1.js";import"./uniqBy.272154d9.js";import"./_baseIteratee.580b2020.js";import"./_baseProperty.74f89655.js";import"./findIndex.ca0f29b6.js";import"./toInteger.085db34b.js";import"./index.9cae10d5.js";import"./download.19f0ec6f.js";import"./index.ba68f563.js";import"./vendor.352e3120.js";import"./dayjs.77e2c65c.js";import"./index.b5e3a742.js";import"./Col.deca4875.js";import"./useSize.a97ab731.js";import"./index.173fb3cc.js";const F=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],D=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var j=k({components:{BasicTable:x,TableAction:h},setup(){const[o,{getDataSource:n}]=_({columns:F,showIndexColumn:!1,dataSource:D,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function s(e){var t;(t=e.onEdit)==null||t.call(e,!0)}function u(e){var t;if((t=e.onEdit)==null||t.call(e,!1),e.isNew){const i=n(),b=i.findIndex(f=>f.key===e.key);i.splice(b,1)}}function p(e){var t;(t=e.onEdit)==null||t.call(e,!1,!0)}function l(e){console.log(e)}function a(){const e=n(),t={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(t)}function d(e,t){return e.editable?[{label:"\u4FDD\u5B58",onClick:p.bind(null,e,t)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:u.bind(null,e,t)}}]:[{label:"\u7F16\u8F91",onClick:s.bind(null,e)},{label:"\u5220\u9664"}]}return{registerTable:o,handleEdit:s,createActions:d,handleAdd:a,getDataSource:n,handleEditChange:l}}});const E=g(" \u65B0\u589E\u6210\u5458 ");function B(o,n,s,u,p,l){const a=r("TableAction"),d=r("BasicTable"),e=r("a-button");return w(),C("div",null,[m(d,{onRegister:o.registerTable,onEditChange:o.handleEditChange},{action:c(({record:t,column:i})=>[m(a,{actions:o.createActions(t,i)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"]),m(e,{block:"",class:"mt-5",type:"dashed",onClick:o.handleAdd},{default:c(()=>[E]),_:1},8,["onClick"])])}j.render=B;export default j;
