(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function f(){}function Z(t){return t()}function R(){return Object.create(null)}function I(t){t.forEach(Z)}function j(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function z(t){return Object.keys(t).length===0}function F(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function E(){return K(" ")}function U(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function J(t){return Array.from(t.childNodes)}function W(t,e){t.value=e??""}let T;function A(t){T=t}const S=[],G=[],M=[],N=[],Q=Promise.resolve();let H=!1;function X(){H||(H=!0,Q.then(B))}function q(t){M.push(t)}function Y(t){N.push(t)}const O=new Set;let C=0;function B(){if(C!==0)return;const t=T;do{try{for(;C<S.length;){const e=S[C];C++,A(e),ee(e.$$)}}catch(e){throw S.length=0,C=0,e}for(A(null),S.length=0,C=0;G.length;)G.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];O.has(n)||(O.add(n),n())}M.length=0}while(S.length);for(;N.length;)N.pop()();H=!1,O.clear(),A(t)}function ee(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const V=new Set;let te;function m(t,e){t&&t.i&&(V.delete(t),t.i(e))}function x(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),te.c.push(()=>{V.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function ne(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function y(t){t&&t.c()}function p(t,e,n,r){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),r||q(()=>{const o=t.$$.on_mount.map(Z).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...o):I(o),t.$$.on_mount=[]}),c.forEach(q)}function h(t,e){const n=t.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function re(t,e){t.$$.dirty[0]===-1&&(S.push(t),X(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _(t,e,n,r,s,c,o,u=[-1]){const l=T;A(t);const i=t.$$={fragment:null,ctx:[],props:c,update:f,not_equal:s,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:R(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};o&&o(i.root);let L=!1;if(i.ctx=n?n(t,e.props||{},(a,k,...D)=>{const P=D.length?D[0]:k;return i.ctx&&s(i.ctx[a],i.ctx[a]=P)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](P),L&&re(t,a)),k}):[],i.update(),L=!0,I(i.before_update),i.fragment=r?r(i.ctx):!1,e.target){if(e.hydrate){const a=J(e.target);i.fragment&&i.fragment.l(a),a.forEach(d)}else i.fragment&&i.fragment.c();e.intro&&m(t.$$.fragment),p(t,e.target,e.anchor,e.customElement),B()}A(l)}class v{$destroy(){h(this,1),this.$destroy=f}$on(e,n){if(!j(n))return f;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function se(t){let e;return{c(){e=b("span"),e.innerHTML='Made with ❤️ by <a href="https://github.com/t1xx1" rel="noreferrer" target="_blank">T1xx1</a>'},m(n,r){g(n,e,r)},p:f,i:f,o:f,d(n){n&&d(e)}}}class ce extends v{constructor(e){super(),_(this,e,null,se,$,{})}}const ie="0.0.1",oe={ver:ie};function ue(t){let e;return{c(){e=b("span"),e.textContent=`v${oe.ver}`},m(n,r){g(n,e,r)},p:f,i:f,o:f,d(n){n&&d(e)}}}class fe extends v{constructor(e){super(),_(this,e,null,ue,$,{})}}function le(t){let e,n,r,s,c;return n=new ce({}),s=new fe({}),{c(){e=b("footer"),y(n.$$.fragment),r=E(),y(s.$$.fragment),w(e,"class","svelte-1pg59mv")},m(o,u){g(o,e,u),p(n,e,null),F(e,r),p(s,e,null),c=!0},p:f,i(o){c||(m(n.$$.fragment,o),m(s.$$.fragment,o),c=!0)},o(o){x(n.$$.fragment,o),x(s.$$.fragment,o),c=!1},d(o){o&&d(e),h(n),h(s)}}}let ae=class extends v{constructor(e){super(),_(this,e,null,le,$,{})}};function de(t){let e;return{c(){e=b("h1"),e.textContent="SVGisLive",w(e,"class","svelte-1fqinzu")},m(n,r){g(n,e,r)},p:f,i:f,o:f,d(n){n&&d(e)}}}class ge extends v{constructor(e){super(),_(this,e,null,de,$,{})}}function me(t){let e,n,r;return n=new ge({}),{c(){e=b("header"),y(n.$$.fragment),w(e,"class","svelte-ol0yi4")},m(s,c){g(s,e,c),p(n,e,null),r=!0},p:f,i(s){r||(m(n.$$.fragment,s),r=!0)},o(s){x(n.$$.fragment,s),r=!1},d(s){s&&d(e),h(n)}}}let pe=class extends v{constructor(e){super(),_(this,e,null,me,$,{})}};function he(t){let e,n,r;return{c(){e=b("textarea"),w(e,"class","block svelte-1b5ho5r"),w(e,"spellcheck","false")},m(s,c){g(s,e,c),W(e,t[0]),n||(r=U(e,"input",t[1]),n=!0)},p(s,[c]){c&1&&W(e,s[0])},i:f,o:f,d(s){s&&d(e),n=!1,r()}}}function $e(t,e,n){let{svg:r}=e;function s(){r=this.value,n(0,r)}return t.$$set=c=>{"svg"in c&&n(0,r=c.svg)},[r,s]}class _e extends v{constructor(e){super(),_(this,e,$e,he,$,{svg:0})}}function ve(t){let e;return{c(){e=b("div"),w(e,"class","block svelte-1px6en9")},m(n,r){g(n,e,r),e.innerHTML=t[0]},p(n,[r]){r&1&&(e.innerHTML=n[0])},i:f,o:f,d(n){n&&d(e)}}}function xe(t,e,n){let{svg:r}=e;return t.$$set=s=>{"svg"in s&&n(0,r=s.svg)},[r]}class ye extends v{constructor(e){super(),_(this,e,xe,ve,$,{svg:0})}}const be=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 300 300">

   <title>SVG Logo</title>
   <desc>Designed for the SVG Logo Contest in 2006 by Harvey Rayner, and adopted by W3C in 2009. It is available under the Creative Commons license for those who have an SVG product or who are using SVG on their site.</desc>

   <metadata id="license">
      <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://web.resource.org/cc/">
         <cc:Work rdf:about="">
            <dc:title>SVG Logo</dc:title>
            <dc:date>14-08-2009</dc:date>
            <dc:creator>
               <cc:Agent>
                  <dc:title>W3C</dc:title>
               </cc:Agent>
               <cc:Agent>
                  <dc:title>Harvey Rayner, designer</dc:title>
               </cc:Agent>
            </dc:creator>
            <dc:description>See document description</dc:description>
            <cc:license rdf:resource="http://creativecommons.org/licenses/by-nc-sa/2.5/" />
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
         </cc:Work>
         <cc:License rdf:about="http://creativecommons.org/licenses/by-nc-sa/2.5/">
            <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction" />
            <cc:permits rdf:resource="http://web.resource.org/cc/Distribution" />
            <cc:requires rdf:resource="http://web.resource.org/cc/Notice" />
            <cc:requires rdf:resource="http://web.resource.org/cc/Attribution" />
            <cc:prohibits rdf:resource="http://web.resource.org/cc/CommercialUse" />
            <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks" />
            <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike" />
         </cc:License>
      </rdf:RDF>
   </metadata>


   <defs>
      <g id="SVG" fill="#ffffff" transform="scale(2) translate(20,79)">
         <path id="S" d="M 5.482,31.319 C2.163,28.001 0.109,23.419 0.109,18.358 C0.109,8.232 8.322,0.024 18.443,0.024 C28.569,0.024 36.782,8.232 36.782,18.358 L26.042,18.358 C26.042,14.164 22.638,10.765 18.443,10.765 C14.249,10.765 10.850,14.164 10.850,18.358 C10.850,20.453 11.701,22.351 13.070,23.721 L13.075,23.721 C14.450,25.101 15.595,25.500 18.443,25.952 L18.443,25.952 C23.509,26.479 28.091,28.006 31.409,31.324 L31.409,31.324 C34.728,34.643 36.782,39.225 36.782,44.286 C36.782,54.412 28.569,62.625 18.443,62.625 C8.322,62.625 0.109,54.412 0.109,44.286 L10.850,44.286 C10.850,48.480 14.249,51.884 18.443,51.884 C22.638,51.884 26.042,48.480 26.042,44.286 C26.042,42.191 25.191,40.298 23.821,38.923 L23.816,38.923 C22.441,37.548 20.468,37.074 18.443,36.697 L18.443,36.692 C13.533,35.939 8.800,34.638 5.482,31.319 L5.482,31.319 L5.482,31.319 Z" />

         <path id="V" d="M 73.452,0.024 L60.482,62.625 L49.742,62.625 L36.782,0.024 L47.522,0.024 L55.122,36.687 L62.712,0.024 L73.452,0.024 Z" />

         <path id="G" d="M 91.792,25.952 L110.126,25.952 L110.126,44.286 L110.131,44.286 C110.131,54.413 101.918,62.626 91.792,62.626 C81.665,62.626 73.458,54.413 73.458,44.286 L73.458,44.286 L73.458,18.359 L73.453,18.359 C73.453,8.233 81.665,0.025 91.792,0.025 C101.913,0.025 110.126,8.233 110.126,18.359 L99.385,18.359 C99.385,14.169 95.981,10.765 91.792,10.765 C87.597,10.765 84.198,14.169 84.198,18.359 L84.198,44.286 L84.198,44.286 C84.198,48.481 87.597,51.880 91.792,51.880 C95.981,51.880 99.380,48.481 99.385,44.291 L99.385,44.286 L99.385,36.698 L91.792,36.698 L91.792,25.952 L91.792,25.952 Z" />
      </g>
   </defs>

   <path id="base" fill="#000" d="M8.5,150 H291.5 V250 C291.5,273.5 273.5,291.5 250,291.5 H50 C26.5,291.5 8.5,273.5 8.5,250 Z" />
   <g stroke-width="38.0086" stroke="#000">
      <g id="svgstar" transform="translate(150, 150)">
         <path id="svgbar" fill="#ffb13b" d="M-84.1487,-15.8513 a22.4171,22.4171 0 1 0 0,31.7026 h168.2974 a22.4171,22.4171 0 1 0 0,-31.7026 Z" />
         <use xlink:href="#svgbar" transform="rotate(45)" />
         <use xlink:href="#svgbar" transform="rotate(90)" />
         <use xlink:href="#svgbar" transform="rotate(135)" />
      </g>
   </g>
   <use xlink:href="#svgstar" />
   <use xlink:href="#base" opacity="0.85" />
   <use xlink:href="#SVG" />

</svg>`;function Le(t){let e,n,r,s,c,o;function u(i){t[1](i)}let l={};return t[0]!==void 0&&(l.svg=t[0]),n=new _e({props:l}),G.push(()=>ne(n,"svg",u)),c=new ye({props:{svg:t[0]}}),{c(){e=b("main"),y(n.$$.fragment),s=E(),y(c.$$.fragment),w(e,"class","svelte-cu3tf4")},m(i,L){g(i,e,L),p(n,e,null),F(e,s),p(c,e,null),o=!0},p(i,[L]){const a={};!r&&L&1&&(r=!0,a.svg=i[0],Y(()=>r=!1)),n.$set(a);const k={};L&1&&(k.svg=i[0]),c.$set(k)},i(i){o||(m(n.$$.fragment,i),m(c.$$.fragment,i),o=!0)},o(i){x(n.$$.fragment,i),x(c.$$.fragment,i),o=!1},d(i){i&&d(e),h(n),h(c)}}}function we(t,e,n){let r=be;function s(c){r=c,n(0,r)}return[r,s]}let Ce=class extends v{constructor(e){super(),_(this,e,we,Le,$,{})}};function Se(t){let e,n,r,s,c,o;return e=new pe({}),r=new Ce({}),c=new ae({}),{c(){y(e.$$.fragment),n=E(),y(r.$$.fragment),s=E(),y(c.$$.fragment)},m(u,l){p(e,u,l),g(u,n,l),p(r,u,l),g(u,s,l),p(c,u,l),o=!0},p:f,i(u){o||(m(e.$$.fragment,u),m(r.$$.fragment,u),m(c.$$.fragment,u),o=!0)},o(u){x(e.$$.fragment,u),x(r.$$.fragment,u),x(c.$$.fragment,u),o=!1},d(u){h(e,u),u&&d(n),h(r,u),u&&d(s),h(c,u)}}}class ke extends v{constructor(e){super(),_(this,e,null,Se,$,{})}}new ke({target:document.querySelector("#app")});
