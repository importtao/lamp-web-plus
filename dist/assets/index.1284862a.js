import{_ as D}from"./index.vue_vue&type=script&lang.fc4a12b0.js";import{_ as O}from"./TableImg.9ff330fc.js";import"./BasicForm.2f71c419.js";import{u as S}from"./useTable.bbead477.js";import{_ as M}from"./PageWrapper.d9e1596c.js";import{g as w}from"./materialsBaseInfo.914ecaa2.js";import{skuCommonColumns as T,refundTimeTableSchema as F,refundTimeTableData as E}from"./data.7f05348a.js";import{d as $,B as L,bH as R,k as h,D as W,w as c,x as N,di as P,aW as U,aX as z,r as s,o as f,n as j,p as r,L as y,q as V,N as k,aF as q}from"./index.05ea33df.js";import{D as C}from"./index.be446867.js";import{T as A}from"./index.cfb51f70.js";import{B as G}from"./index.bfcd36cd.js";import{S as H}from"./SettingOutlined.168a2578.js";import"./index.b2ce6207.js";import"./responsiveObserve.968aa5d0.js";import"./get.f4e2a1c0.js";import"./useForm.f47588eb.js";import"./index.021ff727.js";import"./UpOutlined.b05eb3d5.js";import"./index.d265e78b.js";import"./index.cf387d6d.js";import"./uuid.2b29000c.js";import"./useWindowSizeFn.bedcc730.js";import"./useModal.024b9b70.js";import"./FullscreenOutlined.6ef047e2.js";import"./onMountedOrActivated.a12ac1c0.js";import"./useSortable.d85458f7.js";import"./RedoOutlined.d497a357.js";import"./useFullScreen.446380e8.js";import"./index.7c034053.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.20f1f9ca.js";import"./conductUtil.82525e99.js";import"./index.faeec8a2.js";import"./scrollTo.f3bf3653.js";import"./useBreakpoint.249417d5.js";import"./useExpose.f26dd80a.js";import"./index.8795eb20.js";import"./useFormItem.902ca43e.js";import"./iconUtil.d875d1ff.js";import"./_baseSet.e2b00d8d.js";import"./hasIn.3c39ff13.js";import"./FileOutlined.72b26251.js";import"./user.16e1967f.js";import"./transButton.9a1903a9.js";import"./DeleteOutlined.3986c5e6.js";import"./commonEnum.da040d67.js";import"./index.c3f5e4ba.js";import"./index.74eb6f9c.js";import"./uniqBy.6f8da1a0.js";import"./_baseIteratee.6051ea54.js";import"./_baseProperty.74f89655.js";import"./findIndex.0ad6ac98.js";import"./toInteger.e36ca646.js";import"./index.1393b71a.js";import"./download.5d8f05f1.js";import"./index.fe88e9db.js";import"./vendor.352e3120.js";import"./dayjs.26660a9f.js";import"./index.e5a1f932.js";import"./Col.8bf95754.js";import"./useSize.c28e111d.js";import"./index.48bbff73.js";import"./usePageContext.918ba169.js";import"./index.dbdd549b.js";import"./index.03402249.js";import"./ArrowLeftOutlined.97d250aa.js";import"./isNumeric.2bec345d.js";const X=[{field:"name",label:"\u540D\u79F0"},{field:"unit",label:"\u5355\u4F4D"},{field:"useScene",label:"\u7528\u9014"},{field:"remark",label:"\u5907\u6CE8"}],J=["green","cyan","#2db7f5","purple"];var B=$({components:{Description:D,BasicTable:O,PageWrapper:M,[C.name]:C,Tag:A,Badge:G,Button:L,SettingOutlined:H},name:"materialsDetails",setup(){const e=P(),{currentRoute:v}=R(),p=h(()=>W(v).params),b=c(),m=c(),_=c(new Map),d=c(new Map);N(()=>{w(p.value.id).then(t=>{_.value=new Map(Object.entries(t.skuItemIdMap)),d.value=new Map(Object.entries(t.skuParentIdMap)),m.value=t.skuList,b.value=t.materialsBaseInfo})});const u=h(()=>{let t=[];return d.value.forEach((n,a)=>{t.push({title:n.name,key:n.keyStr,dataIndex:n.keyStr,type:"sku",width:120,index:n.orderIndex})}),[...t,...T]}),[g]=S({title:"\u89C4\u683C\u5E93\u5B58",dataSource:m,columns:u,pagination:!1,showIndexColumn:!0,scroll:{y:900},bordered:!0}),[I]=S({title:"\u5E93\u5B58\u53D8\u66F4\u8BB0\u5F55",columns:F,pagination:!1,dataSource:E,showIndexColumn:!1,scroll:{y:300}});function x(t){e("/inner/skuDetails/"+t.id)}function l(){e("/inner/materialsEdit/"+p.value.id)}return{params:p,skuList:m,skuItemIdMap:_,skuParentIdMap:d,materialsBaseInfo:b,registerRefundTable:g,registerTimeTable:I,materialsBaseInfoSchema:X,skuCommonColumns:T,colorList:J,toSkuDetails:x,toMaterialsEdit:l,columns:u}}}),jt=`.desc-wrap[data-v-d6042d66] {
  padding: 16px;
}`;const o=q();U("data-v-d6042d66");const K=y(" \u5E93\u5B58\u660E\u7EC6\u7BA1\u7406 "),Q=y("\u7F16\u8F91\u7269\u6599\u53CA\u89C4\u683C\u4FE1\u606F");z();const Y=o((e,v,p,b,m,_)=>{const d=s("Description"),u=s("a-divider"),g=s("Tag"),I=s("Badge"),x=s("SettingOutlined"),l=s("Button"),t=s("BasicTable"),n=s("PageWrapper");return f(),j("div",null,[r(n,{title:"\u7269\u6599\u8BE6\u60C5\u9875"},{rightFooter:o(()=>[r(l,{type:"primary",onClick:e.toMaterialsEdit},{default:o(()=>[Q]),_:1},8,["onClick"])]),default:o(()=>[r(d,{size:"middle",title:"\u7269\u6599\u4FE1\u606F",bordered:!1,column:4,data:e.materialsBaseInfo,schema:e.materialsBaseInfoSchema},null,8,["data","schema"]),r(u),r(t,{onRegister:e.registerRefundTable,style:{"margin-bottom":"80px"}},{bodyCell:o(({column:a,record:i,index:Z})=>[a.type==="sku"?(f(),j(g,{key:0,color:e.colorList[a.index/e.colorList.length]},{default:o(()=>[y(V(i.pathObject[a.dataIndex]&&e.skuItemIdMap.get(i.pathObject[a.dataIndex])&&e.skuItemIdMap.get(i.pathObject[a.dataIndex]).name),1)]),_:2},1032,["color"])):k("",!0),a.dataIndex==="auditType"?(f(),j(I,{key:1,status:i.auditType=="\u4E0D\u5BA1\u6279"?"success":i.auditType=="\u4E3B\u7BA1\u5BA1\u6279"?"warning":"error",text:i.auditType},null,8,["status","text"])):k("",!0),a.key==="option"?(f(),j(l,{key:2,type:"primary",danger:"",onClick:ee=>e.toSkuDetails(i)},{icon:o(()=>[r(x)]),default:o(()=>[K]),_:2},1032,["onClick"])):k("",!0)]),_:1},8,["onRegister"])]),_:1})])});B.render=Y,B.__scopeId="data-v-d6042d66";export default B;
