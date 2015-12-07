package com.dandeeee.mua.service;

import com.dandeeee.mua.model.Attachment;
import com.dandeeee.mua.model.Product;
import com.dandeeee.mua.repo.ProductsRepository;
import com.dandeeee.mua.util.Util;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.InputStream;
import java.util.Collections;
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
    public Product getProductForId(Long id) {
        return productsRepo.get(id);
    }

    @Transactional
    public void deleteProduct(Long id) {
        productsRepo.removeProduct(id);
        Util.removeDir(id.toString());
    }

    @Transactional
    public Product updateProductForId(Long id, Product newProduct) {
        Product oldProduct = getProductForId(id);
        if(oldProduct!=null){
            oldProduct.copyFrom(newProduct);
            return productsRepo.updateProduct(newProduct);
        }
        return oldProduct;
    }

    @Transactional
    public List<Attachment> uploadAttachmentsForId(Long id, InputStream stream, FormDataContentDisposition meta) {
        String path = id + "/" + meta.getFileName();
        Product prod = getProductForId(id);
        if(prod!=null){

            prod.addAttachment(new Attachment(prod, path));
            productsRepo.updateProduct(prod);
            Util.upload(stream, id + "/", meta.getFileName());

            return prod.getAttachments();
        }

        return Collections.emptyList();
    }

    @Transactional
    public void deleteAttachment(Long productId, Long attachmentId) {
        Product prod = getProductForId(productId);
        if(prod!=null){
            Attachment a = prod.getAttchmentForId(attachmentId);
            if(a!=null){
                prod.getAttachments().remove(a);
                Util.removeDir(a.getPath());
                productsRepo.updateProduct(prod);
            }
        }
    }

    @Transactional
    public List<Attachment> getAttachmentsForProductId(Long id) {
        return productsRepo.getAttachmentsForProductId(id);
    }

}