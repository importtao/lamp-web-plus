import{_ as j}from"./TableImg.10c90ed7.js";import{f as b}from"./BasicForm.8a90524a.js";import{u as _}from"./useTable.718a222d.js";import{a as h}from"./system.b19b36a0.js";import{b as g}from"./useModal.cb74101d.js";import{_ as x,c as C,s as S}from"./DeptModal.3ce04540.js";import{d as T,r as t,o as D,n as M,p as s,J as r,L as F}from"./index.b7a14d4f.js";import"./useForm.1103fde3.js";import"./index.bf350d2a.js";import"./UpOutlined.08898d4e.js";import"./index.4c37e48f.js";import"./index.18e73f7c.js";import"./uuid.2b29000c.js";import"./get.17b5f080.js";import"./useWindowSizeFn.1c78bb1f.js";import"./onMountedOrActivated.64fcf717.js";import"./useSortable.f7e6c10b.js";import"./SettingOutlined.522a0031.js";import"./index.f8f362f5.js";import"./RedoOutlined.2970476a.js";import"./useFullScreen.d88d5206.js";import"./FullscreenOutlined.c2c9b8db.js";import"./index.cb0a297c.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.9469ce58.js";import"./conductUtil.b952d6da.js";import"./index.1fe375b7.js";import"./scrollTo.f06f0aa0.js";import"./useBreakpoint.508a26d1.js";import"./responsiveObserve.0e84fd18.js";import"./useExpose.da4b76ce.js";import"./index.2fe134dc.js";import"./useFormItem.3078eec7.js";import"./iconUtil.5323a4d2.js";import"./_baseSet.62e0ca1c.js";import"./hasIn.55ea5e75.js";import"./FileOutlined.633a7a92.js";import"./user.d5977986.js";import"./transButton.928b71e3.js";import"./DeleteOutlined.123b484f.js";import"./commonEnum.da040d67.js";import"./index.b7943f07.js";import"./index.82115275.js";import"./index.5cf0b4b1.js";import"./uniqBy.272154d9.js";import"./_baseIteratee.580b2020.js";import"./_baseProperty.74f89655.js";import"./findIndex.ca0f29b6.js";import"./toInteger.085db34b.js";import"./index.9cae10d5.js";import"./download.19f0ec6f.js";import"./index.ba68f563.js";import"./vendor.352e3120.js";import"./dayjs.77e2c65c.js";import"./index.b5e3a742.js";import"./Col.deca4875.js";import"./useSize.a97ab731.js";import"./index.173fb3cc.js";var u=T({name:"DeptManagement",components:{BasicTable:j,DeptModal:x,TableAction:b},setup(){const[e,{openModal:i}]=g(),[d,{reload:m}]=_({title:"\u90E8\u95E8\u5217\u8868",api:h,columns:C,formConfig:{labelWidth:120,schemas:S},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function c(){i(!0,{isUpdate:!1})}function p(o){i(!0,{record:o,isUpdate:!0})}function n(o){console.log(o)}function a(){m()}return{registerTable:d,registerModal:e,handleCreate:c,handleEdit:p,handleDelete:n,handleSuccess:a}}});const B=F(" \u65B0\u589E\u90E8\u95E8 ");function v(e,i,d,m,c,p){const n=t("a-button"),a=t("TableAction"),o=t("BasicTable"),f=t("DeptModal");return D(),M("div",null,[s(o,{onRegister:e.registerTable},{toolbar:r(()=>[s(n,{type:"primary",onClick:e.handleCreate},{default:r(()=>[B]),_:1},8,["onClick"])]),action:r(({record:l})=>[s(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,l)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,l)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),s(f,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}u.render=v;export default u;
