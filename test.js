var obj = {a:1, b:2, c:3};
const { User,Cart,Item } = require('../models/index.js')
let cat = {}
Item.findAll({})
.then(data =>{
  data.forEach((element) => {
    if(!cat.element.item_category){
      cat.element.item_category = 0
    }
    else{
      cat.element.item_category++
    }
  });
})
for (var category in cat) {
  console.log(category);
}
