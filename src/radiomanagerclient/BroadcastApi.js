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
    define(['ApiClient', 'radiomanagermodels/Broadcast', 'radiomanagermodels/BroadcastDataInput', 'radiomanagermodels/BroadcastResult', 'radiomanagermodels/BroadcastResults', 'radiomanagermodels/EPGBroadcast', 'radiomanagermodels/Forbidden', 'radiomanagermodels/NotFound', 'radiomanagermodels/PostSuccess', 'radiomanagermodels/Success', 'radiomanagermodels/TooManyRequests', 'radiomanagermodels/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/Broadcast'), require('../radiomanagermodels/BroadcastDataInput'), require('../radiomanagermodels/BroadcastResult'), require('../radiomanagermodels/BroadcastResults'), require('../radiomanagermodels/EPGBroadcast'), require('../radiomanagermodels/Forbidden'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/PostSuccess'), require('../radiomanagermodels/Success'), require('../radiomanagermodels/TooManyRequests'), require('../radiomanagermodels/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.BroadcastApi = factory(root.radiomanager.ApiClient, root.radiomanager.Broadcast, root.radiomanager.BroadcastDataInput, root.radiomanager.BroadcastResult, root.radiomanager.BroadcastResults, root.radiomanager.EPGBroadcast, root.radiomanager.Forbidden, root.radiomanager.NotFound, root.radiomanager.PostSuccess, root.radiomanager.Success, root.radiomanager.TooManyRequests, root.radiomanager.UnprocessableEntity);
  }
}(this, function(ApiClient, Broadcast, BroadcastDataInput, BroadcastResult, BroadcastResults, EPGBroadcast, Forbidden, NotFound, PostSuccess, Success, TooManyRequests, UnprocessableEntity) {
  'use strict';

  /**
   * Broadcast service.
   * @module radiomanagerclient/BroadcastApi
   * @version 2.0
   */

  /**
   * Constructs a new BroadcastApi. 
   * @alias module:radiomanagerclient/BroadcastApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create broadcast.
     * Create broadcast.
     * @param {module:radiomanagermodels/BroadcastDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/PostSuccess} and HTTP response
     */
    this.createBroadcastWithHttpInfo = function(data) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createBroadcast");
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
        '/broadcasts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create broadcast.
     * Create broadcast.
     * @param {module:radiomanagermodels/BroadcastDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/PostSuccess}
     */
    this.createBroadcast = function(data) {
      return this.createBroadcastWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete broadcast by id
     * Delete broadcast by id
     * @param {Number} id ID of Broadcast **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.deleteBroadcastByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBroadcastById");
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
        '/broadcasts/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete broadcast by id
     * Delete broadcast by id
     * @param {Number} id ID of Broadcast **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.deleteBroadcastById = function(id) {
      return this.deleteBroadcastByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get broadcast by id
     * Get broadcast by id
     * @param {Number} id ID of Broadcast **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/BroadcastResult} and HTTP response
     */
    this.getBroadcastByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBroadcastById");
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
      var returnType = BroadcastResult;

      return this.apiClient.callApi(
        '/broadcasts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get broadcast by id
     * Get broadcast by id
     * @param {Number} id ID of Broadcast **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/BroadcastResult}
     */
    this.getBroadcastById = function(id, opts) {
      return this.getBroadcastByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get current Broadcast
     * Get current Broadcast
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Broadcast} and HTTP response
     */
    this.getCurrentBroadcastWithHttpInfo = function() {
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
      var returnType = Broadcast;

      return this.apiClient.callApi(
        '/broadcasts/current', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get current Broadcast
     * Get current Broadcast
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Broadcast}
     */
    this.getCurrentBroadcast = function() {
      return this.getCurrentBroadcastWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get daily EPG
     * Get current Broadcast
     * @param {Object} opts Optional parameters
     * @param {Date} opts._date Date *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/EPGBroadcast} and HTTP response
     */
    this.getDailyEPGWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'date': opts['_date']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EPGBroadcast;

      return this.apiClient.callApi(
        '/broadcasts/epg/daily', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get daily EPG
     * Get current Broadcast
     * @param {Object} opts Optional parameters
     * @param {Date} opts._date Date *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/EPGBroadcast}
     */
    this.getDailyEPG = function(opts) {
      return this.getDailyEPGWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get EPG by date
     * Get EPG by date
     * @param {Object} opts Optional parameters
     * @param {Date} opts._date Date *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/EPGBroadcast} and HTTP response
     */
    this.getEPGByDateWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'date': opts['_date']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EPGBroadcast;

      return this.apiClient.callApi(
        '/broadcasts/epg', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get EPG by date
     * Get EPG by date
     * @param {Object} opts Optional parameters
     * @param {Date} opts._date Date *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/EPGBroadcast}
     */
    this.getEPGByDate = function(opts) {
      return this.getEPGByDateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get next Broadcast
     * Get next Broadcast
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Broadcast} and HTTP response
     */
    this.getNextBroadcastWithHttpInfo = function() {
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
      var returnType = Broadcast;

      return this.apiClient.callApi(
        '/broadcasts/next', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get next Broadcast
     * Get next Broadcast
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Broadcast}
     */
    this.getNextBroadcast = function() {
      return this.getNextBroadcastWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get weekly EPG
     * Get weekly EPG
     * @param {Object} opts Optional parameters
     * @param {String} opts._date Date *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/EPGBroadcast} and HTTP response
     */
    this.getWeeklyEPGWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'date': opts['_date']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EPGBroadcast;

      return this.apiClient.callApi(
        '/broadcasts/epg/weekly', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get weekly EPG
     * Get weekly EPG
     * @param {Object} opts Optional parameters
     * @param {String} opts._date Date *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/EPGBroadcast}
     */
    this.getWeeklyEPG = function(opts) {
      return this.getWeeklyEPGWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all broadcasts.
     * List all broadcasts.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Date} opts.startMin Minimum start date *(Optional)*
     * @param {Date} opts.startMax Maximum start date *(Optional)*
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.presenterId Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.blockId Search on Block ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.genreId Search on Genre ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/BroadcastResults} and HTTP response
     */
    this.listBroadcastsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'start-min': opts['startMin'],
        'start-max': opts['startMax'],
        'model_type_id': opts['modelTypeId'],
        'tag_id': opts['tagId'],
        'presenter_id': opts['presenterId'],
        'item_id': opts['itemId'],
        'block_id': opts['blockId'],
        'genre_id': opts['genreId'],
        'program_id': opts['programId'],
        '_external_station_id': opts['externalStationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BroadcastResults;

      return this.apiClient.callApi(
        '/broadcasts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all broadcasts.
     * List all broadcasts.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Date} opts.startMin Minimum start date *(Optional)*
     * @param {Date} opts.startMax Maximum start date *(Optional)*
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.presenterId Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.blockId Search on Block ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.genreId Search on Genre ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/BroadcastResults}
     */
    this.listBroadcasts = function(opts) {
      return this.listBroadcastsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Print Broadcast by id
     * Print Broadcast by id
     * @param {Number} id ID of Broadcast **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.presenterId Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/EPGBroadcast} and HTTP response
     */
    this.printBroadcastByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling printBroadcastById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'program_id': opts['programId'],
        'presenter_id': opts['presenterId'],
        'tag_id': opts['tagId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EPGBroadcast;

      return this.apiClient.callApi(
        '/broadcasts/print/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Print Broadcast by id
     * Print Broadcast by id
     * @param {Number} id ID of Broadcast **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.presenterId Search on Presenter ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/EPGBroadcast}
     */
    this.printBroadcastById = function(id, opts) {
      return this.printBroadcastByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update broadcast by id
     * Update broadcast by id
     * @param {Number} id ID of Broadcast **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/BroadcastDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.updateBroadcastByIDWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBroadcastByID");
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
        '/broadcasts/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update broadcast by id
     * Update broadcast by id
     * @param {Number} id ID of Broadcast **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/BroadcastDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.updateBroadcastByID = function(id, opts) {
      return this.updateBroadcastByIDWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
