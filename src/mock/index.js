const Mock = require('mockjs')

Mock.mock('/api/getlunbo', 'get', require('./json/lunbo'))
Mock.mock('/api/getnewslist', 'get', require('./json/getnewslist'))
