package com.ratemy.rma.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
public class Comment {
@Entity
@Table(name = "Comment", schema="airports")
public class Atlanta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;

	@Column(name = "Airport")
	private String airport;

	@Column(name = "IATA")
	private String iata;

	@Column(name = "Rating")
	private int rating;

	@Column(name = "Date")
	private String date;
}
}


