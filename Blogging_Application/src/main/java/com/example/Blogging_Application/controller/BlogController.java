package com.example.Blogging_Application.controller;

import java.util.List;
import com.example.Blogging_Application.service.BlogserviceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Blogging_Application.entity.Blogentity;
import com.example.Blogging_Application.service.Blogservice;

@RestController
@RequestMapping("/blog")
@CrossOrigin
public class BlogController {

    private final BlogserviceImpl blogserviceImpl;

    private final Blogservice blogservice;

    @Autowired
    public BlogController(Blogservice blogservice, BlogserviceImpl blogserviceImpl) {
        this.blogservice = blogservice;
        this.blogserviceImpl = blogserviceImpl;
    }

    @PostMapping
    public Blogentity addBlog(@RequestBody Blogentity blogentity) {
        return blogservice.createBlog(blogentity);
    }

    @GetMapping
    public List<Blogentity> getAllBlogs() {
        return blogservice.getAllBlogs();
    }

    @GetMapping("/{id}")
    public Blogentity getBlogById(@PathVariable int id) {
        return blogservice.getBlogById(id);
    }

    @PutMapping("/{id}")
    public Blogentity editBlog(@RequestBody Blogentity blog, @PathVariable int id) {
        return blogservice.editBlog(blog, id);
    }

    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable int id) {
        blogservice.deleteById(id);
    }

    public static void main(String[] args) {
        SpringApplication.run(BlogController.class, args);
    }

}
