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
 * Swagger Codegen version: 2.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'radiomanagermodels/Forbidden', 'radiomanagermodels/NotFound', 'radiomanagermodels/PostSuccess', 'radiomanagermodels/StoryDataInput', 'radiomanagermodels/StoryResult', 'radiomanagermodels/StoryResults', 'radiomanagermodels/Success', 'radiomanagermodels/TooManyRequests', 'radiomanagermodels/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/Forbidden'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/PostSuccess'), require('../radiomanagermodels/StoryDataInput'), require('../radiomanagermodels/StoryResult'), require('../radiomanagermodels/StoryResults'), require('../radiomanagermodels/Success'), require('../radiomanagermodels/TooManyRequests'), require('../radiomanagermodels/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.StoryApi = factory(root.radiomanager.ApiClient, root.radiomanager.Forbidden, root.radiomanager.NotFound, root.radiomanager.PostSuccess, root.radiomanager.StoryDataInput, root.radiomanager.StoryResult, root.radiomanager.StoryResults, root.radiomanager.Success, root.radiomanager.TooManyRequests, root.radiomanager.UnprocessableEntity);
  }
}(this, function(ApiClient, Forbidden, NotFound, PostSuccess, StoryDataInput, StoryResult, StoryResults, Success, TooManyRequests, UnprocessableEntity) {
  'use strict';

  /**
   * Story service.
   * @module radiomanagerclient/StoryApi
   * @version 2.0
   */

  /**
   * Constructs a new StoryApi. 
   * @alias module:radiomanagerclient/StoryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create story.
     * Create story.
     * @param {module:radiomanagermodels/StoryDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/PostSuccess} and HTTP response
     */
    this.createStoryWithHttpInfo = function(data) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createStory");
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
        '/stories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create story.
     * Create story.
     * @param {module:radiomanagermodels/StoryDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/PostSuccess}
     */
    this.createStory = function(data) {
      return this.createStoryWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete story by id
     * Delete story by id
     * @param {Number} id ID of Story **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.deleteStoryByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteStoryById");
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
        '/stories/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete story by id
     * Delete story by id
     * @param {Number} id ID of Story **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.deleteStoryById = function(id) {
      return this.deleteStoryByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get story by id
     * Get story by id
     * @param {Number} id ID of Story **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/StoryResult} and HTTP response
     */
    this.getStoryByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStoryById");
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
      var returnType = StoryResult;

      return this.apiClient.callApi(
        '/stories/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get story by id
     * Get story by id
     * @param {Number} id ID of Story **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/StoryResult}
     */
    this.getStoryById = function(id, opts) {
      return this.getStoryByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all stories.
     * List all stories.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/StoryResults} and HTTP response
     */
    this.listStoriesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'model_type_id': opts['modelTypeId'],
        'tag_id': opts['tagId'],
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
      var returnType = StoryResults;

      return this.apiClient.callApi(
        '/stories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all stories.
     * List all stories.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/StoryResults}
     */
    this.listStories = function(opts) {
      return this.listStoriesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update story by id
     * Update story by id
     * @param {Number} id ID of Story **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/StoryDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.updateStoryByIDWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateStoryByID");
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
        '/stories/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update story by id
     * Update story by id
     * @param {Number} id ID of Story **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/StoryDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.updateStoryByID = function(id, opts) {
      return this.updateStoryByIDWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));