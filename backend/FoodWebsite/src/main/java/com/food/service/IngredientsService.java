package com.food.service;

import com.food.model.IngredientsCategory;
import com.food.model.IngredientsItem;

import java.util.List;

public interface IngredientsService {

    public IngredientsCategory createIngredientCategory(String name, Long restaurantId) throws Exception;

    public IngredientsCategory findIngredientCategoryById(Long id) throws Exception;

    public List<IngredientsCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception;

    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception;

    public List<IngredientsItem> findRestaurantIngredients(Long restaurantId);

    public IngredientsItem updateStock(Long id) throws Exception;

}