(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7807e810"],{2423:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return r}));var a=n("b775");function l(e){return Object(a["a"])({url:"/vue-element-admin/article/list",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/vue-element-admin/article/detail",method:"get",params:{id:e}})}function o(e){return Object(a["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:e}})}function u(e){return Object(a["a"])({url:"/vue-element-admin/article/create",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/vue-element-admin/article/update",method:"post",data:e})}},"5fb3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",[n("FilenameOption",{model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),n("AutoWidthOption",{model:{value:e.autoWidth,callback:function(t){e.autoWidth=t},expression:"autoWidth"}}),n("BookTypeOption",{model:{value:e.bookType,callback:function(t){e.bookType=t},expression:"bookType"}}),n("el-button",{staticStyle:{margin:"0 0 20px 20px"},attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-document"},on:{click:e.handleDownload}},[e._v(" Export Excel ")]),n("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html",target:"_blank"}},[n("el-tag",{attrs:{type:"info"}},[e._v("Documentation")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index)+" ")]}}])}),n("el-table-column",{attrs:{label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.title)+" ")]}}])}),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",[e._v(e._s(t.row.author))])]}}])}),n("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.pageviews)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"Date",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),n("span",[e._v(e._s(e._f("parseTime")(t.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)},l=[],i=(n("2eeb"),n("e18c"),n("2423")),o=n("ed08"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[e._v("Filename: ")]),n("el-input",{staticStyle:{width:"345px"},attrs:{placeholder:"Please enter the file name (default excel-list)","prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}})],1)},r=[],c={props:{value:{type:String,default:""}},computed:{filename:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},s=c,d=n("9ca4"),p=Object(d["a"])(s,u,r,!1,null,null,null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[e._v("Cell Auto-Width: ")]),n("el-radio-group",{model:{value:e.autoWidth,callback:function(t){e.autoWidth=t},expression:"autoWidth"}},[n("el-radio",{attrs:{label:!0,border:""}},[e._v(" True ")]),n("el-radio",{attrs:{label:!1,border:""}},[e._v(" False ")])],1)],1)},b=[],h={props:{value:{type:Boolean,default:!0}},computed:{autoWidth:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},v=h,g=Object(d["a"])(v,m,b,!1,null,null,null),y=g.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[e._v("Book Type: ")]),n("el-select",{staticStyle:{width:"120px"},model:{value:e.bookType,callback:function(t){e.bookType=t},expression:"bookType"}},e._l(e.options,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)},_=[],x={props:{value:{type:String,default:"xlsx"}},data:function(){return{options:["xlsx","csv","txt"]}},computed:{bookType:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},w=x,O=Object(d["a"])(w,k,_,!1,null,null,null),T=O.exports,S={name:"ExportExcel",components:{FilenameOption:f,AutoWidthOption:y,BookTypeOption:T},data:function(){return{list:null,listLoading:!0,downloadLoading:!1,filename:"",autoWidth:!0,bookType:"xlsx"}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(i["c"])().then((function(t){e.list=t.data.items,e.listLoading=!1}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-87d7ce5a"),n.e("chunk-45f5f85e"),n.e("chunk-b5ac8d4e"),n.e("chunk-dd3c5612")]).then(n.bind(null,"4bf8d")).then((function(t){var n=["Id","Title","Author","Readings","Date"],a=["id","title","author","pageviews","display_time"],l=e.list,i=e.formatJson(a,l);t.export_json_to_excel({header:n,data:i,filename:e.filename,autoWidth:e.autoWidth,bookType:e.bookType}),e.downloadLoading=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(o["e"])(t[e]):t[e]}))}))}}},j=S,W=(n("c1d9"),Object(d["a"])(j,a,l,!1,null,null,null));t["default"]=W.exports},baba:function(e,t,n){},c1d9:function(e,t,n){"use strict";var a=n("baba"),l=n.n(a);l.a}}]);
//# sourceMappingURL=chunk-7807e810.d1df9a99.js.map