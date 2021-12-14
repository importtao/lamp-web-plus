import{d as F,j as I,di as P,F as k,r,o as m,n as d,J as h,p as _,q as c,N as x}from"./index.ff8e7350.js";import{_ as A}from"./TableImg.9652a35f.js";import{f as E}from"./BasicForm.7d393d3b.js";import{u as v}from"./useTable.bf22aedb.js";import{_ as M}from"./PageWrapper.ed878922.js";import{u as $}from"./useDrawer.9766a9b2.js";import{h as N}from"./common.1ec3dc60.js";import{A as p}from"./commonEnum.da040d67.js";import{p as R,r as U}from"./buyOrder.d01a5a76.js";import{_ as W,c as V,s as q}from"./Edit.737edc8c.js";import{B as z}from"./index.13bf9d6e.js";import"./vendor.352e3120.js";import"./useForm.09fdf95d.js";import"./index.71446dfd.js";import"./UpOutlined.b439f448.js";import"./index.d247982f.js";import"./index.7b8b790f.js";import"./uuid.2b29000c.js";import"./get.25e661a1.js";import"./useWindowSizeFn.dd41c952.js";import"./useModal.1ae7183e.js";import"./FullscreenOutlined.f5cc85ae.js";import"./onMountedOrActivated.8814f444.js";import"./useSortable.5969fdf2.js";import"./SettingOutlined.f76703f5.js";import"./index.d0beec9f.js";import"./RedoOutlined.581d77bd.js";import"./useFullScreen.26a2095b.js";import"./index.3afed7da.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.a76dde6b.js";import"./conductUtil.2053f1c8.js";import"./index.33f6c35a.js";import"./scrollTo.fd24d839.js";import"./useBreakpoint.549ec32d.js";import"./responsiveObserve.936f38cb.js";import"./useExpose.5f62a6bf.js";import"./index.4c731c08.js";import"./useFormItem.4d35203f.js";import"./iconUtil.57aac0ee.js";import"./_baseSet.47d9038f.js";import"./hasIn.cdeedf38.js";import"./FileOutlined.c1895460.js";import"./user.301754be.js";import"./transButton.8f04232b.js";import"./DeleteOutlined.11a704c5.js";import"./index.61e91689.js";import"./index.a9a6f329.js";import"./index.0188a107.js";import"./uniqBy.ad809f18.js";import"./_baseIteratee.219a0b59.js";import"./_baseProperty.74f89655.js";import"./findIndex.fb260bab.js";import"./toInteger.3d2a7161.js";import"./index.2a7bb35e.js";import"./download.ff10bfc9.js";import"./index.84d10328.js";import"./dayjs.92837c63.js";import"./index.7e22ace8.js";import"./Col.1d424bff.js";import"./useSize.e519a3af.js";import"./index.3aa06684.js";import"./usePageContext.c47bb441.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./ArrowLeftOutlined.e256a87d.js";import"./index.66116253.js";import"./formValidateService.a395f7ea.js";import"./isNumeric.2bec345d.js";var B=F({name:"BuyOrderManagement",components:{BasicTable:A,PageWrapper:M,EditModal:W,TableAction:E,Badge:z},setup(){const i=P(),{t:s}=I(),{createMessage:l,createConfirm:y}=k(),[D,{openDrawer:n}]=$(),[u,{reload:f,getSelectRowKeys:j}]=v({title:s("lamp.materials.buyOrder.table.title"),api:R,columns:V,formConfig:{labelWidth:120,schemas:q},beforeFetch:N,useSearchForm:!0,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:160,title:s("common.column.action"),dataIndex:"action",slots:{customRender:"action"}}});function b(e,a){a.stopPropagation(),n(!0,{record:e,type:p.COPY})}function g(e){i("/inner/buyOrderDetail/"+e.id)}function o(){n(!0,{type:p.ADD})}function t(e,a){a.stopPropagation(),n(!0,{record:e,type:p.EDIT})}function S(e,a){a.stopPropagation(),n(!0,{record:e,type:p.EDIT})}function T(){f()}async function w(e){await U(e),l.success(s("common.tips.deleteSuccess")),T()}function O(e,a){a.stopPropagation(),(e==null?void 0:e.id)&&w([e.id])}function C(){const e=j();if(!e||e.length<=0){l.warning(s("common.tips.pleaseSelectTheData"));return}y({iconType:"warning",content:s("common.tips.confirmDelete"),onOk:async()=>{await w(e)}})}return{t:s,registerTable:u,registerDrawer:D,handleAdd:o,handleCopy:b,handleEdit:t,handleDelete:O,handleSuccess:T,handleBatchDelete:C,handleArrival:S,handleToDetail:g}}});const H={key:0},K={key:2};function G(i,s,l,y,D,n){const u=r("TableAction"),f=r("Badge"),j=r("BasicTable"),b=r("EditModal"),g=r("PageWrapper");return m(),d(g,{dense:"",contentFullHeight:"",fixedHeight:""},{default:h(()=>[_(j,{onRegister:i.registerTable},{action:h(({record:o})=>[_(u,{actions:[{color:"error",label:"\u67E5\u770B\u8BE6\u60C5",onClick:i.handleToDetail.bind(null,o)}]},null,8,["actions"])]),bodyCell:h(({column:o,record:t,index:S})=>[o.dataIndex==="materials"?(m(),d("span",H,c(t.materialsName)+"-"+c(t.skuName),1)):x("",!0),o.dataIndex==="status"?(m(),d(f,{key:1,status:t.status=="\u521B\u5EFA\u6210\u529F"?"processing":t.status=="\u62D2\u7EDD"?"error":"success",text:t.status},null,8,["status","text"])):x("",!0),o.dataIndex==="createUser"?(m(),d("span",K,c(t.createUserName)+"-"+c(t.createUserPhone),1)):x("",!0)]),_:1},8,["onRegister"]),_(b,{onRegister:i.registerDrawer,onSuccess:i.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}B.render=G;export default B;
