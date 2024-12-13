package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String filename;

    private String category;

    



    @Lob
    private byte[] data;

    @ManyToOne // Many videos can belong to one model
    @JoinColumn(name = "model_id", nullable = false) // Foreign key column
    private Model model;
}