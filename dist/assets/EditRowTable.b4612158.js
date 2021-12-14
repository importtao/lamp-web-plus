import{_ as c}from"./TableImg.9ff330fc.js";import{f}from"./BasicForm.2f71c419.js";import{u as j}from"./useTable.bbead477.js";import{o as b}from"./select.30d92ec9.js";import{d as x}from"./table.dc82415b.js";import{d as F,w,r,o as C,n as h,p,J as _}from"./index.05ea33df.js";import"./useForm.f47588eb.js";import"./index.021ff727.js";import"./UpOutlined.b05eb3d5.js";import"./index.d265e78b.js";import"./index.cf387d6d.js";import"./uuid.2b29000c.js";import"./get.f4e2a1c0.js";import"./useWindowSizeFn.bedcc730.js";import"./useModal.024b9b70.js";import"./FullscreenOutlined.6ef047e2.js";import"./onMountedOrActivated.a12ac1c0.js";import"./useSortable.d85458f7.js";import"./SettingOutlined.168a2578.js";import"./index.be446867.js";import"./RedoOutlined.d497a357.js";import"./useFullScreen.446380e8.js";import"./index.7c034053.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.20f1f9ca.js";import"./conductUtil.82525e99.js";import"./index.faeec8a2.js";import"./scrollTo.f3bf3653.js";import"./useBreakpoint.249417d5.js";import"./responsiveObserve.968aa5d0.js";import"./useExpose.f26dd80a.js";import"./index.8795eb20.js";import"./useFormItem.902ca43e.js";import"./iconUtil.d875d1ff.js";import"./_baseSet.e2b00d8d.js";import"./hasIn.3c39ff13.js";import"./FileOutlined.72b26251.js";import"./user.16e1967f.js";import"./transButton.9a1903a9.js";import"./DeleteOutlined.3986c5e6.js";import"./commonEnum.da040d67.js";import"./index.c3f5e4ba.js";import"./index.cfb51f70.js";import"./index.74eb6f9c.js";import"./uniqBy.6f8da1a0.js";import"./_baseIteratee.6051ea54.js";import"./_baseProperty.74f89655.js";import"./findIndex.0ad6ac98.js";import"./toInteger.e36ca646.js";import"./index.1393b71a.js";import"./download.5d8f05f1.js";import"./index.fe88e9db.js";import"./vendor.352e3120.js";import"./dayjs.26660a9f.js";import"./index.e5a1f932.js";import"./Col.8bf95754.js";import"./useSize.c28e111d.js";import"./index.48bbff73.js";const B=[{title:"\u8F93\u5165\u6846",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"\u9ED8\u8BA4\u8F93\u5165\u72B6\u6001",dataIndex:"name7",editRow:!0,width:200},{title:"\u8F93\u5165\u6846\u6821\u9A8C",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"\u8F93\u5165\u6846\u51FD\u6570\u6821\u9A8C",dataIndex:"name2",editRow:!0,editRule:async t=>t==="2"?"\u4E0D\u80FD\u8F93\u5165\u8BE5\u503C":"",width:200},{title:"\u6570\u5B57\u8F93\u5165\u6846",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"\u4E0B\u62C9\u6846",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"\u8FDC\u7A0B\u4E0B\u62C9",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:b},width:200},{title:"\u52FE\u9009\u6846",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:t=>t?"\u662F":"\u5426",width:200},{title:"\u5F00\u5173",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:t=>t?"\u5F00":"\u5173",width:200}];var m=F({components:{BasicTable:c,TableAction:f},setup(){const t=w(""),[s]=j({title:"\u53EF\u7F16\u8F91\u884C\u793A\u4F8B",api:x,columns:B,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function n(e){var i;t.value=e.key,(i=e.onEdit)==null||i.call(e,!0)}function a(e){var i;t.value="",(i=e.onEdit)==null||i.call(e,!1,!1)}async function u(e){var o;await((o=e.onEdit)==null?void 0:o.call(e,!1,!0))&&(t.value="")}function d(e,i){return e.editable?[{label:"\u4FDD\u5B58",onClick:u.bind(null,e,i)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:a.bind(null,e,i)}}]:[{label:"\u7F16\u8F91",disabled:t.value?t.value!==e.key:!1,onClick:n.bind(null,e)}]}return{registerTable:s,handleEdit:n,createActions:d}}});const I={class:"p-4"};function R(t,s,n,a,u,d){const e=r("TableAction"),i=r("BasicTable");return C(),h("div",I,[p(i,{onRegister:t.registerTable},{action:_(({record:o,column:l})=>[p(e,{actions:t.createActions(o,l)},null,8,["actions"])]),_:1},8,["onRegister"])])}m.render=R;export default m;
