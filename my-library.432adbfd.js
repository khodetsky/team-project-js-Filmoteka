var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var a=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequired7c6=a);const l=document.querySelector("body"),s=document.querySelector(".theme__btn--light"),r=document.querySelector(".theme__btn--dark"),c=document.querySelector("footer"),n=document.querySelector(".modal"),d=document.querySelector(".footer-modal"),i=document.querySelector(".footer-modal__text");s.addEventListener("click",(function(){r.style.display="block",s.style.display="none",l.classList.remove("dark"),c.classList.remove("dark"),d.style.backgroundColor="white",i.style.color="#545454",n.classList.remove("dark"),u=localStorage.setItem("currentTheme","light")})),r.addEventListener("click",g);let u="";function g(){s.style.display="block",r.style.display="none",l.classList.add("dark"),c.classList.add("dark"),d.style.backgroundColor="#333",i.style.color="white",n.classList.add("dark"),u=localStorage.setItem("currentTheme","dark")}"dark"===localStorage.getItem("currentTheme")&&g(),a("fPdqq"),a("8y7EH"),a("eS71k"),a("epHO8");var m=a("lHYXG"),y=a("bMgEY"),p=a("3cIwM"),f=a("gJGFz");const S=document.querySelector("#queue"),v=document.querySelector("#watched"),_=document.querySelector(".header__buttons"),h=document.querySelector(".gallery"),L=document.querySelector("#pagination"),b=document.querySelector("#page-numbers"),q=document.querySelector(".modal__data--content"),k={watched:"watchedAll",queue:"queueAll"},w="watched",O="queue";function E(e,t){const o=JSON.parse(localStorage.getItem(k[e]));if(o&&o.total_results){const a={page:t,total_pages:o.total_pages,total_results:o.total_results,results:o.results.slice(20*(t-1),20*t),rules:e};localStorage.setItem("localMovies",JSON.stringify(a)),(0,m.drawGallery)(h,a.results),(0,y.drawPagination)(b,t,a.total_pages),L.addEventListener("click",N),h.addEventListener("click",I)}else L.classList.add("is-hidden"),h.innerHTML='<h1>Your Library is <span style="color: #FF001B;">empty</span>. Please <span style="color: #FF001B;">add</span> a movie from the home page</h1>',b.innerHTML="";window.scrollTo(0,0),_.addEventListener("click",M)}function M(e){_.removeEventListener("click",M),"watched"===e.target.id?(v.classList.add("btn--is-active"),S.classList.remove("btn--is-active"),E(w,1)):(v.classList.remove("btn--is-active"),S.classList.add("btn--is-active"),E(O,1))}function I(e){if(e.target.closest(".card")){const t=e.target.closest(".card");console.log(`%c${t.dataset.movie}`,"color: yellow; background-color: red; display: inline-block; padding: 5px; font-weight: bold;");const o=JSON.parse(localStorage.getItem("localMovies")).results[t.dataset.movie];q.insertAdjacentHTML("afterbegin",(0,f.addModalMcp)(o));const a=document.querySelector("#addToWatched"),l=document.querySelector("#addToQueue");J("watched",o,o.id,a),J("queue",o,o.id,l),a.addEventListener("click",(()=>{T("watched",o,o.id,a)})),l.addEventListener("click",(()=>{T("queue",o,o.id,l)}))}}function N(e){if(!e.target.closest("[data-page]"))return;b.removeEventListener("click",N);const t=e.target.closest("[data-page]").dataset.page,o=JSON.parse(localStorage.getItem("localMovies")),a=o.page,l=o.total_pages,s=(0,p.calcNewPgNum)(a,t,l);E(o.rules,s)}function T(e,t,o,a){if(console.log("addMovieToStorage started... storageKey: ",e,"movie: ",t),console.log("STORAGE_KEYS[storageKey]: ",k[e]),x(e,t.id)){let t=JSON.parse(localStorage.getItem(k[e])),l=t.results.find((e=>e.id===o)),s=t.results.indexOf(l);t.results.splice(s,1),t.total_results-=1,t.total_pages=Math.ceil(t.total_results/20),localStorage.setItem(k[e],JSON.stringify(t)),a.classList.remove("btn__standart--orange"),a.textContent=`add to ${e}`,localStorage.setItem("localMovies",JSON.stringify(t)),(0,m.drawGallery)(h,t.results)}else{let o=JSON.parse(localStorage.getItem(k[e]));o||(o={results:[],total_results:0,total_pages:0}),o.results.push(t),o.total_results+=1,o.total_pages=Math.ceil(o.total_results/20),localStorage.setItem(k[e],JSON.stringify(o)),a.classList.add("btn__standart--orange"),a.textContent=`delete from ${e}`}}function x(e,t){const o=JSON.parse(localStorage.getItem(k[e]));return!!o&&!!o.results.find((e=>e.id===t))}function J(e,t,o,a){x(e,t.id)&&(a.classList.add("btn__standart--orange"),a.textContent=`delete from ${e}`)}E(w,1);
//# sourceMappingURL=my-library.432adbfd.js.map
