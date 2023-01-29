package edu.home.service;

import edu.home.entity.Image;

public interface ImageService {
    Image create(String name);

    Image findById(Integer imageId);
}
