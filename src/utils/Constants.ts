import {
  dash3,
  dash4,
  dash5,
  dash6,
  dash7,
  grayCalendar,
  grayFridge,
  grayMeat,
  grayTotal,
  whiteEnergyDrink,
  whiteMeat,
  whiteMilkBottle,
  whiteNaturalVeggie,
  whiteToast,
  whiteWaterMelon,
} from "../assets/svg";

import FritosImage from "../assets/svg/fritos.svg";
import ChickenImage from "../assets/svg/chicken.svg";
import DashboardList1 from "../assets/svg/DashboardList1.svg";
import DashboardList2 from "../assets/svg/DashboardList2.svg";
import DashboardList3 from "../assets/svg/DashboardList3.svg";
import Expiring1 from "../assets/svg/expiring1.svg";
import Expiring2 from "../assets/svg/expiring2.svg";
import Expiring3 from "../assets/svg/expiring3.svg";

export const SCREENS = {
  LoginScreen1: "LoginScreen1",
  LoginScreen2: "LoginScreen2",
  MainScreen: "mainScreen",
  RegisterScreen: "register",
  UserProfile: "userProfile",
  UserProfileFlow: "UserProfileFlow",
  ProfileCreation: "profileCreation",
  FamilySize: "familySize",
  ProfileComplete: "profileComplete",
  ResetScreen1: "resetScreen1",
  ResetScreen2: "resetScreen2",
  ResetScreen3: "resetScreen3",
  ResetScreen4: "resetScreen4",
  Dashboard: "dashboard",
  MealPlan: "mealPlan",
  MealDetails: "mealDetails",
  Inventory: "inventory",
  InventoryDashboard: "inventoryDashboard",
};

export const reactQueryKeys = {
  product: "product",
};

export const UserProfile = [
  {
    screenNumber: 1,
    displayScreen: true,
    selectedItems: 0,
    limit: 1,
    cookingSkill: [
      {
        id: 1,
        title: "Novice: I’m not the best chef",
        checkBox: false,
      },
      {
        id: 2,
        title: "Beginner: I have some basic skills",
        checkBox: false,
      },
      {
        id: 3,
        title: "Intermediate: I’m pretty experienced",
        checkBox: false,
      },
      {
        id: 4,
        title: "Expert: I’m a good chef",
        checkBox: false,
      },
      {
        id: 5,
        title: "World class: I’m a professional chef",
        checkBox: false,
      },
    ],
  },
  {
    screenNumber: 2,
    displayScreen: false,
    selectedItems: 0,
    limit: 3,
    nutritionGoal: [
      {
        id: 1,
        title: "Lose weight",
        checkBox: false,
      },
      {
        id: 2,
        title: "Gain weight",
        checkBox: false,
      },
      {
        id: 3,
        title: "Maintain my current weight",
        checkBox: false,
      },
      {
        id: 4,
        title: "Increase lean muscle mass",
        checkBox: false,
      },
      {
        id: 5,
        title: "Eat healthier",
        checkBox: false,
      },
      {
        id: 6,
        title: "Reduce red meat intake",
        checkBox: false,
      },
    ],
  },
  {
    screenNumber: 3,
    displayScreen: false,
    selectedItems: 0,
    limit: 6,
    dietaryRequirements: [
      {
        id: 1,
        title: "Gluten-free (coeliac)",
        checkBox: false,
      },
      {
        id: 2,
        title: "Gluten-free (intolerance)",
        checkBox: false,
      },
      {
        id: 3,
        title: "Halal",
        checkBox: false,
      },
      {
        id: 4,
        title: "Kosher",
        checkBox: false,
      },
      {
        id: 5,
        title: "Dairy and lactose free",
        checkBox: false,
      },
      {
        id: 6,
        title: "Fish/shellfish allergy",
        checkBox: false,
      },
    ],
  },
  {
    screenNumber: 4,
    displayScreen: false,
    selectedItems: 0,
    limit: 6,
    currentDiets: [
      {
        id: 1,
        title: "Low carb",
        checkBox: false,
      },
      {
        id: 2,
        title: "Low carb, high protein",
        checkBox: false,
      },
      {
        id: 3,
        title: "Keto",
        checkBox: false,
      },
      {
        id: 4,
        title: "Paleo",
        checkBox: false,
      },
      {
        id: 5,
        title: "Low fat",
        checkBox: false,
      },
      {
        id: 6,
        title: "Atkins",
        checkBox: false,
      },
    ],
  },
  {
    screenNumber: 5,
    displayScreen: false,
    selectedItems: 0,
    limit: 6,
    healthIssues: [
      {
        id: 1,
        title: "Overweight/obese",
        checkBox: false,
      },
      {
        id: 2,
        title: "High blood pressure",
        checkBox: false,
      },
      {
        id: 3,
        title: "Gout",
        checkBox: false,
      },
      {
        id: 4,
        title: "Type 2 diabetes",
        checkBox: false,
      },
      {
        id: 5,
        title: "Heart disease",
        checkBox: false,
      },
      {
        id: 6,
        title: "Cancer",
        checkBox: false,
      },
    ],
  },
];

