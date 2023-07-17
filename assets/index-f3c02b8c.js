var M=Object.defineProperty;var I=(e,t,s)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var b=(e,t,s)=>(I(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(c){if(c.ep)return;c.ep=!0;const n=s(c);fetch(c.href,n)}})();function f(){}function P(e){return e()}function j(){return Object.create(null)}function h(e){e.forEach(P)}function S(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function B(e){return Object.keys(e).length===0}function C(e,t,s){e.insertBefore(t,s||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function D(e){return document.createElement(e)}function H(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function R(e){return Array.from(e.childNodes)}let y;function p(e){y=e}const d=[],E=[];let u=[];const O=[],V=Promise.resolve();let x=!1;function q(){x||(x=!0,V.then(A))}function m(e){u.push(e)}const v=new Set;let i=0;function A(){if(i!==0)return;const e=y;do{try{for(;i<d.length;){const t=d[i];i++,p(t),J(t.$$)}}catch(t){throw d.length=0,i=0,t}for(p(null),d.length=0,i=0;E.length;)E.pop()();for(let t=0;t<u.length;t+=1){const s=u[t];v.has(s)||(v.add(s),s())}u.length=0}while(d.length);for(;O.length;)O.pop()();x=!1,v.clear(),p(e)}function J(e){if(e.fragment!==null){e.update(),h(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(m)}}function W(e){const t=[],s=[];u.forEach(l=>e.indexOf(l)===-1?t.push(l):s.push(l)),s.forEach(l=>l()),u=t}const z=new Set;function F(e,t){e&&e.i&&(z.delete(e),e.i(t))}function K(e,t,s){const{fragment:l,after_update:c}=e.$$;l&&l.m(t,s),m(()=>{const n=e.$$.on_mount.map(P).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...n):h(n),e.$$.on_mount=[]}),c.forEach(m)}function Q(e,t){const s=e.$$;s.fragment!==null&&(W(s.after_update),h(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function U(e,t){e.$$.dirty[0]===-1&&(d.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,s,l,c,n,a,L=[-1]){const g=y;p(e);const o=e.$$={fragment:null,ctx:[],props:n,update:f,not_equal:c,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:j(),dirty:L,skip_bound:!1,root:t.target||g.$$.root};a&&a(o.root);let w=!1;if(o.ctx=s?s(e,t.props||{},(r,_,...$)=>{const k=$.length?$[0]:_;return o.ctx&&c(o.ctx[r],o.ctx[r]=k)&&(!o.skip_bound&&o.bound[r]&&o.bound[r](k),w&&U(e,r)),_}):[],o.update(),w=!0,h(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){const r=R(t.target);o.fragment&&o.fragment.l(r),r.forEach(N)}else o.fragment&&o.fragment.c();t.intro&&F(e.$$.fragment),K(e,t.target,t.anchor),A()}p(g)}class G{constructor(){b(this,"$$");b(this,"$$set")}$destroy(){Q(this,1),this.$destroy=f}$on(t,s){if(!S(s))return f;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(s),()=>{const c=l.indexOf(s);c!==-1&&l.splice(c,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const X="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(X);function Z(e){let t;return{c(){t=D("div"),t.innerHTML='<div class="fixed inset-0 flex w-72 flex-wrap border-l-2"><section class="flex w-72 flex-col items-center justify-between space-y-4 px-8 py-8"><header class="mt-20 w-full space-y-8 text-center"><h2 class="text-3xl font-bold">Solarius</h2> <div class="flex flex-col space-y-4"><button class="flex items-center space-x-2 bg-[#eee6e0] px-5 py-2 font-bold"><img class="h-8 w-8" src="graph-svgrepo-com.svg" alt="graph"/> <span>Dashbord</span></button> <button class="flex items-center space-x-2 px-5 py-2 font-bold"><img class="h-8 w-8" src="education-learning-20-svgrepo-com.svg" alt="education"/> <p>Education</p></button> <button class="flex items-center space-x-2 px-5 py-2 font-bold"><img class="h-8 w-8" src="copy-svgrepo-com.svg" alt="education"/> <p>Resuources</p></button> <button class="flex items-center space-x-2 px-5 py-2 font-bold"><img class="h-8 w-8" src="settings-svgrepo-com.svg" alt="settings"/> <p>Settings</p></button></div></header> <footer class="flex items-center space-x-4"><button class="h-10 w-10 rounded-full bg-[url(&#39;/log-out-02-svgrepo-com.svg&#39;)] bg-cover bg-center bg-no-repeat"></button> <p class="font-bold">Log out</p></footer></section></div> <div class="absolute inset-0 ml-72"><div class="fixed inset-0 ml-72 flex"><div class="flex w-1/2 flex-wrap items-center space-y-4 bg-white px-8 py-8"><section class="w-full"><header class="flex justify-between"><div><h2 class="text-2xl font-bold">Today&#39;s Plan</h2> <p>Jul 14th 2023</p></div> <button class="h-10 w-10 rounded-full bg-[url(&#39;/cross-circle-svgrepo-com.svg&#39;)] bg-cover bg-center bg-no-repeat"></button></header></section> <section class="w-full space-y-4"><header><h2 class="text-3xl">Sustainable development goals and health innovation</h2></header> <div class="flex justify-between"><div class="flex"><div class="h-10 w-10 rounded-full bg-cyan-400"></div> <div class="h-10 w-10 rounded-full bg-slate-400"></div> <div class="h-10 w-10 rounded-full bg-pink-400"></div></div> <div class="border-l-2 pl-4"><h2 class="text-xl font-bold">Medi Team meeting</h2> <p>13:30 - 14:50</p></div></div></section> <section class="flex h-2/5 w-full flex-col justify-between space-y-4 bg-gradient-to-br from-[#ece4d3] via-[#d6ddd3] to-[#98aeb0] px-8 py-8"><header><h2 class="text-2xl font-bold">Weekly report</h2> <p>Track your performance</p></header> <footer><button class="border-2 border-black px-2 py-2 font-bold">VIEW REPORT</button></footer></section> <section class="flex w-full space-x-4"><div class="h-72 w-1/2 space-y-4 bg-gradient-to-br from-[#e6ccc1] via-[#e0c8c3] to-[#fadfc6] pl-8 pt-8"><h2 class="text-2xl font-bold">Study 78x</h2> <div class="flex space-x-2"><img class="h-7 w-7" src="time-filled-svgrepo-com.svg" alt=""/> <p>In progress</p></div></div> <div class="h-72 w-1/2 space-y-4 bg-gradient-to-br from-[#e6ccc1] via-[#e0c8c3] to-[#fadfc6] pl-8 pt-8"><h2 class="text-2xl font-bold">Analyses</h2> <div class="flex space-x-2"><img class="h-7 w-7" src="check-svgrepo-com.svg" alt=""/> <p>Completed</p></div></div></section></div> <div class="flex w-1/2 flex-wrap items-center space-y-4 px-8"><section class="w-full"><header class="flex justify-between"><h2 class="text-2xl font-bold">Monthly pinned</h2> <p>View all</p></header></section> <section class="w-full space-y-4"><div class="space-y-4 bg-white px-8 py-4 shadow-md"><header class="flex justify-between"><h2>Next-gen inmmuno</h2> <p>5d</p></header> <div><h3 class="text-xl font-bold">Multispectific liquids analysis</h3></div> <footer class="flex items-center space-x-2"><img class="h-7 w-7" src="bell-bing-svgrepo-com.svg" alt=""/> <p>New feedback</p></footer></div> <div class="space-y-4 bg-white px-8 py-4 shadow-md"><header class="flex justify-between"><h2>Harmony</h2> <p>5d</p></header> <div><h3 class="font-bold">Protein characterization during childhood and pregnancy</h3></div> <footer class="flex items-center space-x-2"><img class="h-7 w-7" src="exclamation-svgrepo-com.svg" alt=""/> <p>Deadline is today</p></footer></div> <div class="space-y-4 bg-white px-8 py-4 shadow-md"><header class="flex justify-between"><h2>Pharmaceutical</h2> <p>5d</p></header> <div><h3 class="font-bold">Quick element dissolution testing</h3></div> <footer class="flex items-center space-x-2"><img class="h-7 w-7" src="check-svgrepo-com.svg" alt=""/> <p>Accepted</p></footer></div></section> <section class="w-full space-y-4"><header><div class="flex justify-between"><h2 class="text-2xl font-bold">My learnings</h2> <p>...</p></div> <p>Your progress of medical lectures</p></header> <div class="flex flex-wrap items-center justify-between py-2"><div class="my-2 flex w-2/5 items-center space-x-4"><div class="h-20 w-20 bg-[url(&#39;/shapes-svgrepo-com.svg&#39;)] bg-cover bg-center bg-no-repeat"></div> <div><h2 class="font-bold">Viruses</h2> <p>96% progress</p></div></div> <div class="my-2 flex w-2/5 items-center space-x-4"><div class="h-20 w-20 bg-[url(&#39;/shapes-svgrepo-com.svg&#39;)] bg-cover bg-center bg-no-repeat"></div> <div><h2 class="font-bold">Med scinece</h2> <p>33% progress</p></div></div> <div class="my-2 flex w-2/5 items-center space-x-4"><div class="h-20 w-20 bg-[url(&#39;/shapes-svgrepo-com.svg&#39;)] bg-cover bg-center bg-no-repeat"></div> <div><h2 class="font-bold">Bacterial cells</h2> <p>7% progress</p></div></div> <div class="my-2 flex w-2/5 items-center space-x-4"><div class="h-20 w-20 bg-[url(&#39;/shapes-svgrepo-com.svg&#39;)] bg-cover bg-center bg-no-repeat"></div> <div><h2 class="font-bold">Human gens</h2> <p>58% progress</p></div></div></div></section></div> <div class="flex w-72 flex-wrap bg-white px-8"><section class="flex w-full flex-col items-center justify-between space-y-4 px-8 py-8"><header class="flex flex-col items-center space-y-2 text-center"><figure class="h-20 w-20 rounded-full bg-[url(&#39;/vitalspace.png&#39;)] bg-cover bg-center bg-no-repeat shadow-lg"></figure> <div><h2 class="text-xl font-bold">JrDev94</h2> <p>Developer</p></div></header> <footer class="flex flex-col items-center space-y-4"><button class="h-10 w-10 rounded-full bg-[url(&#39;/write-svgrepo-com.svg&#39;)] bg-cover bg-center bg-no-repeat shadow-lg"></button> <button class="h-10 w-10 rounded-full bg-[url(&#39;/message-square-lines-svgrepo-com.svg&#39;)] bg-cover bg-center bg-no-repeat shadow-lg"></button> <button class="h-16 w-16 rounded-full bg-[url(&#39;/cross-circle-svgrepo-com.svg&#39;)] bg-cover bg-center bg-no-repeat"></button></footer></section></div></div></div>',H(t,"class","absolute inset-0 bg-[#faf9f3]")},m(s,l){C(s,t,l)},p:f,i:f,o:f,d(s){s&&N(t)}}}function ee(e){return console.log("Hello admin-dashboard-analytics-ux"),[]}class te extends G{constructor(t){super(),Y(this,t,ee,Z,T,{})}}new te({target:document.getElementById("app")});