import{j as a,r as d,R as p,a as u}from"./vendor.c7713e6b.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};f();var h="/assets/logo.ecc203fb.svg";const r=a.exports.jsx,s=a.exports.jsxs;function m(){const[i,o]=d.exports.useState(0);return r("div",{className:"App",children:s("header",{className:"App-header",children:[r("img",{src:h,className:"App-logo",alt:"logo"}),r("p",{children:"Hello Vite + React!"}),r("p",{children:s("button",{type:"button",onClick:()=>o(n=>n+1),children:["count is: ",i]})}),s("p",{children:["Edit ",r("code",{children:"App.tsx"})," and save to test HMR updates."]}),s("p",{children:[r("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",r("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"Vite Docs asd a asd asd"})]})]})})}p.render(r(u.StrictMode,{children:r(m,{})}),document.getElementById("root"));
