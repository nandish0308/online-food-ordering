package com.food.controller;

import com.food.model.Food;
import com.food.model.Restaurant;
import com.food.model.User;
import com.food.service.FoodService;
import com.food.service.RestaurantService;
import com.food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name,
                                           @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        List<Food> food = foodService.searchFood(name);

        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }

//    @GetMapping("/restaurant/{id}")
//    public ResponseEntity<List<Food>> getRestaurantFood(@RequestParam(required = false, defaultValue = "false") boolean vegetarian,
//                                                        @RequestParam(required = false, defaultValue = "false") boolean seasonal,
//                                                        @RequestParam(required = false, defaultValue = "false") boolean nonVeg,
//                                                        @RequestParam(required = false) String foodCategory,
//                                                        @PathVariable Long id,
//                                                        @RequestHeader("Authorization") String jwt) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
//
//        List<Food> foods = foodService.getRestaurantsFood(id, vegetarian, seasonal, nonVeg, foodCategory);
//
//        return new ResponseEntity<>(foods, HttpStatus.OK);
//    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<Food>> getRestaurantFood(
            @RequestParam(required = false, defaultValue = "false") boolean vegetarian,
            @RequestParam(required = false, defaultValue = "false") boolean seasonal,
            @RequestParam(required = false, defaultValue = "false") boolean nonVeg,
            @RequestParam(required = false) String foodCategory,
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        if (foodCategory != null && foodCategory.isEmpty()) {
            foodCategory = null; // ✅ Prevent empty strings from breaking logic
        }

        List<Food> foods = foodService.getRestaurantsFood(id, vegetarian, seasonal, nonVeg, foodCategory);

        if (foods.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ArrayList<>()); // ✅ Return empty list instead of 500 error
        }

        return new ResponseEntity<>(foods, HttpStatus.OK);
    }}








