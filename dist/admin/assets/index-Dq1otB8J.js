import{j as m}from"./index-BMoS0DUA.js";import{u as w,R,g as h,E as v,C as y}from"./createLoading--5nB-oeg.js";import{u as b,h as E}from"./index-TNyY8g-O.js";import"./_commonjsHelpers-BosuxZz1.js";import"./immer-DZPz5TFl.js";var P=function(e,s){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)s.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const g=window.React,j=window.React.useEffect,O=window.React.useImperativeHandle,T=window.React.forwardRef;var x=T(function(e,s){var n=e.chartRef,t=e.style,a=t===void 0?{height:"inherit"}:t,c=e.className,u=e.loading,l=e.loadingTemplate,f=e.errorTemplate,d=P(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),i=w(R,d),r=i.chart,o=i.container;return j(function(){h(n,r.current)},[r.current]),O(s,function(){return{getChart:function(){return r.current}}}),g.createElement(v,{errorTemplate:f},u&&g.createElement(y,{loadingTemplate:l,theme:e.theme}),g.createElement("div",{className:c,style:a,ref:o}))});const S=x,C=window.React.forwardRef,I=window.React.useEffect,_=window.React.useImperativeHandle,p=window.React.useState,N=window.antd.Spin,$=({config:e},s)=>{var i;const[n,t]=p(0),[a,c]=p(!0),[u,l]=p(!0),f=b(r=>r.page.variableData);I(()=>{d({})},[e.api,((i=e.api)==null?void 0:i.sourceType)=="variable"?f:""]);const d=r=>{c(!0),E(e.api,r).then(o=>{(o==null?void 0:o.ret)===0&&(typeof o.data=="number"?t(o.data):console.error("[RingProgress]数据格式错误，进度条需要0-1的数字。")),c(!1)})};return _(s,()=>({show(){l(!0)},hide(){l(!1)},update:r=>{d(r)}})),u&&m.jsx("div",{style:e.style,children:m.jsx(N,{spinning:a,size:"large",wrapperClassName:"spin-loading",children:m.jsx(S,{...e.props,percent:n})})})},B=C($);export{B as RingProgress};
