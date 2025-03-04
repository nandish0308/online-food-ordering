package com.food.service;

import com.food.model.Category;
import com.food.model.Food;
import com.food.model.Restaurant;
import com.food.repository.FoodRepository;
import com.food.request.FoodRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService{

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public Food createFood(FoodRequest request, Category category, Restaurant restaurant) {
        Food food = new Food();
        food.setFoodCategory(category);
        food.setRestaurant(restaurant);
        food.setDescription(restaurant.getDescription());
        food.setName(request.getName());
        food.setPrice(request.getPrice());
        food.setIngredientsItems(request.getIngredients());
        food.setSeasonable(request.isSeasonal());
        food.setVegetarian(request.isVegetarian());
        food.setCreationDate(new Date());

        Food savedFood = foodRepository.save(food);
        restaurant.getFoods().add(savedFood);

        return savedFood;
    }

    @Override
    public void deleteFood(Long id) throws Exception {
        Food food = findFoodById(id);
        food.setRestaurant(null);
        foodRepository.save(food);
    }

    @Override
    public List<Food> getRestaurantsFood(Long restaurantId,
                                         boolean isVegetarian,
                                         boolean isNonVeg,
                                         boolean isSeasonal,
                                         String foodCategory) {

        // ✅ Fetch all food items first
        List<Food> foods = foodRepository.findByRestaurantId(restaurantId);

        // ✅ Debugging: Print fetched data
        System.out.println("🟢 Initial Food List (Before Filters): " + foods);

        // ✅ Apply filters dynamically
        if (isVegetarian) {
            foods = filterByVegetarian(foods, isVegetarian);
        }
        if (isNonVeg) {
            foods = filterByNonVeg(foods, isNonVeg);
        }
        if (isSeasonal) {
            foods = filterBySeasonal(foods, isSeasonal);
        }
        if (foodCategory != null && !foodCategory.isEmpty()) {
            foods = filterByCategory(foods, foodCategory);
        }

        // ✅ Debugging: Print filtered data
        System.out.println("🟢 Final Food List (After Filters): " + foods);

        return foods;
    }




    private List<Food> filterByVegetarian(List<Food> foods, boolean isVegetarian) {
        return foods.stream().filter(food -> food.isVegetarian() == isVegetarian).collect(Collectors.toList());
    }

//    private List<Food> filterByNonVeg(List<Food> foods, boolean isNonVeg) {
//        return foods.stream().filter(food -> !food.isVegetarian()).collect(Collectors.toList());
//    }
private List<Food> filterByNonVeg(List<Food> foods, boolean isNonVeg) {
    return foods.stream().filter(food -> isNonVeg ? !food.isVegetarian() : true).collect(Collectors.toList());
}



    private List<Food> filterBySeasonal(List<Food> foods, boolean isSeasonal) {
        return foods.stream().filter(food -> food.isSeasonable() == isSeasonal).collect(Collectors.toList());
    }

    private List<Food> filterByCategory(List<Food> foods, String foodCategory) {
        return foods.stream().filter(food -> {
            if (food.getFoodCategory() != null){
                return food.getFoodCategory().getName().equals(foodCategory);
            }
            return false;
        }).collect(Collectors.toList());
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {
        Optional<Food> food = foodRepository.findById(foodId);

        if(food.isEmpty()){
            throw new Exception("Food not exist...");
        }
        return food.get();
    }

    @Override
    public Food updateAvailabilityStatus(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setAvailable(!food.isAvailable());
        return foodRepository.save(food);
    }
}
