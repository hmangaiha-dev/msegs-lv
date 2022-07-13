"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[245],{6405:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var l=r(821),a={class:"flex-1 overflow-x-hidden overflow-y-auto bg-gray-200"},d={class:"container mx-auto px-6 py-8"},o={class:"mt-4"},n={class:"flex flex-wrap -mx-6"},s={class:"w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0"},c={class:"flex items-center px-5 py-6 shadow-sm rounded-md bg-white"},i=(0,l.createElementVNode)("div",{class:"p-3 rounded-full bg-pink-600 bg-opacity-75"},[(0,l.createElementVNode)("svg",{class:"h-8 w-8 text-white",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,l.createElementVNode)("path",{d:"M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z",fill:"currentColor",stroke:"currentColor","stroke-width":"2","stroke-linejoin":"round"}),(0,l.createElementVNode)("path",{d:"M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z",stroke:"currentColor","stroke-width":"2"})])],-1),m={class:"mx-5"},x={class:"text-2xl font-semibold text-gray-700"},g=(0,l.createElementVNode)("div",{class:"text-gray-500"},"Files",-1),p={class:"flex items-center px-5 py-6 shadow-sm rounded-md bg-white"},f=(0,l.createTextVNode)("+Add File"),u=(0,l.createElementVNode)("div",{class:"mt-8"},null,-1),b={class:"flex flex-col mt-8"},y={class:"-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"},w={class:"align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"},h={class:"min-w-full"},E=(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",{class:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"}," File"),(0,l.createElementVNode)("th",{class:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"}," Date"),(0,l.createElementVNode)("th",{class:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"}," Status"),(0,l.createElementVNode)("th",{class:"px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"}," Action")])],-1),V={class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200"},N={class:"flex items-center"},v=(0,l.createElementVNode)("div",{class:"flex-shrink-0 h-10 w-10"},[(0,l.createElementVNode)("img",{class:"h-10 w-10 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})],-1),k={class:"ml-4"},C={class:"text-sm leading-5 font-medium text-gray-900"},B={class:"text-sm leading-5 text-gray-500"},D={class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200"},S={class:"text-sm leading-5 text-gray-900"},F=(0,l.createElementVNode)("div",{class:"text-sm leading-5 text-gray-500"},null,-1),A=(0,l.createElementVNode)("td",{class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200"},[(0,l.createElementVNode)("span",{class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},"Active")],-1),H=(0,l.createElementVNode)("td",{class:"px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"},null,-1);const L={data:function(){return{files:[]}},created:function(){var e=this;this.axios.get("/api/files/index").then((function(t){console.log(t.data),e.files=t.data}))}};const M=(0,r(3744).Z)(L,[["render",function(e,t,r,L,M,Z){var j=(0,l.resolveComponent)("router-link");return(0,l.openBlock)(),(0,l.createElementBlock)("main",a,[(0,l.createElementVNode)("div",d,[(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",n,[(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("div",c,[i,(0,l.createElementVNode)("div",m,[(0,l.createElementVNode)("h4",x,(0,l.toDisplayString)(M.files.length),1),g])])]),(0,l.createElementVNode)("span",p,[(0,l.createVNode)(j,{to:{name:"addresources"},class:"text-indigo-600 hover:text-indigo-900 font-bold"},{default:(0,l.withCtx)((function(){return[f]})),_:1})])])]),u,(0,l.createElementVNode)("div",b,[(0,l.createElementVNode)("div",y,[(0,l.createElementVNode)("div",w,[(0,l.createElementVNode)("table",h,[E,((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(M.files,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("tbody",{class:"bg-white",key:e.id},[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("td",V,[(0,l.createElementVNode)("div",N,[v,(0,l.createElementVNode)("div",k,[(0,l.createElementVNode)("div",C,(0,l.toDisplayString)(e.title),1),(0,l.createElementVNode)("div",B,(0,l.toDisplayString)(e.id),1)])])]),(0,l.createElementVNode)("td",D,[(0,l.createElementVNode)("div",S,(0,l.toDisplayString)(e.date),1),F]),A,H])])})),128))])])])])])])}]])}}]);