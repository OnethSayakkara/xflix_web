package com.example.demo.service;

import java.util.List;
import com.example.demo.entity.Video;

public interface VideoService {
    
    Video createVideo(Video video);
    Video getVideoById(Long id);
    List<Video> getAllVideos();
    void deleteVideo(Long id);
}