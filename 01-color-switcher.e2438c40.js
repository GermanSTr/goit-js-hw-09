!function(){var t,n=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=!1;n.addEventListener("click",(function(){if(r)return;t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));n.parentNode.style.backgroundColor=t,r=!0}),1e3)})),e.addEventListener("click",(function(){clearInterval(t),r=!1}))}();
//# sourceMappingURL=01-color-switcher.e2438c40.js.map
