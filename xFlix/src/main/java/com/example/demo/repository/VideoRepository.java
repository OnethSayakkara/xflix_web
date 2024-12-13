package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
    
    
}