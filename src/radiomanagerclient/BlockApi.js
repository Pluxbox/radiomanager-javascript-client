/**
 * RadioManager
 * RadioManager
 *
 * OpenAPI spec version: 2.0
 * Contact: support@pluxbox.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'radiomanagermodels/BlockResult', 'radiomanagermodels/BlockResults', 'radiomanagermodels/Forbidden', 'radiomanagermodels/NotFound', 'radiomanagermodels/TooManyRequests'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/BlockResult'), require('../radiomanagermodels/BlockResults'), require('../radiomanagermodels/Forbidden'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/TooManyRequests'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BlockApi = factory(root.radiomanager.ApiClient, root.radiomanager.BlockResult, root.radiomanager.BlockResults, root.radiomanager.Forbidden, root.radiomanager.NotFound, root.radiomanager.TooManyRequests);
  }
}(this, function(ApiClient, BlockResult, BlockResults, Forbidden, NotFound, TooManyRequests) {
  'use strict';

  /**
   * Block service.
   * @module radiomanagerclient/BlockApi
   * @version 2.0
   */

  /**
   * Constructs a new BlockApi. 
   * @alias module:radiomanagerclient/BlockApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get block by id
     * Get block by id
     * @param {Number} id ID of Block **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/BlockResult} and HTTP response
     */
    this.getBlockByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBlockById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        '_external_station_id': opts['externalStationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BlockResult;

      return this.apiClient.callApi(
        '/blocks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get block by id
     * Get block by id
     * @param {Number} id ID of Block **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/BlockResult}
     */
    this.getBlockById = function(id, opts) {
      return this.getBlockByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get current Block
     * Get current Block
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/BlockResult} and HTTP response
     */
    this.getCurrentBlockWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BlockResult;

      return this.apiClient.callApi(
        '/blocks/current', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get current Block
     * Get current Block
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/BlockResult}
     */
    this.getCurrentBlock = function() {
      return this.getCurrentBlockWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get next Block
     * Get next Block
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/BlockResult} and HTTP response
     */
    this.getNextBlockWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BlockResult;

      return this.apiClient.callApi(
        '/blocks/next', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get next Block
     * Get next Block
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/BlockResult}
     */
    this.getNextBlock = function() {
      return this.getNextBlockWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of all blocks currently in your station.
     * Get a list of all blocks currently in your station. This feature supports pagination and will give a maximum of 50 blocks back.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Date} opts.startMin Minimum start date *(Optional)*
     * @param {Date} opts.startMax Maximum start date *(Optional)*
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/BlockResults} and HTTP response
     */
    this.listBlocksWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'start-min': opts['startMin'],
        'start-max': opts['startMax'],
        'broadcast_id': opts['broadcastId'],
        'program_id': opts['programId'],
        'item_id': opts['itemId'],
        '_external_station_id': opts['externalStationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BlockResults;

      return this.apiClient.callApi(
        '/blocks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of all blocks currently in your station.
     * Get a list of all blocks currently in your station. This feature supports pagination and will give a maximum of 50 blocks back.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Date} opts.startMin Minimum start date *(Optional)*
     * @param {Date} opts.startMax Maximum start date *(Optional)*
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/BlockResults}
     */
    this.listBlocks = function(opts) {
      return this.listBlocksWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
