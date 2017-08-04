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
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'radiomanagermodels/Forbidden', 'radiomanagermodels/NotFound', 'radiomanagermodels/PostSuccess', 'radiomanagermodels/ProgramDataInput', 'radiomanagermodels/ProgramResult', 'radiomanagermodels/ProgramResults', 'radiomanagermodels/Success', 'radiomanagermodels/TooManyRequests', 'radiomanagermodels/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/Forbidden'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/PostSuccess'), require('../radiomanagermodels/ProgramDataInput'), require('../radiomanagermodels/ProgramResult'), require('../radiomanagermodels/ProgramResults'), require('../radiomanagermodels/Success'), require('../radiomanagermodels/TooManyRequests'), require('../radiomanagermodels/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ProgramApi = factory(root.radiomanager.ApiClient, root.radiomanager.Forbidden, root.radiomanager.NotFound, root.radiomanager.PostSuccess, root.radiomanager.ProgramDataInput, root.radiomanager.ProgramResult, root.radiomanager.ProgramResults, root.radiomanager.Success, root.radiomanager.TooManyRequests, root.radiomanager.UnprocessableEntity);
  }
}(this, function(ApiClient, Forbidden, NotFound, PostSuccess, ProgramDataInput, ProgramResult, ProgramResults, Success, TooManyRequests, UnprocessableEntity) {
  'use strict';

  /**
   * Program service.
   * @module radiomanagerclient/ProgramApi
   * @version 2.0
   */

  /**
   * Constructs a new ProgramApi. 
   * @alias module:radiomanagerclient/ProgramApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create program.
     * Create program.
     * @param {module:radiomanagermodels/ProgramDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/PostSuccess} and HTTP response
     */
    this.createProgramWithHttpInfo = function(data) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createProgram");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/programs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create program.
     * Create program.
     * @param {module:radiomanagermodels/ProgramDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/PostSuccess}
     */
    this.createProgram = function(data) {
      return this.createProgramWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete program by id
     * Delete program by id
     * @param {Number} id ID of program **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.deleteProgramByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProgramById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/programs/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete program by id
     * Delete program by id
     * @param {Number} id ID of program **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.deleteProgramById = function(id) {
      return this.deleteProgramByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get program by id
     * Get program by id
     * @param {Number} id ID of Program **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/ProgramResult} and HTTP response
     */
    this.getProgramByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProgramById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        '_external_station_id': opts['externalStationId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProgramResult;

      return this.apiClient.callApi(
        '/programs/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get program by id
     * Get program by id
     * @param {Number} id ID of Program **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/ProgramResult}
     */
    this.getProgramById = function(id, opts) {
      return this.getProgramByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all programs.
     * List all programs.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)*
     * @param {Number} opts.genreId Search on Genre ID *(Optional)*
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.presenterId Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.blockId Search on Block ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/ProgramResults} and HTTP response
     */
    this.listProgramsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'genre_id': opts['genreId'],
        'model_type_id': opts['modelTypeId'],
        'presenter_id': opts['presenterId'],
        'tag_id': opts['tagId'],
        'broadcast_id': opts['broadcastId'],
        'item_id': opts['itemId'],
        'block_id': opts['blockId'],
        '_external_station_id': opts['externalStationId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ProgramResults;

      return this.apiClient.callApi(
        '/programs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all programs.
     * List all programs.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)*
     * @param {Number} opts.genreId Search on Genre ID *(Optional)*
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.presenterId Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.blockId Search on Block ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/ProgramResults}
     */
    this.listPrograms = function(opts) {
      return this.listProgramsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update program by id
     * Update program by id
     * @param {Number} id ID of Program **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ProgramDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.updateProgramByIDWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateProgramByID");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/programs/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update program by id
     * Update program by id
     * @param {Number} id ID of Program **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ProgramDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.updateProgramByID = function(id, opts) {
      return this.updateProgramByIDWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
