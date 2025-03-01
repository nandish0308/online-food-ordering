package com.food.controller;

import com.food.model.Category;
import com.food.model.User;
import com.food.service.CategoryService;
import com.food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;

    @PostMapping("/admin/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category,
                                                   @RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);

        Category createCategory =  categoryService.createCategory(category.getName(), user.getId());
        return new ResponseEntity<>(createCategory, HttpStatus.CREATED);
    }

//    @GetMapping("/category/restaurant/{id}")
//    public ResponseEntity<List<Category>> getRestaurantCategory(
//            @PathVariable  Long id,
//                                                          @RequestHeader("Authorization") String jwt) throws Exception{
//        User user = userService.findUserByJwtToken(jwt);
//
//        List<Category> createdCategory = categoryService.findCategoryByRestaurantId(id);
//        return new ResponseEntity<>(createdCategory, HttpStatus.OK);
//    }
//    @GetMapping("/category/restaurant/{id}")
//    public ResponseEntity<List<Category>> getRestaurantCategory(
//            @PathVariable Long id,
//            @RequestHeader("Authorization") String jwt) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
//
//        List<Category> createdCategory = categoryService.findCategoryByRestaurantId(id);
//        System.out.println("Fetched Categories: " + createdCategory); // ✅ Debugging
//
//        return new ResponseEntity<>(createdCategory, HttpStatus.OK);
//    }

    @GetMapping("/category/restaurant/{id}")
    public ResponseEntity<List<Category>> getRestaurantCategory(
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt) throws Exception {
        System.out.println("🔍 Fetching Categories for Restaurant ID: " + id);
        System.out.println("🔍 JWT Token: " + jwt);

        // Verify the user
        User user = userService.findUserByJwtToken(jwt);
        System.out.println("✅ User Found: " + user.getEmail());

        // Fetch categories
        List<Category> categories = categoryService.findCategoryByRestaurantId(id);
        System.out.println("✅ Fetched Categories: " + categories);

        return new ResponseEntity<>(categories, HttpStatus.OK);
    }



}
