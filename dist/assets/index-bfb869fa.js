(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function c(){}function K(e){return e()}function F(){return Object.create(null)}function A(e){e.forEach(K)}function V(e){return typeof e=="function"}function x(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}function Q(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode&&e.parentNode.removeChild(e)}function P(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function z(){return R(" ")}function U(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function W(e){return Array.from(e.childNodes)}function G(e,t){e.value=t??""}let H;function $(e){H=e}const g=[],I=[],L=[],M=[],X=Promise.resolve();let T=!1;function Y(){T||(T=!0,X.then(D))}function q(e){L.push(e)}function Z(e){M.push(e)}const C=new Set;let d=0;function D(){if(d!==0)return;const e=H;do{try{for(;d<g.length;){const t=g[d];d++,$(t),ee(t.$$)}}catch(t){throw g.length=0,d=0,t}for($(null),g.length=0,d=0;I.length;)I.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];C.has(n)||(C.add(n),n())}L.length=0}while(g.length);for(;M.length;)M.pop()();T=!1,C.clear(),$(e)}function ee(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const O=new Set;let te;function h(e,t){e&&e.i&&(O.delete(e),e.i(t))}function N(e,t,n,r){if(e&&e.o){if(O.has(e))return;O.add(e),te.c.push(()=>{O.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ne(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function S(e){e&&e.c()}function v(e,t,n,r){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),r||q(()=>{const u=e.$$.on_mount.map(K).filter(V);e.$$.on_destroy?e.$$.on_destroy.push(...u):A(u),e.$$.on_mount=[]}),s.forEach(q)}function y(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){e.$$.dirty[0]===-1&&(g.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function b(e,t,n,r,i,s,u,j=[-1]){const l=H;$(e);const o=e.$$={fragment:null,ctx:[],props:s,update:c,not_equal:i,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:F(),dirty:j,skip_bound:!1,root:t.target||l.$$.root};u&&u(o.root);let a=!1;if(o.ctx=n?n(e,t.props||{},(f,p,...k)=>{const B=k.length?k[0]:p;return o.ctx&&i(o.ctx[f],o.ctx[f]=B)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](B),a&&re(e,f)),p}):[],o.update(),a=!0,A(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const f=W(t.target);o.fragment&&o.fragment.l(f),f.forEach(_)}else o.fragment&&o.fragment.c();t.intro&&h(e.$$.fragment),v(e,t.target,t.anchor,t.customElement),D()}$(l)}class E{$destroy(){y(this,1),this.$destroy=c}$on(t,n){if(!V(n))return c;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function se(e){let t,n,r;return{c(){t=P("textarea"),m(t,"class","block"),m(t,"spellcheck","false")},m(i,s){w(i,t,s),G(t,e[0]),n||(r=U(t,"input",e[1]),n=!0)},p(i,[s]){s&1&&G(t,i[0])},i:c,o:c,d(i){i&&_(t),n=!1,r()}}}function ie(e,t,n){let{svg:r}=t;function i(){r=this.value,n(0,r)}return e.$$set=s=>{"svg"in s&&n(0,r=s.svg)},[r,i]}class oe extends E{constructor(t){super(),b(this,t,ie,se,x,{svg:0})}}function ue(e){let t;return{c(){t=P("div"),m(t,"class","block svelte-7q0ktp")},m(n,r){w(n,t,r),t.innerHTML=e[0]},p(n,[r]){r&1&&(t.innerHTML=n[0])},i:c,o:c,d(n){n&&_(t)}}}function fe(e,t,n){let{svg:r}=t;return e.$$set=i=>{"svg"in i&&n(0,r=i.svg)},[r]}class ce extends E{constructor(t){super(),b(this,t,fe,ue,x,{svg:0})}}function le(e){let t,n,r,i,s,u;function j(o){e[1](o)}let l={};return e[0]!==void 0&&(l.svg=e[0]),n=new oe({props:l}),I.push(()=>ne(n,"svg",j)),s=new ce({props:{svg:e[0]}}),{c(){t=P("main"),S(n.$$.fragment),i=z(),S(s.$$.fragment),m(t,"class","svelte-f7gghf")},m(o,a){w(o,t,a),v(n,t,null),Q(t,i),v(s,t,null),u=!0},p(o,[a]){const f={};!r&&a&1&&(r=!0,f.svg=o[0],Z(()=>r=!1)),n.$set(f);const p={};a&1&&(p.svg=o[0]),s.$set(p)},i(o){u||(h(n.$$.fragment,o),h(s.$$.fragment,o),u=!0)},o(o){N(n.$$.fragment,o),N(s.$$.fragment,o),u=!1},d(o){o&&_(t),y(n),y(s)}}}function ae(e,t,n){var r='<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500"><circle cx="50" cy="50" r="20" /></svg>';function i(s){r=s,n(0,r)}return[r,i]}let de=class extends E{constructor(t){super(),b(this,t,ae,le,x,{})}};function ge(e){let t;return{c(){t=P("h1"),t.textContent="SVGisLive",m(t,"class","svelte-82x9gm")},m(n,r){w(n,t,r)},p:c,i:c,o:c,d(n){n&&_(t)}}}class _e extends E{constructor(t){super(),b(this,t,null,ge,x,{})}}function pe(e){let t,n,r,i;return t=new _e({}),r=new de({}),{c(){S(t.$$.fragment),n=z(),S(r.$$.fragment)},m(s,u){v(t,s,u),w(s,n,u),v(r,s,u),i=!0},p:c,i(s){i||(h(t.$$.fragment,s),h(r.$$.fragment,s),i=!0)},o(s){N(t.$$.fragment,s),N(r.$$.fragment,s),i=!1},d(s){y(t,s),s&&_(n),y(r,s)}}}class $e extends E{constructor(t){super(),b(this,t,null,pe,x,{})}}new $e({target:document.querySelector("#app")});