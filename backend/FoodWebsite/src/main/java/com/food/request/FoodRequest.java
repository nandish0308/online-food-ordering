package com.food.request;

import com.food.model.Category;
import com.food.model.IngredientsItem;
import lombok.Data;

import java.util.List;

@Data
public class FoodRequest {

    private String name;
    private String description;
    private Long price;

    private Category category;
    private List<String> images;

    private Long id;
    private boolean vegetarian;
    private boolean seasonal;
    private List<IngredientsItem> ingredients;

}
