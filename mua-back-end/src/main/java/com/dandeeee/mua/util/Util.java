package com.dandeeee.mua.util;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class Util {

    public static final String ROOT_PATH = "./mua-data/";

    public static void upload(InputStream is, String dir, String name) {
        doUpload(is, Paths.get(ROOT_PATH + dir), name);
    }

    private static void doUpload(InputStream stream, Path dir, String name) {
        checkDir(dir);
        try {
            Files.copy(stream, Paths.get(dir + "/" + name), StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void checkDir(Path path) {
        if (!Files.exists(path)) {
            try {
                Files.createDirectory(path);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void removeDir(String location) {
        Path path = Paths.get(ROOT_PATH + location);
        try {
            if(Files.isDirectory(path)){
                Files.walk(path).forEach(filePath -> {
                    try {
                        Files.delete(filePath);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });
            }
            Files.delete(path);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
