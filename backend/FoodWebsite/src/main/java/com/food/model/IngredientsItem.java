package com.food.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data  // ✅ This generates `getName()` and `setName()` automatically
@AllArgsConstructor
@NoArgsConstructor
public class IngredientsItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // ✅ Ensure this field exists

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonIgnore
    private IngredientsCategory category;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    private boolean inStoke; // ✅ Correct spelling if it's meant to be "inStock"

}


