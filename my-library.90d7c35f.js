function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var a,o;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"7OqUs":"my-library.90d7c35f.js","a98ip":"cat4.20e1c480.png","juDiW":"cat2.81973b2a.png","iRqEz":"cat3.fda6e4d6.png","cHwNN":"cat1.a58230aa.png","6BRmD":"cat5.cc26cab5.png","gZivX":"cat6.5344dc8f.png","f9K2v":"cat7.c263b402.png"}'));const i=document.querySelector("body"),l=document.querySelector(".theme__btn--light"),s=document.querySelector(".theme__btn--dark"),c=document.querySelector("footer"),d=(document.querySelector(".modal"),document.querySelector(".footer-modal")),u=document.querySelector(".footer-modal__text");l.addEventListener("click",(function(){s.style.display="block",l.style.display="none",i.classList.remove("dark"),c.classList.remove("dark"),d.style.backgroundColor="white",u.style.color="#545454",m=localStorage.setItem("currentTheme","light")})),s.addEventListener("click",p);let m="";function p(){l.style.display="block",s.style.display="none",i.classList.add("dark"),c.classList.add("dark"),d.style.backgroundColor="#333",u.style.color="white",m=localStorage.setItem("currentTheme","dark")}"dark"===localStorage.getItem("currentTheme")&&p();var g;g=new URL(r("kyEFX").resolve("a98ip"),import.meta.url).toString();var f;f=new URL(r("kyEFX").resolve("juDiW"),import.meta.url).toString();var v;v=new URL(r("kyEFX").resolve("iRqEz"),import.meta.url).toString();var b;b=new URL(r("kyEFX").resolve("cHwNN"),import.meta.url).toString();var _;_=new URL(r("kyEFX").resolve("6BRmD"),import.meta.url).toString();var k;k=new URL(r("kyEFX").resolve("gZivX"),import.meta.url).toString();var y;y=new URL(r("kyEFX").resolve("f9K2v"),import.meta.url).toString();const h=[{name:"Alexander Khodetskiy",position:"Team Lead",img:t(g),link:"https://github.com/khodetsky"},{name:"Ilya Milinteev",position:"Scrum Master",img:t(f),link:"https://github.com/milintey"},{name:"Arkadii Zaslavskyi",position:"Developer",img:t(v),link:"https://github.com/ArkZaslavskyi"},{name:"Alina Zhyva",position:"Developer",img:t(b),link:"https://github.com/azhivaya"},{name:"Anna Matvieieva",position:"Developer",img:t(_),link:"https://github.com/annamatvieieva"},{name:"Artem Yakushkin",position:"Developer",img:t(k),link:"https://github.com/ArtemYakushkin"},{name:"Sasha Maslak",position:"Developer",img:t(y),link:"https://github.com/SashaMaslak"}],S={footerBtnLinkText:document.querySelector("[data-modal-open]"),backdrop:document.querySelector("[data-modal]"),modalBtnClose:document.querySelector("[data-modal-close"),teamMarkup:document.querySelector(".team")},w=document.querySelector("body");function L(e){"Escape"===e.code&&(q(),H())}function E(e){e.target.classList.contains("footer-backdrop")&&(q(),H())}function q(){S.backdrop.classList.toggle("is-hidden")}function H(){window.removeEventListener("keydown",L),S.modalBtnClose.removeEventListener("click",R),S.backdrop.removeEventListener("click",E),w.style.overflow=""}function R(){q(),H(),console.log("footer btn click")}S.footerBtnLinkText.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",L),S.modalBtnClose.addEventListener("click",R),S.backdrop.addEventListener("click",E),q(),w.style.overflow="hidden"}));const $=h.map((({name:e,img:t,position:n,link:a})=>`<li class="team__item"><a target="_blank" rel="noopener noreferrer" class="team__link" href="${a}">\n                <img class="team__img" src="${t}" alt="team member">\n              </a>\n    <p class="team__name">${e}</p>\n    <p class="team__position">${n}</p>\n    </li>`)).join("");S.teamMarkup.insertAdjacentHTML("beforeend",$);function F(e,t){e.innerHTML=function(e){return e.map(((e,t)=>function({poster_path:e,genre_ids:t,title:n,release_date:a,vote_average:o},r){const i="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png",l=e?`https://image.tmdb.org/t/p/w500${e}`:i,s=(c=o,c<3?"card__rating-poor":c<5?"card__rating-low":c<7?"card__rating-medium":"card__rating-high");var c;return`\n    <li class="card" data-movie="${r}">\n        <a class="gallery__link">\n            <img class="card__img" src="${l}">\n            <p class="card__title">${n}</p>\n            <div class="card__text-container">\n                <p class="card__text">${function(e){const t=e.map(x);if(!t)return"";return t.length<=3?t.join(", "):[...t.slice(0,2),"other..."].join(", ")}(t)} | ${a?a.slice(0,4):""}</p>\n                <div class="card__rating-box ${s}" id="card-rating">\n                    <p class="card__rating-text">${o.toFixed(1)}</p>\n                </div>\n            </div>\n        </a>\n    </li>`}(e,t))).join("")}(t)}function x(e){return JSON.parse(localStorage.getItem("genres")).find((t=>t.id===e)).name}function A(e,t,n){const a=`\n            <button type="button" class="num-btn mobile-hiding" data-page="first">1</button>\n            <span class="num-btn mobile-hiding" data-page="${t}">...</span>    \n            ${function(e,t){let n=1,a=t,o="";t>5&&(e<3?a=5:e>t-3?(n=t-5+1,a=t):(n=e-2,a=e+2));for(let t=n;t<=a;t++)o+=`\n        <span\n            class="${t!==e?"num-btn":"pg-btn pg-btn--cur"}"\n            data-page="${t}">${t}</span>\n        `;return o}(t,n)}\n            <span class="num-btn mobile-hiding" data-page="${t}">...</span>    \n            <button type="button" class="num-btn mobile-hiding" data-page="last">${n}</button>\n        `;e.innerHTML=a}function M(e,t,n){switch(t){case"first":return 1;case"last":return n;case"prev":return 1===e?1:e-1;case"next":return e===n?n:e+1;default:return+t}}const T=document.querySelector("#queue"),D=document.querySelector("#watched"),N=document.querySelector(".header__buttons"),O=document.querySelector(".gallery"),X=document.querySelector("#pagination"),j=document.querySelector("#page-numbers"),U={watched:"watchedAll",queue:"queueAll"},I="watched",B="queue";function C(e,t){const n=JSON.parse(localStorage.getItem(U[e]));if(n){const a={page:t,total_pages:n.total_pages,total_results:n.total_results,results:n.results.slice(20*(t-1),20*t),rules:e};localStorage.setItem("localMovies",JSON.stringify(a)),F(O,a.results),A(j,t,a.total_pages),X.addEventListener("click",z),O.addEventListener("click",Z)}else O.innerHTML="<h1>EMPTY gallery</h1>",j.innerHTML="";window.scrollTo(0,0),N.addEventListener("click",J)}function J(e){N.removeEventListener("click",J),"watched"===e.target.id?(D.classList.add("btn--is-active"),T.classList.remove("btn--is-active"),C(I,1)):(D.classList.remove("btn--is-active"),T.classList.add("btn--is-active"),C(B,1))}function Z(e){const t=e.target.closest(".gallery__item");console.log(`%c${t.dataset.movie}`,"color: yellow; background-color: red; display: inline-block; padding: 5px; font-weight: bold;")}function z(e){if(!e.target.closest("[data-page]"))return;j.removeEventListener("click",z);const t=e.target.closest("[data-page]").dataset.page,n=JSON.parse(localStorage.getItem("localMovies")),a=M(n.page,t,n.total_pages);C(n.rules,a)}C(I,1);
//# sourceMappingURL=my-library.90d7c35f.js.map
