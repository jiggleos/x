(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{526:function(e,n,t){var content=t(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(22).default)("6aeef7c2",content,!0,{sourceMap:!1})},527:function(e,n,t){"use strict";t.r(n);var r=t(313),o=t(498),c=t(491),l=t(547),d=t(485),f=t(482),h=t(217),m=t(544),v=t(495),y=t(546),w=t(545),k=t(553),x=t(55),E=(t(42),t(28)),O=(t(104),t(5),t(65),t(3)),C=t(191),S=t(505),M=t.n(S);function _(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(n){j(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var R="_",P="function",V=[];function F(){var mask=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R;if(!H(mask))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==mask.indexOf(e))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+"The placeholder character that was received is: ".concat(JSON.stringify(e),"\n\n")+"The mask that was received is: ".concat(JSON.stringify(mask)));return mask.map((function(n){return n instanceof RegExp?e:n})).join("")}function H(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function G(mask){for(var e,n=[];-1!==(e=mask.indexOf("[]"));)n.push(e),mask.splice(e,1);return{maskWithoutCaretTraps:mask,indexes:n}}var L=[],N="";function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,mask=arguments.length>1&&void 0!==arguments[1]?arguments[1]:L,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!H(mask)){if(A(mask)!==P)throw new Error("Text-mask:conformToMask; The mask property must be an array.");mask=G(mask=mask(e,n)).maskWithoutCaretTraps}var t=n.guide,r=void 0===t||t,o=n.previousConformedValue,c=void 0===o?N:o,l=n.placeholderChar,d=void 0===l?R:l,f=n.placeholder,h=void 0===f?F(mask,d):f,m=n.currentCaretPosition,v=n.keepCharPositions,y=!1===r&&void 0!==c,w=e.length,k=c.length,x=h.length,E=mask.length,O=w-k,C=O>0,S=m+(C?-O:0),M=S+Math.abs(O);if(!0===v&&!C){for(var _=N,i=S;i<M;i++)h[i]===d&&(_+=d);e=e.slice(0,S)+_+e.slice(S,w)}for(var T=e.split(N).map((function(e,i){return{char:e,isNew:i>=S&&i<M}})),j=w-1;j>=0;j--){var V=T[j].char;if(V!==d){var B=j>=S&&k===E;V===h[B?j-O:j]&&T.splice(j,1)}}var I=N,$=!1;e:for(var J=0;J<x;J++){var D=h[J];if(D===d){if(T.length>0)for(;T.length>0;){var U=T.shift(),W=U.char,z=U.isNew;if(W===d&&!0!==y){I+=d;continue e}if(mask[J].test(W)){if(!0===v&&!1!==z&&c!==N&&!1!==r&&C){for(var X=T.length,Y=null,Z=0;Z<X;Z++){var K=T[Z];if(K.char!==d&&!1===K.isNew)break;if(K.char===d){Y=Z;break}}null!==Y?(I+=W,T.splice(Y,1)):J--}else I+=W;continue e}$=!0}!1===y&&(I+=h.substr(J,x));break}I+=D}if(y&&!1===C){for(var Q=null,ee=0;ee<I.length;ee++)h[ee]===d&&(Q=ee);I=null!==Q?I.substr(0,Q+1):N}return{conformedValue:I,meta:{someCharsRejected:$}}}var I={__nextCharOptional__:!0},$={"#":/\d/,A:/[a-z]/i,N:/[a-z0-9]/i,"?":I,X:/./},J=function(e){return n=e.toString().replace(/.(\/)[gmiyus]{0,6}$/,(function(e){return e.replace("/","?/")})),t=n.lastIndexOf("/"),new RegExp(n.slice(1,t),n.slice(t+1));var n,t},D=function(e){return e instanceof RegExp?e:function(e){return new RegExp("/[".concat(function(e){return"[\\^$.|?*+()".indexOf(e)>-1?"\\".concat(e):e}(e),"]/"))}(e)};function U(mask){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$;return mask.map((function(n,t,r){var o=e[n]||n,c=r[t-1],l=e[c]||c;return o===I?null:l===I?J(D(o)):o})).filter(Boolean)}var W=function(e){return e instanceof HTMLInputElement?e:e.querySelector("input")||e},z=function(e){return"function"==typeof e},X=function(e){return"string"==typeof e};function Y(e,n){return Array.isArray(e)?function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$;return U(e.map((function(e){return e instanceof RegExp?e:"string"==typeof e?e.split(""):null})).filter(Boolean).reduce((function(mask,e){return mask.concat(e)}),[]),n)}(e,n):z(e)?e:X(e)&&e.length>0?function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$;return U(e.split(""),n)}(e,n):e}function Z(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$;return null===e||Array.isArray(e)||"object"!==A(e)?n:Object.keys(e).reduce((function(n,t){var r=e[t];return null===r||r instanceof RegExp?T(T({},n),{},j({},t,r)):n}),n)}var K=function(){var e=new Map,n={previousValue:"",mask:[]};function t(t){return e.get(t)||T({},n)}return{partiallyUpdate:function(n,r){e.set(n,T(T({},t(n)),r))},remove:function(n){e.delete(n)},get:t}}();function Q(e){!function(e,n){var t=document.createEvent("HTMLEvents");t.initEvent(n,!0,!0),e.dispatchEvent(t)}(e,"input")}function ee(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.value,r=K.get(e),o=r.previousValue,mask=r.mask,c=t!==o,l=t.length>o.length,d=t&&c&&l;if((n||d)&&mask){var f=B(t,mask,{guide:!1}),h=f.conformedValue;e.value=h,Q(e)}K.partiallyUpdate(e,{previousValue:t})}function ne(e,n,t){var mask=Y(n,t);K.partiallyUpdate(e,{mask:mask})}function te(mask){return(Array.isArray(mask)?mask:[mask]).filter((function(e){return X(e)||e instanceof RegExp})).toString()}function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Z(e&&e.placeholders);return{bind:function(e,t){var r=t.value;ne(e=W(e),r,n),ee(e)},componentUpdated:function(e,t){var r=t.value,o=t.oldValue;e=W(e);var c=z(r)||te(o)!==te(r);c&&ne(e,r,n),ee(e,c)},unbind:function(e){e=W(e),K.remove(e)}}}re();function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Z(e&&e.placeholders);return function(e,t){if(!X(e)&&!Number.isFinite(e))return e;var mask=Y(t,n);return B("".concat(e),mask,{guide:!1}).conformedValue}}ae();O.a.use((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.directive("mask",re(n)),e.filter("VMask",ae(n))}));var oe=new M.a;var ie,ce,se,ue,le={data:function(){return{contractAddress:"0x2E88Fb70b11bf2B1CF1A6E2f9853f933C1A4cC2a",name:"",seed:"",loading:!1,mloading:!1,rules:[function(e){return!!e||"Required for Minting"},function(e){return e.length<=32||"Max 32 characters"},function(e){return e.length>=1||"Min 1 character"}]}},mounted:function(){document.getElementById("status").innerHTML="GM, Fren",document.getElementById("btn-mint").innerHTML="Mint"},computed:{color:function(){return this.seed<1e9?"indigo":this.seed<2e9?"teal":this.seed<3e9?"green":this.seed<4e9?"orange":"red"}},methods:{account:function(){return this.$wallet.account},decrement:function(){this.seed--,this.drawFreeSVG()},increment:function(){this.seed++,this.drawFreeSVG()},generate:function(){this.seed=oe.random_int()},drawFreeSVG:(ue=Object(E.a)(regeneratorRuntime.mark((function e(){var n,t,r,o,svg;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.getElementById("status")).innerHTML="Generating artwork ...",this.loading=!0,e.prev=3,t=new C.a.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/jsonrpc/lXxXzr3Jes3ZO6rqH-ppgeNY2Mr3_2C6"),r=new C.a.Contract("0x2E88Fb70b11bf2B1CF1A6E2f9853f933C1A4cC2a",abi,t),o=this.seed,e.next=10,r.drawFreeSVG(o);case 10:svg=e.sent,document.getElementById("iframe").src=svg.toString(),this.loading=!1,n.innerHTML="Right-click and save the <s>JPEG</s> SVG for personal use",e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),this.loading=!1,n.innerHTML=e.t0.reason;case 21:case"end":return e.stop()}}),e,this,[[3,17]])}))),function(){return ue.apply(this,arguments)}),connect:(se=Object(E.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.getElementById("status")).innerHTML="Connecting to wallet ...",this.loading=!0,e.prev=3,e.next=6,this.$wallet.connect();case 6:n.innerHTML="Connection to wallet "+this.$wallet.accountCompact,this.loading=!1,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),this.loading=!1,n.innerHTML=e.t0.reason;case 14:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(){return se.apply(this,arguments)}),mint:(ce=Object(E.a)(regeneratorRuntime.mark((function e(){var n,t,r,o,c,l,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.getElementById("status")).innerHTML="Minting artwork ...",this.mloading=!0,t=new C.a.providers.Web3Provider(window.ethereum),r=t.getSigner(),o=new C.a.Contract("0x2E88Fb70b11bf2B1CF1A6E2f9853f933C1A4cC2a",abi,r),c=this.seed,l=this.name,C.a.utils.parseEther("0.0"),e.prev=10,ethereum.request({method:"eth_requestAccounts"}),e.next=14,o.mint(c,l);case 14:return d=e.sent,e.next=17,d.wait();case 17:f=e.sent,console.log(f),this.mloading=!1,n.innerHTML="Artwork minted!",e.next=28;break;case 23:e.prev=23,e.t0=e.catch(10),console.error(e.t0),this.mloading=!1,n.innerHTML=e.t0.reason;case 28:case"end":return e.stop()}}),e,this,[[10,23]])}))),function(){return ce.apply(this,arguments)}),getBalance:(ie=Object(E.a)(regeneratorRuntime.mark((function e(){var n,t,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new C.a.providers.Web3Provider(window.ethereum),t=n.getSigner(),r=new C.a.Contract(address,abi,t),e.next=5,r.balanceOf(t.address);case 5:o=e.sent,console.log(o);case 7:case"end":return e.stop()}}),e)}))),function(){return ie.apply(this,arguments)})}},de=le,fe=(t(542),t(103)),component=Object(fe.a)(de,(function(){var e=this,n=e._self._c;return n(o.a,{staticClass:"ma-auto",attrs:{loading:e.loading,elevation:"1",shaped:"",tile:"","max-width":"500"},scopedSlots:e._u([e.loading?{key:"progress",fn:function(t){t.loading,t.error;return[n(v.a,{attrs:{color:e.color,height:"10",indeterminate:""}})]}}:null],null,!0)},[e._v(" "),n(x.a,{attrs:{flat:"",dense:""}},[n(c.b,{attrs:{id:"status"}})],1),e._v(" "),n(c.a,[n(d.a,{attrs:{fluid:""}},[n(m.a,{attrs:{row:"",wrap:""}},[n(f.a,{attrs:{xs12:""}},[n(w.a,{attrs:{id:"slider",dense:"",color:e.color,"track-color":"grey","always-dirty":"",min:"0",max:"4294967295",loading:e.loading},on:{end:function(n){return e.drawFreeSVG()}},scopedSlots:e._u([{key:"prepend",fn:function(){return[n(r.a,{staticClass:"mx-2",attrs:{dirty:"",fab:"",dark:"",small:"",loading:e.loading,color:e.color},on:{click:e.decrement}},[n(h.a,{attrs:{dark:""}},[e._v("\n                  mdi-minus\n                ")])],1)]},proxy:!0},{key:"append",fn:function(){return[n(r.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",loading:e.loading,color:e.color},on:{click:e.increment}},[n(h.a,{attrs:{dark:""}},[e._v("\n                  mdi-plus\n                ")])],1)]},proxy:!0}]),model:{value:e.seed,callback:function(n){e.seed=n},expression:"seed"}})],1)],1)],1)],1),e._v(" "),n(c.b,[n(y.a,[n(l.a,{attrs:{cols:"12"}},[n("span",[n(k.a,{directives:[{name:"mask",rawName:"v-mask",value:"##########",expression:"'##########'"}],attrs:{id:"seed",label:"Seed",placeholder:"1234567890",rules:[function(e){return!!e||"Seed is required to make magic happen"},function(e){return e<=4294967295||"Seed must be less than 4294967295"}],hint:"Seed must be between 0 and 4294967295"},on:{change:function(n){return e.drawFreeSVG()}},model:{value:e.seed,callback:function(n){e.seed=n},expression:"seed"}}),e._v(" "),n(r.a,{attrs:{id:"btn-generate",loading:e.loading,color:e.color,block:"",outlined:"","x-large":""},on:{click:function(n){e.generate(),e.drawFreeSVG()}}},[e._v("\n            GENERATE\n          ")])],1)]),e._v(" "),n(l.a,{attrs:{cols:"12"}},[n("span",[n(r.a,{attrs:{id:"btn-connect",color:e.color,block:"",outlined:"","x-large":"",disabled:!!e.$wallet.account},on:{click:function(n){return e.connect()}}},[n("strong",[e._v(e._s(e.$wallet.account?e.$wallet.accountCompact:"Connect Account"))])])],1),e._v(" "),n("span",[n(k.a,{attrs:{id:"name",label:"Name your Artwork",placeholder:"Guernica",counter:"32",type:"text",rules:[e.rules.required,e.rules.counter],maxlength:"32",hint:"Name is between 1 and 32 letters",clearable:""},model:{value:e.name,callback:function(n){e.name=n},expression:"name"}})],1),e._v(" "),n("span",[n(r.a,{attrs:{id:"btn-mint",color:e.color,loading:e.mloading,block:"",outlined:"","x-large":"",disabled:!e.$wallet.account||!e.seed||!e.name},on:{click:function(n){return e.mint()}}},[e._v("\n            MINT\n          ")])],1)])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports},542:function(e,n,t){"use strict";t(526)},543:function(e,n,t){var r=t(21)(!1);r.push([e.i,"#status{color:red}",""]),e.exports=r}}]);