package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Model;

@Service
public interface ModelService {

    Model createAcoountModel(Model model);
    Model getModelsbyId(Long id);
    List<Model> getAllModels();
    void deleteAccountModels(Long id);    
    
}
