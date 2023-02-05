package com.ratemy.rma.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ratemy.rma.model.CommentModel;

public interface CommentRepository extends JpaRepository<CommentModel, Long> {
  }