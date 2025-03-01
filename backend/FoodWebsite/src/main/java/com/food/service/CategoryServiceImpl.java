package com.food.service;

import com.food.model.Category;
import com.food.model.Restaurant;
import com.food.repository.CategoryRepository;
import com.food.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(String name, Long userId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(userId);
        Category category = new Category();
        category.setName(name);
        category.setRestaurant(restaurant);

        return categoryRepository.save(category);
    }

//    @Override
//    public List<Category> findCategoryByRestaurantId(Long id) throws Exception {
//        Restaurant restaurant = restaurantService.findRestaurantById(id); // ✅ FIXED: Fetch by restaurant ID
//        return categoryRepository.findByRestaurantId(id);
//    }
    @Override
    public List<Category> findCategoryByRestaurantId(Long id) throws Exception {
        System.out.println("🔍 Fetching restaurant by ID: " + id);

        Restaurant restaurant = restaurantService.findRestaurantById(id);
        if (restaurant == null) {
            throw new Exception("❌ Restaurant not found with ID: " + id);
        }

        List<Category> categories = categoryRepository.findByRestaurantId(id);
        System.out.println("✅ Fetched Categories: " + categories);

        return categories;
    }



    @Override
    public Category findCategoryById(Long id) throws Exception {
        Optional<Category> category = categoryRepository.findById(id);

        if(category.isEmpty()){
            throw new Exception("Category not found");
        }
        return category.get();

    }
}
