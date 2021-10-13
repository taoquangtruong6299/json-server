

const renderOrder = async () =>{

  let uri = 'http://localhost:3000/api/orderItems?_sort=price&_order=desc';
  let uri1 = 'http://localhost:3000/api/products?_sort=price&_order=desc';
  const res = await fetch(uri);
  const order = await res.json();
  const res1 = await fetch(uri1);
  const product = await res1.json();
  // for(var i = 0 ;i < product.length;i++){
  //   console.log(product[i].find(order[1].productId));
  // }

  }
  window.addEventListener('DOMContentLoaded', () => renderOrder() );
