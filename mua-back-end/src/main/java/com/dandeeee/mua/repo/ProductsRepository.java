package com.dandeeee.mua.repo;

import com.dandeeee.mua.model.Attachment;
import com.dandeeee.mua.model.Product;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductsRepository {

    @Autowired
    private SessionFactory sessionFactory;

    public Product addProduct(Product prod) {
        sessionFactory.getCurrentSession().save(prod);
        return prod;
    }

    public List<Product> listProducts() {
        return sessionFactory.getCurrentSession().createQuery("from Product").list();
    }

    public Product get(Long id) {
        return (Product) sessionFactory.getCurrentSession().get(Product.class, id);
    }

    public void removeProduct(Long id) {
        Product prod = (Product) sessionFactory.getCurrentSession().get(Product.class, id);
        if (null != prod) {
            sessionFactory.getCurrentSession().delete(prod);
        }
    }

    public Product updateProduct(Product prod) {
        sessionFactory.getCurrentSession().update(prod);
        return prod;
    }

    public List<Attachment> getAttachmentsForProductId(Long id) {
        return sessionFactory.getCurrentSession().createQuery("from Attachment where product_id="+ id).list();
    }

}
