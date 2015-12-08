package com.dandeeee.mua.rest;

import com.dandeeee.mua.util.Util;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

@Path("file")
public class FilesResource {

    @GET
    @Path("img")
    @Produces("image/*")
    public Response getImage(@QueryParam("src") String url) {
        byte[] bytes = Util.asStream(url);
        return Response.ok(bytes).build();
    }
}