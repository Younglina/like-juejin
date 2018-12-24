module.exports = app =>{
    const {router, controller} = app;
    router.get('/',controller.user.getUser);
    router.get('/fetchJuejin',controller.juejin.fetchJuejin);
    router.get('/getJuejin',controller.juejin.getJuejin);
    router.get('/category',controller.juejin.getJuejinCategory);

    router.get('/get-user',controller.user.getUser);
    router.post('/set-user',controller.user.setUser);
    router.get('/get-user-pins',controller.user.getUserPins);
    
    router.post('/add-user',controller.user.addUser);
    router.post('/add-active',controller.user.addActive);
    
    
    
}