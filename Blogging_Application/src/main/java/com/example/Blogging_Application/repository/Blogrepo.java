package com.example.Blogging_Application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Blogging_Application.entity.Blogentity;

public interface Blogrepo extends JpaRepository<Blogentity, Integer> {

}
