package com.dandeeee.mua.model;

import org.eclipse.persistence.oxm.annotations.XmlInverseReference;

import javax.persistence.*;

@Entity
@Access(AccessType.FIELD)
public class Attachment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @XmlInverseReference(mappedBy = "attachments")
    Product product;

    String path;
//    String type;

    Attachment(){
    }

    public Attachment(Product product, String path) {
        this.product = product;
        this.path = path;
//        this.type = type;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return this.product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getPath() {
        return this.path;
    }

    public void setPath(String path) {
        this.path = path;
    }

//    public String getType() {
//        return this.type;
//    }

//    public void setType(String type) {
//        this.type = type;
//    }
}
