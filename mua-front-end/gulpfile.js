var gulp = require('gulp');
//var plug = require('gulp-load-plugins')();
//var log = plug.util.log;
var browserSync = require("browser-sync");

var PATHS = {
    all:    'src/**/*.*',
    src:    'src/**/*.ts',
    res:    'src/**/*.css',
    html:   'src/**/*.html',
    lib:    'src/lib/*.*',
    out:    'build'
};

gulp.task('clean', function (cb) {
    //log('Cleaning: ' + plug.util.colors.blue(path.out));
    var del = require('del');
    del([PATHS.out], cb);
});

gulp.task('res', function () {
    return gulp.src(PATHS.res).pipe(gulp.dest(PATHS.out));
});

gulp.task('html', function () {
    return gulp.src(PATHS.html).pipe(gulp.dest(PATHS.out));
});

gulp.task('lib', function () {
    return gulp.src(PATHS.lib).pipe(gulp.dest(PATHS.out + '/lib'));
});

gulp.task('ts2js', function () {
    var typescript = require('gulp-typescript');
    var tsResult = gulp.src(PATHS.src)
        .pipe(typescript({
            noImplicitAny: true,
            module: 'system',
            target: 'ES5',
            moduleResolution: 'node',
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            noExternalResolve: true,
            declarationFiles: false
        }));

    return tsResult.js.pipe(gulp.dest(PATHS.out));
});

gulp.task('build', ['ts2js', 'res', 'html', 'lib']);

gulp.task('watch', function(){
    return gulp.watch(PATHS.all, ['build'])
        //.on('change',browserSync.reload);
});

gulp.task('deploy-browserSync',function () {

    browserSync({
        server: {
            baseDir: PATHS.out
        },
        tunnel: true,
        host: 'localhost',
        port: 9002,
        logPrefix: "front-end"
    });

});

gulp.task('deploy-static',function(){
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9002, app;

    app = connect().use(serveStatic(PATHS.out));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['build', 'deploy-static', 'watch']);

