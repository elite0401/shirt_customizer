module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

	var mysql      = require('mysql');
	var connection = require('../config/db');

	app.get('/customize', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.post('/order', function(req, res) {
		var body = req.body;
		var query = "INSERT INTO tbl_orders (order_id, customer_id, fabric_id, quality, collar_style, collar_height, collar_stiffness, cuff_preferance, cuff_sleeve_tab_buttons, cuff_pleats, front_pocket, front_pocket_style, back_pleats, back_tail, back_tail_length, back_yoke, buttons_button, buttons_stitching_style, extra_id, measurement_id, created) ";
		query += "VALUES('"+body.order_id+"', '"+body.customer_id+"', '"+body.fabric_id+"', '"+body.quality+"', '"+body.collar_style+"', '"+body.collar_height+"', '"+body.collar_stiffness+"', '"+body.cuff_preferance+"', '"+body.cuff_sleeve_tab_buttons+"', '"+body.cuff_pleats+"', '"+body.front_pocket+"', '"+body.front_pocket_style+"', '"+body.back_pleats+"', '"+body.back_tail+"', '"+body.back_tail_length+"', '"+body.back_yoke+"', '"+body.buttons_button+"', '"+body.buttons_stitching_style+"', '"+body.extra_id+"', '"+body.measurement_id+"', NOW())";
		connection.query(query, function(err, results, fields) {
			if (err) throw err;
			res.json({result: results});
		});
	});

	app.get('/order', function(req, res) {
		var order_id = req.query.order_id;
		var query = "SELECT * FROM tbl_orders WHERE `order_id`='" + order_id + "'";
		connection.query(query, function(err, rows, fields) {
			if (err) throw err;
			res.json({result: rows});
		});
	});

	app.get('/fabrics', function(req, res) {
		var query = "SELECT * FROM tbl_schema_fabric";
		connection.query(query, function(err, rows, fields) {
			if (err) throw err;
			res.json({result: rows});
		});
	});

	app.post('/fabrics', function(req, res) {
		var body = req.body;
		var query = "INSERT INTO tbl_schema_fabric (name, description, image, active) ";
		query += "VALUES('"+body.name+"', '"+body.description+"', '"+body.image+"', '"+body.active+"')";
		connection.query(query, function(err, results, fields) {
			if (err) throw err;
			res.json({result: results});
		});
	});

	app.delete('/fabrics/:fabricId', function(req, res) {
		var id = req.params.fabricId;
		var query = "DELETE FROM tbl_schema_fabric WHERE id='"+id+"'";
		connection.query(query, function(err, results, fields) {
			if (err) throw err;
			res.json({result: results});
		});
	});

	app.put('/fabrics/:fabricId', function(req, res) {
		var fabricId = req.params.fabricId;
		var body = req.body;
		var query = "UPDATE tbl_schema_fabric SET name='"+body.name+"', description='"+body.description+"', image='"+body.image+"', active='"+body.active+"' WHERE id='"+fabricId+"'";
		connection.query(query, function(err, results, fields) {
			if (err) throw err;
			res.json({result: results});
		});
	});

};