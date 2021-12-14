import{_ as _sfc_main$1}from"./TableImg.9ff330fc.js";import"./BasicForm.2f71c419.js";import{u as useTable}from"./useTable.bbead477.js";import{_ as _sfc_main$2}from"./PageWrapper.d9e1596c.js";import{s as simpleList}from"./warehouse.1520d651.js";import{a as listByOrderId}from"./buyTaskItem.fe02e6e6.js";import{a as listByOrderId$1}from"./warehouseInventoryRecord.5ddadd4b.js";import{d as detail,b as contractAck,e as arrivalAck,t as transferAck}from"./buyOrder.d49e05b7.js";import{d as defineComponent,cp as Modal,b7 as Spin,v as Input,bJ as Select,cl as SelectOption,cM as Empty,bH as useRouter,k as computed,D as unref,w as ref,x as onMounted,bG as api,r as resolveComponent,o as openBlock,n as createBlock,p as createVNode,J as withCtx,N as createCommentVNode,q as toDisplayString,L as createTextVNode,M as Fragment,aE as renderList}from"./index.05ea33df.js";import{F as Form,a as FormItem}from"./index.e5a1f932.js";import{I as InputNumber}from"./index.021ff727.js";import{D as DatePicker}from"./dayjs.26660a9f.js";import{S as Statistic}from"./index.7b3b43f7.js";import{R as Row,C as Col}from"./index.48bbff73.js";import{D as Divider}from"./index.be446867.js";import{C as Card}from"./index.ff98d06f.js";import{D as Descriptions}from"./index.b2ce6207.js";import{S as Steps}from"./index.914d6c58.js";import{T as Tabs}from"./index.e2b3f20e.js";import"./useForm.f47588eb.js";import"./index.d265e78b.js";import"./index.cf387d6d.js";import"./uuid.2b29000c.js";import"./get.f4e2a1c0.js";import"./useWindowSizeFn.bedcc730.js";import"./useModal.024b9b70.js";import"./FullscreenOutlined.6ef047e2.js";import"./onMountedOrActivated.a12ac1c0.js";import"./useSortable.d85458f7.js";import"./SettingOutlined.168a2578.js";import"./RedoOutlined.d497a357.js";import"./useFullScreen.446380e8.js";import"./index.7c034053.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.20f1f9ca.js";import"./conductUtil.82525e99.js";import"./index.faeec8a2.js";import"./scrollTo.f3bf3653.js";import"./useBreakpoint.249417d5.js";import"./responsiveObserve.968aa5d0.js";import"./useExpose.f26dd80a.js";import"./index.8795eb20.js";import"./useFormItem.902ca43e.js";import"./iconUtil.d875d1ff.js";import"./_baseSet.e2b00d8d.js";import"./hasIn.3c39ff13.js";import"./FileOutlined.72b26251.js";import"./user.16e1967f.js";import"./transButton.9a1903a9.js";import"./DeleteOutlined.3986c5e6.js";import"./commonEnum.da040d67.js";import"./index.c3f5e4ba.js";import"./index.cfb51f70.js";import"./index.74eb6f9c.js";import"./uniqBy.6f8da1a0.js";import"./_baseIteratee.6051ea54.js";import"./_baseProperty.74f89655.js";import"./findIndex.0ad6ac98.js";import"./toInteger.e36ca646.js";import"./index.1393b71a.js";import"./download.5d8f05f1.js";import"./index.fe88e9db.js";import"./vendor.352e3120.js";import"./usePageContext.918ba169.js";import"./index.dbdd549b.js";import"./index.03402249.js";import"./useSize.c28e111d.js";import"./ArrowLeftOutlined.97d250aa.js";import"./Col.8bf95754.js";import"./UpOutlined.b05eb3d5.js";import"./PlusOutlined.cfc7a86d.js";var _sfc_main=defineComponent({components:{BasicTable:_sfc_main$1,PageWrapper:_sfc_main$2,Modal,Spin,Form,FormItem,Input,InputNumber,DatePicker,Select,SelectOption,Statistic,Row,Col,[Divider.name]:Divider,[Card.name]:Card,AEmpty:Empty,[Descriptions.name]:Descriptions,[Descriptions.Item.name]:Descriptions.Item,[Steps.name]:Steps,[Steps.Step.name]:Steps.Step,[Tabs.name]:Tabs,[Tabs.TabPane.name]:Tabs.TabPane},setup(){const{currentRoute}=useRouter(),params=computed(()=>unref(currentRoute).params),warehouseList=ref([]),warehouseMap=ref(new Map),buyTaskItemList=ref(),warehouseInventoryRecordList=ref(),sum=ref(0),spinning=ref(!1),visible=ref(!1),spinning1=ref(!1),visible1=ref(!1),spinning2=ref(!1),visible2=ref(!1),transferParam=ref({}),current=ref(0),buyOrder=ref({}),materialsBaseInfo=ref({}),skuName=ref(""),userMap=ref({});onMounted(()=>{simpleList().then(e=>(warehouseList.value=e,e.forEach(a=>warehouseMap.value.set(a.id,a.name)))),getInfo()});function getInfo(){detail(params.value.id).then(e=>{buyOrder.value=e.buyOrder,materialsBaseInfo.value=e.materialsBaseInfo,skuName.value=e.skuName,userMap.value=e.userMap,buyOrder.value.status=="\u521B\u5EFA\u6210\u529F"?current.value=0:buyOrder.value.status=="\u5408\u540C\u786E\u8BA4"?current.value=1:buyOrder.value.status=="\u5230\u8D27\u786E\u8BA4"?current.value=2:buyOrder.value.status=="\u5B8C\u6210"&&(current.value=3)}),getTaskItemList()}function getTaskItemList(){listByOrderId(params.value.id).then(res=>{buyTaskItemList.value=res,sum.value=eval(buyTaskItemList.value.map(e=>e.quantity).join("+"))|0}),listByOrderId$1(params.value.id).then(e=>{warehouseInventoryRecordList.value=e})}const rules={expectedArrivalTime:[{required:!0,message:"\u9884\u8BA1\u9001\u8FBE\u65F6\u95F4\u4E0D\u80FD\u4E3A\u7A7A"}],actualQuantity:[{required:!0,message:"\u5B9E\u9645\u5230\u8D27\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A"}],quantity:[{required:!0,message:"\u8C03\u62E8\u6570\u91CF\u4E0D\u80FD\u4E3A\u7A7A"}],warehouseId:[{required:!0,message:"\u8C03\u62E8\u5E93\u623F\u4E0D\u80FD\u4E3A\u7A7A"}]};function openContractAck(){visible.value=!0}function contractAck$1(){spinning.value=!0,contractAck(buyOrder.value).then(e=>{api.success("\u63D0\u4EA4\u6210\u529F"),getInfo()}).finally(()=>{spinning.value=!1,visible.value=!1})}function openArrivalAck(){visible1.value=!0}function arrivalAck$1(){spinning1.value=!0,arrivalAck(buyOrder.value).then(e=>{api.success("\u63D0\u4EA4\u6210\u529F"),getInfo()}).finally(()=>{spinning1.value=!1,visible1.value=!1})}function openTransferAck(){visible2.value=!0}function transferAck$1(){spinning2.value=!0,transferParam.value.orderId=buyOrder.value.id,transferAck(transferParam.value).then(e=>{api.success("\u63D0\u4EA4\u6210\u529F"),getInfo()}).finally(()=>{spinning2.value=!1,visible2.value=!1})}const columns=[{title:"\u5E93\u623F",dataIndex:"warehouseId"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u53D1\u8D77\u4EBA",dataIndex:"createUser",width:200},{title:"\u9700\u6C42\u65F6\u95F4",dataIndex:"requireTime"},{title:"\u6570\u91CF",dataIndex:"quantity"},{title:"\u8BF4\u660E",dataIndex:"optionName"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180}],columns1=[{title:"\u5E93\u623F",dataIndex:"warehouseId"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u6570\u91CF",dataIndex:"quantity"},{title:"\u8BF4\u660E",dataIndex:"optionName"},{title:"\u64CD\u4F5C\u4EBA",dataIndex:"createUser",width:200},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180}],[registerTable,{reload,getSelectRowKeys}]=useTable({title:"\u91C7\u8D2D\u4EFB\u52A1\u5217\u8868",dataSource:buyTaskItemList,pagination:!1,columns,formConfig:{labelWidth:120},useSearchForm:!1,showTableSetting:!1,bordered:!0,rowKey:"id"}),[registerTable1,{reload1,getSelectRowKeys1}]=useTable({title:"\u5165\u5E93\u8C03\u62E8\u5355\u5217\u8868",dataSource:warehouseInventoryRecordList,pagination:!1,columns:columns1,formConfig:{labelWidth:120},useSearchForm:!1,showTableSetting:!1,bordered:!0,rowKey:"id"});return{params,currentRoute,buyTaskItemList,warehouseInventoryRecordList,registerTable,registerTable1,columns,columns1,spinning,spinning1,spinning2,visible,visible1,visible2,current,sum,buyOrder,materialsBaseInfo,skuName,userMap,warehouseMap,rules,openContractAck,contractAck:contractAck$1,openArrivalAck,arrivalAck:arrivalAck$1,openTransferAck,transferAck:transferAck$1,transferParam,warehouseList}}});const _hoisted_1=createTextVNode(" \u5408\u540C\u786E\u8BA4 "),_hoisted_2=createTextVNode(" \u5230\u8D27\u786E\u8BA4 "),_hoisted_3={class:"pt-4 m-4 desc-wrap"},_hoisted_4=createVNode("div",null,null,-1),_hoisted_5=createTextVNode(),_hoisted_6=createVNode("div",null,null,-1),_hoisted_7=createTextVNode(),_hoisted_8=createVNode("div",null,null,-1),_hoisted_9=createTextVNode(),_hoisted_10={style:{padding:"50px"}},_hoisted_11=createTextVNode(" \u624B\u52A8\u8C03\u62E8 "),_hoisted_12={key:0},_hoisted_13={key:1},_hoisted_14={key:0},_hoisted_15={key:1},_hoisted_16={style:{padding:"30px",width:"100%"}},_hoisted_17={style:{padding:"30px",width:"100%"}},_hoisted_18={style:{padding:"30px",width:"100%"}};function _sfc_render(e,a,I,x,j,T){const u=resolveComponent("a-button"),s=resolveComponent("a-step"),C=resolveComponent("a-steps"),i=resolveComponent("a-card"),r=resolveComponent("a-descriptions-item"),d=resolveComponent("a-descriptions"),v=resolveComponent("a-divider"),p=resolveComponent("Statistic"),l=resolveComponent("Col"),N=resolveComponent("Row"),y=resolveComponent("BasicTable"),g=resolveComponent("PageWrapper"),_=resolveComponent("DatePicker"),o=resolveComponent("FormItem"),c=resolveComponent("Input"),m=resolveComponent("Form"),f=resolveComponent("Spin"),b=resolveComponent("Modal"),h=resolveComponent("InputNumber"),w=resolveComponent("SelectOption"),V=resolveComponent("Select");return openBlock(),createBlock("div",null,[createVNode(g,{title:"\u8BA2\u5355\u53F7\uFF1A"+e.buyOrder.id,contentBackground:""},{extra:withCtx(()=>[e.buyOrder.status=="\u521B\u5EFA\u6210\u529F"?(openBlock(),createBlock(u,{key:0,type:"primary",onClick:e.openContractAck},{default:withCtx(()=>[_hoisted_1]),_:1},8,["onClick"])):createCommentVNode("",!0),e.buyOrder.status=="\u5408\u540C\u786E\u8BA4"?(openBlock(),createBlock(u,{key:1,type:"primary",danger:"",onClick:e.openArrivalAck},{default:withCtx(()=>[_hoisted_2]),_:1},8,["onClick"])):createCommentVNode("",!0)]),default:withCtx(()=>[createVNode("div",_hoisted_3,[createVNode(i,{title:"\u8BA2\u5355\u8FDB\u5EA6",bordered:!1},{default:withCtx(()=>[createVNode(C,{current:e.current,"progress-dot":"",size:"small"},{default:withCtx(()=>[createVNode(s,{title:"\u521B\u5EFA\u8BA2\u5355"},{description:withCtx(()=>[_hoisted_4,_hoisted_5,createVNode("p",null,toDisplayString(e.buyOrder.createTime),1)]),_:1}),createVNode(s,{title:"\u786E\u8BA4\u91C7\u8D2D\u5408\u540C"},{description:withCtx(()=>[_hoisted_6,_hoisted_7,createVNode("p",null,toDisplayString(e.buyOrder.contractTime),1)]),_:1}),createVNode(s,{title:"\u5230\u8D27\u786E\u8BA4"},{description:withCtx(()=>[_hoisted_8,_hoisted_9,createVNode("p",null,toDisplayString(e.buyOrder.arrivalTime),1)]),_:1}),createVNode(s,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),_:1}),createVNode(i,{title:"\u8BA2\u5355\u4FE1\u606F"},{default:withCtx(()=>[createVNode(d,{title:"\u7269\u6599\u4FE1\u606F",column:3},{default:withCtx(()=>[createVNode(r,{label:"\u7269\u6599\u540D\u79F0"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.materialsBaseInfo.name),1)]),_:1}),createVNode(r,{label:"\u89C4\u683C"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.skuName),1)]),_:1}),createVNode(r,{label:"\u6570\u91CF"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.buyOrder.quantity),1)]),_:1}),createVNode(r,{label:"\u9700\u6C42\u65F6\u95F4"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.buyOrder.minRequireTime),1)]),_:1}),createVNode(r,{label:"\u5907\u6CE8",span:2},{default:withCtx(()=>[createTextVNode(toDisplayString(e.buyOrder.remark),1)]),_:1})]),_:1}),createVNode(v),createVNode(d,{title:"\u5408\u540C\u7B7E\u8BA2\u4FE1\u606F",column:2},{default:withCtx(()=>[createVNode(r,{label:"\u5408\u540C\u4FE1\u606F"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.buyOrder.contractInfo),1)]),_:1}),createVNode(r,{label:"\u4F9B\u5E94\u5546"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.buyOrder.supplierInfo),1)]),_:1}),createVNode(r,{label:"\u9884\u8BA1\u5230\u8FBE\u65F6\u95F4"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.buyOrder.expectedArrivalTime),1)]),_:1}),createVNode(r,{label:"\u5408\u540C\u786E\u8BA4\u65F6\u95F4"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.buyOrder.contractTime),1)]),_:1})]),_:1}),createVNode(v),createVNode(d,{title:"\u4EA4\u8D27\u4FE1\u606F",column:1},{default:withCtx(()=>[createVNode(r,{label:"\u5B9E\u9645\u5230\u8D27\u6570\u91CF"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.buyOrder.actualQuantity),1)]),_:1}),createVNode(r,{label:"\u5230\u8D27\u65F6\u95F4"},{default:withCtx(()=>[createTextVNode(toDisplayString(e.buyOrder.arrivalTime),1)]),_:1})]),_:1})]),_:1}),createVNode(i,{title:"\u8C03\u62E8\u4FE1\u606F",class:"my-5"},{default:withCtx(()=>[createVNode(N,null,{default:withCtx(()=>[createVNode(l,{span:6},{default:withCtx(()=>[createVNode(i,{style:{margin:"10px 10px 0px 0px"}},{default:withCtx(()=>[createVNode(p,{title:"\u76F4\u63A5\u9886\u7528\u51FA\u5E93\uFF08\u6765\u81EA\u9886\u7528\u5DE5\u5355\uFF09",value:e.sum,precision:1,"value-style":{color:"#3f8600"},style:{"margin-right":"50px"}},null,8,["value"])]),_:1})]),_:1}),createVNode(l,{span:6},{default:withCtx(()=>[createVNode(i,{style:{margin:"10px 10px 0px 0px"}},{default:withCtx(()=>[createVNode(p,{title:"\u624B\u52A8\u8C03\u62E8\u6570\u91CF",value:(e.buyOrder.actualQuantity?e.buyOrder.actualQuantity:e.buyOrder.quantity)-e.buyOrder.transferredQuantity-e.sum,precision:1,"value-style":{color:"#3f8600"},style:{"margin-right":"50px"}},null,8,["value"])]),_:1})]),_:1}),createVNode(l,{span:6},{default:withCtx(()=>[createVNode(i,{style:{margin:"10px 10px 0px 0px"}},{default:withCtx(()=>[createVNode(p,{title:"\u5269\u4F59\u5F85\u8C03\u62E8\u6570",value:e.buyOrder.transferredQuantity,precision:1,"value-style":{color:"#cf1322"},style:{"margin-right":"50px"}},null,8,["value"])]),_:1})]),_:1}),createVNode(l,{span:6},{default:withCtx(()=>[createVNode("div",_hoisted_10,[createVNode(u,{type:"primary",danger:"",size:"large",onClick:e.openTransferAck},{default:withCtx(()=>[_hoisted_11]),_:1},8,["onClick"])])]),_:1})]),_:1}),createVNode(y,{onRegister:e.registerTable1},{bodyCell:withCtx(({column:t,record:n,index:k})=>[t.key==="warehouseId"?(openBlock(),createBlock("span",_hoisted_12,toDisplayString(e.warehouseMap.get(n.warehouseId)),1)):createCommentVNode("",!0),t.key==="createUser"?(openBlock(),createBlock("span",_hoisted_13,toDisplayString(n.createUserName)+"-"+toDisplayString(n.createUserPhone),1)):createCommentVNode("",!0)]),_:1},8,["onRegister"]),createVNode(y,{onRegister:e.registerTable},{bodyCell:withCtx(({column:t,record:n,index:k})=>[t.key==="warehouseId"?(openBlock(),createBlock("span",_hoisted_14,toDisplayString(e.warehouseMap.get(n.warehouseId)),1)):createCommentVNode("",!0),t.key==="createUser"?(openBlock(),createBlock("span",_hoisted_15,toDisplayString(n.createUserName)+"-"+toDisplayString(n.createUserPhone),1)):createCommentVNode("",!0)]),_:1},8,["onRegister"])]),_:1})])]),_:1},8,["title"]),createVNode(b,{visible:e.visible,"onUpdate:visible":a[4]||(a[4]=t=>e.visible=t),title:"\u5408\u540C\u786E\u8BA4",onOk:e.contractAck,"confirm-loading":e.spinning},{default:withCtx(()=>[createVNode(f,{spinning:e.spinning},{default:withCtx(()=>[createVNode("div",_hoisted_16,[createVNode(m,{model:e.buyOrder,"label-col":{span:8},"wrapper-col":{span:14},rules:e.rules,ref:"formRef"},{default:withCtx(()=>[createVNode(o,{label:"\u9884\u8BA1\u9001\u8FBE\u65F6\u95F4",name:"expectedArrivalTime"},{default:withCtx(()=>[createVNode(_,{value:e.buyOrder.expectedArrivalTime,"onUpdate:value":a[1]||(a[1]=t=>e.buyOrder.expectedArrivalTime=t),valueFormat:"YYYY-MM-DD"},null,8,["value"])]),_:1}),createVNode(o,{label:"\u5408\u540C\u4FE1\u606F",name:"contractInfo"},{default:withCtx(()=>[createVNode(c,{value:e.buyOrder.contractInfo,"onUpdate:value":a[2]||(a[2]=t=>e.buyOrder.contractInfo=t)},null,8,["value"])]),_:1}),createVNode(o,{label:"\u4F9B\u5E94\u5546",name:"supplierInfo"},{default:withCtx(()=>[createVNode(c,{value:e.buyOrder.supplierInfo,"onUpdate:value":a[3]||(a[3]=t=>e.buyOrder.supplierInfo=t)},null,8,["value"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["spinning"])]),_:1},8,["visible","onOk","confirm-loading"]),createVNode(b,{visible:e.visible1,"onUpdate:visible":a[6]||(a[6]=t=>e.visible1=t),title:"\u5230\u8D27\u786E\u8BA4",onOk:e.arrivalAck,"confirm-loading":e.spinning1},{default:withCtx(()=>[createVNode(f,{spinning:e.spinning1},{default:withCtx(()=>[createVNode("div",_hoisted_17,[createVNode(m,{model:e.buyOrder,"label-col":{span:8},"wrapper-col":{span:14},rules:e.rules,ref:"formRef"},{default:withCtx(()=>[createVNode(o,{label:"\u5B9E\u9645\u5230\u8D27\u6570\u91CF",name:"actualQuantity"},{default:withCtx(()=>[createVNode(h,{value:e.buyOrder.actualQuantity,"onUpdate:value":a[5]||(a[5]=t=>e.buyOrder.actualQuantity=t)},null,8,["value"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["spinning"])]),_:1},8,["visible","onOk","confirm-loading"]),createVNode(b,{visible:e.visible2,"onUpdate:visible":a[10]||(a[10]=t=>e.visible2=t),title:"\u624B\u52A8\u8C03\u62E8",onOk:e.transferAck,"confirm-loading":e.spinning2},{default:withCtx(()=>[createVNode(f,{spinning:e.spinning2},{default:withCtx(()=>[createVNode("div",_hoisted_18,[createVNode(m,{model:e.transferParam,"label-col":{span:8},"wrapper-col":{span:14},rules:e.rules,ref:"formRef"},{default:withCtx(()=>[createVNode(o,{label:"\u8C03\u62E8\u6570\u91CF",name:"quantity"},{default:withCtx(()=>[createVNode(h,{value:e.transferParam.quantity,"onUpdate:value":a[7]||(a[7]=t=>e.transferParam.quantity=t),min:0,max:e.buyOrder.transferredQuantity,style:{width:"260px"}},null,8,["value","max"])]),_:1}),createVNode(o,{label:"\u8C03\u62E8\u5E93\u623F",name:"warehouseId"},{default:withCtx(()=>[createVNode(V,{ref:"select",value:e.transferParam.warehouseId,"onUpdate:value":a[8]||(a[8]=t=>e.transferParam.warehouseId=t),style:{width:"260px"}},{default:withCtx(()=>[(openBlock(!0),createBlock(Fragment,null,renderList(e.warehouseList,t=>(openBlock(),createBlock(w,{value:t.id},{default:withCtx(()=>[createTextVNode(toDisplayString(t.name),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"])]),_:1}),createVNode(o,{label:"\u64CD\u4F5C\u8BF4\u660E",name:"remark"},{default:withCtx(()=>[createVNode(c,{value:e.transferParam.optionName,"onUpdate:value":a[9]||(a[9]=t=>e.transferParam.optionName=t)},null,8,["value"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["spinning"])]),_:1},8,["visible","onOk","confirm-loading"])])}_sfc_main.render=_sfc_render;export default _sfc_main;
