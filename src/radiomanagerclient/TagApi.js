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
    define(['ApiClient', 'radiomanagermodels/Forbidden', 'radiomanagermodels/NotFound', 'radiomanagermodels/PostSuccess', 'radiomanagermodels/Success', 'radiomanagermodels/TagDataInput', 'radiomanagermodels/TagResult', 'radiomanagermodels/TagResults', 'radiomanagermodels/TooManyRequests', 'radiomanagermodels/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/Forbidden'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/PostSuccess'), require('../radiomanagermodels/Success'), require('../radiomanagermodels/TagDataInput'), require('../radiomanagermodels/TagResult'), require('../radiomanagermodels/TagResults'), require('../radiomanagermodels/TooManyRequests'), require('../radiomanagermodels/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.TagApi = factory(root.radiomanager.ApiClient, root.radiomanager.Forbidden, root.radiomanager.NotFound, root.radiomanager.PostSuccess, root.radiomanager.Success, root.radiomanager.TagDataInput, root.radiomanager.TagResult, root.radiomanager.TagResults, root.radiomanager.TooManyRequests, root.radiomanager.UnprocessableEntity);
  }
}(this, function(ApiClient, Forbidden, NotFound, PostSuccess, Success, TagDataInput, TagResult, TagResults, TooManyRequests, UnprocessableEntity) {
  'use strict';

  /**
   * Tag service.
   * @module radiomanagerclient/TagApi
   * @version 2.0
   */

  /**
   * Constructs a new TagApi. 
   * @alias module:radiomanagerclient/TagApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create tag.
     * Create tag.
     * @param {module:radiomanagermodels/TagDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/PostSuccess} and HTTP response
     */
    this.createTagWithHttpInfo = function(data) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createTag");
      }


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
      var returnType = PostSuccess;

      return this.apiClient.callApi(
        '/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create tag.
     * Create tag.
     * @param {module:radiomanagermodels/TagDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/PostSuccess}
     */
    this.createTag = function(data) {
      return this.createTagWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete tag by id
     * Delete tag by id
     * @param {Number} id ID of Tag **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.deleteTagByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTagById");
      }


      var pathParams = {
        'id': id
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
      var returnType = Success;

      return this.apiClient.callApi(
        '/tags/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete tag by id
     * Delete tag by id
     * @param {Number} id ID of Tag **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.deleteTagById = function(id) {
      return this.deleteTagByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get tags by id
     * Get tags by id
     * @param {Number} id ID of Tag **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/TagResult} and HTTP response
     */
    this.getTagByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTagById");
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
      var returnType = TagResult;

      return this.apiClient.callApi(
        '/tags/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get tags by id
     * Get tags by id
     * @param {Number} id ID of Tag **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/TagResult}
     */
    this.getTagById = function(id, opts) {
      return this.getTagByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of all the tags currently in your station.
     * Get a list of all the tags currently in your station. This feature supports pagination and will give a maximum results of 50 tags back.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)*
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.contactId Search on Contact ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.limit Results per page *(Optional)*
     * @param {String} opts.orderBy Field to order the results *(Optional)*
     * @param {module:radiomanagermodels/String} opts.orderDirection Direction of ordering *(Optional)*
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/TagResults} and HTTP response
     */
    this.listTagsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'program_id': opts['programId'],
        'item_id': opts['itemId'],
        'broadcast_id': opts['broadcastId'],
        'contact_id': opts['contactId'],
        'limit': opts['limit'],
        'order-by': opts['orderBy'],
        'order-direction': opts['orderDirection'],
        '_external_station_id': opts['externalStationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TagResults;

      return this.apiClient.callApi(
        '/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of all the tags currently in your station.
     * Get a list of all the tags currently in your station. This feature supports pagination and will give a maximum results of 50 tags back.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)*
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.contactId Search on Contact ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.limit Results per page *(Optional)*
     * @param {String} opts.orderBy Field to order the results *(Optional)*
     * @param {module:radiomanagermodels/String} opts.orderDirection Direction of ordering *(Optional)*
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/TagResults}
     */
    this.listTags = function(opts) {
      return this.listTagsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update tag by id
     * Update tag by id
     * @param {Number} id ID of Tag **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/TagDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.updateTagByIDWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateTagByID");
      }


      var pathParams = {
        'id': id
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
      var returnType = Success;

      return this.apiClient.callApi(
        '/tags/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update tag by id
     * Update tag by id
     * @param {Number} id ID of Tag **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/TagDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.updateTagByID = function(id, opts) {
      return this.updateTagByIDWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
