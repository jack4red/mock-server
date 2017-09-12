'use strict';

const mockjs = require('mockjs');

module.exports = (app) => {
    app.get('/test',function(req, res) {
        var data = mockjs.mock({
            'current':2222,
            'total|400':1,
            'data|4':[
                {
                    'name':/[a-z]{3}/,
                    'sex|1':false,
                    'tel':/\d{8}/,
                    'key|+1':1,
                }
            ]
        });
        res.json({
            "success": true,
            "data": data
        });
    })
};