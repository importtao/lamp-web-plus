import{_ as c,a as u}from"./TableImg.96743eb0.js";import"./BasicForm.2d8a4167.js";import{u as l}from"./useTable.5e0260b2.js";import{d as j}from"./table.814d4a45.js";import{d as b,r as i,o as f,n as g,p as s,J as e,L as r,q as a}from"./index.f012a3f4.js";import{T as x}from"./index.5919009b.js";import"./useForm.96bd58a3.js";import"./index.22fa49e6.js";import"./UpOutlined.5f7f87c9.js";import"./index.fcff9c6a.js";import"./index.6b5846e1.js";import"./uuid.2b29000c.js";import"./get.4bb36d6d.js";import"./useWindowSizeFn.21617b5b.js";import"./useModal.31640c24.js";import"./FullscreenOutlined.db659752.js";import"./onMountedOrActivated.a84ead65.js";import"./useSortable.271c5036.js";import"./SettingOutlined.c267d90d.js";import"./index.a99c15a9.js";import"./RedoOutlined.bbea3551.js";import"./useFullScreen.96289f6a.js";import"./index.64b3537b.js";import"./css.b1edd3c8.js";import"./canUseDom.0bf35682.js";import"./useState.b98aa3d0.js";import"./conductUtil.e383e830.js";import"./index.656c6dbf.js";import"./scrollTo.168243c4.js";import"./useBreakpoint.521f32f2.js";import"./responsiveObserve.40f9db24.js";import"./useExpose.21bfa257.js";import"./index.8cfd22dd.js";import"./useFormItem.828d968c.js";import"./iconUtil.f2afc0cc.js";import"./_baseSet.77ab947c.js";import"./hasIn.e5f45297.js";import"./FileOutlined.dfec8941.js";import"./user.8beb92fb.js";import"./transButton.77ed102e.js";import"./DeleteOutlined.4af221e4.js";import"./commonEnum.da040d67.js";import"./index.ccba4a8f.js";import"./index.3a3a0b83.js";import"./uniqBy.1b31fa16.js";import"./_baseIteratee.c907cd0a.js";import"./_baseProperty.74f89655.js";import"./findIndex.2bc5b0a2.js";import"./toInteger.87149fb4.js";import"./index.1df1593d.js";import"./download.09c2660b.js";import"./index.86f670f0.js";import"./vendor.352e3120.js";import"./dayjs.881e239d.js";import"./index.412350b3.js";import"./Col.13d8b9cb.js";import"./useSize.5c4412c9.js";import"./index.41a9c009.js";const _=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u5934\u50CF",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",slots:{customRender:"no"}},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}];var n=b({components:{BasicTable:c,TableImg:u,Tag:x},setup(){const[o]=l({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",api:j,columns:_,bordered:!0,showTableSetting:!0});return{registerTable:o}}});const T={class:"p-4"};function I(o,F,B,h,S,D){const d=i("Tag"),m=i("TableImg"),p=i("BasicTable");return f(),g("div",T,[s(p,{onRegister:o.registerTable},{id:e(({record:t})=>[r(" ID: "+a(t.id),1)]),no:e(({record:t})=>[s(d,{color:"green"},{default:e(()=>[r(a(t.no),1)]),_:2},1024)]),img:e(()=>[s(m,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])]),category:e(({record:t})=>[s(d,{color:"green"},{default:e(()=>[r(a(t.no),1)]),_:2},1024)]),_:1},8,["onRegister"])])}n.render=I;export default n;
