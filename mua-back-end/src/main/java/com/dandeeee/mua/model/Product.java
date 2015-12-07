package com.dandeeee.mua.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "product", orphanRemoval = true, cascade = {CascadeType.ALL})
    List<Attachment> attachments = new ArrayList<Attachment>();

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

    public void setAttachments(List<Attachment> attach) {
        this.attachments = attach;
    }

    public List<Attachment> getAttachments() {
        return this.attachments;
    }

    public void copyFrom(Product newProd) {
        this.title = newProd.title;
        this.quantity = newProd.quantity;
        this.price = newProd.price;
        this.descr = newProd.descr;
        this.attachments = newProd.getAttachments();
    }

    public void addAttachment(Attachment attachment) {
        this.getAttachments().add(attachment);
    }

    public Attachment getAttchmentForId(Long attachmentId) {
        for(Attachment a : getAttachments())
            if(a.getId() == attachmentId)
                return a;
        return null;
    }
}
