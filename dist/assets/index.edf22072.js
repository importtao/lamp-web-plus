import{_ as j}from"./TableImg.62dc4313.js";import{f as b}from"./BasicForm.ba267815.js";import{u as _}from"./useTable.f7c905cd.js";import{a as h}from"./system.d91b6558.js";import{b as g}from"./useModal.2752a197.js";import{_ as x,c as C,s as S}from"./DeptModal.df9677a8.js";import{d as T,r as t,o as D,n as M,p as s,J as a,L as F}from"./index.b6dfbfcf.js";import"./useForm.93cfb83b.js";import"./index.9816e582.js";import"./UpOutlined.4269b743.js";import"./index.238a8995.js";import"./index.f208c793.js";import"./uuid.2b29000c.js";import"./get.4daef9c8.js";import"./useWindowSizeFn.fee40caf.js";import"./onMountedOrActivated.9d53918d.js";import"./useSortable.f59e44e0.js";import"./SettingOutlined.31bf1a90.js";import"./index.57ea38db.js";import"./RedoOutlined.6634afa6.js";import"./useFullScreen.67aa57a8.js";import"./FullscreenOutlined.fdd43b18.js";import"./index.0c19262d.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.9c0f957d.js";import"./conductUtil.8c9b1169.js";import"./index.658efdb1.js";import"./scrollTo.c0c7cc64.js";import"./useBreakpoint.4a44e358.js";import"./responsiveObserve.7206f913.js";import"./useExpose.6218ae5d.js";import"./index.ffba0b1a.js";import"./useFormItem.23c9ece5.js";import"./iconUtil.018c1850.js";import"./_baseSet.e7326e09.js";import"./hasIn.babd797c.js";import"./FileOutlined.44378449.js";import"./user.45434715.js";import"./transButton.bd1bd746.js";import"./DeleteOutlined.e9575d1c.js";import"./commonEnum.da040d67.js";import"./index.1aad4d44.js";import"./index.e5a6a79c.js";import"./index.672abebf.js";import"./uniqBy.c4f2e7ec.js";import"./_baseIteratee.2e9463e3.js";import"./_baseProperty.74f89655.js";import"./findIndex.c7191173.js";import"./toInteger.e4331dbc.js";import"./index.68ce2096.js";import"./download.d97e990c.js";import"./index.03ecce9c.js";import"./vendor.352e3120.js";import"./dayjs.c72a52f8.js";import"./index.f73b7b74.js";import"./Col.590da3fb.js";import"./useSize.fb5b95d6.js";import"./index.fc5361f4.js";var u=T({name:"DeptManagement",components:{BasicTable:j,DeptModal:x,TableAction:b},setup(){const[e,{openModal:i}]=g(),[d,{reload:c}]=_({title:"\u90E8\u95E8\u5217\u8868",api:h,columns:C,formConfig:{labelWidth:120,schemas:S},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function m(){i(!0,{isUpdate:!1})}function p(o){i(!0,{record:o,isUpdate:!0})}function n(o){console.log(o)}function r(){c()}return{registerTable:d,registerModal:e,handleCreate:m,handleEdit:p,handleDelete:n,handleSuccess:r}}});const B=F(" \u65B0\u589E\u90E8\u95E8 ");function v(e,i,d,c,m,p){const n=t("a-button"),r=t("TableAction"),o=t("BasicTable"),f=t("DeptModal");return D(),M("div",null,[s(o,{onRegister:e.registerTable},{toolbar:a(()=>[s(n,{type:"primary",onClick:e.handleCreate},{default:a(()=>[B]),_:1},8,["onClick"])]),action:a(({record:l})=>[s(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,l)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,l)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),s(f,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}u.render=v;export default u;
