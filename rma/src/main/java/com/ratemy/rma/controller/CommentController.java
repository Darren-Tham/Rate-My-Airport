package com.ratemy.rma.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ratemy.rma.model.Comment;


public class CommentController {
    
    @RestController
@RequestMapping("/api")
public class CommentController {
	@Autowired
        YoutubeService ytService;

		@PostMapping(value="/playlist/add/yt")
		public YoutubeModel createYoutube(@RequestBody YoutubeModel yt) {
			return ytService.createYoutube(yt);
		}


		@GetMapping(value="/playlist/add/yt")
			public List<YoutubeModel> readYoutube() {
    		return ytService.getYoutube();
		}


		@PutMapping(value="/playlist/add/yt/{ytId}")
			public YoutubeModel readYoutube(@PathVariable(value = "ytId") Long id, @RequestBody YoutubeModel ytDetails) {
    		return ytService.updateYoutube(id, ytDetails);
		}


		@DeleteMapping(value="/playlist/add/yt/{ytId}")
			public void deleteYoutube(@PathVariable(value = "ytId") Long id) {
		    ytService.deleteYoutube(id);
		}
}

}
