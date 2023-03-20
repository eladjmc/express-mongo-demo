import express from "express";
import {
  getRestaurants,
  createRestaurant,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getKosherRestaurants,
  getRestaurantsByCities,
  getRestaurantByAddress,
  getRestaurantByCuisine,
} from "../controllers/restaurantController.js";

const router = express.Router();

router.route("/").get(getRestaurants).post(createRestaurant);

router.route("/cuisine/:type").get(getRestaurantByCuisine);

router.route("/cities").get(getRestaurantsByCities);

router.route("/kosher").get(getKosherRestaurants);

router.route("/address").get(getRestaurantByAddress);

router
  .route("/:id")
  .get(getRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

export default router;
