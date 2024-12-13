package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Model;
import com.example.demo.repository.ModelRepository;

@Service
public class ModelServiceImpl implements ModelService{

    @Autowired
    private ModelRepository modelRepository;

@Override
    public Model createAcoountModel(Model model) {
        return modelRepository.save(model);
    }

    @Override
    public Model getModelsbyId(Long id) {
        return modelRepository.findById(id).orElse(null);
    }

    @Override
    public List<Model> getAllModels() {
        return modelRepository.findAll();
    }

    @Override
    public void deleteAccountModels(Long id) {
        modelRepository.deleteById(id);
    }




    
}