export const ProfileCompleteData = [
  {
    id: 1,
    status: "complete",
  },
  {
    id: 2,
    status: "add",
  },
  {
    id: 3,
    status: "add",
  },
  {
    id: 4,
    status: "add",
  },
  {
    id: 5,
    status: "new",
  },
];

export const DashboardData = [
  {
    id: 1,
    label: "Meals",
    icon: dash7,
    navigateScreen: "MealPlan",
  },
  {
    id: 2,
    label: "Inventory",
    icon: dash4,
    navigateScreen: "Inventory",
  },
  {
    id: 3,
    label: "Order",
    icon: dash3,
    navigateScreen: "",
  },
  {
    id: 4,
    label: "My Family",
    icon: dash5,
    navigateScreen: "",
  },
  {
    id: 5,
    label: "Settings",
    icon: dash6,
    navigateScreen: "Settings",
  },
];

export const IngredientsData = [
  {
    id: 1,
    title: "Spaghetti Pasta",
    gram: "500g",
    price: "$2.75",
    purchaseText: "Need to purchase",
    pantry: false,
  },
  {
    id: 2,
    title: "Beef Mince (8% fat)",
    gram: "1kg",
    price: "$2.75",
    purchaseText: "Need to purchase",
    pantry: false,
  },
  {
    id: 3,
    title: "Extra-Virgin Olive Oil",
    gram: "2 tbsp",
    purchaseText: "In the pantry",
    pantry: true,
  },
  {
    id: 4,
    title: "Medium onion",
    gram: "2 pieces",
    purchaseText: "In the pantry",
    pantry: true,
  },
];

export const ReplacementData = [
  {
    id: 6,
    title: "Wholewheat Spaghetti Pasta",
  },
  {
    id: 7,
    title: "Turkey Mince (2% fat)",
  },
  {
    id: 8,
    title: "Canola Oil",
  },
];

export const SearchItems = [
  {
    id: 1,
    title: "Skim Milk",
    icon: ChickenImage,
  },
  {
    id: 2,
    title: "Chocolate Milk",
    icon: ChickenImage,
  },
  {
    id: 3,
    title: "2% Milk",
    icon: ChickenImage,
  },
];

