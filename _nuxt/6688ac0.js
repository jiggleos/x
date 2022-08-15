(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{497:function(e,t,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("a8fb35ce",content,!0,{sourceMap:!1})},506:function(e,t){e.exports=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint32",name:"seed",type:"uint32"},{internalType:"string",name:"name",type:"string"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"url",type:"string"}],name:"setBaseExternalURL",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"url",type:"string"}],name:"setBaseImgURL",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"suffix",type:"string"}],name:"setImgSuffix",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"url",type:"string"}],name:"setYoutubeURL",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"toggleSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"base_external_url",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"base_img_url",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"contractURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint32",name:"_seed",type:"uint32"}],name:"drawFreeSVG",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToName",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToSeed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToSeeder",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"img_suffix",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"remainingSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"saleON",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"seedToId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"youtube_url",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}]},507:function(e,t,n){"use strict";n(497)},508:function(e,t,n){var r=n(21)(!1);r.push([e.i,"iframe{height:500px;width:100%;border:none}",""]),e.exports=r},529:function(e,t,n){"use strict";n.r(t);var r,o=n(313),l=n(498),y=n(491),d=n(547),m=n(485),c=n(482),f=n(217),T=n(544),v=n(495),w=n(546),M=n(545),h=n(483),x=n(553),_=n(55),k=n(186),I=n(28),F=(n(104),n(5),n(65),n(67),n(191)),S=n(506),A=n.n(S),C=n(505),O=new(n.n(C).a),G={data:function(){return{contractAddress:"0x2E88Fb70b11bf2B1CF1A6E2f9853f933C1A4cC2a",seed:"0",name:"Guernica",loading:!1}},computed:{color:function(){return this.seed<1e9?"indigo":this.seed<2e9?"teal":this.seed<3e9?"green":this.seed<4e9?"orange":"red"}},methods:{decrement:function(){this.seed--,this.drawFreeSVG()},increment:function(){this.seed++,this.drawFreeSVG()},generate:function(){this.seed=O.random_int()},drawFreeSVG:(r=Object(I.a)(regeneratorRuntime.mark((function e(){var t,n,r,svg,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,t=new F.a.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/jsonrpc/lXxXzr3Jes3ZO6rqH-ppgeNY2Mr3_2C6"),n=new F.a.Contract("0x2E88Fb70b11bf2B1CF1A6E2f9853f933C1A4cC2a",A.a,t),r=this.seed,e.next=8,n.drawFreeSVG(r);case 8:svg=e.sent,document.getElementById("iframe").src=svg.toString(),this.loading=!1,e.next=20;break;case 14:e.prev=14,e.t0=e.catch(1),this.loading=!1,(o=document.getElementById("btn-generate")).innerHTML=e.t0.reason,setTimeout((function(){o.innerHTML="Generate"}),1500);case 20:case"end":return e.stop()}}),e,this,[[1,14]])}))),function(){return r.apply(this,arguments)})}},E=G,R=(n(507),n(103)),component=Object(R.a)(E,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"ma-auto",attrs:{loading:e.loading,"max-width":"600"},scopedSlots:e._u([e.loading?{key:"progress",fn:function(n){n.loading,n.error;return[t(v.a,{attrs:{color:e.color,height:"10",indeterminate:""}})]}}:null],null,!0)},[e._v(" "),t(_.a,{attrs:{flat:"",dense:""}},[t(k.a,[t("span",{staticClass:"subheading"},[e._v("JIGGLEO GENERATOR")])]),e._v(" "),t(h.a),e._v(" "),t(o.a,{attrs:{icon:""}},[t(f.a,[e._v("mdi-share-variant")])],1)],1),e._v(" "),t("iframe",{attrs:{id:"iframe",sandbox:"allow-scripts",src:"https://jiggleos.com/push-button.svg"}}),e._v(" "),t(y.a,[t(m.a,{attrs:{fluid:""}},[t(T.a,{attrs:{row:"",wrap:""}},[t(c.a,{attrs:{xs12:""}},[t(M.a,{attrs:{id:"slider",dense:"",color:e.color,"track-color":"grey","always-dirty":"",min:"0",max:"4294967295",loading:e.loading},on:{end:function(t){return e.drawFreeSVG()}},scopedSlots:e._u([{key:"prepend",fn:function(){return[t(o.a,{staticClass:"mx-2",attrs:{dirty:"",fab:"",dark:"",small:"",loading:e.loading,color:e.color},on:{click:e.decrement}},[t(f.a,{attrs:{dark:""}},[e._v("\n                  mdi-minus\n                ")])],1)]},proxy:!0},{key:"append",fn:function(){return[t(o.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",loading:e.loading,color:e.color},on:{click:e.increment}},[t(f.a,{attrs:{dark:""}},[e._v("\n                  mdi-plus\n                ")])],1)]},proxy:!0}]),model:{value:e.seed,callback:function(t){e.seed=t},expression:"seed"}})],1)],1)],1)],1),e._v(" "),t(y.b,[t(w.a,{staticClass:"mb-0"},[t(d.a,{staticClass:"text-left"},[t("span",[t(x.a,{attrs:{id:"seed",label:"Seed",type:"number"},on:{change:function(t){return e.drawFreeSVG()}},model:{value:e.seed,callback:function(t){e.seed=t},expression:"seed"}})],1)]),e._v(" "),t(d.a,{staticClass:"text-right"},[t("span",[t(o.a,{attrs:{id:"btn-generate",loading:e.loading,color:e.color,block:"",outlined:"","x-large":""},on:{click:function(t){e.generate(),e.drawFreeSVG()}}},[e._v("\n            GENERATE\n          ")])],1)])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},550:function(e,t,n){"use strict";n.r(t);var r=n(547),o=n(546),l={components:{jMachine:n(529).default}},y=n(103),component=Object(y.a)(l,(function(){var e=this._self._c;return e(o.a,{attrs:{justify:"center",align:"center"}},[e(r.a,{attrs:{cols:"12",sm:"8",md:"6"}},[e("jMachine")],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);