package com.dandeeee.mua.service;

import com.dandeeee.mua.model.Product;
import com.dandeeee.mua.repo.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AppService {

    @Autowired ProductsRepository productsRepo;

    @Transactional
    public Product addProduct(Product prod) {
        return productsRepo.addProduct(prod);
    }

    @Transactional
    public List<Product> listProducts() {
        return productsRepo.listProducts();
    }

    @Transactional
    public void removeProduct(Integer id) {
        productsRepo.removeProduct(id);
    }

}