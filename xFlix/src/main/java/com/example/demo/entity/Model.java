package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long modelId;

    private String modelName;

    private String gender;

    private String about;

    private String country;

    private String email;

    private String password;

    @ElementCollection
    private List<String> modelImageUrls;

    @OneToMany(mappedBy = "model", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Video> videos; // Add this line to establish a one-to-many relationship with Video
}