(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{13:function(e,t,a){e.exports=a(43)},18:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),s=a.n(r),c=(a(18),a(1));function o(e,t){return t&&Object(c.a)(Object(c.a)({},t),{},{interviewer:e.interviewers[t.interviewer]})}var l=a(3),m=a.n(l);function d(e,t){switch(t.type){case"SET_DAY":return Object(c.a)(Object(c.a)({},e),{},{day:t.day});case"SET_APPLICATION_DATA":return Object(c.a)(Object(c.a)({},e),{},{days:t.days,appointments:t.appointments,interviewers:t.interviewers});case"SET_INTERVIEW":{const a=Object(c.a)(Object(c.a)({},e.appointments[t.id]),{},{interview:t.interview&&Object(c.a)({},t.interview)}),n=Object(c.a)(Object(c.a)({},e.appointments),{},{[t.id]:a}),i=e=>e.appointments.length-e.appointments.reduce((e,t)=>n[t].interview?e+1:e,0),r=e.days.map(e=>e.appointments.includes(t.id)?Object(c.a)(Object(c.a)({},e),{},{spots:i(e)}):e);return Object(c.a)(Object(c.a)({},e),{},{appointments:n,days:r})}default:throw new Error("Tried to reduce with unsupported action type: ".concat(t.type))}}function p(){const[e,t]=Object(n.useReducer)(d,{day:"Monday",days:[],appointments:{},interviewers:{}});return Object(n.useEffect)(()=>{Promise.all([m.a.get("/api/days"),m.a.get("/api/appointments"),m.a.get("/api/interviewers")]).then(e=>{let[{data:a},{data:n},{data:i}]=e;return t({type:"SET_APPLICATION_DATA",days:a,appointments:n,interviewers:i})})},[]),function(e){Object(n.useEffect)(()=>{const t=new WebSocket("ws://localhost:8001");return t.onmessage=t=>{const a=JSON.parse(t.data);"object"===typeof a&&"SET_INTERVIEW"===a.type&&e(a)},()=>{t.close()}},[e])}(t),{state:e,setDay:e=>t({type:"SET_DAY",day:e}),bookInterview:function(e,a){return m.a.put("/api/appointments/".concat(e),{interview:a}).then(()=>{t({type:"SET_INTERVIEW",id:e,interview:a})})},cancelInterview:function(e){return m.a.delete("/api/appointments/".concat(e)).then(()=>{t({type:"SET_INTERVIEW",id:e,interview:null})})}}}a(37);var E=a(4),u=a.n(E);a(38);function _(e){const t=u()("day-list__item",{"day-list__item--selected":e.selected,"day-list__item--full":0===e.spots});return i.a.createElement("li",{className:t,onClick:()=>e.setDay(e.name),"data-testid":"day"},i.a.createElement("h2",{className:"text--regular"},e.name),i.a.createElement("h3",{className:"text--light"},0===(a=e.spots)?"no spots remaining":1===a?"1 spot remaining":"".concat(a," spots remaining")));var a}function v(e){const t=e.days.map(t=>i.a.createElement(_,{key:t.id,name:t.name,spots:t.spots,selected:t.name===e.day,setDay:e.setDay}));return i.a.createElement("ul",null,t)}a(39);function g(e){return i.a.createElement("header",{className:"appointment__time"},i.a.createElement("h4",{className:"text--semi-bold"},e.time),i.a.createElement("hr",{className:"appointment__separator"}))}function w(e){return i.a.createElement("main",{className:"appointment__add"},i.a.createElement("img",{className:"appointment__add-button",src:"images/add.png",alt:"Add",onClick:e.onAdd}))}function N(e){return i.a.createElement("main",{className:"appointment__card appointment__card--show"},i.a.createElement("section",{className:"appointment__card-left"},i.a.createElement("h2",{className:"text--regular"},e.student),i.a.createElement("section",{className:"interviewer"},i.a.createElement("h4",{className:"text--light"},"Interviewer"),i.a.createElement("h3",{className:"text--regular"},e.interviewer&&e.interviewer.name))),i.a.createElement("section",{className:"appointment__card-right"},i.a.createElement("section",{className:"appointment__actions"},i.a.createElement("img",{className:"appointment__actions-button",src:"images/edit.png",alt:"Edit",onClick:e.onEdit}),i.a.createElement("img",{className:"appointment__actions-button",src:"images/trash.png",alt:"Delete",onClick:e.onDelete}))))}a(40),a(41);function b(e){const t=u()("interviewers__item",{"interviewers__item--selected":e.selected});return i.a.createElement("li",{className:t,onClick:e.setInterviewer},i.a.createElement("img",{className:"interviewers__item-image",src:e.avatar,alt:e.name}),e.selected&&e.name)}var f=function(e){const t=e.interviewers.map(t=>i.a.createElement(b,{key:t.id,id:t.id,name:t.name,avatar:t.avatar,selected:t.id===e.value,setInterviewer:a=>e.onChange(t.id)}));return i.a.createElement("section",{className:"interviewers"},i.a.createElement("h4",{className:"interviewers__header text--light"},"Interviewer"),i.a.createElement("ul",{className:"interviewers__list"},t))};a(42);function h(e){const t=u()("button",{"button--danger":e.danger,"button--confirm":e.confirm});return i.a.createElement("button",{className:t,onClick:e.onClick,disabled:e.disabled},e.children)}function y(e){const[t,a]=Object(n.useState)(e.name||""),[r,s]=Object(n.useState)(e.interviewer||null),[c,o]=Object(n.useState)("");return i.a.createElement("main",{className:"appointment__card appointment__card--create"},i.a.createElement("section",{className:"appointment__card-left"},i.a.createElement("form",{autoComplete:"off",onSubmit:e=>e.preventDefault()},i.a.createElement("input",{className:"appointment__create-input text--semi-bold",name:"name",type:"text",placeholder:"Enter Student Name",value:t,onChange:e=>{a(e.target.value)},"data-testid":"student-name-input"})),i.a.createElement("section",{className:"appointment__validation"},c),i.a.createElement(f,{interviewers:e.interviewers,value:r,onChange:s})),i.a.createElement("section",{className:"appointment__card-right"},i.a.createElement("section",{className:"appointment__actions"},i.a.createElement(h,{danger:!0,onClick:function(){a(""),s(null),e.onCancel()}},"Cancel"),i.a.createElement(h,{confirm:!0,onClick:function(){""!==t?null!==r?(o(null),e.onSave(t,r)):o("Please select an interviewer"):o("Student name cannot be blank")}},"Save"))))}function C(e){return i.a.createElement("main",{className:"appointment__card appointment__card--status"},i.a.createElement("img",{className:"appointment__status-image",src:"images/status.png",alt:"Loading"}),i.a.createElement("h1",{className:"text--semi-bold"},e.message))}function O(e){return i.a.createElement("main",{className:"appointment__card appointment__card--error"},i.a.createElement("section",{className:"appointment__error-message"},i.a.createElement("h1",{className:"text--semi-bold"},"Error"),i.a.createElement("h3",{className:"text--light"},e.message)),i.a.createElement("img",{className:"appointment__error-close",src:"images/close.png",alt:"Close",onClick:e.onClose}))}function S(e){return i.a.createElement("main",{className:"appointment__card appointment__card--confirm"},i.a.createElement("h1",{className:"text--semi-bold"},e.message),i.a.createElement("section",{className:"appointment__actions"},i.a.createElement(h,{danger:!0,onClick:e.onCancel},"Cancel"),i.a.createElement(h,{danger:!0,onClick:e.onConfirm},"Confirm")))}var T=function(e){const t=e.interview?"SHOW":"EMPTY",{mode:a,transition:r,back:s}=function(e){const[t,a]=Object(n.useState)([e]);return{mode:t[t.length-1],transition:function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a(t?t=>[...t.slice(0,t.length-1),e]:t=>[...t,e])},back:function(){a(e=>e.length>1?[...e.slice(0,e.length-1)]:[...e])}}}(t);function c(t,a){const n={student:t,interviewer:a};r("SAVING"),e.bookInterview(e.id,n).then(()=>r("SHOW")).catch(e=>r("ERROR_SAVE",!0))}return i.a.createElement("article",{className:"appointment","data-testid":"appointment"},i.a.createElement(g,{time:e.time}),"EMPTY"===a&&i.a.createElement(w,{onAdd:()=>r("CREATE")}),"SHOW"===a&&i.a.createElement(N,{student:e.interview.student,interviewer:e.interview.interviewer,onDelete:()=>r("CONFIRM"),onEdit:()=>r("EDIT")}),"CREATE"===a&&i.a.createElement(y,{interviewers:e.interviewers,onCancel:s,onSave:c}),"EDIT"===a&&i.a.createElement(y,{name:e.interview.student,interviewer:e.interview.interviewer.id,interviewers:e.interviewers,onCancel:s,onSave:c}),"SAVING"===a&&i.a.createElement(C,{message:"Saving"}),"DELETING"===a&&i.a.createElement(C,{message:"Deleting"}),"CONFIRM"===a&&i.a.createElement(S,{message:"Are you sure you would like to delete?",onCancel:s,onConfirm:function(){r("DELETING",!0),e.cancelInterview(e.id).then(()=>r("EMPTY")).catch(e=>r("ERROR_DELETE",!0))}}),"ERROR_SAVE"===a&&i.a.createElement(O,{message:"Could not book appointment.",onClose:s}),"ERROR_DELETE"===a&&i.a.createElement(O,{message:"Could not cancel appointment.",onClose:s}))};function I(e){const{state:t,setDay:a,bookInterview:n,cancelInterview:r}=p(),s=function(e,t){const a=e.days.find(e=>t===e.name);return 0===e.days.length||void 0===a?[]:a.interviewers.map(t=>e.interviewers[t])}(t,t.day),c=function(e,t){const a=e.days.find(e=>t===e.name);return 0===e.days.length||void 0===a?[]:a.appointments.map(t=>e.appointments[t])}(t,t.day).map(e=>i.a.createElement(T,Object.assign({key:e.id},e,{interview:o(t,e.interview),interviewers:s,bookInterview:n,cancelInterview:r})));return i.a.createElement("main",{className:"layout"},i.a.createElement("section",{className:"sidebar"},i.a.createElement("img",{className:"sidebar--centered",src:"images/logo.png",alt:"Interview Scheduler"}),i.a.createElement("hr",{className:"sidebar__separator sidebar--centered"}),i.a.createElement("nav",{className:"sidebar__menu"},i.a.createElement(v,{days:t.days,day:t.day,setDay:a})),i.a.createElement("img",{className:"sidebar__lhl sidebar--centered",src:"images/lhl.png",alt:"Lighthouse Labs"})),i.a.createElement("section",{className:"schedule"},c,i.a.createElement(T,{key:"last",time:"5pm"})))}Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_WEBSOCKET_URL:"ws://localhost:8001"}).REACT_APP_API_BASE_URL&&(m.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_WEBSOCKET_URL:"ws://localhost:8001"}).REACT_APP_API_BASE_URL),s.a.render(i.a.createElement(I,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.31364dac.chunk.js.map