(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{1824:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var a=n(5893),r=n(7462),l=n(4578),c=n(3524),i=n(3743),s=n(6010),o=(n(5697),n(7294)),d=n(2063),u=n(8935),m=n(2519),h=n(2248),p=n(6203);function Z(e){var t=e.children,n=e.className,a=e.content,l=(0,s.Z)(n,"description"),c=(0,u.Z)(Z,e),i=(0,m.Z)(Z,e);return o.createElement(i,(0,r.Z)({},c,{className:l}),h.kK(t)?a:t)}Z.handledProps=["as","children","className","content"],Z.propTypes={},Z.create=(0,p.u5)(Z,(function(e){return{content:e}}));var f=Z;function v(e){var t=e.children,n=e.className,a=e.content,l=(0,s.Z)("header",n),c=(0,u.Z)(v,e),i=(0,m.Z)(v,e);return o.createElement(i,(0,r.Z)({},c,{className:l}),h.kK(t)?a:t)}v.handledProps=["as","children","className","content"],v.propTypes={},v.create=(0,p.u5)(v,(function(e){return{content:e}}));var N=v;function k(e){var t=e.children,n=e.className,a=e.content,l=e.description,c=e.floated,i=e.header,p=e.verticalAlign,Z=(0,s.Z)((0,d.cD)(c,"floated"),(0,d.Ok)(p),"content",n),v=(0,u.Z)(k,e),x=(0,m.Z)(k,e);return h.kK(t)?o.createElement(x,(0,r.Z)({},v,{className:Z}),N.create(i),f.create(l),a):o.createElement(x,(0,r.Z)({},v,{className:Z}),t)}k.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],k.propTypes={},k.create=(0,p.u5)(k,(function(e){return{content:e}}));var x=k,g=n(5382);function G(e){var t=e.className,n=e.verticalAlign,a=(0,s.Z)((0,d.Ok)(n),t),l=(0,u.Z)(G,e);return o.createElement(g.Z,(0,r.Z)({},l,{className:a}))}G.handledProps=["className","verticalAlign"],G.propTypes={},G.create=(0,p.u5)(G,(function(e){return{name:e}}));var j=G,E=n(9017),y=n(8867),b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){t.props.disabled||(0,i.Z)(t.props,"onClick",e,t.props)},t}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,a=e.children,l=e.className,c=e.content,i=e.description,p=e.disabled,Z=e.header,v=e.icon,k=e.image,g=e.value,G=(0,m.Z)(t,this.props),b=(0,s.Z)((0,d.lG)(n,"active"),(0,d.lG)(p,"disabled"),(0,d.lG)("li"!==G,"item"),l),C=(0,u.Z)(t,this.props),w="li"===G?{value:g}:{"data-value":g};if(!h.kK(a))return o.createElement(G,(0,r.Z)({},w,{role:"listitem",className:b,onClick:this.handleClick},C),a);var K=j.create(v,{autoGenerateKey:!1}),P=y.Z.create(k,{autoGenerateKey:!1});if(!(0,o.isValidElement)(c)&&(0,E.Z)(c))return o.createElement(G,(0,r.Z)({},w,{role:"listitem",className:b,onClick:this.handleClick},C),K||P,x.create(c,{autoGenerateKey:!1,defaultProps:{header:Z,description:i}}));var I=N.create(Z,{autoGenerateKey:!1}),T=f.create(i,{autoGenerateKey:!1});return K||P?o.createElement(G,(0,r.Z)({},w,{role:"listitem",className:b,onClick:this.handleClick},C),K||P,(c||I||T)&&o.createElement(x,null,I,T,c)):o.createElement(G,(0,r.Z)({},w,{role:"listitem",className:b,onClick:this.handleClick},C),I,T,c)},t}(o.Component);b.handledProps=["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"],b.propTypes={},b.create=(0,p.u5)(b,(function(e){return{content:e}}));var C=b;function w(e){var t=e.children,n=e.className,a=e.content,l=(0,u.Z)(w,e),c=(0,m.Z)(w,e),i=(0,s.Z)((0,d.lG)("ul"!==c&&"ol"!==c,"list"),n);return o.createElement(c,(0,r.Z)({},l,{className:i}),h.kK(t)?a:t)}w.handledProps=["as","children","className","content"],w.propTypes={};var K=w,P=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleItemOverrides=function(e){return{onClick:function(n,a){(0,i.Z)(e,"onClick",n,a),(0,i.Z)(t.props,"onItemClick",n,a)}}},t}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this,n=this.props,a=n.animated,l=n.bulleted,i=n.celled,p=n.children,Z=n.className,f=n.content,v=n.divided,N=n.floated,k=n.horizontal,x=n.inverted,g=n.items,G=n.link,j=n.ordered,E=n.relaxed,y=n.selection,b=n.size,w=n.verticalAlign,K=(0,s.Z)("ui",b,(0,d.lG)(a,"animated"),(0,d.lG)(l,"bulleted"),(0,d.lG)(i,"celled"),(0,d.lG)(v,"divided"),(0,d.lG)(k,"horizontal"),(0,d.lG)(x,"inverted"),(0,d.lG)(G,"link"),(0,d.lG)(j,"ordered"),(0,d.lG)(y,"selection"),(0,d.sU)(E,"relaxed"),(0,d.cD)(N,"floated"),(0,d.Ok)(w),"list",Z),P=(0,u.Z)(t,this.props),I=(0,m.Z)(t,this.props);return h.kK(p)?h.kK(f)?o.createElement(I,(0,r.Z)({role:"list",className:K},P),(0,c.Z)(g,(function(t){return C.create(t,{overrideProps:e.handleItemOverrides})}))):o.createElement(I,(0,r.Z)({role:"list",className:K},P),f):o.createElement(I,(0,r.Z)({role:"list",className:K},P),p)},t}(o.Component);P.handledProps=["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"],P.propTypes={},P.Content=x,P.Description=f,P.Header=N,P.Icon=j,P.Item=C,P.List=K;var I=P,T=n(9445),_=n(345),z=n(1318),A=n(416),O=n(672),U=n(9058),D=n(9008),F=n(1163),R=n(4155);function X(e){e.imageUrl;var t=(0,F.useRouter)();return(0,o.useEffect)((function(){window.location.href="https://www.naver.com"}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(D.default,{children:[(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"useEffect metatag test"}),(0,a.jsx)("meta",{name:"twitter:description",content:"test 04.01 18:10"}),(0,a.jsx)("meta",{name:"twitter:image",content:function(e,t){var n=e&&t&&e.match(new RegExp("[&?]{1}".concat(t,"=([^&#]*)")));return n&&decodeURIComponent(n[1])||null}(t.asPath,"img")})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(T.Z,{as:"h3",style:{paddingTop:40},color:"teal",children:"\ud68c\uc0ac \uc18c\uac1c"}),(0,a.jsx)(_.Z,{}),(0,a.jsxs)(I,{children:[(0,a.jsxs)(I.Item,{children:[(0,a.jsx)(I.Icon,{name:"users"}),(0,a.jsx)(I.Content,{children:"Semantic UI"})]}),(0,a.jsxs)(I.Item,{children:[(0,a.jsx)(I.Icon,{name:"marker"}),(0,a.jsx)(I.Content,{children:"New York, NY"})]}),(0,a.jsxs)(I.Item,{children:[(0,a.jsx)(I.Icon,{name:"mail"}),(0,a.jsx)(I.Content,{children:(0,a.jsx)("a",{href:"mailto:jack@semantic-ui.com",children:"jack@semantic-ui.com"})})]}),(0,a.jsxs)(I.Item,{children:[(0,a.jsx)(I.Icon,{name:"linkify"}),(0,a.jsx)(I.Content,{children:(0,a.jsx)("a",{href:"http://www.semantic-ui.com",children:"semantic-ui.com"})})]})]}),(0,a.jsx)(T.Z,{as:"h3",style:{paddingTop:40},color:"teal",children:"\ubb38\uc758 \uc0ac\ud56d"}),(0,a.jsx)(_.Z,{}),(0,a.jsxs)(z.Z,{children:[(0,a.jsx)(z.Z.Field,{id:"form-input-control-title",control:A.Z,label:"\uc81c\ubaa9",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694."}),(0,a.jsx)(z.Z.Field,{id:"form-textarea-control-content",control:O.Z,label:"\ub0b4\uc6a9",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694"}),(0,a.jsx)(z.Z.Field,{id:"form-button-control-submit",control:U.Z,content:"\ubcf4\ub0b4\uae30",color:"green"})]}),(0,a.jsx)(_.Z,{})]})]})}X.getInitialProps=function(){return{imageUrl:R.env.logoPath}}},8961:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(1824)}])},9008:function(e,t,n){e.exports=n(639)},345:function(e,t,n){"use strict";var a=n(7462),r=n(6010),l=(n(5697),n(7294)),c=n(2063),i=n(8935),s=n(2519),o=n(2248);function d(e){var t=e.children,n=e.className,u=e.clearing,m=e.content,h=e.fitted,p=e.hidden,Z=e.horizontal,f=e.inverted,v=e.section,N=e.vertical,k=(0,r.Z)("ui",(0,c.lG)(u,"clearing"),(0,c.lG)(h,"fitted"),(0,c.lG)(p,"hidden"),(0,c.lG)(Z,"horizontal"),(0,c.lG)(f,"inverted"),(0,c.lG)(v,"section"),(0,c.lG)(N,"vertical"),"divider",n),x=(0,i.Z)(d,e),g=(0,s.Z)(d,e);return l.createElement(g,(0,a.Z)({},x,{className:k}),o.kK(t)?m:t)}d.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],d.propTypes={},t.Z=d},9445:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var a=n(7462),r=n(6010),l=(n(5697),n(7294)),c=n(2063),i=n(8935),s=n(2519),o=n(2248),d=n(5382),u=n(8867),m=n(6203);function h(e){var t=e.children,n=e.className,c=e.content,d=(0,r.Z)("sub header",n),u=(0,i.Z)(h,e),m=(0,s.Z)(h,e);return l.createElement(m,(0,a.Z)({},u,{className:d}),o.kK(t)?c:t)}h.handledProps=["as","children","className","content"],h.propTypes={},h.create=(0,m.u5)(h,(function(e){return{content:e}}));var p=h;function Z(e){var t=e.children,n=e.className,c=e.content,d=(0,r.Z)("content",n),u=(0,i.Z)(Z,e),m=(0,s.Z)(Z,e);return l.createElement(m,(0,a.Z)({},u,{className:d}),o.kK(t)?c:t)}Z.handledProps=["as","children","className","content"],Z.propTypes={};var f=Z;function v(e){var t=e.attached,n=e.block,m=e.children,h=e.className,Z=e.color,N=e.content,k=e.disabled,x=e.dividing,g=e.floated,G=e.icon,j=e.image,E=e.inverted,y=e.size,b=e.sub,C=e.subheader,w=e.textAlign,K=(0,r.Z)("ui",Z,y,(0,c.lG)(n,"block"),(0,c.lG)(k,"disabled"),(0,c.lG)(x,"dividing"),(0,c.cD)(g,"floated"),(0,c.lG)(!0===G,"icon"),(0,c.lG)(!0===j,"image"),(0,c.lG)(E,"inverted"),(0,c.lG)(b,"sub"),(0,c.sU)(t,"attached"),(0,c.X4)(w),"header",h),P=(0,i.Z)(v,e),I=(0,s.Z)(v,e);if(!o.kK(m))return l.createElement(I,(0,a.Z)({},P,{className:K}),m);var T=d.Z.create(G,{autoGenerateKey:!1}),_=u.Z.create(j,{autoGenerateKey:!1}),z=p.create(C,{autoGenerateKey:!1});return T||_?l.createElement(I,(0,a.Z)({},P,{className:K}),T||_,(N||z)&&l.createElement(f,null,N,z)):l.createElement(I,(0,a.Z)({},P,{className:K}),N,z)}v.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],v.propTypes={},v.Content=f,v.Subheader=p;var N=v}},function(e){e.O(0,[824,318,774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);