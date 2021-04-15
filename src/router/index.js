import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignUpPage from '../views/SignUpPage.vue';
import CollectionRestaurants from '../views/CollectionRestaurants';
import Restaurant from '../views/Restaurant';
import { Auth } from 'aws-amplify';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
    {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage

  },
  {
    path: "/restaurant/:id",
    name: "Restaurant",
    component: Restaurant,
    meta: { requiresAuth: true }
  },
  {
    path: "/collectionrestaurants",
    name: "CollectionRestaurants",
    component: CollectionRestaurants,
    meta: { requiresAuth: true }

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = await Auth.currentUserInfo();

  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next()
  }

})

export default router;


