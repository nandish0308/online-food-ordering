package com.food.request;

import com.food.model.Address;
import com.food.model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class RestaurantRequest {

    private Long id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;

}
