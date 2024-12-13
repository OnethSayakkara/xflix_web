package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class test {

    @GetMapping("/test")
    public String getMethodName(@RequestParam String param) {
        return "hello world";
    }
    
    
}
