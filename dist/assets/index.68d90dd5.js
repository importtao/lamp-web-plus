import{d as C,j as T,F as x,r as n,o as F,n as k,J as s,p as a,L as S,q as _}from"./index.ff8e7350.js";import{_ as B}from"./TableImg.9652a35f.js";import{f as O}from"./BasicForm.7d393d3b.js";import{u as P}from"./useTable.bf22aedb.js";import{_ as A}from"./PageWrapper.ed878922.js";import{u as E}from"./useDrawer.9766a9b2.js";import{h as I}from"./common.1ec3dc60.js";import{A as u}from"./commonEnum.da040d67.js";import{_ as v,p as M,c as $,s as R,r as W}from"./Edit.d3317b43.js";import"./vendor.352e3120.js";import"./useForm.09fdf95d.js";import"./index.71446dfd.js";import"./UpOutlined.b439f448.js";import"./index.d247982f.js";import"./index.7b8b790f.js";import"./uuid.2b29000c.js";import"./get.25e661a1.js";import"./useWindowSizeFn.dd41c952.js";import"./useModal.1ae7183e.js";import"./FullscreenOutlined.f5cc85ae.js";import"./onMountedOrActivated.8814f444.js";import"./useSortable.5969fdf2.js";import"./SettingOutlined.f76703f5.js";import"./index.d0beec9f.js";import"./RedoOutlined.581d77bd.js";import"./useFullScreen.26a2095b.js";import"./index.3afed7da.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.a76dde6b.js";import"./conductUtil.2053f1c8.js";import"./index.33f6c35a.js";import"./scrollTo.fd24d839.js";import"./useBreakpoint.549ec32d.js";import"./responsiveObserve.936f38cb.js";import"./useExpose.5f62a6bf.js";import"./index.4c731c08.js";import"./useFormItem.4d35203f.js";import"./iconUtil.57aac0ee.js";import"./_baseSet.47d9038f.js";import"./hasIn.cdeedf38.js";import"./FileOutlined.c1895460.js";import"./user.301754be.js";import"./transButton.8f04232b.js";import"./DeleteOutlined.11a704c5.js";import"./index.61e91689.js";import"./index.a9a6f329.js";import"./index.0188a107.js";import"./uniqBy.ad809f18.js";import"./_baseIteratee.219a0b59.js";import"./_baseProperty.74f89655.js";import"./findIndex.fb260bab.js";import"./toInteger.3d2a7161.js";import"./index.2a7bb35e.js";import"./download.ff10bfc9.js";import"./index.84d10328.js";import"./dayjs.92837c63.js";import"./index.7e22ace8.js";import"./Col.1d424bff.js";import"./useSize.e519a3af.js";import"./index.3aa06684.js";import"./usePageContext.c47bb441.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./ArrowLeftOutlined.e256a87d.js";import"./index.66116253.js";import"./formValidateService.a395f7ea.js";var y=C({name:"StationManagement",components:{BasicTable:B,PageWrapper:A,EditModal:v,TableAction:O},setup(){const{t:e}=T(),{createMessage:d,createConfirm:j}=x(),[b,{openDrawer:r}]=E(),[g,{reload:m,getSelectRowKeys:p}]=P({title:e("lamp.org.station.table.title"),api:M,columns:$,formConfig:{labelWidth:120,schemas:R},beforeFetch:I,useSearchForm:!0,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:160,title:e("common.column.action"),dataIndex:"action",slots:{customRender:"action"}}});function c(t,i){i.stopPropagation(),r(!0,{record:t,type:u.COPY})}function l(){r(!0,{type:u.ADD})}function f(t,i){i.stopPropagation(),r(!0,{record:t,type:u.EDIT})}function o(){m()}async function h(t){await W(t),d.success(e("common.tips.deleteSuccess")),o()}function D(t,i){i.stopPropagation(),(t==null?void 0:t.id)&&h([t.id])}function w(){const t=p();if(!t||t.length<=0){d.warning(e("common.tips.pleaseSelectTheData"));return}j({iconType:"warning",content:e("common.tips.confirmDelete"),onOk:async()=>{await h(t)}})}return{t:e,registerTable:g,registerDrawer:b,handleAdd:l,handleCopy:c,handleEdit:f,handleDelete:D,handleSuccess:o,handleBatchDelete:w}}});function U(e,d,j,b,r,g){const m=n("a-button"),p=n("TableAction"),c=n("BasicTable"),l=n("EditModal"),f=n("PageWrapper");return F(),k(f,{dense:"",contentFullHeight:"",fixedHeight:""},{default:s(()=>[a(c,{onRegister:e.registerTable},{toolbar:s(()=>[a(m,{type:"primary",onClick:e.handleBatchDelete},{default:s(()=>[S(_(e.t("common.title.delete")),1)]),_:1},8,["onClick"]),a(m,{type:"primary",onClick:e.handleAdd},{default:s(()=>[S(_(e.t("common.title.add")),1)]),_:1},8,["onClick"])]),action:s(({record:o})=>[a(p,{actions:[{label:e.t("common.title.edit"),onClick:e.handleEdit.bind(null,o)},{label:e.t("common.title.copy"),onClick:e.handleCopy.bind(null,o)},{label:e.t("common.title.delete"),color:"error",popConfirm:{title:e.t("common.tips.confirmDelete"),confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),a(l,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}y.render=U;export default y;
