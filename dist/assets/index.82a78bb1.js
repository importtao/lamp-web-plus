import{_ as f}from"./PageWrapper.ed878922.js";import{_ as j}from"./BasicForm.7d393d3b.js";import{u as b}from"./useForm.09fdf95d.js";import{d as _,r as n,o as x,n as B,J as a,p as o,L as u}from"./index.ff8e7350.js";import"./usePageContext.c47bb441.js";import"./onMountedOrActivated.8814f444.js";import"./index.2d596eab.js";import"./index.e1e8b5a1.js";import"./useBreakpoint.549ec32d.js";import"./responsiveObserve.936f38cb.js";import"./useSize.e519a3af.js";import"./transButton.8f04232b.js";import"./ArrowLeftOutlined.e256a87d.js";import"./useFormItem.4d35203f.js";import"./index.33f6c35a.js";import"./index.7b8b790f.js";import"./get.25e661a1.js";import"./conductUtil.2053f1c8.js";import"./iconUtil.57aac0ee.js";import"./_baseSet.47d9038f.js";import"./hasIn.cdeedf38.js";import"./FileOutlined.c1895460.js";import"./user.301754be.js";import"./DeleteOutlined.11a704c5.js";import"./commonEnum.da040d67.js";import"./useModal.1ae7183e.js";import"./useWindowSizeFn.dd41c952.js";import"./FullscreenOutlined.f5cc85ae.js";import"./index.d0beec9f.js";import"./index.4c731c08.js";import"./css.b1edd3c8.js";import"./index.61e91689.js";import"./index.a9a6f329.js";import"./uuid.2b29000c.js";import"./index.0188a107.js";import"./uniqBy.ad809f18.js";import"./_baseIteratee.219a0b59.js";import"./_baseProperty.74f89655.js";import"./findIndex.fb260bab.js";import"./toInteger.3d2a7161.js";import"./index.2a7bb35e.js";import"./download.ff10bfc9.js";import"./index.84d10328.js";import"./index.71446dfd.js";import"./UpOutlined.b439f448.js";import"./index.d247982f.js";import"./vendor.352e3120.js";import"./RedoOutlined.581d77bd.js";import"./dayjs.92837c63.js";import"./useState.a76dde6b.js";import"./index.7e22ace8.js";import"./Col.1d424bff.js";import"./canUseDom.0bf35682.js";import"./index.3aa06684.js";const w=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"InputPassword",required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(s,t)=>t?t!==e.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A")}]}];var c=_({name:"ChangePassword",components:{BasicForm:j,PageWrapper:f},setup(){const[e,{validate:s,resetFields:t}]=b({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:w});async function d(){try{const r=await s(),{passwordOld:m,passwordNew:i}=r;console.log(m,i)}catch(r){}}return{register:e,resetFields:t,handleSubmit:d}}});const h={class:"py-8 bg-white flex flex-col justify-center items-center"},F={class:"flex justify-center"},g=u(" \u91CD\u7F6E "),C=u(" \u786E\u8BA4 ");function P(e,s,t,d,r,m){const i=n("BasicForm"),p=n("a-button"),l=n("PageWrapper");return x(),B(l,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",content:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:a(()=>[o("div",h,[o(i,{onRegister:e.register},null,8,["onRegister"]),o("div",F,[o(p,{onClick:e.resetFields},{default:a(()=>[g]),_:1},8,["onClick"]),o(p,{class:"ml-4",type:"primary",onClick:e.handleSubmit},{default:a(()=>[C]),_:1},8,["onClick"])])])]),_:1})}c.render=P;export default c;
