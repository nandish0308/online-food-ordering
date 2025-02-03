package com.food.service;

import com.food.dto.RestaurantDto;
import com.food.model.Restaurant;
import com.food.model.User;
import com.food.request.RestaurantRequest;

import java.util.List;

public interface RestaurantService {

    public Restaurant createRestaurant(RestaurantRequest req, User user);

    public Restaurant updateRestaurant(Long id, RestaurantRequest updateRestaurant) throws Exception;

    public void deleteRestaurant(Long id) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long id) throws Exception;

    public Restaurant getRestaurantByUserId(Long userId) throws Exception;

    public RestaurantDto addToFavourites(Long id, User user) throws Exception;

    public Restaurant updateRestaurantStatus(Long id) throws Exception;
}