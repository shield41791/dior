(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{1824:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(5893),a=n(7462),l=n(4578),c=n(3524),i=n(3743),s=n(6010),o=(n(5697),n(7294)),d=n(2063),m=n(8935),u=n(2519),h=n(2248),p=n(6203);function Z(e){var t=e.children,n=e.className,r=e.content,l=(0,s.Z)(n,"description"),c=(0,m.Z)(Z,e),i=(0,u.Z)(Z,e);return o.createElement(i,(0,a.Z)({},c,{className:l}),h.kK(t)?r:t)}Z.handledProps=["as","children","className","content"],Z.propTypes={},Z.create=(0,p.u5)(Z,(function(e){return{content:e}}));var v=Z;function f(e){var t=e.children,n=e.className,r=e.content,l=(0,s.Z)("header",n),c=(0,m.Z)(f,e),i=(0,u.Z)(f,e);return o.createElement(i,(0,a.Z)({},c,{className:l}),h.kK(t)?r:t)}f.handledProps=["as","children","className","content"],f.propTypes={},f.create=(0,p.u5)(f,(function(e){return{content:e}}));var N=f;function k(e){var t=e.children,n=e.className,r=e.content,l=e.description,c=e.floated,i=e.header,p=e.verticalAlign,Z=(0,s.Z)((0,d.cD)(c,"floated"),(0,d.Ok)(p),"content",n),f=(0,m.Z)(k,e),x=(0,u.Z)(k,e);return h.kK(t)?o.createElement(x,(0,a.Z)({},f,{className:Z}),N.create(i),v.create(l),r):o.createElement(x,(0,a.Z)({},f,{className:Z}),t)}k.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],k.propTypes={},k.create=(0,p.u5)(k,(function(e){return{content:e}}));var x=k,G=n(5382);function g(e){var t=e.className,n=e.verticalAlign,r=(0,s.Z)((0,d.Ok)(n),t),l=(0,m.Z)(g,e);return o.createElement(G.Z,(0,a.Z)({},l,{className:r}))}g.handledProps=["className","verticalAlign"],g.propTypes={},g.create=(0,p.u5)(g,(function(e){return{name:e}}));var j=g,y=n(9017),b=n(8867),E=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){t.props.disabled||(0,i.Z)(t.props,"onClick",e,t.props)},t}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,r=e.children,l=e.className,c=e.content,i=e.description,p=e.disabled,Z=e.header,f=e.icon,k=e.image,G=e.value,g=(0,u.Z)(t,this.props),E=(0,s.Z)((0,d.lG)(n,"active"),(0,d.lG)(p,"disabled"),(0,d.lG)("li"!==g,"item"),l),C=(0,m.Z)(t,this.props),K="li"===g?{value:G}:{"data-value":G};if(!h.kK(r))return o.createElement(g,(0,a.Z)({},K,{role:"listitem",className:E,onClick:this.handleClick},C),r);var P=j.create(f,{autoGenerateKey:!1}),w=b.Z.create(k,{autoGenerateKey:!1});if(!(0,o.isValidElement)(c)&&(0,y.Z)(c))return o.createElement(g,(0,a.Z)({},K,{role:"listitem",className:E,onClick:this.handleClick},C),P||w,x.create(c,{autoGenerateKey:!1,defaultProps:{header:Z,description:i}}));var I=N.create(Z,{autoGenerateKey:!1}),T=v.create(i,{autoGenerateKey:!1});return P||w?o.createElement(g,(0,a.Z)({},K,{role:"listitem",className:E,onClick:this.handleClick},C),P||w,(c||I||T)&&o.createElement(x,null,I,T,c)):o.createElement(g,(0,a.Z)({},K,{role:"listitem",className:E,onClick:this.handleClick},C),I,T,c)},t}(o.Component);E.handledProps=["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"],E.propTypes={},E.create=(0,p.u5)(E,(function(e){return{content:e}}));var C=E;function K(e){var t=e.children,n=e.className,r=e.content,l=(0,m.Z)(K,e),c=(0,u.Z)(K,e),i=(0,s.Z)((0,d.lG)("ul"!==c&&"ol"!==c,"list"),n);return o.createElement(c,(0,a.Z)({},l,{className:i}),h.kK(t)?r:t)}K.handledProps=["as","children","className","content"],K.propTypes={};var P=K,w=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleItemOverrides=function(e){return{onClick:function(n,r){(0,i.Z)(e,"onClick",n,r),(0,i.Z)(t.props,"onItemClick",n,r)}}},t}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this,n=this.props,r=n.animated,l=n.bulleted,i=n.celled,p=n.children,Z=n.className,v=n.content,f=n.divided,N=n.floated,k=n.horizontal,x=n.inverted,G=n.items,g=n.link,j=n.ordered,y=n.relaxed,b=n.selection,E=n.size,K=n.verticalAlign,P=(0,s.Z)("ui",E,(0,d.lG)(r,"animated"),(0,d.lG)(l,"bulleted"),(0,d.lG)(i,"celled"),(0,d.lG)(f,"divided"),(0,d.lG)(k,"horizontal"),(0,d.lG)(x,"inverted"),(0,d.lG)(g,"link"),(0,d.lG)(j,"ordered"),(0,d.lG)(b,"selection"),(0,d.sU)(y,"relaxed"),(0,d.cD)(N,"floated"),(0,d.Ok)(K),"list",Z),w=(0,m.Z)(t,this.props),I=(0,u.Z)(t,this.props);return h.kK(p)?h.kK(v)?o.createElement(I,(0,a.Z)({role:"list",className:P},w),(0,c.Z)(G,(function(t){return C.create(t,{overrideProps:e.handleItemOverrides})}))):o.createElement(I,(0,a.Z)({role:"list",className:P},w),v):o.createElement(I,(0,a.Z)({role:"list",className:P},w),p)},t}(o.Component);w.handledProps=["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"],w.propTypes={},w.Content=x,w.Description=v,w.Header=N,w.Icon=j,w.Item=C,w.List=P;var I=w,T=n(9445),_=n(345),z=n(1318),A=n(416),O=n(672),D=n(9058),U=n(9008),F=n(4155);function X(e){var t=e.imageUrl;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(U.default,{children:[(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:"Dior"}),(0,r.jsx)("meta",{name:"twitter:description",content:"This is about page"}),(0,r.jsx)("meta",{name:"twitter:image",content:t})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(T.Z,{as:"h3",style:{paddingTop:40},color:"teal",children:"\ud68c\uc0ac \uc18c\uac1c"}),(0,r.jsx)(_.Z,{}),(0,r.jsxs)(I,{children:[(0,r.jsxs)(I.Item,{children:[(0,r.jsx)(I.Icon,{name:"users"}),(0,r.jsx)(I.Content,{children:"Semantic UI"})]}),(0,r.jsxs)(I.Item,{children:[(0,r.jsx)(I.Icon,{name:"marker"}),(0,r.jsx)(I.Content,{children:"New York, NY"})]}),(0,r.jsxs)(I.Item,{children:[(0,r.jsx)(I.Icon,{name:"mail"}),(0,r.jsx)(I.Content,{children:(0,r.jsx)("a",{href:"mailto:jack@semantic-ui.com",children:"jack@semantic-ui.com"})})]}),(0,r.jsxs)(I.Item,{children:[(0,r.jsx)(I.Icon,{name:"linkify"}),(0,r.jsx)(I.Content,{children:(0,r.jsx)("a",{href:"http://www.semantic-ui.com",children:"semantic-ui.com"})})]})]}),(0,r.jsx)(T.Z,{as:"h3",style:{paddingTop:40},color:"teal",children:"\ubb38\uc758 \uc0ac\ud56d"}),(0,r.jsx)(_.Z,{}),(0,r.jsxs)(z.Z,{children:[(0,r.jsx)(z.Z.Field,{id:"form-input-control-title",control:A.Z,label:"\uc81c\ubaa9",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694."}),(0,r.jsx)(z.Z.Field,{id:"form-textarea-control-content",control:O.Z,label:"\ub0b4\uc6a9",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694"}),(0,r.jsx)(z.Z.Field,{id:"form-button-control-submit",control:D.Z,content:"\ubcf4\ub0b4\uae30",color:"green"})]}),(0,r.jsx)(_.Z,{})]})]})}X.getInitialProps=function(){return{imageUrl:F.env.logoPath}}},8961:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(1824)}])},9008:function(e,t,n){e.exports=n(639)},345:function(e,t,n){"use strict";var r=n(7462),a=n(6010),l=(n(5697),n(7294)),c=n(2063),i=n(8935),s=n(2519),o=n(2248);function d(e){var t=e.children,n=e.className,m=e.clearing,u=e.content,h=e.fitted,p=e.hidden,Z=e.horizontal,v=e.inverted,f=e.section,N=e.vertical,k=(0,a.Z)("ui",(0,c.lG)(m,"clearing"),(0,c.lG)(h,"fitted"),(0,c.lG)(p,"hidden"),(0,c.lG)(Z,"horizontal"),(0,c.lG)(v,"inverted"),(0,c.lG)(f,"section"),(0,c.lG)(N,"vertical"),"divider",n),x=(0,i.Z)(d,e),G=(0,s.Z)(d,e);return l.createElement(G,(0,r.Z)({},x,{className:k}),o.kK(t)?u:t)}d.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],d.propTypes={},t.Z=d},9445:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(7462),a=n(6010),l=(n(5697),n(7294)),c=n(2063),i=n(8935),s=n(2519),o=n(2248),d=n(5382),m=n(8867),u=n(6203);function h(e){var t=e.children,n=e.className,c=e.content,d=(0,a.Z)("sub header",n),m=(0,i.Z)(h,e),u=(0,s.Z)(h,e);return l.createElement(u,(0,r.Z)({},m,{className:d}),o.kK(t)?c:t)}h.handledProps=["as","children","className","content"],h.propTypes={},h.create=(0,u.u5)(h,(function(e){return{content:e}}));var p=h;function Z(e){var t=e.children,n=e.className,c=e.content,d=(0,a.Z)("content",n),m=(0,i.Z)(Z,e),u=(0,s.Z)(Z,e);return l.createElement(u,(0,r.Z)({},m,{className:d}),o.kK(t)?c:t)}Z.handledProps=["as","children","className","content"],Z.propTypes={};var v=Z;function f(e){var t=e.attached,n=e.block,u=e.children,h=e.className,Z=e.color,N=e.content,k=e.disabled,x=e.dividing,G=e.floated,g=e.icon,j=e.image,y=e.inverted,b=e.size,E=e.sub,C=e.subheader,K=e.textAlign,P=(0,a.Z)("ui",Z,b,(0,c.lG)(n,"block"),(0,c.lG)(k,"disabled"),(0,c.lG)(x,"dividing"),(0,c.cD)(G,"floated"),(0,c.lG)(!0===g,"icon"),(0,c.lG)(!0===j,"image"),(0,c.lG)(y,"inverted"),(0,c.lG)(E,"sub"),(0,c.sU)(t,"attached"),(0,c.X4)(K),"header",h),w=(0,i.Z)(f,e),I=(0,s.Z)(f,e);if(!o.kK(u))return l.createElement(I,(0,r.Z)({},w,{className:P}),u);var T=d.Z.create(g,{autoGenerateKey:!1}),_=m.Z.create(j,{autoGenerateKey:!1}),z=p.create(C,{autoGenerateKey:!1});return T||_?l.createElement(I,(0,r.Z)({},w,{className:P}),T||_,(N||z)&&l.createElement(v,null,N,z)):l.createElement(I,(0,r.Z)({},w,{className:P}),N,z)}f.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],f.propTypes={},f.Content=v,f.Subheader=p;var N=f}},function(e){e.O(0,[824,318,774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);