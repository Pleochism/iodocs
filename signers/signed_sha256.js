var cryptoHash = require('./common/crypto_hash.js');

var signRequest = function(httpMethod, url, requestBody, options, apiKey, apiSecret, signatureConfig) {
    cryptoHash.signRequest('sha256', options, apiKey, apiSecret, signatureConfig);
};

exports.signRequest = signRequest;