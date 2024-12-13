package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Video;
import com.example.demo.repository.VideoRepository;

@Service
public class VideoServiceImpl implements VideoService {

    @Autowired
    private VideoRepository videoRepository;

    @Override
    public Video createVideo(Video video) {
        return videoRepository.save(video); // Save the video to the database
    }

    @Override
    public Video getVideoById(Long id) {
        return videoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Video not found with id: " + id)); // Fetch video by ID
    }

    @Override
    public List<Video> getAllVideos() {
        return videoRepository.findAll(); // Retrieve all videos
    }

    @Override
    public void deleteVideo(Long id) {
        videoRepository.deleteById(id); // Delete video by ID
    }
}