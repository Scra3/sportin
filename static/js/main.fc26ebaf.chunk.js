(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{24:function(e,t,a){e.exports=a(45)},34:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},41:function(e,t,a){e.exports=a.p+"static/media/mockup_1.7b252ddc.png"},42:function(e,t,a){e.exports=a.p+"static/media/mockup_2.ec519054.png"},43:function(e,t,a){e.exports=a.p+"static/media/main.0724cd89.png"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(21),n=a.n(l),s=a(11),c=a(7),o=a(6),m=a(2),d=function(e){var t=e.component,a=e.layout,i=Object(m.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(s.a,Object.assign({},i,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},u=a(10),v=a(3),p=a.n(v),b=a(17),h=r.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(u.a)(a,2),n=l[0],s=l[1],c=Object(i.useState)([]),o=Object(u.a)(c,2),m=o[0],d=o[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),p())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(b.throttle)((function(){h(),p()}),30),E=Object(b.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),p()}),[n]),r.a.createElement(r.a.Fragment,null,e.children())}));h.propTypes={children:p.a.func.isRequired};var f=h,E=a(13),N=a(1),g=a.n(N),O=function(e){var t=e.className,a=e.src,l=e.width,n=e.height,s=e.alt,c=Object(m.a)(e,["className","src","width","height","alt"]),o=Object(i.useState)(!1),d=Object(u.a)(o,2),v=d[0],p=d[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return r.a.createElement("img",Object.assign({},c,{ref:b,className:t,src:a,width:l,height:n,alt:s,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,D=function(e){var t=e.className,i=Object(m.a)(e,["className"]),l=g()("brand",t);return r.a.createElement("div",Object.assign({},i,{className:l}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(o.b,{to:"/"},r.a.createElement(w,{src:a(34),alt:"Open",width:32,height:32}))))},x=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,c=e.bottomDivider,d=Object(m.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),v=Object(i.useState)(!1),p=Object(u.a)(v,2),b=p[0],h=p[1],f=Object(i.useRef)(null),E=Object(i.useRef)(null);Object(i.useEffect)((function(){return b&&N(),document.addEventListener("keydown",w),document.addEventListener("click",x),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",x),O()}}));var N=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",h(!0)},O=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),h(!1)},w=function(e){b&&27===e.keyCode&&O()},x=function(e){f.current&&b&&!f.current.contains(e.target)&&e.target!==E.current&&O()},y=g()("site-header",s&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},d,{className:y}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-header-inner",c&&"has-bottom-divider")},r.a.createElement(D,null),!l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:b?O:N},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:f,className:g()("header-nav",b&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement(o.b,{to:"#0",onClick:O},"Documentation"))),!n&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:O},"Sign up")))))))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var y=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(m.a)(e,["className","topOuterDivider","topDivider"]),n=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},l,{className:n}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"}),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"}))))};y.defaultProps={topOuterDivider:!1,topDivider:!1};var j=y,k=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"site-content"},t))},C=a(5),L={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},F={types:Object(C.a)({},L.types),defaults:Object(C.a)({},L.defaults)},P={types:Object(C.a)({},L.types,{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(C.a)({},L.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},S={types:Object(C.a)({},L.types,{pushLeft:p.a.bool}),defaults:Object(C.a)({},L.defaults,{pushLeft:!1})},q=function(e){var t=e.className,a=e.tag,i=e.color,l=e.size,n=e.loading,s=e.wide,c=e.wideMobile,o=e.disabled,d=Object(m.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),l&&"button-".concat(l),n&&"is-loading",s&&"button-block",c&&"button-wide-mobile",t),v=a;return r.a.createElement(v,Object.assign({},d,{className:u,disabled:o}))};q.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var B=function(e){var t=e.className,a=e.children,l=e.handleClose,n=e.show,s=e.closeHidden,c=e.video,o=e.videoTag,d=Object(m.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},p=function(e){e.stopPropagation()},b=g()("modal",n&&"is-active",c&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",Object.assign({},d,{className:b,onClick:l}),r.a.createElement("div",{className:"modal-inner",onClick:p},c?r.a.createElement("div",{className:"responsive-video"},"iframe"===o?r.a.createElement("iframe",{title:"video",src:c,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:c})):r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),r.a.createElement("div",{className:"modal-content"},a)))))};B.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var H=B,T=function(e){var t=e.className,a=e.children,i=e.labelHidden,l=e.id,n=Object(m.a)(e,["className","children","labelHidden","id"]),s=g()("form-label",i&&"screen-reader",t);return r.a.createElement("label",Object.assign({},n,{className:s,htmlFor:l}),a)};T.defaultProps={children:null,labelHidden:!1,id:null};var A=T,R=function(e){var t=e.children,a=e.className,i=e.status,l=Object(m.a)(e,["children","className","status"]),n=g()("form-hint",i&&"text-color-".concat(i),a);return r.a.createElement("div",Object.assign({},l,{className:n}),t)};R.defaultProps={children:null,status:!1};var _=R,z=function(e){var t=e.className,a=e.children,i=e.label,l=e.labelHidden,n=e.type,s=e.name,c=e.status,o=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,h=e.rows,f=e.hint,E=Object(m.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=g()("form-input",p&&"form-input-".concat(p),c&&"form-".concat(c),t),w="textarea"===n?"textarea":"input";return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(A,{labelHidden:l,id:E.id},i),r.a.createElement("div",{className:N},r.a.createElement(w,Object.assign({},E,{type:"textarea"!==n?n:null,className:O,name:s,disabled:o,value:d,placeholder:b,rows:"textarea"===n?h:null})),a),f&&r.a.createElement(_,{status:c},f))};z.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var M=z,W=Object(C.a)({},F.defaults),I=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),v=Object(i.useState)(!1),p=Object(u.a)(v,2),b=p[0],h=p[1],f=g()("hero section center-content",a&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),E=g()("hero-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},d,{className:f}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:E},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom scra-color-black","data-reveal-delay":"200"},"La plateforme est en cours de construction ",r.a.createElement("span",{className:"text-color-primary"},"...")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Si vous souhaitez \xeatre avertie de la sortie de l'application, veuillez saisir votre email. Promis, on vous \xe9crira que vraiment si c'est n\xe9cessaire :)."),r.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},r.a.createElement("form",{className:"scra-form-email",action:"https://formspree.io/f/mrgrndad",method:"POST"},r.a.createElement(M,{className:"form-input",placeholder:"Mon meilleure email",type:"email",name:"_replyto",required:!0}),r.a.createElement("button",{className:"button button-primary button-wide-mobile",type:"submit",tag:"a",color:"primary"},"Envoyer"))))),r.a.createElement(H,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),h(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};I.defaultProps=W;var G=I,K=function(e){var t=e.className,a=e.data,i=e.children,l=e.tag,n=Object(m.a)(e,["className","data","children","tag"]),s=g()("section-header",t),c=l;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},n,{className:s}),r.a.createElement("div",{className:"container-xs"},i,a.title&&r.a.createElement(c,{className:g()("mt-0 scra-color-black",a.paragraph?"mb-16 scra-color-black":"mb-0 scra-color-black")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))};K.defaultProps={children:null,tag:"h2"};var J=K,U=Object(C.a)({},S.defaults),V=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,d=e.pushLeft,u=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",i&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),p=g()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),b=g()("tiles-wrap center-content",d&&"push-left");return r.a.createElement("section",Object.assign({},u,{className:v}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:p},r.a.createElement(J,{data:{title:"Build up the whole picture",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(35),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(36),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(37),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(38),alt:"Features tile icon 04",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(39),alt:"Features tile icon 05",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(w,{src:a(40),alt:"Features tile icon 06",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),r.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."))))))))};V.defaultProps=U;var Q=Object(C.a)({},P.defaults),Y=function(e){var t=e.className,i=e.topOuterDivider,l=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),h=g()("features-split section",i&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),f=g()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return r.a.createElement("section",Object.assign({},b,{className:h}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:f},r.a.createElement(J,{data:{title:"Notre plateforme",paragraph:"Moteur de recherche associatif compl\xe8tement gratuit."},className:"center-content"}),r.a.createElement("div",{className:E},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Fais ta recherche en quelques cliques."),r.a.createElement("h3",{className:"mt-0 mb-12 scra-color-black"},"Recherche efficace et rapide"),r.a.createElement("p",{className:"m-0"},"Trouve l'association de tes r\xeaves \xe0 proximit\xe9 de chez toi !")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{className:"scra-image",src:a(41),alt:"Features split 01",width:828,height:896}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Consulter les annonces en quelques cliques."),r.a.createElement("h3",{className:"mt-0 mb-12 scra-color-black"},"Consulte les annonces des associations"),r.a.createElement("p",{className:"m-0"},"Trouve l'association qui a besoin de toi !")),r.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(w,{className:"scra-annonce",src:a(42),alt:"Features split 01",width:828,height:896})))))))};Y.defaultProps=Q;var $=Y,X=Object(C.a)({},S.defaults),Z=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,o=e.pushLeft,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("testimonial-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider"),p=g()("tiles-wrap",o&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement(J,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),r.a.createElement("div",{className:p},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName"))))),r.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"AppName")))))))))};Z.defaultProps=X;var ee=Object(C.a)({},F.defaults,{split:!1}),te=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,l=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,o=e.split,d=Object(m.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("cta-inner section-inner",l&&"has-top-divider",n&&"has-bottom-divider",o&&"cta-split");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:v},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(M,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},r.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};te.defaultProps=ee;var ae=function(){var e=Object(s.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container scra-container"},r.a.createElement("h1",{className:"text-color-primary scra-text-icon"},"SportIn"),r.a.createElement("h1",{className:"mt-0 mb-16 scra-color-black scra-header-title"},"Le premier moteur de recherche sportif"),r.a.createElement("div",{className:"scra-search"},r.a.createElement(A,null,"Quoi"),r.a.createElement(M,{className:"form-input",type:"email",name:"_replyto",required:!0,placeholder:"basket"}),r.a.createElement(A,null,"O\xf9"),r.a.createElement(M,{className:"form-input",type:"email",name:"_replyto",required:!0,placeholder:"Paris"}),r.a.createElement("button",{onClick:function(){e.push("/in_process")},className:"button button-primary button-wide-mobile scra-search-button",type:"submit",tag:"a",color:"primary"},"Envoyer")),r.a.createElement(w,{className:"scra-image",src:a(43),alt:"Features split 01",width:828,height:896})))},ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{className:"illustration-section-01"}),r.a.createElement($,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(j,null))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/sportin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var re=function(){var e=Object(i.useRef)(),t=Object(s.g)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),r.a.createElement(o.a,{basename:"/"},r.a.createElement(f,{ref:e,children:function(){return r.a.createElement(s.c,null,r.a.createElement(d,{exact:!0,path:"/",component:ae,layout:k}),r.a.createElement(d,{exact:!0,path:"/in_process",component:ie,layout:k}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(44);var le=Object(c.a)();n.a.render(r.a.createElement(s.b,{history:le},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.fc26ebaf.chunk.js.map