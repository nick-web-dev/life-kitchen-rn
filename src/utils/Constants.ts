import { dash3, dash4, dash5, dash6, dash7 } from "../assets/svg";

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
    navigateScreen: "",
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
    navigateScreen: "",
  },
];
