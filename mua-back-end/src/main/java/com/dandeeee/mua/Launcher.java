package com.dandeeee.mua;

import org.eclipse.jetty.server.ConnectionFactory;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.webapp.WebAppContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.net.URISyntaxException;

public class Launcher {
    private static final Logger LOG =  LoggerFactory.getLogger("root");

    static final String WAR_PATH  = "./mua-back-end/src/main/webapp";
    static final String RESOURCE_PATH  = "./mua-front-end/build";
    static final int DEFAULT_PORT= 9090;

    private int port;
    private Server server;
    private URI serverURI;

    public static void main(String[] args) throws Exception {

        long startTime = System.currentTimeMillis();

        Launcher launcher = new Launcher(DEFAULT_PORT);
        launcher.startWebApp();

        long endTime = System.currentTimeMillis();

        LOG.info("Application started in @" + (endTime - startTime) + "ms.");
        LOG.info("Server URI: " + launcher.serverURI);

        launcher.waitForInterrupt();
    }

    public Launcher(int port){
        this.port = port;
        this.server = new Server();
    }

    public void startWebApp() throws Exception {
        WebAppContext webAppContext = createWebAppContext();

        ServerConnector connector = this.createConnector();
        this.server.addConnector(connector);

        server.setHandler(webAppContext);
        this.server.start();
        this.serverURI = getServerUri(connector);
    }

    private ServerConnector createConnector() {
        ServerConnector connector = new ServerConnector(server);
        connector.setPort(port);
        return connector;
    }

    /**
     * Setup the basic application "context" for this application at "/"
     * This is also known as the handler tree (in jetty speak)
     */
    private WebAppContext createWebAppContext() {
        WebAppContext context = new WebAppContext();

        context.setContextPath("/");
        context.setWar(WAR_PATH);

        unlockFSChanging(context);
        context.addServlet(defaultServletHolder(RESOURCE_PATH), "/");

        return context;
    }

    /**
     * Create Default Servlet (must be named "default")
     */
    private ServletHolder defaultServletHolder(String resourceBase) {
        ServletHolder holderDefault = new ServletHolder("default", DefaultServlet.class);
        holderDefault.setInitParameter("resourceBase", resourceBase);
        holderDefault.setInitParameter("dirAllowed", "true");
        return holderDefault;
    }


    /**
     * Establish the Server URI
     */
    private URI getServerUri(ServerConnector connector) throws URISyntaxException {
        String scheme = "http";
        for (ConnectionFactory connectFactory : connector.getConnectionFactories()) {
            if (connectFactory.getProtocol().equals("SSL-http")) {
                scheme = "https";
            }
        }
        String host = connector.getHost();
        if (host == null) {
            host = "localhost";
        }
        int port = connector.getLocalPort();
        serverURI = new URI(String.format("%s://%s:%d/", scheme, host, port));

        return serverURI;
    }

    /**
     * Fix for Windows, so Jetty doesn't lock files
     */
    private void unlockFSChanging(WebAppContext ctx) {
        if (System.getProperty("os.name").toLowerCase().contains("windows")) {
            ctx.getInitParams().put("org.eclipse.jetty.servlet.Default.useFileMappedBuffer", "false");
        }
    }


    /**
     * Cause server to keep running until it receives a Interrupt.
     * Interrupt Signal, or SIGINT (Unix Signal), is typically seen as a result of a kill -TERM {pid} or Ctrl+C
     */
    public void waitForInterrupt() throws InterruptedException {
        server.join();
    }




}
