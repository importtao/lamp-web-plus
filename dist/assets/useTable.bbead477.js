import{w as u,ai as w,D as s,cj as S,ck as g,ae as m,E as a,ch as f}from"./index.05ea33df.js";function R(n){const r=u(null),l=u(!1),i=u(null);function c(e,o){w(()=>{r.value=null,l.value=null}),!(s(l)&&S()&&e===s(r))&&(r.value=e,i.value=o,n&&e.setProps(g(n)),l.value=!0,m(()=>n,()=>{n&&e.setProps(g(n))},{immediate:!0,deep:!0}))}function t(){const e=s(r);return e||f("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}return[c,{reload:async e=>{t().reload(e)},setProps:e=>{t().setProps(e)},redoHeight:()=>{t().redoHeight()},setLoading:e=>{t().setLoading(e)},getDataSource:()=>a(t().getDataSource()),getColumns:({ignoreIndex:e=!1}={})=>{const o=t().getColumns({ignoreIndex:e})||[];return a(o)},setColumns:e=>{t().setColumns(e)},setTableData:e=>t().setTableData(e),setPagination:e=>t().setPagination(e),deleteSelectRowByKey:e=>{t().deleteSelectRowByKey(e)},getSelectRowKeys:()=>a(t().getSelectRowKeys()),getSelectRows:()=>a(t().getSelectRows()),clearSelectedRowKeys:()=>{t().clearSelectedRowKeys()},setSelectedRowKeys:e=>{t().setSelectedRowKeys(e)},getPaginationRef:()=>t().getPaginationRef(),getSize:()=>a(t().getSize()),updateTableData:(e,o,d)=>t().updateTableData(e,o,d),getRowSelection:()=>a(t().getRowSelection()),getCacheColumns:()=>a(t().getCacheColumns()),getForm:()=>s(i),setShowPagination:async e=>{t().setShowPagination(e)},getShowPagination:()=>a(t().getShowPagination())}]}export{R as u};
