const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl);
// const categoriesElLength = categoriesEl.children.length;

console.log("Number of categories:", categoriesEl.children.length);
// console.log([...categoriesEl.children]);

// console.log(categoriesEl.children);

const CategoryElements = [...categoriesEl.children].map((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
// console.log([...categoriesEl.children]);
