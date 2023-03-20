import asyncHandler from "../middleware/asyncHandler.js";
import Restaurant from "../models/Restaurant.js";
import { mongoLowerCaseRegex } from "../utils/mongoLowerCaseRegex.js";

// @desc    Get all Restaurants
// @route   GET /api/v1/restaurants
// @access  Public
export const getRestaurants = asyncHandler(async (req, res, next) => {
  const restaurants = await Restaurant.find();
  res.status(200).json({
    success: true,
    data: restaurants,
  });
});

// @desc    Create a Restaurant
// @route   POST /api/v1/restaurants
// @access  Private
export const createRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await Restaurant.create(req.body);

  res.status(200).json({
    success: true,
    data: restaurant,
  });
});

// @desc    Get a single Restaurant
// @route   GET /api/v1/restaurants/:id
// @access  Public
export const getRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await Restaurant.findById(req.params.id);

  if (!restaurant) {
    return next(new Error(`Restaurant with ID ${req.params.id} not found`));
  }

  res.status(200).json({
    success: true,
    data: restaurant,
  });
});

export const getRestaurantByAddress = asyncHandler(async (req, res, next) => {
  const address = req.body.address;
  const restaurant = await Restaurant.findOne({ address: address });

  if (!restaurant) {
    return next(new Error(`Restaurant in this address was not found`));
  }

  res.status(200).json({
    success: true,
    data: restaurant,
  });
});

export const getRestaurantsByCities = asyncHandler(async (req, res, next) => {
  const cities = req.body.cities;
  const restaurants = await Restaurant.find({
    "address.city": { $in: cities },
  });

  if (!restaurants) {
    return next(new Error(`Restaurant in those cities not found`));
  }

  res.status(200).json({
    success: true,
    data: restaurants,
  });
});

export const getRestaurantByCuisine = asyncHandler(async (req, res, next) => {
  const reqCuisine = req.params.type;
  const restaurants = await Restaurant.find({
    cuisine: { $regex: mongoLowerCaseRegex(reqCuisine) },
  });

  if (!restaurants) {
    return next(
      new Error(`Restaurant with this cuisine: ${reqCuisine} not found`)
    );
  }

  res.status(200).json({
    success: true,
    data: restaurants,
  });
});

export const getKosherRestaurants = asyncHandler(async (req, res, next) => {
  const restaurants = await Restaurant.find({ kosher: true });

  if (!restaurants) {
    return next(new Error(`There are no kosher restaurants`));
  }

  res.status(200).json({
    success: true,
    data: restaurants,
  });
});

// @desc    Update a Restaurant
// @route   PUT /api/v1/restaurants/:id
// @access  Private
export const updateRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await Restaurant.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!restaurant) {
    return next(new Error(`Restaurant with ID ${req.params.id} not found`));
  }

  res.status(200).json({
    success: true,
    data: restaurant,
  });
});

// @desc    Delete a Restaurant
// @route   DELETE /api/v1/restaurants/:id
// @access  Private
export const deleteRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await Restaurant.findById(req.params.id);

  if (!restaurant) {
    return next(new Error(`Restaurant with ID ${req.params.id} not found`));
  }

  restaurant.deleteOne();

  res.status(200).json({
    success: true,
    data: {},
  });
});
