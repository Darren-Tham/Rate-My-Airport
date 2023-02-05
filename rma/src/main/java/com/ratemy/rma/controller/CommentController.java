package com.ratemy.rma.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ratemy.rma.exception.ResourceNotFoundException;
import com.ratemy.rma.model.Comment;
import com.ratemy.rma.repository.CommentRepository;

@RestController
@RequestMapping("/api/airport/reviews")
public class CommentController {

	@Autowired
    private CommentRepository CommentRepository;

	@GetMapping("/comments")
    public List<Comment> getAllComments() {
        return CommentRepository.findAll();
	}
    @GetMapping("/comments/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable(value = "id") Long commentId)
        throws ResourceNotFoundException {
        Comment comment = CommentRepository.findById(commentId)
          .orElseThrow(() -> new ResourceNotFoundException("Comment not found for this id :: " + commentId));
        return ResponseEntity.ok().body(comment);
    }
	@PostMapping("/comments")
    public Comment createComment(@Valid @RequestBody Comment comment) {
        return CommentRepository.save(comment);
    }


	@PutMapping("/comments/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable(value = "id") Long commentId,
        @Valid @RequestBody Comment commentDetails) throws ResourceNotFoundException {
        Comment comment = CommentRepository.findById(commentId)
        .orElseThrow(() -> new ResourceNotFoundException("Comment not found for this id :: " + commentId));

        comment.setIATA(commentDetails.getIATA());
        comment.setAirport(commentDetails.getAirport());
        comment.setDate(commentDetails.getDate());
		comment.setRating(commentDetails.getRating());
		comment.setCleanliness(commentDetails.getCleanliness());
		comment.setEfficiency(commentDetails.getEfficiency());
		comment.setAmenities(commentDetails.getAmenities());
		comment.setCustomerService(commentDetails.getCustomerService());
        final Comment updatedComment = CommentRepository.save(comment);
        return ResponseEntity.ok(updatedComment);
    }
    @DeleteMapping("/comments/{id}")
    public Map<String, Boolean> deleteComment(@PathVariable(value = "id") Long commentId)
         throws ResourceNotFoundException {
        Comment comment = CommentRepository.findById(commentId)
       .orElseThrow(() -> new ResourceNotFoundException("Comment not found for this id :: " + commentId));

        CommentRepository.delete(comment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
