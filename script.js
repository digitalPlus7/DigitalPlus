const state = { platform: "TikTok", service: "Divulgação", selected: null };
const prices = [
  {id:"start", title:"Comece com estratégia", type:"Divulgação", price:19.90, desc:"Uma opção inicial para organizar sua presença digital.", tag:"PARA COMEÇAR", icon:"✦"},
  {id:"reach", title:"Campanha de alcance", type:"Campanha de alcance", price:39.90, desc:"Planejamento promocional para dar mais visibilidade ao seu conteúdo.", tag:"POPULAR", icon:"↗"},
  {id:"pro", title:"Consultoria digital", type:"Consultoria", price:59.90, desc:"Orientações práticas para aprimorar perfil, conteúdo e consistência.", tag:"ACOMPANHAMENTO", icon:"◎"}
];
const grid = document.querySelector("#product-grid");
const dialog = document.querySelector("#order-dialog");
const toast = document.querySelector("#toast");
function money(n){return n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});}
function render(){
  const items = prices.filter(p=>p.type===state.service);
  grid.innerHTML = items.map(p=>`<article class="product-card"><div class="product-top"><span class="product-icon">${p.icon}</span><span class="tag">${p.tag}</span></div><h3>${p.title}</h3><p>${p.desc}<br><span style="color:#7f9182">Plataforma: ${state.platform}</span></p><div class="product-bottom"><div><div class="price-label">VALOR ILUSTRATIVO</div><div class="price">${money(p.price)} <small>/ serviço</small></div></div><button class="small-button" data-order="${p.id}">Selecionar ↗</button></div></article>`).join("");
  grid.querySelectorAll("[data-order]").forEach(btn=>btn.addEventListener("click",()=>openOrder(prices.find(p=>p.id===btn.dataset.order))));
}
function openOrder(item){
  state.selected=item;
  document.querySelector("#dialog-title").textContent=item.title;
  document.querySelector("#order-package").textContent=`${state.platform} · ${money(item.price)}`;
  document.querySelector("#order-result").hidden=true;
  document.querySelector("#order-form").hidden=false;
  dialog.showModal();
}
document.querySelectorAll("[data-platform]").forEach(btn=>btn.addEventListener("click",()=>{
  state.platform=btn.dataset.platform;
  document.querySelectorAll("[data-platform]").forEach(b=>b.classList.toggle("active",b===btn));
  render();
}));
document.querySelectorAll("[data-service]").forEach(btn=>btn.addEventListener("click",()=>{
  state.service=btn.dataset.service;
  document.querySelectorAll("[data-service]").forEach(b=>b.classList.toggle("active",b===btn));
  render();
}));
document.querySelector("#order-form").addEventListener("submit",e=>{
  e.preventDefault();
  const profile=document.querySelector("#profile").value.trim();
  const whatsapp=document.querySelector("#whatsapp").value.trim();
  if(!profile||!whatsapp)return;
  const result=document.querySelector("#order-result");
  const orderId="DP-DEMO-"+Math.random().toString(36).slice(2,7).toUpperCase();
  result.innerHTML=`<strong style="color:#cfff91">Solicitação preparada!</strong><br>Referência: ${orderId}<br>Plataforma: ${state.platform}<br>Serviço: ${state.selected.title}<br>Valor ilustrativo: ${money(state.selected.price)}<br><br><span style="color:#ffdc92">Esta é uma demonstração local. Nada foi enviado, salvo ou cobrado. Para receber pedidos reais, conecte um servidor seguro.</span>`;
  result.hidden=false;
  document.querySelector("#order-form").hidden=true;
});
document.querySelector("#year").textContent=new Date().getFullYear();
render();