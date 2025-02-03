package com.food.service;

import com.food.model.Cart;
import com.food.model.CartItem;
import com.food.model.User;
import com.food.request.AddCartItemRequest;

public interface CartService {

    public CartItem addItemToCart(AddCartItemRequest request, String jwt) throws Exception;

    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception;

    public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception;

    public Long calculateCartTotals(Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

//    public Cart findCartByUserId(String jwt) throws Exception;
    public Cart findCartByUserId(Long userId) throws Exception;

//    public Cart clearCart(String jwt) throws Exception;
    public Cart clearCart(Long userId) throws Exception;
}
