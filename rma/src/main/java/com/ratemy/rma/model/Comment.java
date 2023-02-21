package com.ratemy.rma.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "comments", schema="airports")
public class Comment {

	private long id;
	private String iata;
	private String airport;
	private float rating;
	private float cleanliness;
	private float efficiency;
	private float amenities;
	private float customerservice;
	private long date;

	public Comment(){

	}

	public Comment(String iata, String airport, float rating, long date, float cleanliness, float amenities, float customerservice) {
		this.iata = iata;
		this.airport = airport;
		this.rating = rating;
		this.date = date;
		this.cleanliness = cleanliness;
		this.amenities = amenities;
		this.customerservice = customerservice;
   }

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
	   public long getId() {
	   return id;
   }
   public void setId(long id) {
	   this.id = id;
   }

   
   @Column(name = "iata", nullable = false)
   public String getIATA() {
	   return iata;
   }
   public void setIATA(String iata) {
	   this.iata = iata;
   }


   @Column(name = "airport", nullable = false)
   public String getAirport() {
	   return airport;
   }
   public void setAirport(String airport) {
	   this.airport = airport;
   }


   @Column(name = "date", nullable = false)
   public long getDate() {
	   return date;
   }
   public void setDate(long date) {
	   this.date = date;
   }


   @Column(name = "rating", nullable = false)
   public float getRating() {
	   return rating;
   }
   public void setRating(float rating) {
	   this.rating = rating;
   }


   @Column(name = "cleanliness", nullable = false)
   public float getCleanliness() {
	   return cleanliness;
   }
   public void setCleanliness(float cleanliness) {
	   this.cleanliness = cleanliness;
   }
   

   @Column(name = "efficiency", nullable = false)
   public float getEfficiency() {
	   return efficiency;
   }
   public void setEfficiency(float efficiency) {
	   this.efficiency = efficiency;
   }
   

   @Column(name = "amenities", nullable = false)
   public float getAmenities() {
	   return amenities;
   }
   public void setAmenities(float amenities) {
	   this.amenities = amenities;
   }


   @Column(name = "customerservice", nullable = false)
   public float getCustomerService() {
	   return customerservice;
   }
   public void setCustomerService(float customerservice) {
	   this.customerservice = customerservice;
   }

   @Override
   public String toString() {
	   return "Comment [id=" + id + ", iata=" + iata + ", airport=" + airport + ", date=" + date + ", cleanliness=" + cleanliness + ", amenities=" + amenities + ", customerservice=" + customerservice
	  + "]";
   }
}

