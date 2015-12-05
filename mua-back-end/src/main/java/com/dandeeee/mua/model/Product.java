package com.dandeeee.mua.model;

import javax.persistence.*;

@Entity
@Access(AccessType.FIELD)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    Long id;

    String title;
    int quantity;

    Product() {
    }

    public Product(String title, int quantity) {
        this.title = title; this.quantity = quantity;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return this.id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return this.title;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getQuantity() {
        return this.quantity;
    }

    public void updateFrom(Product newProd) {
        this.title = newProd.title;
        this.quantity = newProd.quantity;
    }
}
