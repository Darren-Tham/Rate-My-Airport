package com.ratemy.rma.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ratemy.rma.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByLastName(String lastName);
  
    Comment findById(long id);
  }