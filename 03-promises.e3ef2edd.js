!function(){var e=document.querySelector(".form"),n=e.querySelector('input[name="delay"]'),t=e.querySelector('input[name="step"]'),o=e.querySelector('input[name="amount"]');function a(e,n){return new Promise((function(t,o){var a=Math.random()>.3,i={position:e,delay:n};setTimeout((function(){a?t(i):o(i)}),n)}))}e.lastElementChild.addEventListener("submit",(function(){for(var e=parseInt(n.value),i=parseInt(t.value),c=parseInt(o.value),r=0;r<c;r++){a(r,e+r*i).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.e3ef2edd.js.map
