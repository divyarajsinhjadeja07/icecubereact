(this.webpackJsonpicecubereact=this.webpackJsonpicecubereact||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r);a(13),a(14);function c(e){return l.a.createElement("nav",{className:`navbar navbar-expand-lg navbar-${e.mode} bg-${e.mode}`},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"bg-primary rounded mx-2",onClick:()=>{e.toggleMode("primary")},style:{height:"30px",width:"30px",cursor:"pointer"}}),l.a.createElement("div",{className:"bg-danger rounded mx-2",onClick:()=>{e.toggleMode("danger")},style:{height:"30px",width:"30px",cursor:"pointer"}}),l.a.createElement("div",{className:"bg-success rounded mx-2",onClick:()=>{e.toggleMode("success")},style:{height:"30px",width:"30px",cursor:"pointer"}}),l.a.createElement("div",{className:"bg-warning rounded mx-2",onClick:()=>{e.toggleMode("warning")},style:{height:"30px",width:"30px",cursor:"pointer"}}),l.a.createElement("div",{className:"bg-light rounded mx-2",onClick:()=>{e.toggleMode("light")},style:{height:"30px",width:"30px",cursor:"pointer"}}),l.a.createElement("div",{className:"bg-dark rounded mx-2",onClick:()=>{e.toggleMode("dark")},style:{height:"30px",width:"30px",cursor:"pointer"}})))))}function s(e){const[t,a]=Object(n.useState)("");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:t,onChange:e=>{a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),l.a.createElement("button",{disabled:0===t.length,className:"btn btn-primary mx-2 my-1",onClick:()=>{let n=t.toUpperCase();a(n),e.showAlert("Converted to Uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{disabled:0===t.length,className:"btn btn-primary mx-2 my-1",onClick:()=>{let n=t.toLowerCase();a(n),e.showAlert("Converted to Lowercase!","success")}},"Convert to Lowercase"),l.a.createElement("button",{disabled:0===t.length,className:"btn btn-primary mx-2 my-1",onClick:()=>{navigator.clipboard.writeText(t),e.showAlert("Copt to clipboard!","success")}},"Copy to Clipboard"),l.a.createElement("button",{disabled:0===t.length,className:"btn btn-primary mx-2 my-1",onClick:()=>{const e=new Blob([t],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(e),a.download="convertcase-net.txt",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},"Download Text")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,t.split(/\s+/).filter(e=>0!==e.length).length," words and ",t.length," characters"),l.a.createElement("p",null,.008*t.split(" ").filter(e=>0!==e.length).length," Minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,t.length>0?t:"Enter something in the textbox above to preview it...")))}function i(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:`alert alert-${e.alert.type.toLowerCase()} alert-dismissible fade show`,role:"alert"},l.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)),": ",e.alert.msg))}c.defaultProps={aboutText:"About"};var m=function(){const[e,t]=Object(n.useState)("light"),[a,r]=Object(n.useState)(null),o=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,{title:"TextUtils",mode:e,toggleMode:a=>{document.body.classList.remove("bg-dark"),document.body.classList.remove("bg-light"),document.body.classList.remove("bg-primary"),document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-success"),document.body.classList.remove("bg-warning"),document.body.classList.remove("bg-grey"),document.body.classList.add("bg-"+a),"light"===e?(t("dark"),document.body.style.backgroundColor="grey",o("Dark mode has been enabled","Success")):(t("light"),document.body.style.backgroundColor="white",o("Light mode has been enabled","Success"))}}),l.a.createElement(i,{alert:a}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(s,{showAlert:o,heading:"Enter the text to analyze below",mode:e})))};var d=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=t;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null))),d()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.e04ff4d8.chunk.js.map