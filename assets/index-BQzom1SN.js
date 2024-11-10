(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=s(l);fetch(l.href,i)}})();const se=(e,t)=>e===t,ne=Symbol("solid-track"),I={equals:se};let le=Y;const C=1,G=2,V={owned:null,cleanups:null,context:null,owner:null};var h=null;let q=null,ie=null,d=null,p=null,S=null,D=0;function B(e,t){const s=d,n=h,l=e.length===0,i=t===void 0?n:t,o=l?V:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=l?e:()=>e(()=>P(()=>$(o)));h=o,d=null;try{return O(r,!0)}finally{d=s,h=n}}function re(e,t){t=t?Object.assign({},I,t):I;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=l=>(typeof l=="function"&&(l=l(s.value)),Q(s,l));return[W.bind(s),n]}function R(e,t,s){const n=J(e,t,!1,C);U(n)}function oe(e,t,s){s=s?Object.assign({},I,s):I;const n=J(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,U(n),W.bind(n)}function P(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function fe(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function W(){if(this.sources&&this.state)if(this.state===C)U(this);else{const e=p;p=null,O(()=>F(this),!1),p=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function Q(e,t,s){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&O(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],o=q&&q.running;o&&q.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?p.push(i):S.push(i),i.observers&&Z(i)),o||(i.state=C)}if(p.length>1e6)throw p=[],new Error},!1)),t}function U(e){if(!e.fn)return;$(e);const t=D;ue(e,e.value,t)}function ue(e,t,s){let n;const l=h,i=d;d=h=e;try{n=e.fn(t)}catch(o){return e.pure&&(e.state=C,e.owned&&e.owned.forEach($),e.owned=null),e.updatedAt=s+1,z(o)}finally{d=i,h=l}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?Q(e,n):e.value=n,e.updatedAt=s)}function J(e,t,s,n=C,l){const i={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:s};return h===null||h!==V&&(h.owned?h.owned.push(i):h.owned=[i]),i}function X(e){if(e.state===0)return;if(e.state===G)return F(e);if(e.suspense&&P(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===C)U(e);else if(e.state===G){const n=p;p=null,O(()=>F(e,t[0]),!1),p=n}}function O(e,t){if(p)return e();let s=!1;t||(p=[]),S?s=!0:S=[],D++;try{const n=e();return ce(s),n}catch(n){s||(S=null),p=null,z(n)}}function ce(e){if(p&&(Y(p),p=null),e)return;const t=S;S=null,t.length&&O(()=>le(t),!1)}function Y(e){for(let t=0;t<e.length;t++)X(e[t])}function F(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const n=e.sources[s];if(n.sources){const l=n.state;l===C?n!==t&&(!n.updatedAt||n.updatedAt<D)&&X(n):l===G&&F(n,t)}}}function Z(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=G,s.pure?p.push(s):S.push(s),s.observers&&Z(s))}}function $(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),l=s.observers;if(l&&l.length){const i=l.pop(),o=s.observerSlots.pop();n<l.length&&(i.sourceSlots[o]=n,l[n]=i,s.observerSlots[n]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)$(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)$(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ae(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function z(e,t=h){throw ae(e)}const de=Symbol("fallback");function k(e){for(let t=0;t<e.length;t++)e[t]()}function he(e,t,s={}){let n=[],l=[],i=[],o=0,r=t.length>1?[]:null;return fe(()=>k(i)),()=>{let u=e()||[],a=u.length,c,f;return u[ne],P(()=>{let g,b,A,T,_,w,y,m,E;if(a===0)o!==0&&(k(i),i=[],n=[],l=[],o=0,r&&(r=[])),s.fallback&&(n=[de],l[0]=B(te=>(i[0]=te,s.fallback())),o=1);else if(o===0){for(l=new Array(a),f=0;f<a;f++)n[f]=u[f],l[f]=B(x);o=a}else{for(A=new Array(a),T=new Array(a),r&&(_=new Array(a)),w=0,y=Math.min(o,a);w<y&&n[w]===u[w];w++);for(y=o-1,m=a-1;y>=w&&m>=w&&n[y]===u[m];y--,m--)A[m]=l[y],T[m]=i[y],r&&(_[m]=r[y]);for(g=new Map,b=new Array(m+1),f=m;f>=w;f--)E=u[f],c=g.get(E),b[f]=c===void 0?-1:c,g.set(E,f);for(c=w;c<=y;c++)E=n[c],f=g.get(E),f!==void 0&&f!==-1?(A[f]=l[c],T[f]=i[c],r&&(_[f]=r[c]),f=b[f],g.set(E,f)):i[c]();for(f=w;f<a;f++)f in A?(l[f]=A[f],i[f]=T[f],r&&(r[f]=_[f],r[f](f))):l[f]=B(x);l=l.slice(0,o=a),n=u.slice(0)}return l});function x(g){if(i[f]=g,r){const[b,A]=re(f);return r[f]=A,t(u[f],b)}return t(u[f])}}}function N(e,t){return P(()=>e(t||{}))}function ee(e){const t="fallback"in e&&{fallback:()=>e.fallback};return oe(he(()=>e.each,e.children,t||void 0))}function pe(e,t,s){let n=s.length,l=t.length,i=n,o=0,r=0,u=t[l-1].nextSibling,a=null;for(;o<l||r<i;){if(t[o]===s[r]){o++,r++;continue}for(;t[l-1]===s[i-1];)l--,i--;if(l===o){const c=i<n?r?s[r-1].nextSibling:s[i-r]:u;for(;r<i;)e.insertBefore(s[r++],c)}else if(i===r)for(;o<l;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===s[i-1]&&s[r]===t[l-1]){const c=t[--l].nextSibling;e.insertBefore(s[r++],t[o++].nextSibling),e.insertBefore(s[--i],c),t[l]=s[i]}else{if(!a){a=new Map;let f=r;for(;f<i;)a.set(s[f],f++)}const c=a.get(t[o]);if(c!=null)if(r<c&&c<i){let f=o,x=1,g;for(;++f<l&&f<i&&!((g=a.get(t[f]))==null||g!==c+x);)x++;if(x>c-r){const b=t[o];for(;r<c;)e.insertBefore(s[r++],b)}else e.replaceChild(s[r++],t[o++])}else o++;else t[o++].remove()}}}function ge(e,t,s,n={}){let l;return B(i=>{l=i,t===document?e():v(t,e(),t.firstChild?null:void 0,s)},n.owner),()=>{l(),t.textContent=""}}function K(e,t,s){let n;const l=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},i=()=>(n||(n=l())).cloneNode(!0);return i.cloneNode=i,i}function v(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return M(e,t,n,s);R(l=>M(e,t(),l,s),n)}function M(e,t,s,n,l){for(;typeof s=="function";)s=s();if(t===s)return s;const i=typeof t,o=n!==void 0;if(e=o&&s[0]&&s[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===s))return s;if(o){let r=s[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),s=L(e,s,n,r)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||i==="boolean")s=L(e,s,n);else{if(i==="function")return R(()=>{let r=t();for(;typeof r=="function";)r=r();s=M(e,r,s,n)}),()=>s;if(Array.isArray(t)){const r=[],u=s&&Array.isArray(s);if(j(r,t,s,l))return R(()=>s=M(e,r,s,n,!0)),()=>s;if(r.length===0){if(s=L(e,s,n),o)return s}else u?s.length===0?H(e,r,n):pe(e,s,r):(s&&L(e),H(e,r));s=r}else if(t.nodeType){if(Array.isArray(s)){if(o)return s=L(e,s,n,t);L(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function j(e,t,s,n){let l=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],u=s&&s[e.length],a;if(!(r==null||r===!0||r===!1))if((a=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))l=j(e,r,u)||l;else if(a==="function")if(n){for(;typeof r=="function";)r=r();l=j(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||l}else e.push(r),l=!0;else{const c=String(r);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return l}function H(e,t,s=null){for(let n=0,l=t.length;n<l;n++)e.insertBefore(t[n],s)}function L(e,t,s,n){if(s===void 0)return e.textContent="";const l=n||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const u=r.parentNode===e;!i&&!o?u?e.replaceChild(l,r):e.insertBefore(l,s):u&&r.remove()}else i=!0}}else e.insertBefore(l,s);return[l]}const we=[{date:"2024-11-15",events:[{title:"Setup & Arrival",start:"17:00",end:"18:00"},{title:"Game 1: Mario Kart",start:"18:00",end:"20:00"},{title:"Dinner Break",start:"20:00",end:"21:00"},{title:"Game 2: Smash Bros",start:"21:00",end:"23:00"}]},{date:"2024-11-16",events:[{title:"Game 3: Rocket League",start:"10:00",end:"12:00"},{title:"Lunch",start:"12:00",end:"13:00"},{title:"Game 4: FIFA",start:"13:00",end:"15:00"}]},{date:"2024-11-17",events:[{title:"Game 5: Halo",start:"10:00",end:"12:00"},{title:"Lunch",start:"12:00",end:"13:00"},{title:"Final Game: Fortnite",start:"13:00",end:"15:00"}]}],ye={days:we};var me=K("<div class=event-block><strong></strong><span> - ");const be=e=>(()=>{var t=me(),s=t.firstChild,n=s.nextSibling,l=n.firstChild;return v(s,()=>e.title),v(n,()=>e.start,l),v(n,()=>e.end,null),t})();var Ae=K("<div class=day-column><h2>");const Se=e=>(()=>{var t=Ae(),s=t.firstChild;return v(s,()=>e.date),v(t,N(ee,{get each(){return e.events},children:n=>N(be,{get title(){return n.title},get start(){return n.start},get end(){return n.end}})}),null),t})();var ve=K("<main><h1>Gaming Weekend Schedule</h1><div id=schedule class=schedule>");const Ce=()=>(()=>{var e=ve(),t=e.firstChild,s=t.nextSibling;return v(s,N(ee,{get each(){return ye.days},children:n=>N(Se,{get date(){return n.date},get events(){return n.events}})})),e})(),xe=document.getElementById("root");ge(()=>N(Ce,{}),xe);