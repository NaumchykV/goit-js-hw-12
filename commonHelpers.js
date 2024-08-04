import{a as h,S as f,i as n}from"./assets/vendor-D1eTGYtO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",L="45140381-2d1d7d148fe8b2b4910dcca17";async function m(t,s=1){try{return(await h.get(v,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}catch{}}function y(t){let s=new f(".gallery a",{overlay:!1,overlayOpacity:.7,nav:!0,captions:!0,captionsData:"alt",captionDelay:350});const a=document.querySelector(".gallery");let l=t.hits.map(e=>`<div class="gallery-list">
      <a href="${e.largeImageURL}">
      <img class="image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class ="gallery-list-text">
      <div class="gallery-list-stat">
      <h5>likes</h5>
      <p>${e.likes}</p></div>
      <div class="gallery-list-stat">
      <h5>views</h5>
      <p>${e.views}</p></div>
      <div class="gallery-list-stat">
      <h5>comments</h5>
      <p>${e.comments}</p></div>
      <div class="gallery-list-stat">
      <h5>downloads</h5>
      <p>${e.downloads}</p></div></div></div>`).join("");a.insertAdjacentHTML("beforeend",l),s.refresh()}function b(){const t=document.querySelector(".gallery");t.innerHTML=""}const g=document.querySelector(".gallery-form"),S=document.querySelector(".gallery-input"),c=document.querySelector(".loader"),u=document.querySelector(".load-more-loader"),o=document.querySelector('[data-action="load-more"]');let d="";g.addEventListener("submit",q);o.addEventListener("click",w);const i={page:1,q:"",per_page:15};async function q(t){if(t.preventDefault(),b(),d=S.value.trim(),i.page=1,d===""){n.error({position:"topRight",message:"Please fill the input"}),c.classList.add("hidden"),o.classList.add("is-hidden"),g.reset();return}c.classList.remove("hiden");try{const s=await m(d);s.total===0?(n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),o.classList.add("is-hidden")):(y(s),o.classList.remove("is-hidden")),c.classList.add("hiden")}catch{n.error({position:"topRight",message:"Виникла помилка під час отримання зображень. Будь ласка, спробуйте пізніше."}),c.classList.add("hiden")}finally{g.reset()}}async function w(){i.page+=1,o.classList.add("is-hidden"),u.classList.remove("hiden");try{const t=await m(d,i.page);y(t);const a=document.querySelector(".gallery-list").getBoundingClientRect().height;window.scrollBy({top:(a+24)*5,behavior:"smooth"}),i.page*i.per_page>=t.totalHits?(o.classList.add("is-hidden"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):o.classList.remove("is-hidden")}catch{n.error({position:"topRight",message:"Виникла помилка під час отримання зображень. Будь ласка, спробуйте пізніше."}),u.classList.add("hiden")}finally{u.classList.add("hiden")}}
//# sourceMappingURL=commonHelpers.js.map
