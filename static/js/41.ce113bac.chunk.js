"use strict";(self.webpackChunkreact_kbzda_1=self.webpackChunkreact_kbzda_1||[]).push([[41],{7041:function(e,s,t){t.r(s),t.d(s,{default:function(){return I}});var r=t(8683),i=t(5671),n=t(3144),a=t(136),o=t(7277),u=t(2791),l=t(9101),c=t(6070),d="MyPost_posts_block__pd08z",h="MyPost_posts__hFu9R",p="MyPost_post__error__mIlwQ",f="MyPost_btn__9xWv0",x="Post_item__Yu4oG",j=t(184);var v=function(e){return(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("img",{src:"https://i.ytimg.com/vi/6C9PDnU6QI0/maxresdefault.jpg",alt:"avatar"}),e.message,(0,j.jsx)("div",{children:(0,j.jsxs)("span",{children:["Like ",e.likeCount," "]})})]})},g=t(5705),m=t(2931),_=function(e){return(0,j.jsx)(g.J9,{initialValues:{newMessageBody:""},onSubmit:function(s,t){var r,i=t.resetForm;r=s.newMessageBody,e.sendMessage(r),i({values:""})},validationSchema:m.O,children:function(e){var s=e.errors,t=e.touched;return(0,j.jsxs)(g.l0,{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(g.gN,{name:"newMessageBody",as:"textarea",placeholder:"enter text"}),s.newMessageBody&&t.newMessageBody?(0,j.jsx)("div",{className:p,children:s.newMessageBody}):null]}),(0,j.jsx)("button",{className:f,type:"submit",children:"Send2"})]})}})},b=u.memo((function(e){var s=e.postData.map((function(e){return(0,j.jsx)(v,{message:e.message,id:e.id,likeCount:e.likeCount},e.id)}));return(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("h3",{children:"My posts"}),(0,j.jsx)(_,{sendMessage:e.addPost}),(0,j.jsx)("div",{className:h,children:s})]})})),k=(0,l.$j)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(s){e((0,c.Wl)(s))}}}))(b),y=t(1628),Z="ProfileInfo_description_block__4fNv1",P=t(885),w=function(e){var s=(0,u.useState)(!1),t=(0,P.Z)(s,2),r=t[0],i=t[1],n=(0,u.useState)(e.status),a=(0,P.Z)(n,2),o=a[0],l=a[1];(0,u.useEffect)((function(){l(e.status)}),[e.status]);return(0,j.jsxs)("div",{children:[!r&&(0,j.jsx)("div",{children:(0,j.jsx)("span",{onClick:function(){i(!0)},children:e.status||"------"})}),r&&(0,j.jsx)("div",{children:(0,j.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(o)},value:o})})]})},M=function(e){return e.profile?(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YWwJaZ79oIELX6C7q_QtBT3Doab4yGxcvQ&usqp=CAU",alt:"hz"})}),(0,j.jsxs)("div",{className:Z,children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:e.profile.fullName}),(0,j.jsx)("img",{src:e.profile.photos.small,alt:"avatar"}),(0,j.jsx)(w,{status:e.status,updateStatus:e.updateStatus}),(0,j.jsx)("p",{children:e.profile.aboutMe})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{children:e.profile.lookingForAJob?"=)":"=("}),(0,j.jsx)("span",{children:e.profile.lookingForAJobDescription})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{children:"My contacts:"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.profile.facebook,children:"facebook"})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.profile.website,children:"website"})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.profile.vk,children:"vk"})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.profile.twitter,children:"twitter"})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.profile.instagram,children:"instagram"})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.profile.youtube,children:"youtube"})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.profile.github,children:"github"})}),(0,j.jsx)("li",{children:(0,j.jsx)("a",{href:e.profile.mainLink,children:"mainLink"})})]})]})]})]}):(0,j.jsx)(y.Z,{})};var S=function(e){return(0,j.jsxs)("div",{children:[(0,j.jsx)(M,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),(0,j.jsx)(k,{})]})},C=t(7689),N=t(1548),A=t(7781),B=function(e){(0,a.Z)(t,e);var s=(0,o.Z)(t);function t(){return(0,i.Z)(this,t),s.apply(this,arguments)}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){var e=this.props.router.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return(0,j.jsx)(S,(0,r.Z)((0,r.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(u.Component);var I=(0,A.qC)((0,l.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.userId}}),{getUserProfile:c.et,getStatus:c.lR,updateStatus:c.Nf}),(function(e){return function(s){var t=(0,C.TH)(),i=(0,C.s0)(),n=(0,C.UO)();return(0,j.jsx)(e,(0,r.Z)((0,r.Z)({},s),{},{router:{location:t,navigate:i,params:n}}))}}),N.Z)(B)},1548:function(e,s,t){var r=t(8683),i=t(5671),n=t(3144),a=t(136),o=t(7277),u=t(2791),l=t(7689),c=t(9101),d=t(184),h=function(e){return{isAuth:e.auth.isAuth}};s.Z=function(e){var s=function(s){(0,a.Z)(u,s);var t=(0,o.Z)(u);function u(){return(0,i.Z)(this,u),t.apply(this,arguments)}return(0,n.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,r.Z)({},this.props)):(0,d.jsx)(l.Fg,{to:"/login"})}}]),u}(u.Component);return(0,c.$j)(h)(s)}}}]);
//# sourceMappingURL=41.ce113bac.chunk.js.map