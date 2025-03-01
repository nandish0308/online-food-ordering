package com.food.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;


    private String description;
    private Long price;

    @ManyToOne
    @JsonIgnore
    private Category foodCategory;

    @Column(length = 1000)
    @ElementCollection
    private List<String> images;

    private boolean available;

    @ManyToOne
    @JsonIgnore  // ✅ Prevents infinite loops in JSON serialization
    private Restaurant restaurant;

    private boolean isVegetarian;
    private boolean isSeasonable;

    @ManyToMany
    private List<IngredientsItem> ingredientsItems = new ArrayList<>();

    private Date creationDate;

}
