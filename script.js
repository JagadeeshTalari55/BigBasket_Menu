const ShopByCategory = [
  "Fruits & Vegetables",
  "Foodgrains, Oil & Masala",
  "Bakery, Cakes & Dairy",
  "Beverages",
  "Snacks & Branded Foods",
  "Beauty & Hygiene",
  "Cleaning & Household",
  "Kitchen, Garden & Pets",
  "Eggs, Meat & Fish",
  "Gourmet & World Food",
  "Baby Care",
  "View All",
];

const FruitsAndVegetables = [
  "Fresh Vegetables",
  "Herbs & Seasonings",
  "Fresh Fruits",
  "Organic Fruits & Vegetables",
  "Cuts & Sprouts",
  "Exotic Fruits & Veggies",
  "Flower Bouquets, Bunches",
];

const FoodgrainsOilMasala = [
  "Atta, Flours & Sooji",
  "Rice & Rice Products",
  "Dals & Pulses",
  "Organic Staples",
  "Edible Oils & Ghee",
  "Salt, Sugar & Jaggery",
  "Masalas & Spices",
  "Dry Fruits",
];

const BakeryCakesDairy = [
  "Dairy",
  "Breads & Buns",
  "Non Dairy",
  "Gourmet Breads",
  "Cookies, Rusk & Khari",
  "Ice Creams & Desserts",
  "Bakery Snacks",
  "Cakes & Pastries",
];

const Beverages = [
  "Energy & Soft Drinks",
  "Water",
  "Health Drink, Supplement",
  "Tea",
  "Coffee",
  "Fruit Juices & Drinks",
];

const SnacksBrandedFoods = [
  "Noodle, Pasta, Vermicelli",
  "Breakfast Cereals",
  "Frozen Veggies & Snacks",
  "Biscuits & Cookies",
  "Snacks & Namkeen",
  "Spreads, Sauces, Ketchup",
  "Ready To Cook & Eat",
  "Chocolates & Candies",
  "Pickles & Chutney",
  "Indian Mithai",
];

const BeautyHygiene = [
  "Oral Care",
  "Feminine Hygiene",
  "Bath & Hand Wash",
  "Hair Care",
  "Health & Medicine",
  "Men's Grooming",
  "Skin Care",
  "Makeup",
  "Fragrances & Deos",
];

const CleaningHousehold = [
  "Detergents & Dishwash",
  "All Purpose Cleaners",
  "Disposables, Garbage Bag",
  "Fresheners & Repellents",
  "Mops, Brushes & Scrubs",
  "Car & Shoe Care",
  "Pooja Needs",
  "Stationery",
  "Bins & Bathroom Ware",
  "Party & Festive Needs",
];

const KitchenGardenPets = [
  "Pet Food & Accessories",
  "Appliances & Electricals",
  "Steel Utensils",
  "Gardening",
  "Kitchen Accessories",
  "Cookware & Non Stick",
  "Flask & Casserole",
  "Bakeware",
  "Crockery & Cutlery",
  "Storage & Accessories",
];

// SubMenu - Arrays

const FreshVegetables = [
  "Potato, Onion & Tomato",
  "Cucumber & Capsicum",
  "Leafy Vegetables",
  "Root Vegetables",
  "Beans, Brinjals & Okra",
  "Cabbage & Cauliflower",
  "Gourd, Pumpkin, Drumstick",
  "Specialty",
];

const HerbsSeasonings = ["Lemon, Ginger & Garlic", "Indian & Exotic Herbs"];

const FreshFruits = [
  "Banana, Sapota & Papaya",
  "Kiwi, Melon, Citrus Fruit",
  "Apples & Pomegranate",
  "Seasonal Fruits",
  "Mangoes",
  "Fruit Baskets",
];

const OrganicFruitsVegetables = ["Organic Vegetables", "Organic Fruits"];

//-----------

const mainArray = [
  FruitsAndVegetables,
  FoodgrainsOilMasala,
  BakeryCakesDairy,
  Beverages,
  SnacksBrandedFoods,
  BeautyHygiene,
  CleaningHousehold,
  KitchenGardenPets,
];

const SubMenuArray = [
  FreshVegetables,
  HerbsSeasonings,
  FreshFruits,
  OrganicFruitsVegetables,
];

const selectTag = document.getElementById("MainMenu");

const initialOptions = ShopByCategory.map((category, i) => {
  return `<option class="element" id="element${
    i + 1
  }" value="${category}">${category}</option>`;
});

selectTag.innerHTML = initialOptions[0].toString().replaceAll(",", "");

// console.log(selectTag);
let option = document.getElementById("element1");
let options = 0;
let sideMenu = document.getElementById("sideMenu");
let LastsideMenu = document.getElementById("LastsideMenu");
let subOptions = 0;

option.addEventListener("mouseover", () => {
  addOptions();
  options = document.getElementsByClassName("element");

  // LastsideMenu.style.display = "none";
  // ===================Main Map Started========================

  for (let j = 0; j < mainArray.length; j++) {
    options[j].addEventListener("mouseover", () => {
      sideMenu.innerHTML = mainArray[j]
        .map((category, i) => {
          return `<option class="subElement element" id="element${
            i + 1
          }" value="${category}">${category}</option>`;
        })
        .toString()
        .replaceAll(",", "");
      // subMenu

      subOptions = document.getElementsByClassName("subElement");
      // console.log(subOptions);
      for (let k = 0; k < SubMenuArray.length; k++) {
        subOptions[k].addEventListener("mouseover", () => {
          LastsideMenu.innerHTML = SubMenuArray[k]
            .map((category, i) => {
              return `<option class="lastSubElement element" id="element${
                i + 1
              }" value="${category}">${category}</option>`;
            })
            .toString()
            .replaceAll(",", "");
        });
      }
      //
    });
  }
  // options[1].addEventListener("mouseover", () => {
  //   sideMenu.innerHTML = FoodgrainsOilMasala.map((category, i) => {
  //     return `<option class="subElement element" id="element${
  //       i + 1
  //     }" value="${category}">${category}</option>`;
  //   })
  //     .toString()
  //     .replaceAll(",", "");
  // });
  //  ===================Main Map Completed========================
});

selectTag.addEventListener("mouseenter", () => {
  sideMenu.style.display = "block";
  LastsideMenu.style.display = "none";
});
selectTag.addEventListener("mouseleave", () => {
  sideMenu.style.display = "none";
  LastsideMenu.style.display = "none";
});

sideMenu.addEventListener("mouseenter", () => {
  sideMenu.style.display = "block";
  LastsideMenu.style.display = "block";
});

// sideMenu.addEventListener("mouseleave", () => {
//   LastsideMenu.style.display = "none";
// });

LastsideMenu.addEventListener("mouseleave", () => {
  LastsideMenu.style.display = "block";
});
// let option2;

function addOptions() {
  // console.log();
  // console.log(initialOptions);

  selectTag.innerHTML = initialOptions.toString().replaceAll(",", "");

  // console.log(selectTag);
}

// option2.addEventListener("mouseleave", () => {
//   // addOptions();
//   removeOptions();
//   console.log(selectTag);
// });

// function removeOptions() {
//   // console.log();
//   // console.log(initialOptions);

//   selectTag.innerHTML = initialOptions[0].toString().replaceAll(",", "");
//   console.log(selectTag.innerHTML);
//   // selectTag.innerHTML = initialOptions[0].toString().replaceAll(",", "");
// }
