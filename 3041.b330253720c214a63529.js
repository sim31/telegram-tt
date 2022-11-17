"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[3041],{51133:(e,t,n)=>{n.r(t),n.d(t,{AuthCode:()=>v,AuthPassword:()=>f,AuthRegister:()=>y});var a=n(14050),r=n(33555),o=n(77361),l=n(60782),s=n(32340),i=n(46590),c=n(59107),d=n(97687),u=n(34288),m=n(83716),h=n(13365),Z=n(97799);const g=o.wB?m.qp:m.z7,p=(0,a.X$)((e=>{let{code:t,codeLength:n,trackingDirection:r,isTracking:o,isBig:l}=e;const[s,i]=(0,a.eJ)(!1),c=165/n,d=(0,a.I4)((()=>i(!0)),[]);return a.ZP.createElement("div",{id:"monkey",className:l?"big":""},!s&&a.ZP.createElement("div",{className:"monkey-preview"}),a.ZP.createElement(Z.Z,{size:l?m.K2:g,className:o?"hidden":void 0,tgsUrl:h.l.MonkeyIdle,play:!o,onLoad:d}),a.ZP.createElement(Z.Z,{size:l?m.K2:g,className:o?"shown":"hidden",tgsUrl:h.l.MonkeyTracking,playSegment:o?function(){const e=t&&t.length>1||r<0?15+c*(t.length-1):0,a=t.length===n?180:15+c*t.length;return r<1?[a,e]:[e,a]}():void 0,speed:2,noLoop:!0}))})),v=(0,a.X$)((0,r.c$)((e=>(0,l.ei)(e,["authPhoneNumber","authIsCodeViaApp","authIsLoading","authError"])))((e=>{let{authPhoneNumber:t,authIsCodeViaApp:n,authIsLoading:l,authError:m}=e;const{setAuthCode:h,returnToAuthPhoneNumber:Z,clearAuthError:g}=(0,r.Sv)(),v=(0,c.Z)(),P=(0,a.sO)(null),[E,f]=(0,a.eJ)(""),[b,N]=(0,a.eJ)(!1),[y,w]=(0,a.eJ)(1);(0,a.d4)((()=>{o.$b||P.current.focus()}),[]),(0,i.Z)({isActive:!0,onBack:Z});const C=(0,a.I4)((e=>{m&&g();const{currentTarget:t}=e;t.value=t.value.replace(/[^\d]+/,"").substr(0,5),t.value!==E&&(f(t.value),b?t.value.length||N(!1):N(!0),E&&E.length>t.value.length?w(-1):w(1),5===t.value.length&&h({code:t.value}))}),[m,g,E,b,h]);return a.ZP.createElement("div",{id:"auth-code-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(p,{code:E,codeLength:5,isTracking:b,trackingDirection:y}),a.ZP.createElement("h1",null,t,a.ZP.createElement("div",{className:"auth-number-edit",onClick:Z,role:"button",tabIndex:0,title:v("WrongNumber")},a.ZP.createElement("i",{className:"icon-edit"}))),a.ZP.createElement("p",{className:"note"},(0,s.Z)(v(n?"SentAppCode":"Login.JustSentSms"),["simple_markdown"])),a.ZP.createElement(d.Z,{ref:P,id:"sign-in-code",label:v("Code"),onInput:C,value:E,error:m&&v(m),autoComplete:"off",inputMode:"numeric"}),l&&a.ZP.createElement(u.Z,null)))})));var P=n(93490),E=n(99364);const f=(0,a.X$)((0,r.c$)((e=>(0,l.ei)(e,["authIsLoading","authError","authHint"])))((e=>{let{authIsLoading:t,authError:n,authHint:o}=e;const{setAuthPassword:l,clearAuthError:s}=(0,r.Sv)(),i=(0,c.Z)(),[d,u]=(0,a.eJ)(!1),m=(0,a.I4)((e=>{u(e)}),[]),h=(0,a.I4)((e=>{l({password:e})}),[l]);return a.ZP.createElement("div",{id:"auth-password-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(P.Z,{isPasswordVisible:d}),a.ZP.createElement("h1",null,i("Login.Header.Password")),a.ZP.createElement("p",{className:"note"},i("Login.EnterPasswordDescription")),a.ZP.createElement(E.Z,{clearError:s,error:n&&i(n),hint:o,isLoading:t,isPasswordVisible:d,onChangePasswordVisibility:m,onSubmit:h})))})));var b=n(231),N=n(90710);const y=(0,a.X$)((0,r.c$)((e=>(0,l.ei)(e,["authIsLoading","authError"])))((e=>{let{authIsLoading:t,authError:n}=e;const{signUp:o,clearAuthError:l,uploadProfilePhoto:s}=(0,r.Sv)(),i=(0,c.Z)(),[u,m]=(0,a.eJ)(!1),[h,Z]=(0,a.eJ)(),[g,p]=(0,a.eJ)(""),[v,P]=(0,a.eJ)(""),E=(0,a.I4)((e=>{n&&l();const{target:t}=e;p(t.value),m(t.value.length>0)}),[n,l]),f=(0,a.I4)((e=>{const{target:t}=e;P(t.value)}),[]);return a.ZP.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault(),o({firstName:g,lastName:v}),h&&s({file:h})}},a.ZP.createElement(N.Z,{onChange:Z}),a.ZP.createElement("h2",null,i("YourName")),a.ZP.createElement("p",{className:"note"},i("Login.Register.Desc")),a.ZP.createElement(d.Z,{id:"registration-first-name",label:i("Login.Register.FirstName.Placeholder"),onChange:E,value:g,error:n&&i(n),autoComplete:"given-name"}),a.ZP.createElement(d.Z,{id:"registration-last-name",label:i("Login.Register.LastName.Placeholder"),onChange:f,value:v,autoComplete:"family-name"}),u&&a.ZP.createElement(b.Z,{type:"submit",ripple:!0,isLoading:t},i("Next")))))})))},99364:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(14050),r=n(83716),o=n(77361),l=n(46752),s=n(3858),i=n(59107),c=n(28183),d=n(231);const u=o.wB?550:400,m=(0,a.X$)((e=>{let{isLoading:t=!1,isPasswordVisible:n,error:m,hint:h,placeholder:Z="Password",submitLabel:g="Next",description:p,shouldShowSubmit:v,shouldResetValue:P,shouldDisablePasswordManager:E=!1,noRipple:f=!1,clearError:b,onChangePasswordVisibility:N,onInputChange:y,onSubmit:w}=e;const C=(0,a.sO)(null),L=(0,i.Z)(),[k,I]=(0,a.eJ)(""),[A,S]=(0,a.eJ)(!1);return(0,a.d4)((()=>{P&&I("")}),[P]),(0,c.Z)((()=>{o.$b||C.current.focus()}),u),(0,a.d4)((()=>{m&&requestAnimationFrame((()=>{C.current.focus(),C.current.select()}))}),[m]),a.ZP.createElement("form",{action:"",onSubmit:w?function(e){e.preventDefault(),t||A&&w(k)}:s.Z,autoComplete:"off"},a.ZP.createElement("div",{className:(0,l.Z)("input-group password-input",k&&"touched",m&&"error"),dir:L.isRtl?"rtl":void 0},E&&a.ZP.createElement("input",{type:"password",id:"prevent_autofill",autoComplete:"off",className:"visually-hidden",tabIndex:-2}),a.ZP.createElement("input",{ref:C,className:"form-control",type:n?"text":"password",id:"sign-in-password",value:k||"",autoComplete:E?"one-time-code":"current-password",onChange:function(e){m&&b();const{target:t}=e;I(t.value),S(t.value.length>=r.lo),y&&y(t.value)},maxLength:256,dir:"auto"}),a.ZP.createElement("label",null,m||h||Z),a.ZP.createElement("div",{className:"toggle-password",onClick:function(){N(!n)},role:"button",tabIndex:0,title:"Toggle password visibility"},a.ZP.createElement("i",{className:n?"icon-eye":"icon-eye-closed"}))),p&&a.ZP.createElement("p",{className:"description"},p),w&&(A||v)&&a.ZP.createElement(d.Z,{type:"submit",ripple:!f,isLoading:t,disabled:!A},g))}))},93490:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(14050),r=n(83716),o=n(77361),l=n(13365),s=n(97799),i=n(28183),c=n(60706);const d=[0,50],u=[0,20],m=[20,0],h=o.wB?r.qp:r.z7,Z=(0,a.X$)((e=>{let{isPasswordVisible:t,isBig:n}=e;const[o,Z]=(0,c.Z)(!1),[g,p]=(0,c.Z)(!1);(0,i.Z)(p,2e3);const v=(0,a.I4)(Z,[Z]);return a.ZP.createElement("div",{id:"monkey",className:n?"big":""},!o&&a.ZP.createElement("div",{className:"monkey-preview"}),a.ZP.createElement(s.Z,{size:n?r.K2:h,className:g?"hidden":"shown",tgsUrl:l.l.MonkeyClose,playSegment:d,noLoop:!0,onLoad:v}),a.ZP.createElement(s.Z,{size:n?r.K2:h,className:g?"shown":"hidden",tgsUrl:l.l.MonkeyPeek,playSegment:t?u:m,noLoop:!0}))}))},90710:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(14050),r=n(46752),o=n(83716),l=n(71394),s=n(59107),i=n(231),c=n(13103),d=n(34288);const u={type:"blob",quality:1,format:"jpeg",circle:!1,size:{width:1024,height:1024}};let m,h,Z;const g=(0,a.X$)((e=>{let{file:t,onChange:r,onClose:g}=e;const[p,v]=(0,a.eJ)(!1);(0,a.d4)((()=>{t&&(p?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:n,offsetHeight:a}=t;Z=new m(t,{enableZoom:!0,boundary:{width:n,height:a},viewport:{width:n-16,height:a-16,type:"circle"}});const r=await(0,l.YJ)(e);await Z.bind({url:r})}catch(e){o.eM&&console.error(e)}}(t):async function(){return h||(h=Promise.all([n.e(5099),n.e(3472)]).then(n.bind(n,23472)),m=(await h).default),h}().then((()=>v(!0))))}),[t,p]);const P=(0,s.Z)(),E=(0,a.I4)((async()=>{if(!Z)return;const e=await Z.result(u),t="string"==typeof e?e:(0,l.hl)(e,"avatar.jpg");r(t)}),[r]);return a.ZP.createElement(c.Z,{isOpen:Boolean(t),onClose:g,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},p?a.ZP.createElement("div",{id:"avatar-crop"}):a.ZP.createElement(d.Z,null),a.ZP.createElement(i.Z,{className:"confirm-button",round:!0,color:"primary",onClick:E,ariaLabel:P("CropImage")},a.ZP.createElement("i",{className:"icon-check"})))})),p=(0,a.X$)((e=>{let{title:t="Change your profile picture",disabled:n,currentAvatarBlobUrl:o,onChange:l}=e;const[s,i]=(0,a.eJ)(),[c,d]=(0,a.eJ)(o);(0,a.d4)((()=>{d(o)}),[o]);const u=(0,a.I4)((e=>{i(void 0),l(e),c&&c!==o&&URL.revokeObjectURL(c),d(URL.createObjectURL(e))}),[c,o,l]),m=(0,a.I4)((()=>{i(void 0)}),[]),h=(0,r.Z)(c&&"filled",n&&"disabled");return a.ZP.createElement("div",{className:"AvatarEditable"},a.ZP.createElement("label",{className:h,role:"button",tabIndex:0,title:t},a.ZP.createElement("input",{type:"file",onChange:function(e){const t=e.target;t&&t.files&&t.files[0]&&(i(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),a.ZP.createElement("i",{className:"icon-camera-add"}),c&&a.ZP.createElement("img",{src:c,alt:"Avatar"})),a.ZP.createElement(g,{file:s,onClose:m,onChange:u}))}))},13103:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(14050),r=n(517),o=n(46752),l=n(98069),s=n(18674),i=n(31212),c=n(274),d=n(59107),u=n(46590),m=n(231),h=n(62898);const Z=e=>{let{dialogRef:t,title:n,className:Z,isOpen:g,header:p,hasCloseButton:v,noBackdrop:P,children:E,style:f,onClose:b,onCloseAnimationEnd:N,onEnter:y,shouldSkipHistoryAnimations:w}=e;const{shouldRender:C,transitionClassNames:L}=(0,i.Z)(g,N,w,void 0,w),k=(0,a.sO)(null);(0,a.d4)((()=>{if(g)return(0,l.l_)(),l.In}),[g]),(0,a.d4)((()=>g?(0,r.Z)({onEsc:b,onEnter:y}):void 0),[g,b,y]),(0,a.d4)((()=>g&&k.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const a=n.findIndex((e=>e.isSameNode(document.activeElement)));let r=0;a>=0&&(r=t.shiftKey?a>0?a-1:n.length-1:a<n.length-1?a+1:0),n[r].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(k.current):void 0),[g]),(0,u.Z)({isActive:g,onBack:b}),(0,c.Z)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",Boolean(g)),(g||!g&&void 0!==t)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")}}),[g]);const I=(0,d.Z)();if(!C)return;const A=(0,o.Z)("Modal",Z,L,P&&"transparent-backdrop");return a.ZP.createElement(h.Z,null,a.ZP.createElement("div",{ref:k,className:A,tabIndex:-1,role:"dialog"},a.ZP.createElement("div",{className:"modal-container"},a.ZP.createElement("div",{className:"modal-backdrop",onClick:b}),a.ZP.createElement("div",{className:"modal-dialog",ref:t},p||(n?a.ZP.createElement("div",{className:"modal-header"},v&&a.ZP.createElement(m.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:I("Close"),onClick:b},a.ZP.createElement("i",{className:"icon-close"})),a.ZP.createElement("div",{className:"modal-title"},n)):void 0),a.ZP.createElement("div",{className:"modal-content custom-scroll",style:f},E)))))}},62898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(14050),r=n(31664);const o=e=>{let{containerId:t,className:n,children:o}=e;const l=(0,a.sO)();return l.current||(l.current=document.createElement("div")),(0,a.bt)((()=>{const e=document.querySelector(t||"#portals");if(!e)return;const a=l.current;return n&&a.classList.add(n),e.appendChild(a),()=>{r.Z.render(void 0,a),e.removeChild(a)}}),[n,t]),r.Z.render(o,l.current)}},28183:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(14050);const r=function(e,t){const n=(0,a.sO)(e);(0,a.bt)((()=>{n.current=e}),[e]),(0,a.d4)((()=>{if("number"!=typeof t)return;const e=setTimeout((()=>n.current()),t);return()=>clearTimeout(e)}),[t])}},98069:(e,t,n)=>{n.d(t,{In:()=>o,l_:()=>r,wT:()=>l});let a=0;function r(){a+=1}function o(){a-=1}function l(){return a>0}},3858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=e=>{e.stopPropagation(),e.preventDefault()}}}]);
//# sourceMappingURL=3041.b330253720c214a63529.js.map