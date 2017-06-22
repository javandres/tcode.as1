exports.getAll = function(event, context, callback) {
	if (!event.queryStringParameters.sort) {
		callback(null, {
			statusCode: 400
		});
		return;
	}
	const connection = db.connect(event.stageVariables);
	var query = connection.query('SELECT * FROM Clients ORDER BY ?', [ event.queryStringParameters.sort ], function (error, results, fields) {
		var responseCode = 200;
		var body = results;
		if (error) {
			responseCode=500;
			body=error;
		}
		db.close(connection);
		callback(null, {
			statusCode: responseCode,
			headers: { 
				"Access-Control-Allow-Origin": "*" 
			},
			body: JSON.stringify(body)
		});
	});
};