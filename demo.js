const renderProducts = async () => {
  let uri = 'http://localhost:3000/api/products';
  const res = await fetch(uri);
  const products = await res.json();
  console.log(products);
}

window.addEventListener('DOMContentLoaded', function(){
  renderProducts();
})
