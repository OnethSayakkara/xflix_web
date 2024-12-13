package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import com.example.demo.entity.Model;

@Repository
public interface ModelRepository extends JpaRepository<Model, Long> {


    List<Model> findByModelName(String modelName);
    
    // Custom query to find models by gender
    List<Model> findByGender(String gender);
    
    // Custom query to find models by country
    List<Model> findByCountry(String country);
}