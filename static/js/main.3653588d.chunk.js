(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(21),i=t.n(o),l=t(15),c=t(11),s=t(12);t(69);function p(){var e=Object(c.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: none;\n  }\n\n  body {\n    background-color: #9B65e5;\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  .none {\n    display: none;\n  }\n"]);return p=function(){return e},e}var u=Object(s.a)(p()),f=(t(70),t(82),t(83),t(5)),d=t(56),m=t(17),E=t(18),g={SEARCH_REQUEST:"favorites/SEARCH_REQUEST",PAGE_SUCCESS:"favorites/PAGE_SUCCESS",SEARCH_SUCCESS:"favorites/SEARCH_SUCCESS",SEARCH_FAILURE:"favorites/SEARCH_FAILURE",ADD_REQUEST:"favorites/ADD_REQUEST",ADD_SUCCESS:"favorites/ADD_SUCCESS",ADD_FAILURE:"favorites/ADD_FAILURE",REMOVE:"favorites/REMOVE"},b={loading:!1,data:[],page:1,pages:[],favorites:JSON.parse(localStorage.getItem("favoritesRepos"))||[],error:null};var v={searchRequest:function(e,n){return{type:g.SEARCH_REQUEST,payload:{user:e,page:n}}},pageSuccess:function(e,n){return{type:g.PAGE_SUCCESS,payload:{repos:e,page:n}}},searchSuccess:function(e,n){return{type:g.SEARCH_SUCCESS,payload:{repos:e,pages:n}}},searchFailure:function(e){return{type:g.SEARCH_FAILURE,payload:{error:e}}},addFavoriteRequest:function(e){return{type:g.ADD_REQUEST,payload:{repository:e}}},addFavoriteSuccess:function(e){return{type:g.ADD_SUCCESS,payload:{repo:e}}},addFavoriteFailure:function(e){return{type:g.ADD_FAILURE,payload:{error:e}}},removeFavorite:function(e){return{type:g.REMOVE,payload:{id:e}}}},x=Object(f.c)({favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case g.SEARCH_REQUEST:return Object(E.a)({},e,{loading:!0,data:[]});case g.PAGE_SUCCESS:return Object(E.a)({},e,{loading:!1,page:n.payload.page,data:Object(m.a)(n.payload.repos),error:null});case g.SEARCH_SUCCESS:return Object(E.a)({},e,{loading:!1,page:1,pages:Object(m.a)(n.payload.pages),data:Object(m.a)(n.payload.repos),error:null});case g.SEARCH_FAILURE:return Object(E.a)({},e,{loading:!1,error:n.payload.error});case g.ADD_SUCCESS:return localStorage.setItem("favoritesRepos",JSON.stringify([].concat(Object(m.a)(e.favorites),[n.payload.repo]))),Object(E.a)({},e,{loading:!1,favorites:[].concat(Object(m.a)(e.favorites),[n.payload.repo]),error:null});case g.ADD_FAILURE:return Object(E.a)({},e,{loading:!1,error:n.payload.error});case g.REMOVE:var t=e.favorites;return t.splice(e.favorites.findIndex(function(e){return e.id===n.payload.id}),1),localStorage.setItem("favoritesRepos",JSON.stringify(Object(m.a)(t))),Object(E.a)({},e,{favorites:Object(m.a)(t)});default:return e}}}),h=t(16),y=t.n(h),S=t(8),w=t(49),O=t.n(w).a.create({baseURL:"https://api.github.com"}),j=t(50),R=t.n(j),C=y.a.mark(_),A=y.a.mark(k);function _(e){var n,t,r,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(S.call)(O.get,"users/".concat(e.payload.user,"/repos?page=").concat(e.payload.page));case 3:if(n=o.sent,t=n.data.map(function(e){return{id:e.id,name:e.full_name,description:e.description,url:e.html_url}}),1===e.payload.page){o.next=9;break}return o.next=8,Object(S.put)(v.pageSuccess(t,e.payload.page));case 8:return o.abrupt("return",o.sent);case 9:if(r=[],n.headers.link)for(a=0;a<n.headers.link.slice(-14,-13);a++)r.push(a+1);return o.next=13,Object(S.put)(v.searchSuccess(t,r));case 13:o.next=19;break;case 15:return o.prev=15,o.t0=o.catch(0),o.next=19,Object(S.put)(v.searchFailure("Erro ao buscar reposit\xf3rios"));case 19:case"end":return o.stop()}},C,null,[[0,15]])}function k(e){var n,t,r;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(S.call)(O.get,"repos/".concat(e.payload.repository));case 3:return n=a.sent,t=n.data,r={img:t.owner.avatar_url,id:t.id,owner:t.owner.login,name:t.name,description:t.description,stars:t.stargazers_count,forks:t.forks_count,issues:t.open_issues,url:t.html_url,lastCommit:R()(t.pushed_at).fromNow()},a.next=8,Object(S.put)(v.addFavoriteSuccess(r));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(S.put)(v.addFavoriteFailure("Erro ao buscar esse reposit\xf3rio"));case 14:case"end":return a.stop()}},A,null,[[0,10]])}var U=y.a.mark(F);function F(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.all)([Object(S.takeLatest)(g.SEARCH_REQUEST,_),Object(S.takeLatest)(g.ADD_REQUEST,k)]);case 2:case"end":return e.stop()}},U)}var D=Object(d.a)({sagaMonitor:null}),I=[D],H=f.a.apply(void 0,I),N=Object(f.e)(x,H);D.run(F);var z=N,L=t(54),Q=t(20),T="githubfavorite",q=t(51),G=t(52),J=t(57),M=t(53),P=t(59);function V(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 10%;\n  color: #222;\n\n  .wrapper-row {\n    display: flex;\n    flex-direction: row;\n    margin-left: 15px;\n  }\n  .wrapper-column {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    p {\n      padding: 8px 0;\n    }\n  }\n\n  li {\n    height: 80px;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 3px;\n    margin: 5px 10px;\n    background: #fff;\n  }\n\n  li a,\n  li button {\n    background: none;\n    cursor: pointer;\n    border: none;\n    border-radius: 3px;\n    text-decoration: none;\n    outline: none;\n    padding: 3px;\n    margin: 0 3px;\n    color: #222;\n    font-size: 100%;\n  }\n"]);return V=function(){return e},e}function B(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  list-style: none;\n\n  li {\n    padding: 0 10px;\n\n    button {\n      height: 35px;\n      width: 35px;\n      border-radius: 50%;\n      outline: none;\n      border: none;\n      background: none;\n      font-size: 130%;\n      font-weight: bold;\n      color: #63f5b0;\n      cursor: pointer;\n    }\n\n    .active {\n      background-color: #52d89f;\n      color: #fff;\n    }\n  }\n"]);return B=function(){return e},e}function K(){var e=Object(c.a)(["\n  margin-top: 20px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 0 10%;\n  position: relative;\n\n  .wrapper-row {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n  }\n\n  input {\n    flex: 1;\n    height: 55px;\n    padding: 0 20px;\n    background: #fff;\n    border: none;\n    margin: 5px 10px;\n    font-size: 18px;\n    color: #333;\n    border-radius: 3px;\n\n    border: ",";\n  }\n\n  button {\n    width: 120px;\n    height: 55px;\n    padding: 0 20px;\n    margin: 5px 10px;\n    background: #63f5b0;\n    color: #fff;\n    border: none;\n    font-size: 20px;\n    font-weight: bold;\n    border-radius: 3px;\n    cursor: pointer;\n    transition: all 0.3s;\n\n    &:hover {\n      background: #52d89f;\n    }\n  }\n\n  span {\n    padding: 10px 0 0 10px;\n    color: #fff;\n    font-size: 120%;\n    font-weight: 500;\n  }\n"]);return K=function(){return e},e}var W=s.b.form(K(),function(e){return e.withError?"2px solid #f00":"none"}),X=s.b.ul(B()),Y=s.b.ul(V()),Z=function(e){function n(){var e,t;Object(q.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(J.a)(this,(e=Object(M.a)(n)).call.apply(e,[this].concat(a)))).state={repositoryInput:"",repository:"",page:1},t.handleSearchRepository=function(e){e.preventDefault(),t.props.searchRequest(t.state.repositoryInput,t.state.page),t.setState({repository:t.state.repositoryInput}),t.setState({repositoryInput:""})},t.handleAddRepository=function(e){t.props.addFavoriteRequest(e)},t}return Object(P.a)(n,e),Object(G.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,{onSubmit:this.handleSearchRepository,withError:this.props.favorites.error},a.a.createElement("div",{className:"wrapper-row"},a.a.createElement("input",{placeholder:"user",value:this.state.repositoryInput,onChange:function(n){return e.setState({repositoryInput:n.target.value})}}),a.a.createElement("button",{type:"submit"},this.props.favorites.loading?a.a.createElement("i",{className:"fa fa-spinner fa-pulse"}):"Search")),!!this.props.favorites.error&&a.a.createElement("span",null,this.props.favorites.error)),a.a.createElement(X,null,this.props.favorites.pages&&this.props.favorites.pages.map(function(n){return a.a.createElement("li",{key:n},a.a.createElement("button",{className:n===e.props.favorites.page?"active":void 0,onClick:function(){e.setState({page:n}),e.props.searchRequest(e.state.repository,n)}},n))})),a.a.createElement(Y,null,this.props.favorites.data.map(function(n){return a.a.createElement("li",{key:n.id},a.a.createElement("div",{className:"wrapper-column"},a.a.createElement("strong",null,n.name),a.a.createElement("p",null,n.description)),a.a.createElement("div",{className:"wrapper-row"},a.a.createElement("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("i",{className:"fa fa-external-link"})),e.props.favorites.favorites.find(function(e){return e.id===n.id})?a.a.createElement(a.a.Fragment,null):a.a.createElement("button",{onClick:function(){return e.handleAddRepository(n.name)}},a.a.createElement("i",{className:"fa fa-star"}))))})))}}]),n}(r.Component),$=Object(l.b)(function(e){return{favorites:e.favorites}},function(e){return Object(f.b)(v,e)})(Z);function ee(){var e=Object(c.a)(["\n  width: 250px;\n  background: #fff;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  position: relative;\n\n  header {\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    img {\n      width: 64px;\n    }\n\n    strong {\n      font-size: 25px;\n      margin-top: 10px;\n    }\n\n    small {\n      font-size: 14px;\n      color: #555;\n    }\n\n    i {\n      position: absolute;\n      top: 10px;\n      cursor: pointer;\n      opacity: 1;\n      transition: opacity 0.2s;\n\n      &:hover {\n        opacity: 0.5;\n      }\n\n      &:first-of-type {\n        right: 10px;\n      }\n      &:last-of-type {\n        left: 10px;\n      }\n    }\n  }\n\n  ul {\n    list-style: none;\n\n    li {\n      font-weight: bold;\n      padding: 12px 20px;\n\n      small {\n        font-weight: normal;\n        font-size: 12px;\n        color: #999;\n        font-style: italic;\n      }\n      &:nth-child(2n - 1) {\n        background: #f5f5f5;\n      }\n    }\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  margin-top: 20px;\n"]);return ne=function(){return e},e}var te=s.b.div(ne()),re=s.b.div(ee()),ae=Object(l.b)(function(e){return{favorites:e.favorites.favorites}},function(e){return Object(f.b)(v,e)})(function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(te,null,e.favorites.map(function(n){return a.a.createElement(re,{key:n.id,id:n.id},a.a.createElement("header",null,a.a.createElement("img",{src:n.img,alt:n.owner}),a.a.createElement("strong",null,n.name),a.a.createElement("small",null,n.owner),a.a.createElement("i",{className:"fa fa-close",onClick:function(){return e.removeFavorite(n.id)}})),a.a.createElement("ul",null,a.a.createElement("li",null,n.stars," ",a.a.createElement("small",null,"stars")),a.a.createElement("li",null,n.forks," ",a.a.createElement("small",null,"forks")),a.a.createElement("li",null,n.issues," ",a.a.createElement("small",null,"issues")),a.a.createElement("li",null,n.lastCommit," ",a.a.createElement("small",null,"last commit"))))})))});function oe(){var e=Object(c.a)(["\n  width: 100%;\n  text-align: center;\n  padding: 20px 0;\n\n  .wrapper-column {\n    display: inline-block;\n  }\n\n  h1 {\n    color: #f5f5f5;\n    font-size: 250%;\n    display: inline;\n  }\n\n  .wrapper-row {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    padding: 15px 30px;\n  }\n\n  a {\n    text-decoration: none;\n    color: #63f5b0;\n    font-weight: bold;\n    font-size: 120%;\n    transition: all 0.2s;\n\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n"]);return oe=function(){return e},e}var ie=s.b.div(oe()),le=Object(l.b)(function(e){return{count:e.favorites.favorites.length}})(function(e){return a.a.createElement(ie,null,a.a.createElement("div",{className:"wrapper-column"},a.a.createElement("h1",null,"GituHub Favorites"),a.a.createElement("div",{className:"wrapper-row"},a.a.createElement("a",{href:"/".concat(T)},"Search"),a.a.createElement("a",{href:"/".concat(T,"/favorites")},"Favorites (",e.count,")"))))}),ce=function(){return a.a.createElement(L.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(le,null),a.a.createElement(Q.c,null,a.a.createElement(Q.a,{exact:!0,path:"/".concat(T),component:$}),a.a.createElement(Q.a,{exact:!0,path:"/".concat(T,"/favorites"),component:ae}))))},se=function(){return a.a.createElement(l.a,{store:z},a.a.createElement(u,null),a.a.createElement(ce,null))};i.a.render(a.a.createElement(se,null),document.getElementById("root"))},60:function(e,n,t){e.exports=t(109)}},[[60,1,2]]]);
//# sourceMappingURL=main.3653588d.chunk.js.map