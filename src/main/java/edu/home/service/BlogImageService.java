package edu.home.service;

import edu.home.common.entity.BlogImageList;
import edu.home.entity.BlogImage;
import edu.home.entity.Image;

import java.util.List;

public interface BlogImageService {
    BlogImage create(Integer id, Integer image);

    List<BlogImageList> findAllImage();
}
