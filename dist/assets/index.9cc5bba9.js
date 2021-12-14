import{d as I,j as B,a0 as D,F as M,r as a,o as O,n as P,J as r,p as m,L as S,q as w}from"./index.ff8e7350.js";import{_ as k}from"./TableImg.9652a35f.js";import{f as A}from"./BasicForm.7d393d3b.js";import{u as E}from"./useTable.bf22aedb.js";import{_ as R}from"./PageWrapper.ed878922.js";import{u as v}from"./useDrawer.9766a9b2.js";import{h as $}from"./common.1ec3dc60.js";import{A as j}from"./commonEnum.da040d67.js";import{_ as W,c as U,s as V,r as q}from"./Edit.85e55a1c.js";import"./vendor.352e3120.js";import"./useForm.09fdf95d.js";import"./index.71446dfd.js";import"./UpOutlined.b439f448.js";import"./index.d247982f.js";import"./index.7b8b790f.js";import"./uuid.2b29000c.js";import"./get.25e661a1.js";import"./useWindowSizeFn.dd41c952.js";import"./useModal.1ae7183e.js";import"./FullscreenOutlined.f5cc85ae.js";import"./onMountedOrActivated.8814f444.js";import"./useSortable.5969fdf2.js";import"./SettingOutlined.f76703f5.js";import"./index.d0beec9f.js";import"./RedoOutlined.581d77bd.js";import"./useFullScreen.26a2095b.js";import"./index.3afed7da.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.a76dde6b.js";import"./conductUtil.2053f1c8.js";import"./index.33f6c35a.js";import"./scrollTo.fd24d839.js";import"./useBreakpoint.549ec32d.js";import"./responsiveObserve.936f38cb.js";import"./useExpose.5f62a6bf.js";import"./index.4c731c08.js";import"./useFormItem.4d35203f.js";import"./iconUtil.57aac0ee.js";import"./_baseSet.47d9038f.js";import"./hasIn.cdeedf38.js";import"./FileOutlined.c1895460.js";import"./user.301754be.js";import"./transButton.8f04232b.js";import"./DeleteOutlined.11a704c5.js";import"./index.61e91689.js";import"./index.a9a6f329.js";import"./index.0188a107.js";import"./uniqBy.ad809f18.js";import"./_baseIteratee.219a0b59.js";import"./_baseProperty.74f89655.js";import"./findIndex.fb260bab.js";import"./toInteger.3d2a7161.js";import"./index.2a7bb35e.js";import"./download.ff10bfc9.js";import"./index.84d10328.js";import"./dayjs.92837c63.js";import"./index.7e22ace8.js";import"./Col.1d424bff.js";import"./useSize.e519a3af.js";import"./index.3aa06684.js";import"./usePageContext.c47bb441.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./ArrowLeftOutlined.e256a87d.js";import"./index.66116253.js";import"./formValidateService.a395f7ea.js";var _=I({name:"ResourceManagement",components:{BasicTable:k,PageWrapper:R,EditModal:W,TableAction:A},setup(e){const{t:o}=B(),c=D("selectedResourceData"),b=D("currentMenuId"),{createMessage:p,createConfirm:g}=M(),[d,{openDrawer:i}]=v(),[l,{reload:u,getSelectRowKeys:f}]=E({title:o("lamp.system.resource.table.title"),dataSource:c,pagination:!1,columns:U,formConfig:{labelWidth:120,schemas:V},beforeFetch:$,useSearchForm:!1,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:160,title:o("common.column.action"),dataIndex:"action",slots:{customRender:"action"}}});function n(t,s){s.stopPropagation(),i(!0,{record:t,type:j.COPY})}function C(t){let s={menuId:t};console.log(s),i(!0,{record:s,type:j.ADD})}function T(t,s){s.stopPropagation(),i(!0,{record:t,type:j.EDIT})}function h(){u()}async function y(t){await q(t),p.success(o("common.tips.deleteSuccess")),h()}function x(t,s){s.stopPropagation(),(t==null?void 0:t.id)&&y([t.id])}function F(){const t=f();if(!t||t.length<=0){p.warning(o("common.tips.pleaseSelectTheData"));return}g({iconType:"warning",content:o("common.tips.confirmDelete"),onOk:async()=>{await y(t)}})}return{t:o,registerTable:l,registerDrawer:d,handleAdd:C,handleCopy:n,handleEdit:T,handleDelete:x,handleSuccess:h,handleBatchDelete:F,selectedResourceData:c,currentMenuId:b}}});function z(e,o,c,b,p,g){const d=a("a-button"),i=a("TableAction"),l=a("BasicTable"),u=a("EditModal"),f=a("PageWrapper");return O(),P(f,{dense:"",contentFullHeight:"",fixedHeight:""},{default:r(()=>[m(l,{onRegister:e.registerTable},{toolbar:r(()=>[m(d,{type:"primary",onClick:e.handleBatchDelete},{default:r(()=>[S(w(e.t("common.title.delete")),1)]),_:1},8,["onClick"]),m(d,{type:"primary",onClick:o[1]||(o[1]=n=>e.handleAdd(e.currentMenuId))},{default:r(()=>[S(w(e.t("common.title.add")),1)]),_:1})]),action:r(({record:n})=>[m(i,{actions:[{label:e.t("common.title.edit"),onClick:e.handleEdit.bind(null,n)},{label:e.t("common.title.copy"),onClick:e.handleCopy.bind(null,n)},{label:e.t("common.title.delete"),color:"error",popConfirm:{title:e.t("common.tips.confirmDelete"),confirm:e.handleDelete.bind(null,n)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),m(u,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}_.render=z;export default _;
