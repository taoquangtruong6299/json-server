const { random } = require('faker');
const faker = require('faker')
const fs = require('fs');
faker.locale = 'en'

const randomCategoryList = (n) => {
  if(n <= 0) return [];
  const categoryList = [];

  Array.from(new Array(n)).forEach(()=>{
    const category = {
      id: faker.random.uuid(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    categoryList.push(category);
  });

  return categoryList;
};

const randomProductList = (categoryList, numberOfProducts) => {
  if(numberOfProducts <= 0) return [];
  const productList = [];
  //random data
  for(const category of categoryList) {
    Array.from(new Array(numberOfProducts)).forEach(() => {
      const product = {
        id: faker.random.uuid(),
        categoryId: category.id,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        image: faker.image.imageUrl(230,322),

      };
      productList.push(product);
    });
  }

  return productList;
}

const randomUserList = (n) =>{
  if(n <= 0 ) return [];
  const userList = [];

  Array.from(new Array(n)).forEach(()=>{
    const user = {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      admin: false,
      phone: faker.phone.phoneNumber(),
      city: faker.address.city(),
      street: faker.address.streetAddress(),
      district: faker.address.state()
    };
    userList.push(user);
  })

  return userList;
}
//iffe
(()=>{
  const categoryList = randomCategoryList(2);
  const productList = randomProductList(categoryList, 5);
  const userList = randomUserList(3);
  const db = {
    users: userList,
    categories: categoryList,
    products: productList,
  };


  fs.writeFile("db.json", JSON.stringify(db), ()=> {
    console.log("Generate data successfully");
  })
})()
