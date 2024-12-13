package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Model;
import com.example.demo.service.ModelService;

@RestController
@CrossOrigin(origins = "*")
public class ModelController {

    @Autowired
    private ModelService modelService;

        @PostMapping("/createModel")
    public ResponseEntity<Model> createAcoountModel(@RequestBody Model model) {
        Model savedmodel = modelService.createAcoountModel(model);
        return ResponseEntity.ok(savedmodel);
    }

    @GetMapping("/getmodelsbyid/{id}")
    public Model getModelsbyId(@PathVariable Long id) {
        return modelService.getModelsbyId(id);
    }

    @GetMapping("/getallmodels")
    public ResponseEntity<List<Model>> getAllModels() {
        List<Model> models = modelService.getAllModels();
        return ResponseEntity.ok(models);
    }

    @DeleteMapping("/deletemodel/{id}")
    public ResponseEntity<Void> deleteAccountModels(@PathVariable Long id) {
        modelService.deleteAccountModels(id);
        return ResponseEntity.noContent().build();
    }
    
}
