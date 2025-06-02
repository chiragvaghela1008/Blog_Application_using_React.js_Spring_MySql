package com.example.Blogging_Application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Blogging_Application.entity.Blogentity;
import com.example.Blogging_Application.repository.Blogrepo;
import java.util.List;

@Service
public class BlogserviceImpl implements Blogservice {
    @Autowired
    private Blogrepo blogRepo;

    @Autowired
    public BlogserviceImpl(Blogrepo blogRepo) {
        this.blogRepo = blogRepo;
    }

    @Override
    public Blogentity createBlog(Blogentity blog) {
        return blogRepo.save(blog);
    }

    @Override
    public List<Blogentity> getAllBlogs() {
        return blogRepo.findAll();
    }

    @Override
    public Blogentity getBlogById(int id) {
        return blogRepo.findById(id).orElseThrow(() -> new RuntimeException("Blogs is not found"));
    }

    @Override
    public Blogentity editBlog(Blogentity blog, int id) {
        blog.setId(id);
        return blogRepo.save(blog);
    }

    @Override
    public void deleteById(int id) {
        blogRepo.deleteById(id);

    }

}
