async function getRate() {
  const res = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json");

  const data = await res.json();
  console.log(data.usd.inr);
}
const updateFlag=(element)=>{
  let currCode=element.value;
  console.log(currCode);
  let ctrCode= countryList[currCode];
  console.log(ctrCode);
  let imgLink = `https://flagsapi.com/${ctrCode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src=imgLink;
}


const dropdown= document.querySelectorAll(".card select");
for(let select of dropdown){
  for(let currency in countryList){
    let newOption = document.createElement("option");
    newOption.innerText=currency;
    newOption.value=currency;
    select.append(newOption);
  }
  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  })
}

const fromcurr = document.querySelector(".section-from select");
const tocurr = document.querySelector(".section-to select");

const btn = document.querySelector(".btn");
btn.addEventListener("click",async ()=>{
  const amount = document.querySelector(".input-style");
  const amountvalue=amount.value;
  const fromcurrvalue =fromcurr.value.toLowerCase();
  const tocurrvalue =tocurr.value.toLowerCase();
   (async function() {
    let urlcurr=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrvalue}.json`;
    const res = await fetch(urlcurr);
    const data = await res.json();
    let object = data[fromcurrvalue];
    console.log(object);
    let result = amountvalue * object[tocurrvalue];
    result = Number(result).toFixed(2);
    console.log(result);
    let textaccess=document.querySelector("#result-rate");
    textaccess.innerText=`${amountvalue} ${fromcurr.value} = ${result} ${tocurr.value}`
  })();
  
});
