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
    int price;
    String descr;

    Product() {
    }

    public Product(String title, int quantity, int price, String descr) {
        this.title = title;
        this.quantity = quantity;
        this.price = price;
        this.descr = descr;
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

    public void setPrice(int price) {
        this.price = price;
    }

    public int getPrice() {
        return this.price;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public String getDescr() {
        return this.descr;
    }

    public void updateFrom(Product newProd) {
        this.title = newProd.title;
        this.quantity = newProd.quantity;
        this.price = newProd.price;
        this.descr = newProd.descr;
    }
}
