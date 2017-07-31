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
    define(['ApiClient', 'radiomanagermodels/Data', 'radiomanagermodels/Data1', 'radiomanagermodels/Forbidden', 'radiomanagermodels/ImportItem', 'radiomanagermodels/InlineResponse202', 'radiomanagermodels/Item', 'radiomanagermodels/ItemDataInput', 'radiomanagermodels/ItemResult', 'radiomanagermodels/ItemResults', 'radiomanagermodels/NotFound', 'radiomanagermodels/PostSuccess', 'radiomanagermodels/Success', 'radiomanagermodels/TooManyRequests', 'radiomanagermodels/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/Data'), require('../radiomanagermodels/Data1'), require('../radiomanagermodels/Forbidden'), require('../radiomanagermodels/ImportItem'), require('../radiomanagermodels/InlineResponse202'), require('../radiomanagermodels/Item'), require('../radiomanagermodels/ItemDataInput'), require('../radiomanagermodels/ItemResult'), require('../radiomanagermodels/ItemResults'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/PostSuccess'), require('../radiomanagermodels/Success'), require('../radiomanagermodels/TooManyRequests'), require('../radiomanagermodels/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ItemApi = factory(root.radiomanager.ApiClient, root.radiomanager.Data, root.radiomanager.Data1, root.radiomanager.Forbidden, root.radiomanager.ImportItem, root.radiomanager.InlineResponse202, root.radiomanager.Item, root.radiomanager.ItemDataInput, root.radiomanager.ItemResult, root.radiomanager.ItemResults, root.radiomanager.NotFound, root.radiomanager.PostSuccess, root.radiomanager.Success, root.radiomanager.TooManyRequests, root.radiomanager.UnprocessableEntity);
  }
}(this, function(ApiClient, Data, Data1, Forbidden, ImportItem, InlineResponse202, Item, ItemDataInput, ItemResult, ItemResults, NotFound, PostSuccess, Success, TooManyRequests, UnprocessableEntity) {
  'use strict';

  /**
   * Item service.
   * @module radiomanagerclient/ItemApi
   * @version 2.0
   */

  /**
   * Constructs a new ItemApi. 
   * @alias module:radiomanagerclient/ItemApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create an new item.
     * Create item.
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ItemDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/PostSuccess} and HTTP response
     */
    this.createItemWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['data'];


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
        '/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an new item.
     * Create item.
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ItemDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/PostSuccess}
     */
    this.createItem = function(opts) {
      return this.createItemWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post a current playing item, keep structure
     * Post a current playing item, keep structure
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ImportItem} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.currentItemPostStructureWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['data'];


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
      var returnType = Success;

      return this.apiClient.callApi(
        '/items/current/structure', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post a current playing item, keep structure
     * Post a current playing item, keep structure
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ImportItem} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.currentItemPostStructure = function(opts) {
      return this.currentItemPostStructureWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post a current playing item
     * Post a current playing item
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ImportItem} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.currentItemPostTimingWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['data'];


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
      var returnType = Success;

      return this.apiClient.callApi(
        '/items/current/timing', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post a current playing item
     * Post a current playing item
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ImportItem} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.currentItemPostTiming = function(opts) {
      return this.currentItemPostTimingWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete item by ID.
     * Delete item by id.
     * @param {Number} id ID of Item **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.deleteItemByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteItemById");
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
        '/items/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete item by ID.
     * Delete item by id.
     * @param {Number} id ID of Item **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.deleteItemById = function(id) {
      return this.deleteItemByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get extended item details by ID.
     * Read item by id.
     * @param {Number} id ID of Item **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/ItemResult} and HTTP response
     */
    this.getItemByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getItemById");
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
      var returnType = ItemResult;

      return this.apiClient.callApi(
        '/items/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get extended item details by ID.
     * Read item by id.
     * @param {Number} id ID of Item **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/ItemResult}
     */
    this.getItemById = function(id, opts) {
      return this.getItemByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of all the items currently in your station.
     * Get a list of all the items currently in your station. This feature supports pagination and will give a maximum results of 50 items back.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)*
     * @param {String} opts.orderBy Field to order the results *(Optional)*
     * @param {module:radiomanagermodels/String} opts.orderDirection Direction of ordering *(Optional)*
     * @param {Date} opts.startMin Minimum start date *(Optional)*
     * @param {Date} opts.startMax Maximum start date *(Optional)*
     * @param {Number} opts.durationMin Minimum duration (seconds) *(Optional)*
     * @param {Number} opts.durationMax Maximum duration (seconds) *(Optional)*
     * @param {module:radiomanagermodels/String} opts.status Play Status of item *(Optional)*
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.programDraftId Search on Program Draft ID *(Optional)*
     * @param {Number} opts.userDraftId Search on User Draft ID *(Optional)*
     * @param {Number} opts.stationDraftId Search on Station Draft ID *(Optional)*
     * @param {Number} opts.blockId Search on Block ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.campaignId Search on Campaign ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.contactId Search on Contact ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/ItemResults} and HTTP response
     */
    this.listItemsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'order-by': opts['orderBy'],
        'order-direction': opts['orderDirection'],
        'start-min': opts['startMin'],
        'start-max': opts['startMax'],
        'duration-min': opts['durationMin'],
        'duration-max': opts['durationMax'],
        'status': opts['status'],
        'model_type_id': opts['modelTypeId'],
        'program_draft_id': opts['programDraftId'],
        'user_draft_id': opts['userDraftId'],
        'station_draft_id': opts['stationDraftId'],
        'block_id': opts['blockId'],
        'broadcast_id': opts['broadcastId'],
        'campaign_id': opts['campaignId'],
        'contact_id': opts['contactId'],
        'program_id': opts['programId'],
        'tag_id': opts['tagId'],
        '_external_station_id': opts['externalStationId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ItemResults;

      return this.apiClient.callApi(
        '/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of all the items currently in your station.
     * Get a list of all the items currently in your station. This feature supports pagination and will give a maximum results of 50 items back.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)*
     * @param {String} opts.orderBy Field to order the results *(Optional)*
     * @param {module:radiomanagermodels/String} opts.orderDirection Direction of ordering *(Optional)*
     * @param {Date} opts.startMin Minimum start date *(Optional)*
     * @param {Date} opts.startMax Maximum start date *(Optional)*
     * @param {Number} opts.durationMin Minimum duration (seconds) *(Optional)*
     * @param {Number} opts.durationMax Maximum duration (seconds) *(Optional)*
     * @param {module:radiomanagermodels/String} opts.status Play Status of item *(Optional)*
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.programDraftId Search on Program Draft ID *(Optional)*
     * @param {Number} opts.userDraftId Search on User Draft ID *(Optional)*
     * @param {Number} opts.stationDraftId Search on Station Draft ID *(Optional)*
     * @param {Number} opts.blockId Search on Block ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.campaignId Search on Campaign ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.contactId Search on Contact ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.programId Search on Program ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/ItemResults}
     */
    this.listItems = function(opts) {
      return this.listItemsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post a playlist, keep current structure
     * Post a playlist, keep current structure
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/Data1} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/InlineResponse202} and HTTP response
     */
    this.playlistPostStructureWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['data'];


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
      var returnType = InlineResponse202;

      return this.apiClient.callApi(
        '/items/playlist/structure', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post a playlist, keep current structure
     * Post a playlist, keep current structure
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/Data1} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/InlineResponse202}
     */
    this.playlistPostStructure = function(opts) {
      return this.playlistPostStructureWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post a playlist
     * Post a playlist
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/Data} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/InlineResponse202} and HTTP response
     */
    this.playlistPostTimingWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['data'];


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
      var returnType = InlineResponse202;

      return this.apiClient.callApi(
        '/items/playlist/timing', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post a playlist
     * Post a playlist
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/Data} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/InlineResponse202}
     */
    this.playlistPostTiming = function(opts) {
      return this.playlistPostTimingWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update extended item details by ID.
     * Update item by id.
     * @param {Number} id ID of Item **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/Item} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.updateItemByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateItemById");
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
        '/items/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update extended item details by ID.
     * Update item by id.
     * @param {Number} id ID of Item **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/Item} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.updateItemById = function(id, opts) {
      return this.updateItemByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
