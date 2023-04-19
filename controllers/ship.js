var ship = require('../models/ship');
// List of all ships
exports.ship_list = function(req, res) {
    res.send('NOT IMPLEMENTED: ship list');
};
// for a specific ship. 
exports.ship_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await ship.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
exports.ship_list = async function(req, res) {

    try{

        theships = await ship.find();

        res.send(theships);

    }

    catch(err){

        res.status(500);

        res.send(`{"error": ${err}}`);

    }  

};
// Handle ship create on POST.
exports.ship_create_post = async function(req, res) {
    console.log(req.body)
    let document = new ship();
    document.Model = req.body.Model;
    document.yearofmanufacturing = req.body.yearofmanufacturing;
    document.color = req.body.color;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

// Handle ship delete form on DELETE.
exports.ship_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await ship.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

//Handle ship update form on PUT
exports.ship_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await ship.findById( req.params.id)
    // Do updates of properties
    if(req.body.ship)
    toUpdate.Model = req.body.Model;
    if(req.body.yearofmanufacturing) toUpdate.yearofmanufacturing = req.body.yearofmanufacturing;
    if(req.body.color) toUpdate.color = req.body.color;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

// VIEWS
// Handle a show all view

exports.ship_view_all_Page = async function(req, res) {
    try{
        theships = await ship.find();
        res.render('ship', { title: 'ship Search Results', results: theships});
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle ship delete on DELETE. 
exports.ship_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await ship.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.ship_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await ship.findById( req.query.id) 
        res.render('shipdetail',  
{ title: 'ship Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a ship. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.ship_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('shipcreate', { title: 'ship Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a ship. 
// query provides the id 
exports.ship_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await ship.findById(req.query.id) 
        res.render('shipupdate', { title: 'ship Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.ship_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await ship.findById(req.query.id) 
        res.render('shipdelete', { title: 'ship Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 // for a specific ship.
exports.ship_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await ship.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    // Handle a show one view with id specified by query
exports.ship_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await ship.findById(req.query.id)
    res.render('shipdetail',
    { title: 'ship Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };