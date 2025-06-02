package com.example.Blogging_Application.service;

import com.example.Blogging_Application.entity.Blogentity;
import java.util.List;

public interface Blogservice {

    Blogentity createBlog(Blogentity blog);

    List<Blogentity> getAllBlogs();

    Blogentity getBlogById(int id);

    Blogentity editBlog(Blogentity blog, int id);

    void deleteById(int id);

}
