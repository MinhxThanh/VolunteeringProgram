package edu.home.service.impl;

import edu.home.entity.Image;
import edu.home.repository.ImageRepository;
import edu.home.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceImpl implements ImageService {
    @Autowired
    private ImageRepository dao;
    @Override
    public Image create(String name) {
        Image image = new Image();
        image.setName(name);
        return dao.save(image);
    }

    @Override
    public Image findById(Integer imageId) {
        return dao.findById(imageId).get();
    }
}
