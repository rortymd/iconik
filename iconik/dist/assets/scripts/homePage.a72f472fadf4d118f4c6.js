!function(){var e={886:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=886,e.exports=t}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";const e=document.querySelector(".header__nav"),t=document.querySelector(".header__nav-btn");let o=!1;t.addEventListener("click",(()=>{o?(o=!1,t.classList.remove("header__nav-btn--active"),e.classList.remove("header__nav--active"),document.body.style.overflow="visible",t.setAttribute("aria-expanded",!1)):(o=!0,t.classList.add("header__nav-btn--active"),e.classList.add("header__nav--active"),document.body.style.overflow="hidden",t.setAttribute("aria-expanded",!0))})),window.addEventListener("DOMContentLoaded",(()=>{(()=>{document.body.style.overflow="auto";const e=document.querySelector(".loadingPlaceholder");e.classList.add("loadingPlaceholder-hidden"),setTimeout((()=>{e.remove(),document.querySelector("#loadingPlaceholderStyles").remove()}),350)})(),(()=>{const e=document.querySelectorAll(".lazy-image"),t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const o=e.target,n=o.querySelector("img"),a=n.getAttribute("data-src");r(886)("./".concat(a)).then((e=>{n.setAttribute("src",e.default),n.addEventListener("load",(()=>{o.classList.add("image-loaded")}))})),t.unobserve(n)}}))}),{threshold:.2});e.forEach((e=>t.observe(e)))})()}))}()}();
//# sourceMappingURL=homePage.a72f472fadf4d118f4c6.js.map