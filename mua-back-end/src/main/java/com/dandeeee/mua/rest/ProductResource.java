package com.dandeeee.mua.rest;

import com.dandeeee.mua.model.Attachment;
import com.dandeeee.mua.model.Product;
import com.dandeeee.mua.service.AppService;
import org.glassfish.jersey.media.multipart.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.InputStream;
import java.util.List;

@Path("products")
@Produces(MediaType.APPLICATION_JSON)
public class ProductResource extends SpringAwareResource {

    @Autowired private AppService appService;

    @GET
    public List<Product> getAllProducts() {
        return appService.listProducts();
    }

    @POST
    public Product createProduct(@FormParam("title") String title,
                                 @FormParam("quantity") int quantity,
                                 @FormParam("price") int price,
                                 @FormParam("descr") String descr) {
        return appService.addProduct(new Product(title, quantity, price, descr));
    }

    @GET
    @Path("{id}")
    public Product getProductForId(@PathParam("id") Long id) {
        return appService.getProductForId(id);
    }

    @PUT
    @Path("{id}")
    public Product updateProduct(@PathParam("id") Long id,
                                 @FormParam("title") String title,
                                 @FormParam("quantity") int quantity,
                                 @FormParam("price") int price,
                                 @FormParam("descr") String descr) {
        return appService.updateProductForId(id, new Product(title, quantity, price, descr));
    }

    @DELETE
    @Path("{id}")
    public void deleteProduct(@PathParam("id") Long id){
        appService.deleteProduct(id);
    }

    @GET
    @Path("{id}/attachments")
    public List<Attachment> getAttachmentsForProductId(@PathParam("id") Long id){
        return appService.getAttachmentsForProductId(id);
    }

    @POST
    @Path("{id}/attachments")
    public List<Attachment> addAttachmentsForProductId(@PathParam("id") Long id,
                                                       @FormDataParam("file") InputStream stream,
                                                       @FormDataParam("file") FormDataContentDisposition meta){
        return appService.uploadAttachmentsForId(id, stream, meta);
    }

    @DELETE
    @Path("{id}/attachments/{attachmentId}")
    public void deleteAttachment(@PathParam("id") Long id,
                                 @PathParam("attachmentId") Long attachmentId){
        appService.deleteAttachment(id, attachmentId);
    }

}

