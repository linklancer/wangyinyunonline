(function(){"use strict";var t={7177:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{style:t.changeback,attrs:{id:"head"}},[e("div",{staticClass:"head-two"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isshow,expression:"!isshow"}],staticClass:"iconfont icon-xiangxiajiantou",attrs:{id:"up-arow"},on:{click:t.backdetail}}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"head-one"},[t._v("网易云音乐")]),e("div",{staticClass:"arow-content"},[e("span",{staticClass:"left-arow",style:t.twochangeback,on:{click:t.goback}},[e("i",{staticClass:"iconfont icon-xiangzuojiantou"})]),e("span",{staticClass:"right-arow",style:t.twochangeback,on:{click:t.goforword}},[e("i",{staticClass:"iconfont icon-xiangyoujiantou"})]),e("span",{staticClass:"middle-head"},[e("span",{staticClass:"sousuo",style:t.twochangeback,on:{click:t.serachlist}},[e("i",{staticClass:"iconfont icon-sousuo"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchList.keyword,expression:" searchList.keyword"}],style:t.twochangeback,attrs:{type:"text",placeholder:"忘记时间-胡歌"},domProps:{value:t.searchList.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.serachlist.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.searchList,"keyword",e.target.value)}}})]),e("span",{staticClass:"listen",style:t.ichangecolor},[e("i",{staticClass:"iconfont icon-tinggeshiqu"})])])]),e("div",{staticClass:"head-three"},[e("div",{staticClass:"head-left"},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"imglist"},[e("img",{attrs:{src:t.userImg}})]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"userinfo",style:t.ichangecolor},[t._v(t._s(t.username))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"bottom-arrow",on:{click:t.openpersonal}},[e("i",{staticClass:"iconfont icon-caret-bottom",on:{click:t.openlogin}})]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"vip"},[t._v("vip开通> ")])]),e("div",{staticClass:"head-four",style:t.ichangecolor},[t.isshow?e("span",{staticClass:"iconfont icon-yifu"}):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isshow,expression:"!isshow"}],staticClass:"share"},[e("span",{staticClass:"iconfont icon-fangda"}),e("span",[t._v("全屏共享")])]),e("span",{staticClass:"iconfont icon-shezhi"}),e("span",{staticClass:"iconfont icon-envelope"}),e("span",{staticClass:"sparte"},[t._v("|")]),e("span",{staticClass:"iconfont icon-minimize"}),e("span",{staticClass:"iconfont icon-minimizing"}),e("span",{staticClass:"iconfont icon-zuidahua"}),e("span",{staticClass:"iconfont icon-guanbi_o"})])])])},a=[],n={name:"MyHead",data(){return{searchList:{keyword:"",limit:60,offset:0,type:1},userimg:s(7097),styleObject:{backgroundColor:"rgb(71, 145, 235)"},destyleObject:{backgroundColor:"rgba(220,220,220,0.4)"},beforetwocolor:{backgroundColor:"rgb(65, 133, 216)",color:"rgba(255, 255, 255, 0.458)"},aftercolor:{backgroundColor:"rgb(230,230,230)",color:"black"},beforeicolor:{color:"rgba(255, 255, 255, 0.858)"},aftericolor:{color:"rgba(0, 0, 0, 0.302)"}}},methods:{serachlist(){this.$router.push({path:"/search",query:{keywords:this.keyword}});const{keyword:t,limit:e,offset:s,type:i}=this.searchList;this.$store.dispatch("getsearchmusic",{keyword:t,limit:e,offset:s,type:i})},backdetail(){this.$store.state.music.isshow=!1,this.$router.go(-1)},goback(){this.$router.go(-1)},goforword(){this.$router.go(1)},openlogin(){this.$store.state.user.token||(this.$store.state.home.loginshow=!0)},openpersonal(){this.$store.state.user.token&&(this.$store.state.home.personalshow=!this.$store.state.home.personalshow)}},computed:{isshow(){return"/detail"!=this.$route.path},changeback(){return"/detail"==this.$route.path?this.destyleObject:this.styleObject},twochangeback(){return"/detail"==this.$route.path?this.aftercolor:this.beforetwocolor},ichangecolor(){return"/detail"==this.$route.path?this.aftericolor:this.beforeicolor},username(){return this.$store.state.user.token?this.$store.state.user.profile.nickname:"未登录"},userImg(){return this.$store.state.user.token?this.$store.state.user.profile.avatarUrl:this.userimg}}},o=n,r=s(1001),c=(0,r.Z)(o,i,a,!1,null,"d5ab8e54",null),l=c.exports},7006:function(t,e,s){var i=s(6830),a=s.n(i),n=s(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("my-head"),e("my-aside"),e("my-main"),e("MyFoot"),e("my-login"),e("PersonalLogin")],1)},r=[],c=s(7177),l=function(){var t=this,e=t._self._c;return t.isshow?e("div",{staticClass:"aside"},[e("ul",{staticClass:"aside-ulone"},[e("li",{on:{click:t.gohome}},[t._v("发现音乐")]),e("li",[t._v("播客")]),e("li",[t._v("视频")]),e("li",[t._v("关注")]),e("li",[t._v("直播")]),e("li",[t._v("私人FM")])]),e("span",{staticClass:"mymusic"},[t._v("我的音乐")]),t._m(0),t._m(1),t._m(2)]):t._e()},u=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"aside-two aside-ulone"},[e("li",[e("span",{staticClass:"iconfont icon-xiazai"}),t._v("本地与下载")]),e("li",[e("span",{staticClass:"iconfont icon-zuijinbofang"}),t._v("最近播放")]),e("li",[e("span",{staticClass:"iconfont icon-yun-yunpan-yuncunchu"}),t._v("我的音乐云盘")]),e("li",[e("span",{staticClass:"iconfont icon-yinle"}),t._v("我的播客")]),e("li",[e("span",{staticClass:"iconfont icon-jiaguanzhuren"}),t._v("我的收藏")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"music-cart"},[e("span",[t._v("创建的歌单"),e("i",{staticClass:"iconfont icon-caret-bottom"})]),e("span",{staticClass:"iconfont icon-jiahao"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"like-music"},[e("span",{staticClass:"iconfont icon-aixin1"}),e("span",[t._v("我喜欢的音乐")]),e("span",{staticClass:"iconfont icon-aixin"})])}],h={name:"MyAside",computed:{isshow(){return"/detail"!=this.$route.path}},methods:{gohome(){this.$router.push({path:"/home"})}}},d=h,p=s(1001),f=(0,p.Z)(d,l,u,!1,null,"201b3931",null),m=f.exports,g=function(){var t=this,e=t._self._c;return e("div",{ref:"foot",staticClass:"foot"},[e("transition",{attrs:{name:"lefttop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"left-top",on:{click:t.backdetail}},[e("span",[e("i",{staticClass:"iconfont icon-xiangxiajiantou"})]),e("span",[e("i",{staticClass:"iconfont icon-aixin1"})]),e("span",[e("i",{staticClass:"iconfont icon-shoucang"})]),e("span",[e("i",{staticClass:"iconfont icon-xiazai"})]),e("span",[e("i",{staticClass:"iconfont icon-fenxiang"})])])]),e("transition",{attrs:{name:"foot"}},[t.isshow?t._e():e("div",{staticClass:"foot-left"},[e("div",{staticClass:"img-mask",on:{click:t.godetail}},[e("img",{attrs:{src:t.songurl}}),e("div",{staticClass:"rel-mask"},[e("span",{staticClass:"iconfont icon-xiangshangjiantou"})])]),e("div",{staticClass:"songer"},[e("span",[t._v(t._s(this.songname))]),e("span",[t._v(t._s(this.songer))])]),e("div",{staticClass:"shoucang-caper"},[e("span",{staticClass:"iconfont icon-aixin1"})])])]),e("MyAudio"),t._m(0)],1)},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"foot-right"},[e("div",{staticClass:"music-quilty"},[e("span",[t._v("标准")])]),e("div",{staticClass:"icon-list"},[e("span",{staticClass:"iconfont icon-yinxiao"}),e("span",{staticClass:"iconfont icon-quxiaojingyin"}),e("span",{staticClass:"iconfont icon-peoples"}),e("span",{staticClass:"iconfont icon-bofangliebiao"})])])}],C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"audio-box"},[e("div",{staticClass:"player"},[e("span",{staticClass:"iconfont icon-zuobofang"}),e("span",{class:"iconfont  icon-"+this.$store.state.music.listen,attrs:{id:"twospan"},on:{click:t.playmusic}}),e("span",{staticClass:"iconfont icon-youbofang"})]),e("audio",{ref:"Audio",attrs:{src:t.urldata,loop:"loop"},on:{timeupdate:t.ontimeupdate,play:t.onplay,pause:t.onpause}}),e("div",{staticClass:"time-content"},[e("span",[t._v(t._s(t._f("currentTimeformat")(this.Curentime)))]),e("div",{staticClass:"range-content"},[e("input",{style:{backgroundSize:this.getsize+"%"},attrs:{type:"range",id:"cowbell",name:"cowbell",min:"0",max:this.Duration},domProps:{value:this.Curentime},on:{input:function(e){return t.changevalue(e)}}})]),e("span",[t._v(t._s(t._f("durationTimeformat")(this.Duration)))])])])},w=[],y=s(3822),b={name:"MyAudio",data(){return{Duration:this.$store.state.music.Clickduration,Curentime:this.$store.state.music.Currenttime}},computed:{...(0,y.Se)(["urldata","newLyric"]),getsize(){return this.Curentime&&this.Duration?this.Curentime/this.Duration*parseFloat(100):0}},mounted(){this.$store.commit("LOCATIONAUDIO",this.$refs.Audio)},methods:{playmusic(){"bofang1"==this.$store.state.music.listen?(this.$refs.Audio.play(),this.$store.state.music.mask.style.animationPlayState="running"):(this.$refs.Audio.pause(),this.$store.state.music.mask.style.animationPlayState="paused")},ontimeupdate(){this.Curentime=this.$refs.Audio.currentTime},rote(){},onplay(){this.$store.commit("LOCTIONTINE"),this.$store.state.music.listen="bofangzanting",this.Duration=this.$store.state.music.Clickduration,this.$store.state.music.showdeg="35deg"},onpause(){this.$store.state.music.listen="bofang1",clearInterval(this.timer),this.$store.state.music.showdeg="0deg"},changevalue(t){this.$refs.Audio.currentTime=t.target.value;let e=this.$store.state.music.LyRic;for(let s of this.newLyric)parseInt(s.time)<=parseInt(t.target.value)&&(this.$store.state.music.lyricIndex=s.index,e.scrollTo({top:50*(s.index-3),behavior:"smooth"}))}},watch:{Curentime(){this.$nextTick((()=>{let t=this.$store.state.music.LyRic;for(let e of this.newLyric)parseInt(e.time)===parseInt(this.Curentime)&&(this.$store.state.music.lyricIndex=e.index,e.index>3&&t.scrollTo({top:50*(e.index-3),behavior:"smooth"}))}))}},filters:{currentTimeformat:function(t){if(!t)return"00:00";let e=Math.floor(t),s=Math.floor(e/60).toString().padStart(2,"0"),i=(e%60).toString().padStart(2,"0");return`${s}:${i}`},durationTimeformat:function(t){if(!t)return"00:00";let e=Math.floor(t),s=Math.floor(e/60).toString().padStart(2,"0"),i=(e%60).toString().padStart(2,"0");return`${s}:${i}`}}},k=b,x=(0,p.Z)(k,C,w,!1,null,"eda25cbe",null),A=x.exports,O={name:"MyFoot",components:{MyAudio:A},data(){return{localurl:s(7097)}},mounted(){},computed:{...(0,y.rn)({Songlist(t){return t.music.SongList}}),songname(){return"{}"!=JSON.stringify(this.Songlist)?this.Songlist.name:"忘记时间"},songer(){return"{}"!=JSON.stringify(this.Songlist)?this.Songlist.ar[0].name:"胡歌"},songurl(){return"{}"!=JSON.stringify(this.Songlist)?this.Songlist.al.picUrl:this.localurl},isshow(){if("/detail"==this.$route.path)return!0},songsId(){if(this.Songlist.al)return this.Songlist.id||0}},methods:{godetail(){this.$router.push({path:"/detail"})},isactive(){if("/detail"==this.$route.path)return!0},backdetail(){this.$store.state.music.isshow=!1,this.$router.go(-1)}}},_=O,S=(0,p.Z)(_,g,v,!1,null,"6a4ba4e4",null),L=S.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main",style:t.changeover},[e("router-view")],1)},I=[],j={name:"MyMain",data(){return{beforestyleobj:{overflow:"hidden"},afterstyleobj:{overflow:"auto"}}},computed:{changeover(){return"/detail"==this.$route.path?this.beforestyleobj:this.afterstyleobj}},methods:{remove(){this.$store.state.home.personalshow=!1}}},G=j,N=(0,p.Z)(G,E,I,!1,null,"c846e27a",null),T=N.exports,z={name:"App",components:{MyHead:c.Z,MyAside:m,MyFoot:L,MyMain:T}},R=z,P=(0,p.Z)(R,o,r,!1,null,"7c99ac5b",null),M=P.exports,q=s(2631),U=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>s.e(72).then(s.bind(s,4072))},{path:"/search",name:"search",component:()=>s.e(62).then(s.bind(s,8062))},{path:"/detail",name:"detail",component:()=>s.e(518).then(s.bind(s,2518))}];n["default"].use(q.ZP);let D=q.ZP.prototype.push,F=q.ZP.prototype.replace;q.ZP.prototype.push=function(t,e,s){e&&s?D.call(this,t,e,s):D.call(this,t,(()=>{}),(()=>{}))},q.ZP.prototype.replace=function(t,e,s){e&&s?F.call(this,t,e,s):F.call(this,t,(()=>{}),(()=>{}))};let H=new q.ZP({routes:U});var V=H,J=(s(1703),s(6265)),Z=s.n(J);const B=t=>{localStorage.setItem("TOKEN",t)},K=()=>localStorage.getItem("TOKEN"),X=t=>{localStorage.setItem("ACCOUNT",t)},W=()=>localStorage.getItem("ACCOUNT"),$=t=>{localStorage.setItem("BINDING",t)},Y=()=>localStorage.getItem("BINDING"),Q=t=>{localStorage.setItem("PROFILE",t)},tt=()=>localStorage.getItem("PROFILE"),et=Z().create({baseURL:"",timeout:5e3});et.interceptors.request.use((t=>(St.state.user.token&&B(St.state.user.token),t))),et.interceptors.response.use((t=>t.data),(()=>{alert("服务器响应数据失败")}));var st=et;const it=(t,e,s,i)=>st({url:"/cloudsearch",method:"post",params:{keywords:t,limit:e,offset:s,type:i},withCredentials:!0}),at=t=>st({url:"/song/url",method:"get",params:{id:t},withCredentials:!0}),nt=t=>st({url:"/lyric",method:"get",params:{id:t},withCredentials:!0}),ot=()=>st({url:"/banner",method:"get",withCredentials:!0}),rt=()=>st({url:"/homepage/block/page",method:"get",withCredentials:!0}),ct=t=>st({url:"/captcha/sent",method:"post",params:{phone:t,timestamp:(new Date).getTime()},withCredentials:!0}),lt=(t,e)=>st({url:"/captcha/verify",method:"post",params:{phone:t,captcha:e},withCredentials:!0}),ut=()=>st({url:"/logout",method:"post",params:{timestamp:(new Date).getTime()},withCredentials:!0}),ht=(t,e)=>st({url:"/login/cellphone",method:"post",params:{phone:t,captcha:e,timestamp:(new Date).getTime()},withCredentials:!0}),dt={songList:{},SongList:{},musicdata:[],MyAudio:"",Clickduration:322,Currenttime:0,Lyric:{},mask:"",LyRic:"",Swiper:"",UlList:"",ListCon:"",showdeg:"0deg",lyricIndex:0,listen:"bofang1",isshow:!1,musicUrl:"http://m801.music.126.net/20220802210222/405f8cb02f09b7ad29029cf9828d8d5d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096417088/7201/4169/7c75/e4a63c65d9acbf03940d32540d1996e2.mp3"},pt={GETSEARCHMUSIC(t,e){t.songList=e||{}},GETMUSICURL(t,e){e&&(t.musicdata=e,t.musicUrl=e[0].url)},LOCATIONAUDIO(t,e){t.MyAudio=e},LOCTIONTINE(t){t.Clickduration=t.MyAudio.duration,t.Currenttime=t.MyAudio.currentTime},GETMUSICLYRIC(t,e){t.Lyric=e}},ft={async getsearchmusic(t,e){const{keyword:s,limit:i,offset:a,type:n}=e;let o=await it(s,i,a,n);console.log(o),200==o.code&&t.commit("GETSEARCHMUSIC",o.result)},async GetMusicurl(t,e){let s=await at(e);return 200==s.code?(t.commit("GETMUSICURL",s.data),"ok"):Promise.reject(new Error(fail))},async GetMusicLyric(t,e){let s=await nt(e);return 200==s.code?(t.commit("GETMUSICLYRIC",s),"ok"):Promise.reject(new error("fail"))}},mt={songList(t){if("{}"!==JSON.stringify(t.songList))return t.songList},songs(t){if("{}"!==JSON.stringify(t.songList))return t.songList.songs},urldata(t){return t.musicUrl},newLyric(t){let e=t.Lyric.lrc.lyric.split("\n"),s=new Array,i=0;return e.length?(e.forEach((t=>{let e=t.substring(t.indexOf("[")+1,t.indexOf("]"));s.push({time:(60*e.split(":")[0]+parseFloat(e.split(":")[1])).toFixed(3),words:t.substring(t.indexOf("]")+1,t.length),index:i}),i++})),s):[]}};var gt={state:dt,mutations:pt,actions:ft,getters:mt};const vt={banners:[],blockdata:{},loginshow:!1,personalshow:!1},Ct={GETBANNER(t,e){e?t.banners=e:t.banner=[]},GETHOMEINFO(t,e){t.blockdata=e}},wt={async getbanner(t){let e=await ot();return 200==e.code?(t.commit("GETBANNER",e.banners),"ok"):Promise.reject(new Error("fail"))},async gethomeinfo(t){let e=await rt();return 200==e.code?(t.commit("GETHOMEINFO",e.data),"ok"):Promise.reject(new Error("fail"))}},yt={Creatives(t){if(t.blockdata.blocks)return t.blockdata.blocks[1].creatives||[]},Hotplaylist(t){if(t.blockdata.blocks)return t.blockdata.blocks[2].creatives||[]}};var bt={state:vt,mutations:Ct,actions:wt,getters:yt};const kt={token:K(),account:JSON.parse(W()),bindings:JSON.parse(Y()),profile:JSON.parse(tt()),userinfo:""},xt={async GetCode(t,e){let s=await ct(e);if(200==s.code)return alert("发送成功"),"ok"},async valiCode(t,e){const{phone:s,code:i}=e;let a=await lt(s,i);return 200==a.code?(alert("验证成功"),t.dispatch("Logining",{phone:s,code:i}),"ok"):Promise.reject(new Error("fail"))},async Logining(t,e){const{phone:s,code:i}=e;let a=await ht(s,i);200==a.code&&(St.state.home.loginshow=!1,t.commit("LOGINING",a),alert("登录成功"))},async OutLogin(t){let e=await ut();200==e.code&&(localStorage.clear(),t.commit("OUTLOGIN"),St.state.home.personalshow=!1,alert("退出登录成功"))}},At={LOGINING(t,e){t.token=e.token,t.userinfo=e,t.account=e.account,t.bindings=e.bindings,t.profile=e.profile,B(e.token),X(JSON.stringify(e.account)),$(JSON.stringify(e.bindings)),Q(JSON.stringify(e.profile))},OUTLOGIN(t){t.profile=""}},Ot={};var _t={state:kt,mutations:At,actions:xt,getters:Ot};n["default"].use(y.ZP);var St=new y.ZP.Store({modules:{music:gt,home:bt,user:_t}}),Lt=function(){var t=this,e=t._self._c;return t.$store.state.home.loginshow?e("div",{attrs:{id:"login"}},[e("div",{staticClass:"close"},[e("span",{staticClass:"iconfont icon-guanbi_o",on:{click:t.closelogin}})]),t._m(0),e("div",{staticClass:"from-container"},[e("form",[e("span",{staticClass:"iconfont icon-mobile"}),t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^1\d{10}$/},expression:"{required:true,regex:/^1\\d{10}$/ }"}],staticClass:"phone",class:{invalid:t.errors.has("phone")},attrs:{autocomplete:"off",type:"text",placeholder:"请输入手机号",name:"phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),e("span",{staticClass:"error-msg1"},[t._v(t._s(t.errors.first("phone")))]),e("br"),t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/\d{4}$/},expression:"{required:true,regex:/\\d{4}$/ }"}],staticClass:"yanzheng",class:{invalid:t.errors.has("code")},attrs:{autocomplete:"off",type:"text",name:"code",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),e("span",{staticClass:"error-msg2"},[t._v(t._s(t.errors.first("code")))]),e("span",{staticClass:"text-area"},[t._v("|")]),t.codeshow?e("span",{staticClass:"getcode",on:{click:function(e){return t.getcode(t.phone)}}},[t._v("获取验证码")]):t._e(),t.codeshow?t._e():e("span",{staticClass:"getcode"},[t._v("重新发送"+t._s(t.count)+"秒")]),t._m(3)])]),e("div",{staticClass:"Login"},[e("span",{on:{click:t.clickLogin}},[t._v("登录")]),e("span",[t._v("注册")])]),t._m(4),e("span",{staticClass:"error-msg3"},[t._v(t._s(t.errors.first("agree")))]),e("div",{staticClass:"last-area"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.agree,expression:"agree"},{name:"validate",rawName:"v-validate",value:{required:!0,tongyi:!0},expression:"{required:true,tongyi:true}"}],class:{invalid:t.errors.has("agree")},attrs:{type:"checkbox",name:"agree"},domProps:{checked:Array.isArray(t.agree)?t._i(t.agree,null)>-1:t.agree},on:{change:function(e){var s=t.agree,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=null,o=t._i(s,n);i.checked?o<0&&(t.agree=s.concat([n])):o>-1&&(t.agree=s.slice(0,o).concat(s.slice(o+1)))}else t.agree=a}}}),e("br"),e("span",{staticClass:"first"},[t._v("同意")]),e("span",[t._v("《服务条款》")]),e("span",[t._v("《隐私政策》")]),e("span",[t._v("《儿童隐私政策》")])])]):t._e()},Et=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"img"},[e("img",{attrs:{src:s(5023)}})])},function(){var t=this,e=t._self._c;return e("select",{staticClass:"nation",attrs:{name:"nation"}},[e("option",{attrs:{value:"china"}},[t._v("+86")]),e("option",{attrs:{value:"english"}},[t._v("+89")]),e("option",{attrs:{value:"hongkong"}},[t._v("+97")])])},function(){var t=this,e=t._self._c;return e("span",[e("i",{staticClass:"iconfont icon-yanzhengma"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"check-box"},[e("input",{attrs:{type:"checkbox"}}),e("span",[t._v("自动登录")]),e("span",[t._v("密码登录")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"others"},[e("span",{staticClass:"iconfont icon-weixin"}),e("span",{staticClass:"iconfont icon-QQ"}),e("span",{staticClass:"iconfont icon-89"}),e("span",{staticClass:"iconfont icon-wangyiyunyinle"})])}],It={name:"MyLogin",data(){return{phone:"",code:"",agree:!1,count:"60",codeshow:!0,timer:""}},methods:{closelogin(){this.$store.state.home.loginshow=!1},async clickLogin(){const t=await this.$validator.validateAll();if(t){const{phone:t,code:e}=this;this.$store.dispatch("valiCode",{phone:t,code:e})}},getcode(){this.codeshow=!1,this.timer=setInterval((()=>{this.count--}),1e3),alert("已经成功点击");const{phone:t}=this;console.log(t),this.$store.dispatch("GetCode",t)}},watch:{count(t){0==t&&(this.codeshow=!0,clearInterval(this.timer))}}},jt=It,Gt=(0,p.Z)(jt,Lt,Et,!1,null,"605c0ee5",null),Nt=Gt.exports,Tt=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.home.personalshow,expression:"$store.state.home.personalshow"}],attrs:{id:"personal"}},[t._m(0),t._m(1),e("ul",{staticClass:"three"},[t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),e("li",{on:{click:t.outLogin}},[e("span",{staticClass:"iconfont icon-tuichudenglu"}),e("span",[t._v("退出登录")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"iconfont icon-xiangyoujiantou"})])])])},zt=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"first"},[e("li",[e("span",[t._v("0")]),e("span",[t._v("动态")])]),e("li",[e("span",[t._v("3")]),e("span",[t._v("关注")])]),e("li",[e("span",[t._v("0")]),e("span",[t._v("粉丝")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"second"},[e("div",{staticClass:"box"},[e("span",[e("i",{staticClass:"iconfont icon-zuijinbofang"})]),e("span",[t._v("签到")])])])},function(){var t=this,e=t._self._c;return e("li",[e("span",{staticClass:"iconfont icon-hehuoren-huiyuanzhongxin"}),e("span",[t._v("会员中心")]),e("span",{staticClass:"iconfont icon-xiangyoujiantou"})])},function(){var t=this,e=t._self._c;return e("li",[e("span",{staticClass:"iconfont icon-dengji"}),e("span",[t._v("等级")]),e("span",{staticClass:"iconfont icon-xiangyoujiantou"})])},function(){var t=this,e=t._self._c;return e("li",[e("span",{staticClass:"iconfont icon-shouye"}),e("span",[t._v("商城")]),e("span",{staticClass:"iconfont icon-xiangyoujiantou"})])},function(){var t=this,e=t._self._c;return e("li",[e("span",{staticClass:"iconfont icon-gerenxinxi"}),e("span",[t._v("个人信息设置")]),e("span",{staticClass:"iconfont icon-xiangyoujiantou"})])},function(){var t=this,e=t._self._c;return e("li",[e("span",{staticClass:"iconfont icon-bangding"}),e("span",[t._v("绑定社交账号")]),e("span",{staticClass:"iconfont icon-xiangyoujiantou"})])},function(){var t=this,e=t._self._c;return e("li",[e("span",{staticClass:"iconfont icon-kefu"}),e("span",[t._v("我的客服")]),e("span",{staticClass:"iconfont icon-xiangyoujiantou"})])}],Rt={name:"PersonalLogin",methods:{outLogin(){this.$store.dispatch("OutLogin")}}},Pt=Rt,Mt=(0,p.Z)(Pt,Tt,zt,!1,null,"2686ad72",null),qt=Mt.exports,Ut=s(5708),Dt=s(8892),Ft=s.n(Dt);n["default"].use(Ut.ZP),Ut.ZP.Validator.localize("zh_CN",{messages:{...Ft().messages,is:()=>"$(field)必须与密码相同"},attributes:{phone:"手机号",code:"验证码",agree:"协议"}}),Ut.ZP.Validator.extend("tongyi",{validate:t=>t,getMessage:t=>t+"必须同意"}),n["default"].component(Nt.name,Nt),n["default"].component(qt.name,qt),n["default"].component(a().name,a()),n["default"].config.productionTip=!1,new n["default"]({render:t=>t(M),router:V,store:St,beforeCreate(){n["default"].prototype.$bus=this}}).$mount("#app")},7097:function(t,e,s){t.exports=s.p+"img/1.cf8a9390.jpg"},5023:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACbCAIAAACcWYKMAAAOxklEQVR4Ae2dBaxcRRfHT3F3h0AJ7u4EHgVCgGAhBIfgDsGd4BK0eCBASJDiBRKguLu7FXd3h36/+S5s9809V/b1zfTt3HOyaffOzp3Z/c//zcyxuYNGjRolJoZALATGidWR9WMIOASMcMaDqAgY4aLCbZ0Z4YwDUREwwkWF2zozwhkHoiJghIsKt3VmhDMOREXACBcVbuvMCGcciIqAES4q3NaZEc44EBUBI1xUuK0zI5xxICoCRriocFtnRjjjQFQEjHBR4bbOjHDGgagIGOGiwm2dGeGMA1ERMMJFhds6M8IZB6IiYISLCrd1ZoQzDkRFwAgXFW7rzAhnHIiKgBEuKtzWmRHOOBAVASNcVLitMyOccSAqAka4qHBbZ0Y440BUBIxwUeG2zoxwxoGoCBjhosJtnRnhjANRETDCRYXbOjPCGQeiImCEiwq3dWaEMw5ERcAIFxVu68wIZxyIioARLirc1pkRzjgQFYHxovaWXmc//yyPPCJPPy1vvimffy4//OB+4nTTyfTTy/zzy9JLy1JLyeSTp/e7+/yLBtnTBPuI3d9/O5IdeaR8+mlFCwcdJEOGGO0ylIxwFWwp/PjSS+WKK+T33wsrtH8weLDstJP09LSXNfO9Ea7zcf/rLzn+eLnrro7v3GYb2WWXju9K6wZTGjofz2HD5N57O79N3Ix46619uTGhe2yGyw0mq+SEE+ZK/yt4/nnZY4//Ljr/f4IJZMQI4d+mis1w/x/5f/6Rb76RoUNltdXcBn///eWDD3RK3HCDXl6z9I8/5Pvva9ZNspqZRUTuuUeGD3cq508//TvGjz8uI0fKSSfJAgv0GvUvvnBGEFUmmkg23FAWWkjY4b32mtx+u/z4o1Jx6qll2mmV8sYUNXhJxa7x0kty9tnyxhv6cK+wgpx8sozX9jd51VVy3nlK5bnnlsMPl3nnHf0R6zJbvVtukc8+G1046aSuwSWXHF3SvHdNXVIhBBTZb79CtkGFTz6R337rRYkXXuh1mV2MP77su28vtlHOLnDbbeXccwWDSCYTTywY5JrNNpBo+/P9F5gG/HfnnXL++fLllxU/la39OL3/INXtF4RjhlNl5pnlyivl/ffdOsv7SSZRazWqsGGEY+AvuMAtdnVk0UV9igwapNw3apSbCCebTPkoK5pjjsKPmvdB77/gtH8/u3jUz2uuqf6VEGu55WT77f2ac87pl3D955+FKq1Su+lFjSEcVo8DDnBediakEmHVW3hhOfRQt7ufaiq/IizMS6aW5sutREOgGUvq11/LbrvJxx9rCLSVrbmm7LqrM1uwLVNl5ZXd0tmynrTqYEbZcsvWlb0pQaABhCOC6Jhjytg27riy7LKCo5NNW7lQk4ij++/3a734onz7rWBjM6lCIPUlFfPHzjvLM88U4oD9AqPGaadVsy1rYrHFlKZYVR980EWOsJ/jvUkxAqnPcBdd5KwSRcKUdsgh0pEWOdtsemMYhPHNswXkRYO4KNjwzTSTXrnBpel6GlAOHn7Y8UkV9FBssCecUDcukl0gbvtrr3WGYqaxmrLKKrLxxjLPPDLllDXvSL5auoTDrkvwGWHfqiyxhJx6qmD9rxS2gEyTRL8RPl6u4apNse0jxHzzzWWzzXp5ydTKDShMl3AoCngUVFlpJRdBWRkjRGQHPLv88jKFQ20/Xwjtll9ett5aFlkk/2GjShIlHPa2ffbRB5IN1sUXC370ckEDOOwwwd7Rj8KESizd+usL/GuqJKqlXn+9PqAzzugU0kq2ffSRs9v1L9v4Qr/+6no/7jg9ckn/xqmVpkg4wtGeekofqC22kFlm0T9qlb7zjrOkFMUstar1+Q3LNIaYr77qcwNdfWOKhGMW8cKKsiHCT7DRRtWjxQykRoVU3ykyxRR1asnrrzv1WY3QrHV/F1dKjnCMJa+8EJG7444VmydstrCN0N8SIcqSafLCC12qc15YsgkJPvNM5+kqiexF22UaxmOLXtIwSY5wqAuq4JLHHlYuTz5ZlvyHL/+UU+Syy9zGH2Wzp0dp7K233OyIo2z33V2476ablplCnnvOaTYEHjdJkiOcutMnTHzPPauHFTKpw4+VeJ115JJLhEW5Jbz3wjOzj9oTAaEdIewlu0acsBiTmyRpEY6dONNGXhZfvHp6I9X01Vfzt7pVeI015MADfT8VPi5V2yXersVaiI7vFR5zwogavEl/ZPAXZYgp36bri9Ii3AMP6AOy6qp6easUitx2W+uq1xuWziOOUKzEbNGmmaZXzeyCwDvvtBEimrAzF2Uz/PKLnHhi3SMjlP66rCgtwuE8VYWDjMoF/5Xq48cTj3ugPXGr1Q4xc+0rbKucN2+/3X7l3qO9knSIh0MVtJyiradav5sLEyIcU0VRiGVRkktr5LiXHK28sP0vUTXWXjt/hytBA80L6+/BB+eLXQnRADg/miEJEQ4Tg2plwE9f6TZ99llluJnDtttOKW8VkeKgZjkQG6cKqzD7OWbNvDApqjTN1+zykoQIxyzFKy9FC197TdV0RwQvRwuWi7ozQwl49139Psx4q6+ufIRl7qab+hKNorQ1oIsSIhxmWzXadtZZq0eAAPG8EMRWOTVi3lMFI1yRFHk7cKnVj7QranzAlzeAcJUbOAaJw2zyUmTIaK+54ILtV6Pfk6Ovsp8a880nBGbmBa1FnaHzNbu5JCHCYdpoGcDah6TOEbtqGjMOWbXB9saLrHFEN5VEaxKPmRdiSV55JV+cWElChBuTkcEHmhdCfOuscXArL5iLS4LeZphBT/FSrdb5xru5JCHCsQKqi2B2snj5IKmBuN99J++9V36fO6BEXTqJFVAdX1lzmEjyWQ7MiOVxAxVfpTs+TohwmGfVSaVO5Nnss+vWCnwA5ZPcE0/o41xuaiY3UTWOEPiZuiREODRKBjIvqsnDq8YeTk3pw0lVcuQl8x8nxqmy4opq8b+FWPhU/ZcDD1OXhAgH21TC1TGossYts4w+1uec4xJO84JXg5PwVYcYyyUpMyVStPqX3JLKRwklQpOioqb9PfSQUzbV1bZ9FEkgvfFGfQEl3JKwANxcWFhoh0MtsXoQPFdkxSAjsFzYrqk6rPoHU95Ut32aEOHYp+Mjz7tTMTdQyC6tXLAPb7KJXH21QgXIQeSSGryUb5OtZGVwCi44vlVeKh0b+Vu6rSShJRWtsGjnxFm+dWSrrcqCJeu0QJ3TT68+OwILnzo7Fp0jUbPrbqiWEOGAu2hqqRn8w96LXFQ1yq3mWHKQOccrVQrpM9hcPGFjp4YCeNW6/DItws01l750csAWEW91hNhgUvb7JrCNwOA68uGHesoWgS2pS1qEY7R4skde2DOpx93na1JCAAhpVx0dqYSyQirr3nur7SmFd9+tFNKIEU7BZYAXFVk3SFnwIr9LfggKKZrpeuspp656d2G/hSUcVM0h+TV1TJwTd9zhNeMu0VoqVWnlti4rSkhLzZDnYDamirwOyLbpuus6mIRQeAnQ3WEHwapCrBH5f54QTbnuusIprYMHl3mxvLu45ME3quCcqElZ9fYuKUzxMBtG9OijlYgjjPsk7alu08rRwvaGbSXbCEJojCyqv7+yHZRT8rHz5mI0BpJei5IeKpvtngopEg702VGpoT7MfzwSRHUrxRkz0rd4DFdemC9LYjbz9bu2JDmlIRsJFjtVOKIG7aEyyk29d8wLH31UZxtbtzp52mP+BQZAC4kSjnwqNdCXyF5O8lLnmNCDwREQPHpLFey96hMg1MpdXpgo4Vg0eZIamy1V8Mfnj75Xa/ZXIY92QAXJb91on90bR5Dkw+P6q+sB1k6ihANllL6ivFGG/9hj5b77Io0FGTrE1RW517CqbLBBpG8yALpJVGnIkCUWlwdUFj2kAS87T9PieSDMMUGFp9sUsY1+UWLUZz8E/Upjr/F0ZzgwhVJ77VV4MD505CAZDoRrf4Zu/44E+dWkUhexjTBMjsJsEttAN+kZLmMPiQKc6KZGZ2QVMEkcdZR7Ek0/mktIpLj5Zkdo9TCArN+11nL9NkwaQDhGFBMXZtUSwTBBlAcHSZecJFJyu/cRUenEcpJ/r6a7ZpVRS2Fb/oGFXlPJXTaDcAwbp3GdcYbi8mofUda4nh53JhLHuXX6pDZybUhxIBIYqqnaaHtHzKaoEZ120d5C175vDOGI2iVMnOfcVwqBnNhTCAJAeYR5lQ51jl0aMUKGD3ePqilZQFv94lsbOrQJbtPWL25/0xjCZT/65ZddiCUPzqopBIPwrHoSuqAg7ny0EASPKgoH9MrOHqyT95p1B3eHDHF6DLvGpkrDCJcNM0c5k+Me2cEFZTnGBvWl2dJIwqGxcoTbWWfpYbchCIGfjZkVjaQkHT9EvwOvzUYSLhuGkSNl2DC3sasZfd63wSNDguc6kIPYjzaXvn2TgXFXgwnHAGC2wHiBT/2xx4IMB05SkqWLXLpBuhzojTabcNnooFpiyMC1SuRmv5zuQVYEygEpZGOSADbQmdPH72eEawMONYLDaTDbEjZHkHr5GW9t97nlkmkMuxohuyQ3qM9vaK/f4PdGOG3wiV3D5MHTpEll4Cwcpj1KeGVmNrjFixBzjnlDDyAsBTMHL9wGlUY7rbdGlRnhGjXcY//HJh0tMvbhtW/gI2CE8xGx66AIGOGCwmuN+wgY4XxE7DooAka4oPBa4z4CRjgfEbsOioARLii81riPgBHOR8SugyJghAsKrzXuI2CE8xGx66AIGOGCwmuN+wgY4XxE7DooAka4oPBa4z4CRjgfEbsOioARLii81riPgBHOR8SugyJghAsKrzXuI2CE8xGx66AIGOGCwmuN+wgY4XxE7DooAka4oPBa4z4CRjgfEbsOioARLii81riPgBHOR8SugyJghAsKrzXuI2CE8xGx66AIGOGCwmuN+wgY4XxE7DooAka4oPBa4z4CRjgfEbsOioARLii81riPgBHOR8SugyJghAsKrzXuI2CE8xGx66AIGOGCwmuN+wgY4XxE7DooAka4oPBa4z4CRjgfEbsOioARLii81riPwP8AxJfEfNvY4SsAAAAASUVORK5CYII="}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,n){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],n=t[u][2];for(var r=!0,c=0;c<i.length;c++)(!1&n||o>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(r=!1,n<o&&(o=n));if(r){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,a,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,i){return s.f[i](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{62:"6dd655d3",72:"29d58414",518:"ae40e3bf"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{62:"d89c278f",72:"f812bc28",518:"e7ce2098"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="selfwangyiyun:";s.l=function(i,a,n,o){if(t[i])t[i].push(a);else{var r,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var h=l[u];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==e+n){r=h;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+n),r.src=i),t[i]=[a];var d=function(e,s){r.onerror=r.onload=null,clearTimeout(p);var a=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(s)})),e)return e(s)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=d.bind(null,r.onerror),r.onload=d.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p=""}(),function(){var t=function(t,e,s,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=function(n){if(a.onerror=a.onload=null,"load"===n.type)s();else{var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=n,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var a=s[i],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===t||n===e))return a}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){a=o[i],n=a.getAttribute("data-href");if(n===t||n===e)return a}},i=function(i){return new Promise((function(a,n){var o=s.miniCssF(i),r=s.p+o;if(e(o,r))return a();t(i,r,a,n)}))},a={826:0};s.f.miniCss=function(t,e){var s={62:1,72:1,518:1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=i(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={826:0};s.f.j=function(e,i){var a=s.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var n=new Promise((function(s,i){a=t[e]=[s,i]}));i.push(a[2]=n);var o=s.p+s.u(e),r=new Error,c=function(i){if(s.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",r.name="ChunkLoadError",r.type=n,r.request=o,a[1](r)}};s.l(o,c,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,o=i[0],r=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(c)var u=c(s)}for(e&&e(i);l<o.length;l++)n=o[l],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},i=self["webpackChunkselfwangyiyun"]=self["webpackChunkselfwangyiyun"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(7006)}));i=s.O(i)})();