export const InventoryData = [
  {
    id: 0,
    title: "Chicken Breast",
    totalGram: "750g",
    Image: ChickenImage,
    ingredients: [
      {
        id: 1,
        name: "Fridge",
        icon: grayFridge,
      },
      {
        id: 2,
        name: "1 total",
        icon: grayTotal,
      },
      {
        id: 3,
        name: "Meat",
        icon: grayMeat,
      },
      {
        id: 4,
        name: "04/07/23",
        icon: grayCalendar,
      },
    ],
  },
  {
    id: 1,
    title: "Fritos",
    totalGram: "",
    Image: FritosImage,
    ingredients: [
      {
        id: 1,
        name: "Fridge",
        icon: grayFridge,
      },
      {
        id: 2,
        name: "1 total",
        icon: grayTotal,
      },
      {
        id: 3,
        name: "Chips",
        icon: grayMeat,
      },
      {
        id: 4,
        name: "04/07/23",
        icon: grayCalendar,
      },
    ],
  },
];

export const InventoryImageList = [
  {
    id: 1,
    img: DashboardList1,
    title: "Healthy Snacks",
  },
  {
    id: 2,
    img: DashboardList2,
    title: "Quick Lunch",
  },
  {
    id: 3,
    img: DashboardList3,
    title: "Easy Dinner",
  },
  {
    id: 4,
    img: DashboardList3,
    title: "Easy Dinner",
  },
];

export const ExpiringList = [
  {
    id: 1,
    title: "Broccoli",
    quantity: "200g",
    price: "$2.75",
    img: Expiring1,
  },
  {
    id: 2,
    title: "Lo mein",
    quantity: "1lb",
    price: "$9.95",
    img: Expiring2,
  },
  {
    id: 3,
    title: "Chicken Breast",
    quantity: "2lb",
    price: "$13.50",
    img: Expiring3,
  },
];

export const beveragesList = [
  {
    id: 1,
    title: "Meats",
    icon: whiteMeat,
    background: "orange1",
  },
  {
    id: 2,
    title: "Grains",
    icon: whiteToast,
    background: "yellow2",
  },
  {
    id: 3,
    title: "Fruits",
    icon: whiteWaterMelon,
    background: "red2",
  },
  {
    id: 4,
    title: "Veggies",
    icon: whiteNaturalVeggie,
    background: "green1",
  },
  {
    id: 5,
    title: "Dairy",
    icon: whiteMilkBottle,
    background: "blue1",
  },
  {
    id: 6,
    title: "Beverages",
    icon: whiteEnergyDrink,
    background: "purple1",
  },
];

export const InventoryButtons = [
  {
    id: 1,
    active: true,
    title: "Pantry",
  },
  {
    id: 2,
    active: false,
    title: "Fridge",
  },
  {
    id: 3,
    active: false,
    title: "Cabinet",
  },
];

export const YourData = [
  {
    id: 1,
    value: "Active Dry Yeast",
    key: "1",
    date: "06/08/26",
  },
  {
    id: 2,
    value: "Asian Sweet Chili Sauce",
    key: "2",
    date: "06/08/26",
  },
  {
    id: 3,
    value: "Baking Soda",
    key: "3",
    date: "06/08/26",
  },
  {
    id: 4,
    value: "Bugels",
    key: "4",
    date: "06/08/26",
  },
  {
    id: 5,
    value: "Bacon Bits",
    key: "5",
    date: "06/08/26",
  },
  {
    id: 6,
    value: "Doritos ",
    key: "6",
    date: "06/08/26",
  },
  {
    id: 7,
    value: "Granola Bars",
    key: "7",
    date: "06/08/26",
  },
  {
    id: 8,
    value: "Pringles",
    key: "8",
    date: "06/08/26",
  },
  {
    id: 9,
    value: "Active Dry Yeast",
    key: "9",
    date: "06/08/26",
  },
  {
    id: 10,
    value: "Asian Sweet Chili Sauce",
    key: "10",
    date: "06/08/26",
  },
  {
    id: 11,
    value: "Baking Soda",
    key: "11",
    date: "06/08/26",
  },
  {
    id: 12,
    value: "Bugels",
    key: "12",
    date: "06/08/26",
  },
  {
    id: 13,
    value: "Bacon Bits",
    key: "13",
    date: "06/08/26",
  },
];
