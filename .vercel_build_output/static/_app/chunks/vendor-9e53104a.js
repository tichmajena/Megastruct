var Zt=Object.defineProperty;var He=Object.getOwnPropertySymbols;var $t=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable;var Pe=(t,e,n)=>e in t?Zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ye=(t,e)=>{for(var n in e||(e={}))$t.call(e,n)&&Pe(t,n,e[n]);if(He)for(var n of He(e))xt.call(e,n)&&Pe(t,n,e[n]);return t};function $(){}const en=t=>t;function tn(t,e){for(const n in e)t[n]=e[n];return t}function vt(t){return t()}function Xe(){return Object.create(null)}function x(t){t.forEach(vt)}function ne(t){return typeof t=="function"}function nn(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let be;function Ke(t,e){return be||(be=document.createElement("a")),be.href=e,t===be.href}function ln(t,e){return t!=t?e==e:t!==e}function on(t){return Object.keys(t).length===0}function sn(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bl(t,e,n){t.$$.on_destroy.push(sn(e,n))}function P(t,e,n,l){if(t){const s=Et(t,e,n,l);return t[0](s)}}function Et(t,e,n,l){return t[1]&&l?tn(n.ctx.slice(),t[1](l(e))):n.ctx}function Y(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let i=0;i<r;i+=1)u[i]=e.dirty[i]|s[i];return u}return e.dirty|s}return e.dirty}function X(t,e,n,l,s,u){if(s){const r=Et(e,n,l,u);t.p(r,s)}}function K(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function Ge(t){return t==null?"":t}function wl(t,e,n){return t.set(n),e}function Ie(t){return t&&ne(t.destroy)?t.destroy:$}const Tt=typeof window!="undefined";let rn=Tt?()=>window.performance.now():()=>Date.now(),Ae=Tt?t=>requestAnimationFrame(t):$;const ue=new Set;function Nt(t){ue.forEach(e=>{e.c(t)||(ue.delete(e),e.f())}),ue.size!==0&&Ae(Nt)}function fn(t){let e;return ue.size===0&&Ae(Nt),{promise:new Promise(n=>{ue.add(e={c:t,f:n})}),abort(){ue.delete(e)}}}let Ne=!1;function un(){Ne=!0}function an(){Ne=!1}function cn(t,e,n,l){for(;t<e;){const s=t+(e-t>>1);n(s)<=l?t=s+1:e=s}return t}function _n(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let f=0;f<e.length;f++){const _=e[f];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),l=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const f=e[o].claim_order,_=(s>0&&e[n[s]].claim_order<=f?s+1:cn(1,s,c=>e[n[c]].claim_order,f))-1;l[o]=n[_]+1;const h=_+1;n[h]=o,s=Math.max(h,s)}const u=[],r=[];let i=e.length-1;for(let o=n[s]+1;o!=0;o=l[o-1]){for(u.push(e[o-1]);i>=o;i--)r.push(e[i]);i--}for(;i>=0;i--)r.push(e[i]);u.reverse(),r.sort((o,f)=>o.claim_order-f.claim_order);for(let o=0,f=0;o<r.length;o++){for(;f<u.length&&r[o].claim_order>=u[f].claim_order;)f++;const _=f<u.length?u[f]:null;t.insertBefore(r[o],_)}}function hn(t,e){t.appendChild(e)}function Lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function dn(t){const e=O("style");return mn(Lt(t),e),e.sheet}function mn(t,e){hn(t.head||t,e)}function F(t,e){if(Ne){for(_n(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function E(t,e,n){Ne&&!n?F(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function pn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function gn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function le(){return D(" ")}function R(){return D("")}function W(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function bn(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t){return Array.from(t.childNodes)}function wn(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Ct(t,e,n,l,s=!1){wn(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const i=t[r];if(e(i)){const o=n(i);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),i}}for(let r=t.claim_info.last_index-1;r>=0;r--){const i=t[r];if(e(i)){const o=n(i);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,i}}return l()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function St(t,e,n,l){return Ct(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const i=s.attributes[r];n[i.name]||u.push(i.name)}u.forEach(r=>s.removeAttribute(r))},()=>l(e))}function j(t,e,n){return St(t,e,n,O)}function kl(t,e,n){return St(t,e,n,gn)}function G(t,e){return Ct(t,n=>n.nodeType===3,n=>{const l=""+e;if(n.data.startsWith(l)){if(n.data.length!==l.length)return n.splitText(l.length)}else n.data=l},()=>D(e),!0)}function oe(t){return G(t," ")}function kn(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function yl(t,e){t.value=e==null?"":e}function A(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function M(t,e,n){t.classList[n?"add":"remove"](e)}function yn(t,e,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,!1,e),l}function vl(t,e=document.body){return Array.from(e.querySelectorAll(t))}const ve=new Map;let Ee=0;function vn(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function En(t,e){const n={stylesheet:dn(e),rules:{}};return ve.set(t,n),n}function Ve(t,e,n,l,s,u,r,i=0){const o=16.666/l;let f=`{
`;for(let p=0;p<=1;p+=o){const L=e+(n-e)*u(p);f+=p*100+`%{${r(L,1-L)}}
`}const _=f+`100% {${r(n,1-n)}}
}`,h=`__svelte_${vn(_)}_${i}`,c=Lt(t),{stylesheet:a,rules:d}=ve.get(c)||En(c,t);d[h]||(d[h]=!0,a.insertRule(`@keyframes ${h} ${_}`,a.cssRules.length));const T=t.style.animation||"";return t.style.animation=`${T?`${T}, `:""}${h} ${l}ms linear ${s}ms 1 both`,Ee+=1,h}function Tn(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-l.length;s&&(t.style.animation=l.join(", "),Ee-=s,Ee||Nn())}function Nn(){Ae(()=>{Ee||(ve.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),ve.clear())})}let de;function he(t){de=t}function Le(){if(!de)throw new Error("Function called outside component initialization");return de}function El(t){Le().$$.on_mount.push(t)}function Tl(t){Le().$$.after_update.push(t)}function Nl(t,e){Le().$$.context.set(t,e)}function Ll(t){return Le().$$.context.get(t)}const _e=[],je=[],ke=[],Je=[],Ot=Promise.resolve();let ze=!1;function Bt(){ze||(ze=!0,Ot.then(Mt))}function ie(){return Bt(),Ot}function Te(t){ke.push(t)}const Be=new Set;let we=0;function Mt(){const t=de;do{for(;we<_e.length;){const e=_e[we];we++,he(e),Ln(e.$$)}for(he(null),_e.length=0,we=0;je.length;)je.pop()();for(let e=0;e<ke.length;e+=1){const n=ke[e];Be.has(n)||(Be.add(n),n())}ke.length=0}while(_e.length);for(;Je.length;)Je.pop()();ze=!1,Be.clear(),he(t)}function Ln(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Te)}}let ce;function Cn(){return ce||(ce=Promise.resolve(),ce.then(()=>{ce=null})),ce}function Me(t,e,n){t.dispatchEvent(yn(`${e?"intro":"outro"}${n}`))}const ye=new Set;let Z;function U(){Z={r:0,c:[],p:Z}}function q(){Z.r||x(Z.c),Z=Z.p}function b(t,e){t&&t.i&&(ye.delete(t),t.i(e))}function w(t,e,n,l){if(t&&t.o){if(ye.has(t))return;ye.add(t),Z.c.push(()=>{ye.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}const Sn={duration:0};function Cl(t,e,n,l){let s=e(t,n),u=l?0:1,r=null,i=null,o=null;function f(){o&&Tn(t,o)}function _(c,a){const d=c.b-u;return a*=Math.abs(d),{a:u,b:c.b,d,duration:a,start:c.start,end:c.start+a,group:c.group}}function h(c){const{delay:a=0,duration:d=300,easing:T=en,tick:p=$,css:L}=s||Sn,k={start:rn()+a,b:c};c||(k.group=Z,Z.r+=1),r||i?i=k:(L&&(f(),o=Ve(t,u,c,d,a,T,L)),c&&p(0,1),r=_(k,d),Te(()=>Me(t,c,"start")),fn(V=>{if(i&&V>i.start&&(r=_(i,d),i=null,Me(t,r.b,"start"),L&&(f(),o=Ve(t,u,r.b,r.duration,0,T,s.css))),r){if(V>=r.end)p(u=r.b,1-u),Me(t,r.b,"end"),i||(r.b?f():--r.group.r||x(r.group.c)),r=null;else if(V>=r.start){const z=V-r.start;u=r.a+r.d*T(z/r.duration),p(u,1-u)}}return!!(r||i)}))}return{run(c){ne(s)?Cn().then(()=>{s=s(),h(c)}):h(c)},end(){f(),r=i=null}}}const On=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Bn(t,e){w(t,1,1,()=>{e.delete(t.key)})}function Mn(t,e,n,l,s,u,r,i,o,f,_,h){let c=t.length,a=u.length,d=c;const T={};for(;d--;)T[t[d].key]=d;const p=[],L=new Map,k=new Map;for(d=a;d--;){const B=h(s,u,d),N=n(B);let C=r.get(N);C?l&&C.p(B,e):(C=f(N,B),C.c()),L.set(N,p[d]=C),N in T&&k.set(N,Math.abs(d-T[N]))}const V=new Set,z=new Set;function ee(B){b(B,1),B.m(i,_),r.set(B.key,B),_=B.first,a--}for(;c&&a;){const B=p[a-1],N=t[c-1],C=B.key,se=N.key;B===N?(_=B.first,c--,a--):L.has(se)?!r.has(C)||V.has(C)?ee(B):z.has(se)?c--:k.get(C)>k.get(se)?(z.add(C),ee(B)):(V.add(se),c--):(o(N,r),c--)}for(;c--;){const B=t[c];L.has(B.key)||o(B,r)}for(;a;)ee(p[a-1]);return p}function Sl(t,e){const n={},l={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],i=e[u];if(i){for(const o in r)o in i||(l[o]=1);for(const o in i)s[o]||(n[o]=i[o],s[o]=1);t[u]=i}else for(const o in r)s[o]=1}for(const r in l)r in n||(n[r]=void 0);return n}function Ol(t){return typeof t=="object"&&t!==null?t:{}}function Bl(t){t&&t.c()}function Ml(t,e){t&&t.l(e)}function In(t,e,n,l){const{fragment:s,on_mount:u,on_destroy:r,after_update:i}=t.$$;s&&s.m(e,n),l||Te(()=>{const o=u.map(vt).filter(ne);r?r.push(...o):x(o),t.$$.on_mount=[]}),i.forEach(Te)}function jn(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zn(t,e){t.$$.dirty[0]===-1&&(_e.push(t),Bt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function An(t,e,n,l,s,u,r,i=[-1]){const o=de;he(t);const f=t.$$={fragment:null,ctx:null,props:u,update:$,not_equal:s,bound:Xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Xe(),dirty:i,skip_bound:!1,root:e.target||o.$$.root};r&&r(f.root);let _=!1;if(f.ctx=n?n(t,e.props||{},(h,c,...a)=>{const d=a.length?a[0]:c;return f.ctx&&s(f.ctx[h],f.ctx[h]=d)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](d),_&&zn(t,h)),c}):[],f.update(),_=!0,x(f.before_update),f.fragment=l?l(f.ctx):!1,e.target){if(e.hydrate){un();const h=I(e.target);f.fragment&&f.fragment.l(h),h.forEach(g)}else f.fragment&&f.fragment.c();e.intro&&b(t.$$.fragment),In(t,e.target,e.anchor,e.customElement),an(),Mt()}he(o)}class Wn{$destroy(){jn(this,1),this.$destroy=$}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!on(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fe=[];function Il(t,e=$){let n;const l=new Set;function s(i){if(nn(t,i)&&(t=i,n)){const o=!fe.length;for(const f of l)f[1](),fe.push(f,t);if(o){for(let f=0;f<fe.length;f+=2)fe[f][0](fe[f+1]);fe.length=0}}}function u(i){s(i(t))}function r(i,o=$){const f=[i,o];return l.add(f),l.size===1&&(n=e(s)||$),i(t),()=>{l.delete(f),l.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:r}}function It(t){const e=t-1;return e*e*e+1}function jl(t,{delay:e=0,duration:n=400,easing:l=It}={}){const s=getComputedStyle(t),u=+s.opacity,r=parseFloat(s.height),i=parseFloat(s.paddingTop),o=parseFloat(s.paddingBottom),f=parseFloat(s.marginTop),_=parseFloat(s.marginBottom),h=parseFloat(s.borderTopWidth),c=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:l,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*u};height: ${a*r}px;padding-top: ${a*i}px;padding-bottom: ${a*o}px;margin-top: ${a*f}px;margin-bottom: ${a*_}px;border-top-width: ${a*h}px;border-bottom-width: ${a*c}px;`}}function zl(t,{delay:e=0,duration:n=400,easing:l=It,start:s=0,opacity:u=0}={}){const r=getComputedStyle(t),i=+r.opacity,o=r.transform==="none"?"":r.transform,f=1-s,_=i*(1-u);return{delay:e,duration:n,easing:l,css:(h,c)=>`
			transform: ${o} scale(${1-f*c});
			opacity: ${i-_*c}
		`}}function Rn(t){const e={passive:!1};let n=0,l=0;function s(o){return o.changedTouches?o.changedTouches[0]:o}function u(o){n=s(o).clientX,l=s(o).clientY,t.dispatchEvent(new CustomEvent("panstart",{detail:{x:n,y:l}})),window.addEventListener("mousemove",r,e),window.addEventListener("mouseup",i,e),window.addEventListener("touchmove",r,e),window.addEventListener("touchend",i,e)}function r(o){const f=s(o).clientX-n,_=s(o).clientY-l;n=s(o).clientX,l=s(o).clientY,t.dispatchEvent(new CustomEvent("panmove",{detail:{x:n,y:l,dx:f,dy:_}}))}function i(o){n=s(o).clientX,l=s(o).clientY,t.dispatchEvent(new CustomEvent("panend",{detail:{x:n,y:l}})),window.removeEventListener("mousemove",r,e),window.removeEventListener("mouseup",i,e),window.removeEventListener("touchmove",r,e),window.removeEventListener("touchend",i,e)}return t.addEventListener("mousedown",u,e),t.addEventListener("touchstart",u,e),{destroy(){t.removeEventListener("mousedown",u,e),t.removeEventListener("touchstart",u,e)}}}function Un(t){let e,n;const l=new ResizeObserver((s,u)=>{for(let r of s)e=r.contentRect,n=r.target;t.dispatchEvent(new CustomEvent("resize",{detail:{CR:e,ET:n}}))});return l.observe(t),{destroy(){l.disconnect()}}}function qn(t){let e=0,n=0;function l(s){navigator.platform.indexOf("Win")>-1&&s.shiftKey?e=s.deltaY:(e=s.deltaX*1.5,n=s.deltaY*1.5),e!==0&&(s.preventDefault?s.preventDefault():s.returnValue=!1),t.dispatchEvent(new CustomEvent("wheels",{detail:{dx:e,dy:n}}))}return t.addEventListener("wheel",l,{passive:!1}),{destroy(){t.removeEventListener("wheel",l)}}}const{Boolean:Fn}=On,Dn=t=>({item:t[0]&1}),Qe=t=>({item:t[64]}),Hn=t=>({item:t[0]&1}),Ze=t=>({item:t[64]});function $e(t,e,n){const l=t.slice();return l[61]=e[n],l[63]=n,l}const Pn=t=>({dot:t[0]&1024,item:t[0]&1}),xe=t=>({dot:t[61],item:t[64]}),Yn=t=>({item:t[0]&1}),et=t=>({item:t[64]}),Xn=t=>({item:t[0]&1}),tt=t=>({item:t[64]}),Kn=t=>({item:t[0]&1}),nt=t=>({item:t[64]}),Gn=t=>({item:t[0]&1}),lt=t=>({item:t[64]}),Vn=t=>({item:t[0]&1}),ot=t=>({item:t[64]}),Jn=t=>({item:t[0]&1}),it=t=>({item:t[64]});function st(t,e,n){const l=t.slice();return l[64]=e[n],l[65]=e,l[63]=n,l}const Qn=t=>({item:t[0]&1}),rt=t=>({item:t[64]}),Zn=t=>({item:t[0]&1}),ft=t=>({item:t[64]});function ut(t){let e,n;const l=t[29].loader,s=P(l,t,t[28],ft),u=s||$n();return{c(){e=O("section"),u&&u.c(),this.h()},l(r){e=j(r,"SECTION",{id:!0,class:!0});var i=I(e);u&&u.l(i),i.forEach(g),this.h()},h(){y(e,"id","loader"),y(e,"class","svelte-o9i0eo")},m(r,i){E(r,e,i),u&&u.m(e,null),n=!0},p(r,i){s&&s.p&&(!n||i[0]&268435457)&&X(s,l,r,r[28],n?Y(l,r[28],i,Zn):K(r[28]),ft)},i(r){n||(b(u,r),n=!0)},o(r){w(u,r),n=!1},d(r){r&&g(e),u&&u.d(r)}}}function $n(t){let e;return{c(){e=D("Loading...")},l(n){e=G(n,"Loading...")},m(n,l){E(n,e,l)},d(n){n&&g(e)}}}function at(t){let e=[],n=new Map,l,s,u=t[0];const r=i=>i[3](i[64]);for(let i=0;i<u.length;i+=1){let o=st(t,u,i),f=r(o);n.set(f,e[i]=_t(f,o))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();l=R()},l(i){for(let o=0;o<e.length;o+=1)e[o].l(i);l=R()},m(i,o){for(let f=0;f<e.length;f+=1)e[f].m(i,o);E(i,l,o),s=!0},p(i,o){o[0]&268665195&&(u=i[0],U(),e=Mn(e,o,r,1,i,u,n,l.parentNode,Bn,_t,l,st),q())},i(i){if(!s){for(let o=0;o<u.length;o+=1)b(e[o]);s=!0}},o(i){for(let o=0;o<e.length;o+=1)w(e[o]);s=!1},d(i){for(let o=0;o<e.length;o+=1)e[o].d(i);i&&g(l)}}}function ct(t){let e,n,l,s,u;return{c(){e=O("img"),this.h()},l(r){e=j(r,"IMG",{alt:!0,src:!0,width:!0,height:!0}),this.h()},h(){y(e,"alt",n=t[64][t[5].imgsrckey]),Ke(e.src,l=t[64][t[5].imgsrckey])||y(e,"src",l),y(e,"width",s=t[64].width),y(e,"height",u=t[64].height)},m(r,i){E(r,e,i)},p(r,i){i[0]&33&&n!==(n=r[64][r[5].imgsrckey])&&y(e,"alt",n),i[0]&33&&!Ke(e.src,l=r[64][r[5].imgsrckey])&&y(e,"src",l),i[0]&1&&s!==(s=r[64].width)&&y(e,"width",s),i[0]&1&&u!==(u=r[64].height)&&y(e,"height",u)},d(r){r&&g(e)}}}function xn(t){let e,n=!t[5].backimg&&ct(t);return{c(){n&&n.c(),e=R()},l(l){n&&n.l(l),e=R()},m(l,s){n&&n.m(l,s),E(l,e,s)},p(l,s){l[5].backimg?n&&(n.d(1),n=null):n?n.p(l,s):(n=ct(l),n.c(),n.m(e.parentNode,e))},d(l){n&&n.d(l),l&&g(e)}}}function _t(t,e){let n,l,s,u,r,i=e[63],o,f,_,h;const c=e[29].default,a=P(c,e,e[28],rt),d=a||xn(e),T=()=>e[30](n,i),p=()=>e[30](null,i);return{key:t,first:null,c(){n=O("li"),d&&d.c(),l=le(),this.h()},l(L){n=j(L,"LI",{"data-id":!0,class:!0,style:!0});var k=I(n);d&&d.l(k),l=oe(k),k.forEach(g),this.h()},h(){y(n,"data-id",s=e[64].ix),y(n,"class",u=Ge(e[5].class)+" svelte-o9i0eo"),y(n,"style",r=e[5].backimg===!0?`background-image: url(${e[64][e[5].imgsrckey]})`:null),M(n,"active",e[64].ix===e[1]),this.first=n},m(L,k){E(L,n,k),d&&d.m(n,null),F(n,l),T(),f=!0,_||(h=[Ie(o=Rn(n)),W(n,"panstart",function(){ne(e[6].drag?e[15]:null)&&(e[6].drag?e[15]:null).apply(this,arguments)}),W(n,"panmove",function(){ne(e[6].drag?e[16]:null)&&(e[6].drag?e[16]:null).apply(this,arguments)}),W(n,"panend",function(){ne(e[6].drag?e[17]:null)&&(e[6].drag?e[17]:null).apply(this,arguments)})],_=!0)},p(L,k){e=L,a?a.p&&(!f||k[0]&268435457)&&X(a,c,e,e[28],f?Y(c,e[28],k,Qn):K(e[28]),rt):d&&d.p&&(!f||k[0]&33)&&d.p(e,f?k:[-1,-1,-1]),(!f||k[0]&1&&s!==(s=e[64].ix))&&y(n,"data-id",s),(!f||k[0]&32&&u!==(u=Ge(e[5].class)+" svelte-o9i0eo"))&&y(n,"class",u),(!f||k[0]&33&&r!==(r=e[5].backimg===!0?`background-image: url(${e[64][e[5].imgsrckey]})`:null))&&y(n,"style",r),i!==e[63]&&(p(),i=e[63],T()),k[0]&35&&M(n,"active",e[64].ix===e[1])},i(L){f||(b(d,L),f=!0)},o(L){w(d,L),f=!1},d(L){L&&g(n),d&&d.d(L),p(),_=!1,x(h)}}}function ht(t){let e,n,l,s;const u=[tl,el],r=[];function i(o,f){return o[7].loop?1:0}return e=i(t),n=r[e]=u[e](t),{c(){n.c(),l=R()},l(o){n.l(o),l=R()},m(o,f){r[e].m(o,f),E(o,l,f),s=!0},p(o,f){let _=e;e=i(o),e===_?r[e].p(o,f):(U(),w(r[_],1,1,()=>{r[_]=null}),q(),n=r[e],n?n.p(o,f):(n=r[e]=u[e](o),n.c()),b(n,1),n.m(l.parentNode,l))},i(o){s||(b(n),s=!0)},o(o){w(n),s=!1},d(o){r[e].d(o),o&&g(l)}}}function el(t){let e,n,l,s,u,r;const i=t[29]["arrow-left"],o=P(i,t,t[28],lt),f=o||nl(),_=t[29]["arrow-right"],h=P(_,t,t[28],nt),c=h||ll();return{c(){e=O("button"),f&&f.c(),n=le(),l=O("button"),c&&c.c(),this.h()},l(a){e=j(a,"BUTTON",{class:!0});var d=I(e);f&&f.l(d),d.forEach(g),n=oe(a),l=j(a,"BUTTON",{class:!0});var T=I(l);c&&c.l(T),T.forEach(g),this.h()},h(){y(e,"class","arrow-left svelte-o9i0eo"),y(l,"class","arrow-right svelte-o9i0eo")},m(a,d){E(a,e,d),f&&f.m(e,null),E(a,n,d),E(a,l,d),c&&c.m(l,null),s=!0,u||(r=[W(e,"click",t[34]),W(l,"click",t[35])],u=!0)},p(a,d){o&&o.p&&(!s||d[0]&268435457)&&X(o,i,a,a[28],s?Y(i,a[28],d,Gn):K(a[28]),lt),h&&h.p&&(!s||d[0]&268435457)&&X(h,_,a,a[28],s?Y(_,a[28],d,Kn):K(a[28]),nt)},i(a){s||(b(f,a),b(c,a),s=!0)},o(a){w(f,a),w(c,a),s=!1},d(a){a&&g(e),f&&f.d(a),a&&g(n),a&&g(l),c&&c.d(a),u=!1,x(r)}}}function tl(t){let e,n,l,s=t[1]>0&&dt(t),u=t[1]<t[0].length-1&&mt(t);return{c(){s&&s.c(),e=le(),u&&u.c(),n=R()},l(r){s&&s.l(r),e=oe(r),u&&u.l(r),n=R()},m(r,i){s&&s.m(r,i),E(r,e,i),u&&u.m(r,i),E(r,n,i),l=!0},p(r,i){r[1]>0?s?(s.p(r,i),i[0]&2&&b(s,1)):(s=dt(r),s.c(),b(s,1),s.m(e.parentNode,e)):s&&(U(),w(s,1,1,()=>{s=null}),q()),r[1]<r[0].length-1?u?(u.p(r,i),i[0]&3&&b(u,1)):(u=mt(r),u.c(),b(u,1),u.m(n.parentNode,n)):u&&(U(),w(u,1,1,()=>{u=null}),q())},i(r){l||(b(s),b(u),l=!0)},o(r){w(s),w(u),l=!1},d(r){s&&s.d(r),r&&g(e),u&&u.d(r),r&&g(n)}}}function nl(t){let e;return{c(){e=D("\u2190")},l(n){e=G(n,"\u2190")},m(n,l){E(n,e,l)},d(n){n&&g(e)}}}function ll(t){let e;return{c(){e=D("\u2192")},l(n){e=G(n,"\u2192")},m(n,l){E(n,e,l)},d(n){n&&g(e)}}}function dt(t){let e,n,l,s;const u=t[29]["arrow-left"],r=P(u,t,t[28],it),i=r||ol();return{c(){e=O("button"),i&&i.c(),this.h()},l(o){e=j(o,"BUTTON",{class:!0});var f=I(e);i&&i.l(f),f.forEach(g),this.h()},h(){y(e,"class","arrow-left svelte-o9i0eo")},m(o,f){E(o,e,f),i&&i.m(e,null),n=!0,l||(s=W(e,"click",t[32]),l=!0)},p(o,f){r&&r.p&&(!n||f[0]&268435457)&&X(r,u,o,o[28],n?Y(u,o[28],f,Jn):K(o[28]),it)},i(o){n||(b(i,o),n=!0)},o(o){w(i,o),n=!1},d(o){o&&g(e),i&&i.d(o),l=!1,s()}}}function ol(t){let e;return{c(){e=D("\u2190")},l(n){e=G(n,"\u2190")},m(n,l){E(n,e,l)},d(n){n&&g(e)}}}function mt(t){let e,n,l,s;const u=t[29]["arrow-right"],r=P(u,t,t[28],ot),i=r||il();return{c(){e=O("button"),i&&i.c(),this.h()},l(o){e=j(o,"BUTTON",{class:!0});var f=I(e);i&&i.l(f),f.forEach(g),this.h()},h(){y(e,"class","arrow-right svelte-o9i0eo")},m(o,f){E(o,e,f),i&&i.m(e,null),n=!0,l||(s=W(e,"click",t[33]),l=!0)},p(o,f){r&&r.p&&(!n||f[0]&268435457)&&X(r,u,o,o[28],n?Y(u,o[28],f,Vn):K(o[28]),ot)},i(o){n||(b(i,o),n=!0)},o(o){w(i,o),n=!1},d(o){o&&g(e),i&&i.d(o),l=!1,s()}}}function il(t){let e;return{c(){e=D("\u2192")},l(n){e=G(n,"\u2192")},m(n,l){E(n,e,l)},d(n){n&&g(e)}}}function pt(t){let e,n,l,s,u=t[6].dotsarrow&&gt(t),r=t[10],i=[];for(let _=0;_<r.length;_+=1)i[_]=wt($e(t,r,_));const o=_=>w(i[_],1,1,()=>{i[_]=null});let f=t[6].dotsarrow&&kt(t);return{c(){e=O("ul"),u&&u.c(),n=le();for(let _=0;_<i.length;_+=1)i[_].c();l=le(),f&&f.c(),this.h()},l(_){e=j(_,"UL",{class:!0});var h=I(e);u&&u.l(h),n=oe(h);for(let c=0;c<i.length;c+=1)i[c].l(h);l=oe(h),f&&f.l(h),h.forEach(g),this.h()},h(){y(e,"class","slidy-dots svelte-o9i0eo"),M(e,"pure",t[6].dotspure)},m(_,h){E(_,e,h),u&&u.m(e,null),F(e,n);for(let c=0;c<i.length;c+=1)i[c].m(e,null);F(e,l),f&&f.m(e,null),s=!0},p(_,h){if(_[6].dotsarrow?u?(u.p(_,h),h[0]&64&&b(u,1)):(u=gt(_),u.c(),b(u,1),u.m(e,n)):u&&(U(),w(u,1,1,()=>{u=null}),q()),h[0]&268436547){r=_[10];let c;for(c=0;c<r.length;c+=1){const a=$e(_,r,c);i[c]?(i[c].p(a,h),b(i[c],1)):(i[c]=wt(a),i[c].c(),b(i[c],1),i[c].m(e,l))}for(U(),c=r.length;c<i.length;c+=1)o(c);q()}_[6].dotsarrow?f?(f.p(_,h),h[0]&64&&b(f,1)):(f=kt(_),f.c(),b(f,1),f.m(e,null)):f&&(U(),w(f,1,1,()=>{f=null}),q()),h[0]&64&&M(e,"pure",_[6].dotspure)},i(_){if(!s){b(u);for(let h=0;h<r.length;h+=1)b(i[h]);b(f),s=!0}},o(_){w(u),i=i.filter(Fn);for(let h=0;h<i.length;h+=1)w(i[h]);w(f),s=!1},d(_){_&&g(e),u&&u.d(),pn(i,_),f&&f.d()}}}function gt(t){let e,n,l,s;const u=[rl,sl],r=[];function i(o,f){return o[7].loop?1:0}return e=i(t),n=r[e]=u[e](t),{c(){n.c(),l=R()},l(o){n.l(o),l=R()},m(o,f){r[e].m(o,f),E(o,l,f),s=!0},p(o,f){let _=e;e=i(o),e===_?r[e].p(o,f):(U(),w(r[_],1,1,()=>{r[_]=null}),q(),n=r[e],n?n.p(o,f):(n=r[e]=u[e](o),n.c()),b(n,1),n.m(l.parentNode,l))},i(o){s||(b(n),s=!0)},o(o){w(n),s=!1},d(o){r[e].d(o),o&&g(l)}}}function sl(t){let e,n,l,s;const u=t[29]["dots-arrow-left"],r=P(u,t,t[28],et),i=r||fl();return{c(){e=O("li"),i&&i.c(),this.h()},l(o){e=j(o,"LI",{class:!0});var f=I(e);i&&i.l(f),f.forEach(g),this.h()},h(){y(e,"class","dots-arrow-left svelte-o9i0eo")},m(o,f){E(o,e,f),i&&i.m(e,null),n=!0,l||(s=W(e,"click",t[37]),l=!0)},p(o,f){r&&r.p&&(!n||f[0]&268435457)&&X(r,u,o,o[28],n?Y(u,o[28],f,Yn):K(o[28]),et)},i(o){n||(b(i,o),n=!0)},o(o){w(i,o),n=!1},d(o){o&&g(e),i&&i.d(o),l=!1,s()}}}function rl(t){let e,n,l=t[1]>0&&bt(t);return{c(){l&&l.c(),e=R()},l(s){l&&l.l(s),e=R()},m(s,u){l&&l.m(s,u),E(s,e,u),n=!0},p(s,u){s[1]>0?l?(l.p(s,u),u[0]&2&&b(l,1)):(l=bt(s),l.c(),b(l,1),l.m(e.parentNode,e)):l&&(U(),w(l,1,1,()=>{l=null}),q())},i(s){n||(b(l),n=!0)},o(s){w(l),n=!1},d(s){l&&l.d(s),s&&g(e)}}}function fl(t){let e,n;return{c(){e=O("button"),n=D("\u2190"),this.h()},l(l){e=j(l,"BUTTON",{class:!0});var s=I(e);n=G(s,"\u2190"),s.forEach(g),this.h()},h(){y(e,"class","svelte-o9i0eo")},m(l,s){E(l,e,s),F(e,n)},d(l){l&&g(e)}}}function bt(t){let e,n,l,s;const u=t[29]["dots-arrow-left"],r=P(u,t,t[28],tt),i=r||ul();return{c(){e=O("li"),i&&i.c(),this.h()},l(o){e=j(o,"LI",{class:!0});var f=I(e);i&&i.l(f),f.forEach(g),this.h()},h(){y(e,"class","dots-arrow-left svelte-o9i0eo")},m(o,f){E(o,e,f),i&&i.m(e,null),n=!0,l||(s=W(e,"click",t[36]),l=!0)},p(o,f){r&&r.p&&(!n||f[0]&268435457)&&X(r,u,o,o[28],n?Y(u,o[28],f,Xn):K(o[28]),tt)},i(o){n||(b(i,o),n=!0)},o(o){w(i,o),n=!1},d(o){o&&g(e),i&&i.d(o),l=!1,s()}}}function ul(t){let e,n;return{c(){e=O("button"),n=D("\u2190"),this.h()},l(l){e=j(l,"BUTTON",{class:!0});var s=I(e);n=G(s,"\u2190"),s.forEach(g),this.h()},h(){y(e,"class","svelte-o9i0eo")},m(l,s){E(l,e,s),F(e,n)},d(l){l&&g(e)}}}function al(t){let e,n=(t[6].dotsnum&&!t[6].dotspure?t[63]:"")+"",l;return{c(){e=O("button"),l=D(n),this.h()},l(s){e=j(s,"BUTTON",{class:!0});var u=I(e);l=G(u,n),u.forEach(g),this.h()},h(){y(e,"class","svelte-o9i0eo")},m(s,u){E(s,e,u),F(e,l)},p(s,u){u[0]&64&&n!==(n=(s[6].dotsnum&&!s[6].dotspure?s[63]:"")+"")&&kn(l,n)},d(s){s&&g(e)}}}function wt(t){let e,n,l,s;const u=t[29].dot,r=P(u,t,t[28],xe),i=r||al(t);function o(){return t[38](t[63])}return{c(){e=O("li"),i&&i.c(),this.h()},l(f){e=j(f,"LI",{class:!0});var _=I(e);i&&i.l(_),_.forEach(g),this.h()},h(){y(e,"class","svelte-o9i0eo"),M(e,"active",t[63]===t[1])},m(f,_){E(f,e,_),i&&i.m(e,null),n=!0,l||(s=W(e,"click",bn(o)),l=!0)},p(f,_){t=f,r?r.p&&(!n||_[0]&268436481)&&X(r,u,t,t[28],n?Y(u,t[28],_,Pn):K(t[28]),xe):i&&i.p&&(!n||_[0]&64)&&i.p(t,n?_:[-1,-1,-1]),_[0]&2&&M(e,"active",t[63]===t[1])},i(f){n||(b(i,f),n=!0)},o(f){w(i,f),n=!1},d(f){f&&g(e),i&&i.d(f),l=!1,s()}}}function kt(t){let e,n,l,s;const u=[_l,cl],r=[];function i(o,f){return o[7].loop?1:0}return e=i(t),n=r[e]=u[e](t),{c(){n.c(),l=R()},l(o){n.l(o),l=R()},m(o,f){r[e].m(o,f),E(o,l,f),s=!0},p(o,f){let _=e;e=i(o),e===_?r[e].p(o,f):(U(),w(r[_],1,1,()=>{r[_]=null}),q(),n=r[e],n?n.p(o,f):(n=r[e]=u[e](o),n.c()),b(n,1),n.m(l.parentNode,l))},i(o){s||(b(n),s=!0)},o(o){w(n),s=!1},d(o){r[e].d(o),o&&g(l)}}}function cl(t){let e,n,l,s;const u=t[29]["dots-arrow-right"],r=P(u,t,t[28],Qe),i=r||hl();return{c(){e=O("li"),i&&i.c(),this.h()},l(o){e=j(o,"LI",{class:!0});var f=I(e);i&&i.l(f),f.forEach(g),this.h()},h(){y(e,"class","dots-arrow-right svelte-o9i0eo")},m(o,f){E(o,e,f),i&&i.m(e,null),n=!0,l||(s=W(e,"click",t[40]),l=!0)},p(o,f){r&&r.p&&(!n||f[0]&268435457)&&X(r,u,o,o[28],n?Y(u,o[28],f,Dn):K(o[28]),Qe)},i(o){n||(b(i,o),n=!0)},o(o){w(i,o),n=!1},d(o){o&&g(e),i&&i.d(o),l=!1,s()}}}function _l(t){let e,n,l=t[1]<t[0].length-1&&yt(t);return{c(){l&&l.c(),e=R()},l(s){l&&l.l(s),e=R()},m(s,u){l&&l.m(s,u),E(s,e,u),n=!0},p(s,u){s[1]<s[0].length-1?l?(l.p(s,u),u[0]&3&&b(l,1)):(l=yt(s),l.c(),b(l,1),l.m(e.parentNode,e)):l&&(U(),w(l,1,1,()=>{l=null}),q())},i(s){n||(b(l),n=!0)},o(s){w(l),n=!1},d(s){l&&l.d(s),s&&g(e)}}}function hl(t){let e,n;return{c(){e=O("button"),n=D("\u2192"),this.h()},l(l){e=j(l,"BUTTON",{class:!0});var s=I(e);n=G(s,"\u2192"),s.forEach(g),this.h()},h(){y(e,"class","svelte-o9i0eo")},m(l,s){E(l,e,s),F(e,n)},d(l){l&&g(e)}}}function yt(t){let e,n,l,s;const u=t[29]["dots-arrow-right"],r=P(u,t,t[28],Ze),i=r||dl();return{c(){e=O("li"),i&&i.c(),this.h()},l(o){e=j(o,"LI",{class:!0});var f=I(e);i&&i.l(f),f.forEach(g),this.h()},h(){y(e,"class","dots-arrow-right svelte-o9i0eo")},m(o,f){E(o,e,f),i&&i.m(e,null),n=!0,l||(s=W(e,"click",t[39]),l=!0)},p(o,f){r&&r.p&&(!n||f[0]&268435457)&&X(r,u,o,o[28],n?Y(u,o[28],f,Hn):K(o[28]),Ze)},i(o){n||(b(i,o),n=!0)},o(o){w(i,o),n=!1},d(o){o&&g(e),i&&i.d(o),l=!1,s()}}}function dl(t){let e,n;return{c(){e=O("button"),n=D("\u2192"),this.h()},l(l){e=j(l,"BUTTON",{class:!0});var s=I(e);n=G(s,"\u2192"),s.forEach(g),this.h()},h(){y(e,"class","svelte-o9i0eo")},m(l,s){E(l,e,s),F(e,n)},d(l){l&&g(e)}}}function ml(t){let e,n,l,s,u,r,i,o,f,_,h=!t[2]&&ut(t),c=t[0]&&at(t),a=t[6].arrows&&t[2]&&ht(t),d=t[6].dots&&t[2]&&pt(t);return{c(){e=O("section"),h&&h.c(),n=le(),l=O("ul"),c&&c.c(),u=le(),a&&a.c(),r=le(),d&&d.c(),this.h()},l(T){e=j(T,"SECTION",{tabindex:!0,"aria-label":!0,id:!0,class:!0,style:!0});var p=I(e);h&&h.l(p),n=oe(p),l=j(p,"UL",{class:!0,style:!0});var L=I(l);c&&c.l(L),L.forEach(g),u=oe(p),a&&a.l(p),r=oe(p),d&&d.l(p),p.forEach(g),this.h()},h(){y(l,"class","slidy-ul svelte-o9i0eo"),y(l,"style",s=t[12]()),y(e,"tabindex","0"),y(e,"aria-label","Slidy"),y(e,"id",i=t[4].id),y(e,"class","slidy svelte-o9i0eo"),A(e,"--wrapw",t[4].width),A(e,"--wraph",t[4].height),A(e,"--wrapp",t[4].padding),A(e,"--slidew",t[5].width),A(e,"--slideh",t[5].height),A(e,"--slidef",t[5].objectfit),A(e,"--slideo",t[5].overflow),A(e,"--slideg",t[9]?`${t[5].gap}px 0 0 0`:`0 0 0 ${t[5].gap}px`),A(e,"--dur",t[7].duration+"ms"),M(e,"loaded",t[2]),M(e,"axisy",t[9]),M(e,"autowidth",t[5].width==="auto"),M(e,"antiloop",t[7].loop===!1),M(e,"alignmiddle",t[4].align==="middle"),M(e,"alignstart",t[4].align==="start"),M(e,"alignend",t[4].align==="end")},m(T,p){E(T,e,p),h&&h.m(e,null),F(e,n),F(e,l),c&&c.m(l,null),F(e,u),a&&a.m(e,null),F(e,r),d&&d.m(e,null),o=!0,f||(_=[W(l,"contextmenu",t[31]),Ie(Un(e)),W(e,"resize",t[13]),Ie(qn(e)),W(e,"wheels",function(){ne(t[6].wheel?t[14]:null)&&(t[6].wheel?t[14]:null).apply(this,arguments)}),W(e,"keydown",function(){ne(t[6].keys?t[18]:null)&&(t[6].keys?t[18]:null).apply(this,arguments)})],f=!0)},p(T,p){t=T,t[2]?h&&(U(),w(h,1,1,()=>{h=null}),q()):h?(h.p(t,p),p[0]&4&&b(h,1)):(h=ut(t),h.c(),b(h,1),h.m(e,n)),t[0]?c?(c.p(t,p),p[0]&1&&b(c,1)):(c=at(t),c.c(),b(c,1),c.m(l,null)):c&&(U(),w(c,1,1,()=>{c=null}),q()),(!o||p[0]&4096&&s!==(s=t[12]()))&&y(l,"style",s),t[6].arrows&&t[2]?a?(a.p(t,p),p[0]&68&&b(a,1)):(a=ht(t),a.c(),b(a,1),a.m(e,r)):a&&(U(),w(a,1,1,()=>{a=null}),q()),t[6].dots&&t[2]?d?(d.p(t,p),p[0]&68&&b(d,1)):(d=pt(t),d.c(),b(d,1),d.m(e,null)):d&&(U(),w(d,1,1,()=>{d=null}),q()),(!o||p[0]&16&&i!==(i=t[4].id))&&y(e,"id",i),(!o||p[0]&16)&&A(e,"--wrapw",t[4].width),(!o||p[0]&16)&&A(e,"--wraph",t[4].height),(!o||p[0]&16)&&A(e,"--wrapp",t[4].padding),(!o||p[0]&32)&&A(e,"--slidew",t[5].width),(!o||p[0]&32)&&A(e,"--slideh",t[5].height),(!o||p[0]&32)&&A(e,"--slidef",t[5].objectfit),(!o||p[0]&32)&&A(e,"--slideo",t[5].overflow),(!o||p[0]&544)&&A(e,"--slideg",t[9]?`${t[5].gap}px 0 0 0`:`0 0 0 ${t[5].gap}px`),(!o||p[0]&128)&&A(e,"--dur",t[7].duration+"ms"),p[0]&4&&M(e,"loaded",t[2]),p[0]&512&&M(e,"axisy",t[9]),p[0]&32&&M(e,"autowidth",t[5].width==="auto"),p[0]&128&&M(e,"antiloop",t[7].loop===!1),p[0]&16&&M(e,"alignmiddle",t[4].align==="middle"),p[0]&16&&M(e,"alignstart",t[4].align==="start"),p[0]&16&&M(e,"alignend",t[4].align==="end")},i(T){o||(b(h),b(c),b(a),b(d),o=!0)},o(T){w(h),w(c),w(a),w(d),o=!1},d(T){T&&g(e),h&&h.d(),c&&c.d(),a&&a.d(),d&&d.d(),f=!1,x(_)}}}function pl(t,e,n){let l,s,{$$slots:u={},$$scope:r}=e,{slides:i=[],key:o=m=>m.id||m[_.imgsrckey],wrap:f={id:null,width:"100%",height:"50%",padding:"0",align:"middle",alignmargin:0},slide:_={gap:0,class:"",width:"50%",height:"100%",backimg:!1,imgsrckey:"src",objectfit:"cover",overflow:"hidden"},controls:h={dots:!0,dotsnum:!0,dotsarrow:!0,dotspure:!1,arrows:!0,keys:!0,drag:!0,wheel:!0},options:c={axis:"x",loop:!0,duration:450,sensity:.3},index:a=4,init:d=!0,timeout:T=0}=e,p=!1;function L(){n(0,i=n(10,V=i.map((m,S)=>Ye({ix:S},m)))),T>0?setTimeout(()=>n(2,d=!0),T):n(2,d)}let k=[],V=[],z={},ee=0;function B(){p&&(ee=c.loop?Math.floor(i.length/2):a,n(21,z={active:{ix:i[ee].ix,width:k[ee].offsetWidth+_.gap,height:k[ee].offsetHeight+_.gap},first:{width:k[0].offsetWidth+_.gap,height:k[0].offsetHeight+_.gap},last:{width:k[i.length-1].offsetWidth+_.gap,height:k[i.length-1].offsetHeight+_.gap},before:{width:k.map((m,S)=>S<a?m.offsetWidth+_.gap:null).reduce((m,S)=>m+S),height:k.map((m,S)=>S<a?m.offsetHeight+_.gap:null).reduce((m,S)=>m+S)},after:{width:k.map((m,S)=>S>a?m.offsetWidth+_.gap:null).reduce((m,S)=>m+S),height:k.map((m,S)=>S>a?m.offsetHeight+_.gap:null).reduce((m,S)=>m+S)}}))}let N={},C={};function se(){p&&(n(22,N={first:l?z.first.height:z.first.width,last:l?z.last.height:z.last.width,active:l?z.active.height:z.active.width,before:l?z.before.height:z.before.width,after:l?z.after.height:z.after.width,wrap:l?Re:We}),n(23,C={align:(N.wrap-N.active+_.gap)/2-f.alignmargin,pos:(N.before-N.after)/2-v}))}let We,Re;function jt(m){We=m.detail.CR.width,Re=m.detail.CR.height,B()}let v=0,J=0,re=0,Q=c.duration;function Ce(){n(0,i=[i[i.length-1],...i.slice(0,-1)])}function Se(){n(0,i=[...i.slice(1),i[0]])}let H=a;function zt(m){for(;H>m;)n(27,Q=c.duration),c.loop&&(n(24,v+=N.last),n(25,J=-v),Ce()),H--;for(;H<m;)n(27,Q=c.duration),c.loop&&(n(24,v-=N.first),n(25,J=-v),Se()),H++}function Oe(){v>=N.last?(c.loop?Ce():n(1,a=H-=1),n(24,v=n(25,J=0))):v<=-N.first&&(c.loop?Se():n(1,a=H+=1),n(24,v=n(25,J=0))),c.loop?n(1,a=H=z.active.ix):v>=N.before||v<=-N.after?n(24,v=v/1.5):n(24,v)}let ae;function Ue(){n(27,Q=c.duration);const m=S=>{S?c.loop?(Oe(),n(24,v=te=n(27,Q=0)),ie().then(()=>ie().then(()=>n(1,a=H=z.active.ix))),clearTimeout(ae)):(n(1,a=S),n(24,v=te=0)):n(24,v=n(25,J=te=0))};v>N.last/3||te<-c.sensity?c.loop?(n(24,v+=N.last-v),ae=setTimeout(()=>m(Ce),Q)):m(n(1,a=H-=1)):v<-N.first/3||te>c.sensity?c.loop?(n(24,v-=N.first+v),ae=setTimeout(()=>m(Se),Q)):m(n(1,a=H+=1)):m()}function qe(){n(27,Q=0),J!==0&&n(25,J=n(24,v=te=0)),ae!==null&&clearTimeout(ae),me!==null&&clearTimeout(me),ge!==null&&clearInterval(ge)}const Fe=m=>Math.floor(l?m.detail.dy:m.detail.dx)*1.6;let me;function At(m){qe(),n(24,v-=Fe(m)),Oe(),me=setTimeout(()=>{clearTimeout(me),Ue()},c.duration/2)}let pe=!1,De=0,te=0,ge;function Wt(){qe(),n(11,pe=!0)}function Rt(m){n(24,v+=Fe(m)),ge=setInterval(()=>De=v,60),te=(De-v)/60,Oe()}function Ut(){n(11,pe=!1),n(24,v+=v*te/1.6),clearInterval(ge),Ue()}function qt(m){m.keyCode===37||m.keyCode===38?n(1,a--,a):(m.keyCode===39||m.keyCode===40)&&n(1,a++,a)}function Ft(m,S){je[m?"unshift":"push"](()=>{k[S]=m,n(8,k)})}const Dt=()=>n(11,pe=!1),Ht=()=>n(1,a--,a),Pt=()=>n(1,a++,a),Yt=()=>n(1,a--,a),Xt=()=>n(1,a++,a),Kt=()=>n(1,a--,a),Gt=()=>n(1,a--,a),Vt=m=>n(1,a=m),Jt=()=>n(1,a++,a),Qt=()=>n(1,a++,a);return t.$$set=m=>{"slides"in m&&n(0,i=m.slides),"key"in m&&n(3,o=m.key),"wrap"in m&&n(4,f=m.wrap),"slide"in m&&n(5,_=m.slide),"controls"in m&&n(6,h=m.controls),"options"in m&&n(7,c=m.options),"index"in m&&n(1,a=m.index),"init"in m&&n(2,d=m.init),"timeout"in m&&n(19,T=m.timeout),"$$scope"in m&&n(28,r=m.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&256&&n(8,k=k.filter(Boolean)),t.$$.dirty[0]&257&&ie().then(()=>{n(20,p=k.length!==0&&i.length!==0&&k.length===i.length)}),t.$$.dirty[0]&1&&L(),t.$$.dirty[0]&1048707&&p&&ie().then(()=>{a<0?n(1,a=c.loop?H=i.length-1:0):a>i.length-1&&n(1,a=c.loop?H=0:i.length-1)}),t.$$.dirty[0]&17825794&&p&&ie().then(()=>B()),t.$$.dirty[0]&128&&n(9,l=c.axis==="y"),t.$$.dirty[0]&3145728&&p&&ie().then(()=>se()),t.$$.dirty[0]&30408849&&p&&ie().then(()=>{f.align==="end"?n(26,re=i.length%2===0?c.loop?v+C.align-N.active/2:-C.pos+C.align:c.loop?v+C.align:-C.pos+C.align):f.align==="start"?n(26,re=i.length%2===0?c.loop?v-C.align-N.active/2:-C.pos-C.align:c.loop?v-C.align:-C.pos-C.align):n(26,re=i.length%2===0?c.loop?v-N.active/2:-C.pos:c.loop?v:-C.pos)}),t.$$.dirty[0]&234881536&&n(12,s=()=>l?`transform: translate(0, ${re}px); top: ${J}px; transition: transform ${Q}ms;`:`transform: translate(${re}px, 0); left: ${J}px; transition: transform ${Q}ms;`),t.$$.dirty[0]&6&&d&&zt(a)},[i,a,d,o,f,_,h,c,k,l,V,pe,s,jt,At,Wt,Rt,Ut,qt,T,p,z,N,C,v,J,re,Q,r,u,Ft,Dt,Ht,Pt,Yt,Xt,Kt,Gt,Vt,Jt,Qt]}class Al extends Wn{constructor(e){super();An(this,e,pl,ml,ln,{slides:0,key:3,wrap:4,slide:5,controls:6,options:7,index:1,init:2,timeout:19},null,[-1,-1,-1])}}export{yl as $,Ol as A,jn as B,tn as C,Il as D,ie as E,P as F,gn as G,kl as H,Ke as I,M as J,F as K,W as L,X as M,K as N,Y as O,Te as P,Cl as Q,bl as R,Wn as S,wl as T,zl as U,Ll as V,$ as W,x as X,jl as Y,Al as Z,pn as _,I as a,vl as a0,y as b,j as c,g as d,O as e,A as f,E as g,G as h,An as i,kn as j,le as k,R as l,oe as m,U as n,w as o,q as p,b as q,Nl as r,nn as s,D as t,Tl as u,El as v,Bl as w,Ml as x,In as y,Sl as z};
