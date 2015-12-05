package com.dandeeee.mua.rest;

import com.dandeeee.mua.model.Product;
import com.dandeeee.mua.service.AppService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("products")
@Produces(MediaType.APPLICATION_JSON)
public class ProductResource extends SpringAwareResource {

    @Autowired private AppService appService;

    @GET
    public List<Product> getAllProducts() {
        return appService.listProducts();
    }

    @GET
    @Path("{id}")
    public Product getProductForId(@PathParam("id") Long id) {
        return appService.getProductForId(id);
    }

    @POST
    public Product newPhotoSpot(@FormParam("title") String title, @FormParam("quantity") int quantity) {
        return appService.addProduct(new Product(title, quantity));
    }

}

