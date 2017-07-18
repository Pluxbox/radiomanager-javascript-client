/**
 * Pluxbox Radiomanager Client
 * Pluxbox RadioManager gives you the power, flexibility and speed you always wanted in a lightweight and easy-to-use web-based radio solution. With Pluxbox RadioManager you can organise your radio workflow and automate your omnichannel communication with your listeners. We offer wide range specialised services for the radio and connections like Hybrid Radio, Visual Radio, your website and social media without losing focus on your broadcast. For more information visit https://pluxbox.com
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
    define(['radiomanager/ApiClient', 'radiomanager/radiomanagermodels/Forbidden', 'radiomanager/radiomanagermodels/NotFound', 'radiomanager/radiomanagermodels/PostSuccess', 'radiomanager/radiomanagermodels/PresenterDataInput', 'radiomanager/radiomanagermodels/PresenterResult', 'radiomanager/radiomanagermodels/PresenterResults', 'radiomanager/radiomanagermodels/Success', 'radiomanager/radiomanagermodels/TooManyRequests', 'radiomanager/radiomanagermodels/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/Forbidden'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/PostSuccess'), require('../radiomanagermodels/PresenterDataInput'), require('../radiomanagermodels/PresenterResult'), require('../radiomanagermodels/PresenterResults'), require('../radiomanagermodels/Success'), require('../radiomanagermodels/TooManyRequests'), require('../radiomanagermodels/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.PresenterApi = factory(root.radiomanager.ApiClient, root.radiomanager.Forbidden, root.radiomanager.NotFound, root.radiomanager.PostSuccess, root.radiomanager.PresenterDataInput, root.radiomanager.PresenterResult, root.radiomanager.PresenterResults, root.radiomanager.Success, root.radiomanager.TooManyRequests, root.radiomanager.UnprocessableEntity);
  }
}(this, function(ApiClient, Forbidden, NotFound, PostSuccess, PresenterDataInput, PresenterResult, PresenterResults, Success, TooManyRequests, UnprocessableEntity) {
  'use strict';

  /**
   * Presenter service.
   * @module radiomanager/radiomanagerclient/PresenterApi
   * @version 2.0
   */

  /**
   * Constructs a new PresenterApi. 
   * @alias module:radiomanager/radiomanagerclient/PresenterApi
   * @class
   * @param {module:radiomanager/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:radiomanager/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create presenter.
     * Create presenter.
     * @param {module:radiomanager/radiomanagermodels/PresenterDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanager/radiomanagermodels/PostSuccess} and HTTP response
     */
    this.createPresenterWithHttpInfo = function(data) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createPresenter");
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
        '/presenters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create presenter.
     * Create presenter.
     * @param {module:radiomanager/radiomanagermodels/PresenterDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanager/radiomanagermodels/PostSuccess}
     */
    this.createPresenter = function(data) {
      return this.createPresenterWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete presenter by id
     * Delete presenter by id
     * @param {Number} id id of presenter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanager/radiomanagermodels/Success} and HTTP response
     */
    this.deletePresenterByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletePresenterById");
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
        '/presenters/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete presenter by id
     * Delete presenter by id
     * @param {Number} id id of presenter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanager/radiomanagermodels/Success}
     */
    this.deletePresenterById = function(id) {
      return this.deletePresenterByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get presenter by id
     * Get presenter by id
     * @param {Number} id id of Presenter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanager/radiomanagermodels/PresenterResult} and HTTP response
     */
    this.getPresenterByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPresenterById");
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
      var returnType = PresenterResult;

      return this.apiClient.callApi(
        '/presenters/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get presenter by id
     * Get presenter by id
     * @param {Number} id id of Presenter
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanager/radiomanagermodels/PresenterResult}
     */
    this.getPresenterById = function(id, opts) {
      return this.getPresenterByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all presenters.
     * List all presenters.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)*
     * @param {Number} opts.modelTypeId Search on ModelType ID (Optional)
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanager/radiomanagermodels/PresenterResults} and HTTP response
     */
    this.listPresentersWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'model_type_id': opts['modelTypeId'],
        'program_id': opts['programId'],
        'broadcast_id': opts['broadcastId'],
        '_external_station_id': opts['externalStationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PresenterResults;

      return this.apiClient.callApi(
        '/presenters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all presenters.
     * List all presenters.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)*
     * @param {Number} opts.modelTypeId Search on ModelType ID (Optional)
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanager/radiomanagermodels/PresenterResults}
     */
    this.listPresenters = function(opts) {
      return this.listPresentersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update presenter by id
     * Update presenter by id
     * @param {Number} id id of Presenter
     * @param {Object} opts Optional parameters
     * @param {module:radiomanager/radiomanagermodels/PresenterDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanager/radiomanagermodels/Success} and HTTP response
     */
    this.updatePresenterByIDWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePresenterByID");
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
        '/presenters/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update presenter by id
     * Update presenter by id
     * @param {Number} id id of Presenter
     * @param {Object} opts Optional parameters
     * @param {module:radiomanager/radiomanagermodels/PresenterDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanager/radiomanagermodels/Success}
     */
    this.updatePresenterByID = function(id, opts) {
      return this.updatePresenterByIDWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
