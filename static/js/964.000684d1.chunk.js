"use strict";(self.webpackChunkreact_movie=self.webpackChunkreact_movie||[]).push([[964],{9964:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var l=t(3433),i=t(9439),r=t(7658),a=t(4942),o=t(7313),s=t(2884),c=t.n(s),d=t(4903);function u(e){return["small","middle","large"].includes(e)}function m(e){return!!e&&("number"===typeof e&&!Number.isNaN(e))}var p=t(4714),v=t(5531),y=o.createContext({latestIndex:0}),f=y.Provider,g=function(e){var n=e.className,t=e.index,l=e.children,i=e.split,r=e.style,a=o.useContext(y).latestIndex;return null===l||void 0===l?null:o.createElement(o.Fragment,null,o.createElement("div",{className:n,style:r},l),t<a&&i&&o.createElement("span",{className:"".concat(n,"-split")},i))},x=t(1047),Z=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(l=Object.getOwnPropertySymbols(e);i<l.length;i++)n.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(e,l[i])&&(t[l[i]]=e[l[i]])}return t},h=o.forwardRef((function(e,n){var t,l,r,s,v=o.useContext(p.E_),y=v.getPrefixCls,h=v.space,j=v.direction,C=e.size,N=void 0===C?null!==(l=null===h||void 0===h?void 0:h.size)&&void 0!==l?l:"small":C,b=e.align,w=e.className,O=e.rootClassName,k=e.children,P=e.direction,E=void 0===P?"horizontal":P,z=e.prefixCls,I=e.split,L=e.style,S=e.wrap,_=void 0!==S&&S,A=e.classNames,F=e.styles,G=Z(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),M=Array.isArray(N)?N:[N,N],R=(0,i.Z)(M,2),T=R[0],W=R[1],q=u(W),B=u(T),D=m(W),H=m(T),J=(0,d.Z)(k,{keepEmpty:!0}),K=void 0===b&&"horizontal"===E?"center":b,Q=y("space",z),U=(0,x.Z)(Q),V=(0,i.Z)(U,3),X=V[0],Y=V[1],$=V[2],ee=c()(Q,null===h||void 0===h?void 0:h.className,Y,"".concat(Q,"-").concat(E),(t={},(0,a.Z)(t,"".concat(Q,"-rtl"),"rtl"===j),(0,a.Z)(t,"".concat(Q,"-align-").concat(K),K),(0,a.Z)(t,"".concat(Q,"-gap-row-").concat(W),q),(0,a.Z)(t,"".concat(Q,"-gap-col-").concat(T),B),t),w,O,$),ne=c()("".concat(Q,"-item"),null!==(r=null===A||void 0===A?void 0:A.item)&&void 0!==r?r:null===(s=null===h||void 0===h?void 0:h.classNames)||void 0===s?void 0:s.item),te=0,le=J.map((function(e,n){var t,l;null!==e&&void 0!==e&&(te=n);var i=e&&e.key||"".concat(ne,"-").concat(n);return o.createElement(g,{className:ne,key:i,index:n,split:I,style:null!==(t=null===F||void 0===F?void 0:F.item)&&void 0!==t?t:null===(l=null===h||void 0===h?void 0:h.styles)||void 0===l?void 0:l.item},e)})),ie=o.useMemo((function(){return{latestIndex:te}}),[te]);if(0===J.length)return null;var re={};return _&&(re.flexWrap="wrap"),!B&&H&&(re.columnGap=T),!q&&D&&(re.rowGap=W),X(o.createElement("div",Object.assign({ref:n,className:ee,style:Object.assign(Object.assign(Object.assign({},re),null===h||void 0===h?void 0:h.style),L)},G),o.createElement(f,{value:ie},le)))})),j=h;j.Compact=v.ZP;var C=j,N=t(384),b=t(6417),w=function(){var e=(0,o.useState)([]),n=(0,i.Z)(e,2),t=n[0],a=n[1],s=function(e){a((function(n){console.log("preLoadings : "+n);var t=(0,l.Z)(n);return t[e]=!0,t})),setTimeout((function(){a((function(n){var t=(0,l.Z)(n);return t[e]=!1,t}))}),6e3)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(C,{style:{width:"100%"},children:[(0,b.jsx)(N.ZP,{type:"primary",loading:!0,children:"Loading"}),(0,b.jsx)(N.ZP,{type:"primary",size:"small",loading:!0,children:"Loading"}),(0,b.jsx)(N.ZP,{type:"primary",icon:(0,b.jsx)(r.Z,{}),loading:!0})]}),(0,b.jsxs)(C,{style:{width:"100%"},children:[(0,b.jsx)(N.ZP,{type:"primary",loading:t[0],onClick:function(){return s(0)},children:"Click me!"}),(0,b.jsx)(N.ZP,{type:"primary",icon:(0,b.jsx)(r.Z,{}),loading:t[1],onClick:function(){return s(1)},children:"Click me!"}),(0,b.jsx)(N.ZP,{type:"primary",icon:(0,b.jsx)(r.Z,{}),loading:t[2],onClick:function(){return s(2)}})]})]})}}}]);