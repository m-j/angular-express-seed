function HelloController(){
    this.get('/api/name/:id', function(req, res){
        res.send([{name : 'Super Ziomal'}]);
    });
}

module.exports = HelloController;