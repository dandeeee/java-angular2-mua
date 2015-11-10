package com.dandeeee.mua.rest;

import com.dandeeee.mua.model.Message;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("hello")
public class HelloWorldResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Message getHello() {
        try {
            Thread.sleep(4000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return new Message("Hello MUA!");
    }
}