(this.webpackJsonplanding=this.webpackJsonplanding||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),r=n(19),o=n.n(r),a=n(20),c=n(22),l=n(26),h=n(55),d=n.n(h),m=n(56),b=n.n(m),j=n(5),p=n(1);var g=()=>{const e=window.innerWidth,t={container:{position:"relative"},banner:{width:"100%",height:e>600?400:200,background:"url(img/banner.png) 100% 100%"},title:{position:"relative",top:e>600?200:100,transform:"translateY(-50%)",maxWidth:"50%"}};return Object(p.jsx)("div",{style:t.container,children:Object(p.jsx)("div",{id:"banner",style:t.banner,children:Object(p.jsx)("img",{id:"title",style:t.title,src:"img/title.svg",alt:"Keychain"})})})},u=(n(89),n(163)),x=n(29),v=n(58),y=n.n(v),O=(n(126),n(168)),f=n(169),w=n(11),k=n(164),S=n(165);const T=Object(w.a)({root:{background:"#0000006b",border:"none",boxShadow:"none",color:"lightgrey","&:hover":{background:"lightgrey",color:"white"}}})(O.a);class I extends s.a.Component{constructor(e){super(e),this.nbElem=e.nbElem,this.autoPlay=e.autoPlay,this.selectedItem=e.selectedItem,this.sizeElement=e.sizeElement,this.state={selectedFeature:e.selectedItem},this.Carousel=s.a.createRef()}componentDidUpdate(e){e.selectedItem!==this.props.selectedItem&&this.setState({selectedFeature:this.props.selectedItem})}render(){return Object(p.jsx)(u.a,{item:!0,xs:12,sm:10,md:8,lg:this.sizeElement,children:Object(p.jsxs)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(p.jsx)(f.a,{only:"xs",children:Object(p.jsx)(u.a,{sm:1,item:!0,children:Object(p.jsx)(T,{variant:"fab","aria-label":"Prev",onClick:()=>this.Carousel.current.slidePrev(),children:Object(p.jsx)(k.a,{})})},"prev")}),Object(p.jsx)(u.a,{xs:12,md:8,item:!0,children:Object(p.jsx)(y.a,{dotsDisabled:!0,autoPlay:this.autoPlay,stopAutoPlayOnHover:!0,duration:500,infinite:!0,autoPlayInterval:5e3,startIndex:this.state.selectedFeature,responsive:{0:{items:1},1350:{items:this.nbElem}},buttonsDisabled:!0,ref:this.Carousel,children:this.props.children})},"car"),Object(p.jsx)(f.a,{only:"xs",children:Object(p.jsx)(u.a,{sm:1,item:!0,children:Object(p.jsx)(T,{variant:"fab","aria-label":"Next",onClick:()=>this.Carousel.current.slideNext(),children:Object(p.jsx)(S.a,{})})},"next")})]})})}}var C=I;const E=window.innerWidth,M={maxHeight:E>600?"15rem":"8rem",borderRadius:"0 10px 10px 10px",marginBottom:"1rem"},B={fontSize:E>600?"1.25rem":"1rem",fontWeight:"600",color:"lightgrey",textDecoration:"none",fontFamily:"Roboto, sans-serif",textTransform:"uppercase"},P={fontSize:E>600?"1.25rem":"1rem",fontWeight:"600",color:"white",textDecoration:"none"},W={fontSize:E>600?"1rem":"0.75rem",fontWeight:"300",color:"lightgrey",marginBottom:E>600?0:20};var N=e=>{let{name:t,position:n,username:i}=e;return Object(p.jsxs)(u.a,{className:"memberPanel",item:!0,xs:6,sm:6,md:2,lg:2,container:!0,direction:"column",justify:"space-evenly",alignItems:"center",children:[Object(p.jsx)("img",{style:M,className:"imgMember",src:"https://images.hive.blog/u/".concat(i,"/avatar"),alt:t}),Object(p.jsx)("span",{style:B,children:t}),Object(p.jsxs)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://peakd.com/@".concat(i),style:P,children:["@",i]}),Object(p.jsx)("span",{style:W,children:Object(x.a)(n)})]})},_=n(7);function D(e){return e.replace(/\s+/g,"-").toLowerCase()}n(127);const F={padding:"50px 0"},z={color:"white",textTransform:"uppercase",fontSize:"2rem",fontFamily:"Montserrat",fontWeight:"600",margin:"0px",marginBottom:"3.5rem"};var A=e=>{let{title:t,tag:n,children:i,style:s}=e;return Object(p.jsxs)("div",{className:"section carousel-section",style:{...F,...s},children:[Object(p.jsx)("p",{id:n,style:z,children:t}),Object(p.jsx)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:i})]})};n(128);var U=e=>{let{title:t,tag:n,background:i,direction:s,children:r,marginBottom:o,style:a}=e;const c={background:i,marginBottom:o||0,padding:"4rem 2.5rem"};return Object(p.jsxs)("div",{className:"section",style:{...c,...a},children:[Object(p.jsx)("p",{id:n,style:{color:"white",textTransform:"uppercase",fontSize:"2rem",fontFamily:"Montserrat",fontWeight:"600",margin:"0px",marginBottom:"3.5rem"},children:t}),Object(p.jsx)(u.a,{container:!0,direction:s||"row",justify:"space-evenly",alignItems:"center",spacing:24,children:r})]})};const L=window.innerWidth,R={height:L>600?"70px":"50px",marginBottom:L>600?"1rem":"0.2rem"},H={color:"white",fontSize:18};var Y=Object(a.b)((e=>({activeFeature:e.nav.activeFeature})),(e=>({})))((e=>{let{activeFeature:t}=e;return Object(p.jsxs)("div",{children:[Object(p.jsxs)(U,{title:_.whySteemPlus.sectionTitle,tag:D(_.whySteemPlus.sectionTitle),background:"transparent url('img/bg_grey.png') 50% 50%",children:[Object(p.jsx)("div",{style:{width:L>600?"50%":"100%",margin:0},children:_.whySteemPlus.data.map(((e,t)=>Object(p.jsx)("p",{style:{font:"normal normal normal 22px",color:"white",textAlign:"left"},children:e})))}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"img/why_hive.svg",alt:"hive"})})]}),Object(p.jsx)(U,{title:_.where.sectionTitle,tag:D(_.where.sectionTitle),background:"black",children:Object(p.jsx)("div",{className:"browsers-container",children:_.where.browsers.map(((e,t)=>Object(p.jsx)("div",{className:"browser",children:Object(p.jsx)(u.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:"browser-item",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:"img/browsers/".concat(e.icon,".svg"),alt:e.name,style:R})}),e.name&&Object(p.jsx)("div",{style:{color:"#B5B5B5",fontSize:20,textTransform:"uppercase",textDecoration:"none"},children:e.name})]})})},t)))})}),Object(p.jsx)(A,{title:_.screenshots.sectionTitle,tag:D(_.screenshots.sectionTitle),style:{background:"linear-gradient(0.125turn,#17181c, #2d3337)"},children:Object(p.jsxs)(C,{autoPlay:!0,nbElem:3,sizeElement:12,children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/1.png",alt:"Intro"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/2.png",alt:"Intro"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/3.png",alt:"Intro"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/4.png",alt:"Intro"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/5.png",alt:"Intro"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/6.png",alt:"Intro"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/7.png",alt:"Intro"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/8.png",alt:"Intro"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/9.png",alt:"Intro"})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{height:L>600?600:400,src:"img/screenshots/10.png",alt:"Intro"})})]})}),Object(p.jsx)(U,{title:_.members.sectionTitle,tag:D(_.members.sectionTitle),style:{background:"black"},children:_.members.data.map(((e,t)=>Object(p.jsx)(N,{name:e.name,position:e.position,username:e.username},t)))}),Object(p.jsxs)(U,{title:_.contactUs.sectionTitle,tag:D(_.contactUs.sectionTitle),background:"transparent url('img/bg_grey.png') 50% 50%",padding:"2rem",direction:"column",marginBottom:"0",children:[Object(p.jsx)("p",{style:H,children:Object(x.a)(_.contactUs.data.description)}),Object(p.jsx)("p",{style:H,children:"Join our Discord!"}),Object(p.jsx)("a",{href:"https://discord.gg/3EM6YfRrGv",children:Object(p.jsx)("img",{alt:"discord",src:"img/discord.png",style:{height:100,cursor:"pointer"}})}),Object(p.jsxs)("p",{style:H,children:["Or email us at"," ",Object(p.jsx)("a",{style:{color:"white",fontWeight:"bold"},href:"mailto:contact@hive-keychain.com",children:"contact@hive-keychain.com"})]})]})]})}));const V={background:"#450611 0% 0% no-repeat padding-box",minHeight:"6rem",textAlign:"left",paddingLeft:"10%",paddingRight:"10%",display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"row"},{innerWidth:K}=window,G={color:"white",fontSize:16,textTransform:"uppercase",marginLeft:20,display:K>=800?"inline":"none"},J={},Q={display:"flex",justifyContent:"flex-end"};var $=()=>Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"footer",style:V,children:[Object(p.jsx)("div",{style:J,children:Object(p.jsx)("a",{href:"https://hive.io",target:"_blank",rel:"noreferrer",style:{textDecoration:"none"},children:Object(p.jsx)("img",{src:"img/footer/powered_hive.png",alt:"Powered by Hive",style:{height:K>600?60:40}})})}),Object(p.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[Object(p.jsx)(c.b,{style:{textDecoration:"none",color:"white",marginBottom:10,textTransform:"uppercase",cursor:"pointer"},to:"/terms",children:"Terms of service"}),Object(p.jsx)(c.b,{style:{textDecoration:"none",color:"white",textTransform:"uppercase",cursor:"pointer",marginBottom:10},to:"/privacy",children:"Privacy"}),Object(p.jsx)(c.b,{style:{textDecoration:"none",color:"white",textTransform:"uppercase",cursor:"pointer"},to:"/fees",children:"Fees"})]}),Object(p.jsxs)("div",{style:Q,children:[Object(p.jsx)("a",{href:"https://github.com/hive-keychain",target:"_blank",style:{textDecoration:"none"},rel:"noreferrer",children:Object(p.jsxs)("span",{style:{marginRight:"10vw"},children:[Object(p.jsx)("img",{src:"img/footer/github.svg",alt:"Github",style:{verticalAlign:"middle"}}),Object(p.jsx)("span",{style:G,children:"Visit our Github"})]})}),Object(p.jsx)("a",{href:"https://peakd.com/@keychain",target:"_blank",rel:"noreferrer",children:Object(p.jsxs)("span",{children:[Object(p.jsx)("img",{src:"img/footer/see_on_hive.svg",alt:"Hive",style:{verticalAlign:"middle"}}),Object(p.jsx)("span",{style:G,children:"Follow us on Hive"})]})})]})]}),Object(p.jsx)("div",{style:{width:"100%",background:"#450611 0% 0% no-repeat padding-box",color:"white",textAlign:"center",fontSize:12,paddingBottom:5},children:"\xa92022 Hive Keychain Ltd"})]});var q=e=>{let{text:t,color1:n,color2:i,href:s,float:r,itemVisible:o,onClick:a,large:c,active:l,children:h,id:d}=e;const m={root:{fontSize:"large",transition:"1s",WebkitTransition:"1s",float:r,border:"none",backgroundColor:n,color:l?i:"lightgrey",fontWeight:l?"bold":"inherit",display:o?"block !important":"none !important","&:hover":{backgroundColor:i,color:n}}},b=Object(w.a)(m)(O.a);return Object(p.jsxs)(b,{id:d,href:s,onClick:a,children:[h,t]})},X=(n(129),n(62)),Z=n.n(X),ee=n(63),te=n(166);const ne=window.innerWidth,ie={textDecoration:"none",textTransform:"uppercase",color:"white",fontSize:"0.875rem",fontWeight:"500",fontFamily:"Roboto",padding:"0.25rem"},se={zIndex:1,background:"black",color:"white",position:"relative",width:"100%",paddingTop:ne>600?"0.25rem":"0.1rem",paddingBottom:ne>600?"0.25rem":"0.1rem"},re={zIndex:1,position:"fixed",top:0,background:"black",width:"100%",paddingTop:ne>600?"0.25rem":"0.1rem",paddingBottom:ne>600?"0.25rem":"0.1rem",boxShadow:"0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)"},oe=(e,t,n,i)=>{if("main"===t)return Object.keys(e).map(((s,r)=>Object(p.jsx)(u.a,{style:{paddingLeft:50,paddingTop:ne>600?15:1,paddingBottom:ne>600?15:1,fontWeight:"bold"},item:!0,xs:12,sm:12,md:12,lg:"auto",children:Object(p.jsx)(Z.a,{offset:()=>100,href:"#".concat(D(e[s].sectionTitle)),style:ie,children:Object(p.jsx)(q,{color1:"black",color2:"white",style:{fontWeight:"bold"},text:e[s].sectionTitle,float:"left",itemVisible:"main"===t,active:D(e[s].sectionTitle)===i,onClick:()=>{n("".concat(D(e[s].sectionTitle))),(()=>{const e=document.getElementById("close-menu-button");null!==e&&e.click()})()}})})},r)))};class ae extends s.a.Component{constructor(e){super(e),this.page=e.page,this.setPage=e.setPage,this.setSubMenu=e.setSubMenu,this.subMenu=e.subMenu,this.isMainPage="main"===this.page,this.navItems=_,this.state={activePage:this.page,activeSubElement:this.subMenu,sticky:!1},this.handleScroll=this.handleScroll.bind(this)}handleScroll(){let e;"main"===this.state.activePage?e=this.navItems:"spp"===this.state.activePage?e=this.sppNavItems:"rankings"===this.state.activePage&&(e=this.rankingsNavItems);const t=document.getElementById("banner"),n=parseInt(t.style.height);window.pageYOffset>=n?this.setState({sticky:!0}):this.setState({sticky:!1});let i=Object.keys(e).filter((t=>void 0!==e[t].sectionTitle)),s=window.pageYOffset,r="";for(let o=i.length-1;o>=0;o--){const t=document.getElementById("".concat(D(e[i[o]].sectionTitle))).offsetTop,n=Math.abs(window.pageYOffset-t);s>n&&(s=n,r=D(e[i[o]].sectionTitle))}this.setState({activeSubElement:r})}componentDidUpdate(e){e.page!==this.props.page&&this.setState({activePage:this.props.page}),e.subMenu!==this.props.subMenu&&this.setState({activeSubElement:this.props.subMenu})}componentDidMount(){window.addEventListener("scroll",this.handleScroll)}render(){return Object(p.jsx)("div",{id:"navbar",style:this.state.sticky?re:se,children:Object(p.jsx)(ee.a,{menuOpenButton:Object(p.jsx)(q,{color1:"black",color2:"white",itemVisible:!0,children:Object(p.jsx)(te.a,{})}),menuCloseButton:Object(p.jsx)(q,{id:"close-menu-button",color1:"white",color2:"black",itemVisible:!0,children:Object(p.jsx)(te.a,{})}),changeMenuOn:"1024px",largeMenuClassName:"large-menu",smallMenuClassName:"small-menu",menu:Object(p.jsx)(u.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:oe(this.navItems,this.state.activePage,this.setSubMenu,this.state.activeSubElement,this.closeMenuButton)})})})}}var ce=Object(a.b)((e=>({page:e.nav.page,subMenu:e.nav.subMenu})),(e=>({setPage:t=>{e({type:"SET_PAGE",payload:t})},setSubMenu:t=>{e({type:"SET_SUB_MENU",payload:t})}})))(ae),le=n(167);class he extends i.Component{constructor(e){super(e),this.state={fees:null}}componentWillMount(){fetch("/FEES.md").then((e=>e.text())).then((e=>{this.setState({fees:e})}))}render(){return this.state.fees?Object(p.jsx)("div",{className:"content",style:{backgroundColor:"black",color:"white"},children:Object(p.jsx)("div",{className:"markdown",children:Object(p.jsx)(le.a,{transformLinkUri:null,children:this.state.fees})})}):null}}var de=he,me=()=>(Object(i.useEffect)((()=>{console.log("are we here");const e=window.location.href.replace("https://hive-keychain.com/#invoice/","hive://sign/op/");console.log("redirect to",e),window.open(e,"__blank")}),[]),Object(p.jsxs)("div",{style:{height:"420px"},children:[Object(p.jsx)("h1",{children:"Keychain Store Invoice"}),Object(p.jsx)("p",{children:'If the App you are using didn\'t redirect you automatically to Keychain App, select "Open on Browser" among your app options, or copy paste this link in your usual browser.'})]}));class be extends i.Component{constructor(e){super(e),this.state={privacy:null}}componentWillMount(){fetch("/PRIVACY.md").then((e=>e.text())).then((e=>{console.log("t",e),this.setState({privacy:e})}))}render(){return this.state.privacy?Object(p.jsx)("div",{className:"content",style:{backgroundColor:"black",color:"white"},children:Object(p.jsx)("div",{className:"markdown",children:Object(p.jsx)(le.a,{transformLinkUri:null,children:this.state.privacy})})}):null}}var je=be;class pe extends i.Component{constructor(e){super(e),this.state={terms:null}}componentWillMount(){fetch("/TOS.md").then((e=>e.text())).then((e=>{this.setState({terms:e})}))}render(){return this.state.terms?Object(p.jsx)("div",{className:"content",style:{backgroundColor:"black",color:"white"},children:Object(p.jsx)("div",{className:"markdown",children:Object(p.jsx)(le.a,{transformLinkUri:null,children:this.state.terms})})}):null}}var ge=pe;class ue extends i.Component{render(){return console.log(this.props),Object(p.jsxs)("div",{className:"App",style:{display:"flex",flex:1,flexDirection:"column"},children:[Object(p.jsx)(g,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/",element:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ce,{}),Object(p.jsx)(Y,{})]})}),Object(p.jsx)(j.a,{path:"terms",element:Object(p.jsx)(ge,{})}),Object(p.jsx)(j.a,{path:"privacy",element:Object(p.jsx)(je,{})}),Object(p.jsx)(j.a,{path:"fees",element:Object(p.jsx)(de,{})}),Object(p.jsx)(j.a,{path:"invoice/*",element:Object(p.jsx)(me,{})})]}),Object(p.jsx)($,{})]})}}var xe=Object(a.b)((e=>({page:e.nav.page})),(e=>({})))(ue);n(133);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.load({google:{families:["Roboto:300","Montserrat"]}});const ve=Object(l.d)(Object(l.c)({nav:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:"main",activeFeature:0,subMenu:"why-steemplus-?"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":e={...e,page:t.payload};break;case"SET_ACTIVE_FEATURE":e={...e,activeFeature:t.payload};break;case"SET_SUB_MENU":e={...e,subMenu:t.payload}}return e}}),{},Object(l.a)(d.a));o.a.render(Object(p.jsx)(a.a,{store:ve,children:Object(p.jsx)(c.a,{children:Object(p.jsx)(xe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))},7:function(e){e.exports=JSON.parse('{"whySteemPlus":{"sectionTitle":"Why Keychain ?","data":["Hive Keychain provides you with secure and seamless access to Hive powered websites, dApps, and services.","Like our 100,000+ users, experience gaming, blogging, video streaming, DeFi, and more while preserving the safety of your funds. Available for both desktop browsers and mobile devices. It\u2019s time to join Web 3.0."]},"where":{"sectionTitle":"Download","description":"SteemPlus is available natively on Chrome and Firefox. It\u2019s also available on Opera via the `Install Chrome Extensions` plugin. <br />What are you waiting for? You are only minutes away from getting more out of your Steem experience!","browsers":[{"icon":"android","url":"https://play.google.com/store/apps/details?id=com.mobilekeychain"},{"icon":"ios","url":"https://apps.apple.com/us/app/hive-keychain/id1552190010"},{"name":"Chrome","icon":"chrome","url":"https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep?hl=en"},{"name":"Firefox","icon":"firefox","url":"https://addons.mozilla.org/en-US/firefox/addon/hive-keychain/"},{"name":"Brave","icon":"brave","url":"https://chrome.google.com/webstore/detail/hive-keychain/jcacnejopjdphbnjgfaaobbfafkihpep?hl=en"}]},"screenshots":{"sectionTitle":"Screenshots"},"members":{"sectionTitle":"Team","data":[{"name":"Quentin","position":"CEO / <a target=\'_blank\' style=\'text-decoration: none; color: white;\' href=\'https://hivesigner.com/sign/account-witness-vote?witness=stoodkev&approve=1\'><b>Witness</b></a>","username":"stoodkev"},{"name":"C\xe9dric","position":"CTO / Full-stack Dev","username":"cedricguillas"},{"name":"Manu","position":"Community Manager","username":"manuphotos"},{"name":"Matt","position":"Advisor / <a target=\'_blank\' style=\'text-decoration: none; color: white;\' href=\'https://hivesigner.com/sign/account-witness-vote?witness=yabapmatt&approve=1\'><b>Witness</b></a>","username":"yabapmatt"}]},"contactUs":{"sectionTitle":"Contact Us","data":{"description":"You need more information, or perhaps want to share your suggestions or get some assistance ?","textButton":"Discord","url":"https://discord.gg/hhBw3mv","icon":"discord.svg","email":"Or contact us at <a href=\'mailto:contact@hive-keychain.com\'>contact@hive-keychain.com</a>"}}}')},89:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.0a055233.chunk.js.map