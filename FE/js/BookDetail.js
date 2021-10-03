
  const id = new URLSearchParams(window.location.search).get('id');
  console.log(id);
  var title = document.querySelector('.title-product');
  var img = document.querySelector('.cover');
  var description = document.querySelector('.description-product');
  var price = document.querySelector('.price h1');
  const renderDetails = async () =>{
    const res = fetch('http://localhost:3000/api/products/'+id);
    const product = await (await res).json();
    title.innerHTML = product.name;
    img.innerHTML = `<img src=${product.image}></img>`;
    description.innerHTML = product.description;
    price.innerHTML = product.price;
  }

  window.addEventListener('DOMContentLoaded', ()=>{
    renderDetails();
  })
