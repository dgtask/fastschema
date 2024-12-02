(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{90085:function(e,t,r){Promise.resolve().then(r.bind(r,67045))},62985:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(57977).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},3428:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(57977).Z)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]])},67045:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var s=r(57437),a=r(15370),l=r(2265),n=r(34560);function i(){return(0,l.useEffect)(()=>((0,n.D8)({title:"Upload Media",description:"Upload a new media file.",breadcrumbs:[{name:"Media",path:"/media"},{name:"Upload",path:"/media/upload"}]}),n.D8),[]),(0,s.jsx)(a.Q,{})}},15370:function(e,t,r){"use strict";r.d(t,{Q:function(){return h}});var s=r(57437),a=r(2265),l=r(94509),n=r(62985),i=r(54739),c=r(3428);let d=e=>{let{file:t}=e,[r,l]=(0,a.useState)(),n=(0,s.jsx)(c.Z,{className:"w-[40px] text-slate-500",width:40,height:40});return((0,a.useEffect)(()=>{if(!t||!t.type.startsWith("image/"))return;let e=new FileReader;e.onload=()=>{l(e.result)},e.readAsDataURL(t)},[t]),t&&t.type.startsWith("image/")&&r)?(0,s.jsx)("img",{className:"h-auto rounded-lg",src:r,alt:""}):n};var o=r(5887),x=r(93412),m=r(22169),u=r(57654),f=r(62677),p=r(97081);let h=e=>{let{uploadContainerClass:t,minimal:r,onMediaUploaded:c,onUploadComplete:h}=e,[y,g]=(0,a.useState)({}),[j,b]=(0,a.useState)(""),[N,v]=(0,a.useState)([]),{getRootProps:w,getInputProps:k,isDragActive:R,acceptedFiles:T}=(0,i.uI)();return(0,a.useEffect)(()=>{T.length&&(async()=>{let e=0;for(let s=0;s<T.length;s++)try{var t,r;g(e=>({...e,[s]:"uploading"}));let a=await (0,x.cT)(T[s]);(null==a?void 0:null===(t=a.success)||void 0===t?void 0:t.length)?g(e=>({...e,[s]:"success"})):g(e=>({...e,[s]:"error"})),e++,b("".concat(e,"/").concat(T.length)),null==c||c(null==a?void 0:null===(r=a.success)||void 0===r?void 0:r[0])}catch(e){g(t=>{var r;return{...t,[s]:null!==(r=e.message)&&void 0!==r?r:"Unknown error"}}),v(t=>{var r;return[...t,"".concat(T[s].name,": ").concat(null!==(r=e.message)&&void 0!==r?r:"Unknown error")]})}await (0,p._v)(1e3),null==h||h()})()},[T]),(0,s.jsxs)("div",{className:"space-y-5",children:[r?(0,s.jsxs)("div",{className:"flex flex-row space-x-2 align-middle items-center",children:[(0,s.jsxs)("div",{...w(),children:[(0,s.jsx)("input",{...k(),type:"file",className:"hidden"}),(0,s.jsxs)(u.z,{size:"sm",variant:"outline",children:[(0,s.jsx)(l.Z,{className:"mr-2 h-4 w-4"}),(0,s.jsx)("span",{children:"Upload"})]})]}),j&&(0,s.jsxs)("div",{className:"flex flex-row align-middle items-center gap-1 text-sm",children:[(0,s.jsx)("span",{children:j}),!!N.length&&(0,s.jsx)(f.pn,{children:(0,s.jsxs)(f.u,{children:[(0,s.jsx)(f.aJ,{children:(0,s.jsx)(n.Z,{className:"w-4 h-4 text-red-600 dark:text-red-400"})}),(0,s.jsx)(f._v,{children:N.map(e=>(0,s.jsx)("p",{className:"text-red-600 dark:text-red-400",children:e},e))})]})})]})]}):(0,s.jsxs)("div",{...w(),className:(0,m.cn)("flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",t),children:[(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,s.jsx)(l.Z,{className:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"}),(0,s.jsx)("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:R?"Drop the files here ...":"Drag and drop some files here, or click to select files"}),(0,s.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG, GIF, PDF, DOCX, XLSX..."})]}),(0,s.jsx)("input",{...k(),id:"dropzone-file",type:"file",className:"hidden"})]}),!r&&T.length?(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)(o.iA,{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-600",children:[(0,s.jsx)(o.xD,{className:"bg-gray-50 dark:bg-gray-700",children:(0,s.jsxs)(o.SC,{className:"text-gray-800 dark:text-gray-300",children:[(0,s.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold"}),(0,s.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[10rem]",children:"Name"}),(0,s.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[10rem]",children:"Type"}),(0,s.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[6rem]",children:"Size"}),(0,s.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[6rem]",children:"Status"}),(0,s.jsx)(o.ss,{scope:"col",className:"p-3.5 px-2 text-sm text-start font-semibold min-w-[8rem]",children:"Action"})]})}),(0,s.jsx)(o.RM,{className:"divide-y divide-gray-200 dark:divide-gray-600",children:T.map((e,t)=>{var r;let a=null!==(r=y[t])&&void 0!==r?r:"pending";return(0,s.jsxs)(o.SC,{children:[(0,s.jsx)(o.pj,{className:"p-2 max-w-[50px] flex items-center",children:(0,s.jsx)(d,{file:e})}),(0,s.jsx)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400 font-medium",children:e.name}),(0,s.jsx)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:(0,s.jsx)("p",{children:e.type})}),(0,s.jsxs)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:[e.size," bytes"]}),(0,s.jsx)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:a}),(0,s.jsx)(o.pj,{className:"p-2 text-sm text-gray-700 dark:text-gray-400",children:"success"===a&&(0,s.jsxs)("div",{className:"flex space-x-2 items-center justify-center w-full h-full text-sm",children:[(0,s.jsx)("a",{href:"/link-to-file",className:"hover:underline text-blue-800",target:"_blank",rel:"noreferrer",children:"View"}),(0,s.jsx)("button",{className:"cursor-pointer hover:underline text-red-800",type:"button",children:"Delete"})]})})]},e.name)})})]})}):null]})}},5887:function(e,t,r){"use strict";r.d(t,{RM:function(){return c},SC:function(){return d},iA:function(){return n},pj:function(){return x},ss:function(){return o},xD:function(){return i}});var s=r(57437),a=r(2265),l=r(22169);let n=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",r),...a})})});n.displayName="Table";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",r),...a})});i.displayName="TableHeader";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",r),...a})});c.displayName="TableBody",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...a})}).displayName="TableFooter";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...a})});d.displayName="TableRow";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("th",{ref:t,className:(0,l.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...a})});o.displayName="TableHead";let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("td",{ref:t,className:(0,l.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...a})});x.displayName="TableCell",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,s.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",r),...a})}).displayName="TableCaption"},97081:function(e,t,r){"use strict";r.d(t,{Qs:function(){return a},_v:function(){return s},rV:function(){return l}});let s=e=>new Promise(t=>setTimeout(t,e)),a=e=>{let t=e.toLowerCase().split(" ");for(let e=0;e<t.length;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].substring(1);return t.join(" ")},l=e=>a(e.replace(/[-_]/g," "))},93412:function(e,t,r){"use strict";r.d(t,{c1:function(){return l},cT:function(){return a}});var s=r(84971);let a=async e=>{let t=new FormData;return t.append("file",e),await (0,s.SO)("/file/upload",t,{headers:{"Content-Type":"multipart/form-data"}})},l=async e=>await (0,s.HG)("/file",e)}},function(e){e.O(0,[310,637,789,792,829,532,334,971,69,744],function(){return e(e.s=90085)}),_N_E=e.O()}]);