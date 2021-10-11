module.exports = (app) => {
    app.use((req, res, next) => {
        const origin = req.headers.origin;
        console.log(`origin`, origin)
        const allowedOrigin = [
            'http://localhost:3001',
            'http://localhost:3000'
        ];
        if (allowedOrigin.includes(origin)) {
            res.header("Access-Control-Allow-Origin", origin);
        };
        next();
    });
};
