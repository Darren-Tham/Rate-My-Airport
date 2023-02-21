package com.ratemy.rma.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ratemy.rma.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
  }