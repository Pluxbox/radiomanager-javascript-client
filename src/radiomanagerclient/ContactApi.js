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
    define(['ApiClient', 'radiomanagermodels/ContactDataInput', 'radiomanagermodels/ContactResult', 'radiomanagermodels/ContactResults', 'radiomanagermodels/Forbidden', 'radiomanagermodels/NotFound', 'radiomanagermodels/PostSuccess', 'radiomanagermodels/Success', 'radiomanagermodels/TooManyRequests', 'radiomanagermodels/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../radiomanagermodels/ContactDataInput'), require('../radiomanagermodels/ContactResult'), require('../radiomanagermodels/ContactResults'), require('../radiomanagermodels/Forbidden'), require('../radiomanagermodels/NotFound'), require('../radiomanagermodels/PostSuccess'), require('../radiomanagermodels/Success'), require('../radiomanagermodels/TooManyRequests'), require('../radiomanagermodels/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.radiomanager) {
      root.radiomanager = {};
    }
    root.radiomanager.ContactApi = factory(root.radiomanager.ApiClient, root.radiomanager.ContactDataInput, root.radiomanager.ContactResult, root.radiomanager.ContactResults, root.radiomanager.Forbidden, root.radiomanager.NotFound, root.radiomanager.PostSuccess, root.radiomanager.Success, root.radiomanager.TooManyRequests, root.radiomanager.UnprocessableEntity);
  }
}(this, function(ApiClient, ContactDataInput, ContactResult, ContactResults, Forbidden, NotFound, PostSuccess, Success, TooManyRequests, UnprocessableEntity) {
  'use strict';

  /**
   * Contact service.
   * @module radiomanagerclient/ContactApi
   * @version 2.0
   */

  /**
   * Constructs a new ContactApi. 
   * @alias module:radiomanagerclient/ContactApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create contact.
     * Create contact.
     * @param {module:radiomanagermodels/ContactDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/PostSuccess} and HTTP response
     */
    this.createContactWithHttpInfo = function(data) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling createContact");
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
        '/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create contact.
     * Create contact.
     * @param {module:radiomanagermodels/ContactDataInput} data Data **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/PostSuccess}
     */
    this.createContact = function(data) {
      return this.createContactWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete contact by id
     * Delete contact by id
     * @param {Number} id ID of Contact **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.deleteContactByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteContactById");
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
        '/contacts/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete contact by id
     * Delete contact by id
     * @param {Number} id ID of Contact **(Required)**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.deleteContactById = function(id) {
      return this.deleteContactByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get contact by id
     * Get contact by id
     * @param {Number} id ID of Contact **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/ContactResult} and HTTP response
     */
    this.getContactByIdWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getContactById");
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
      var returnType = ContactResult;

      return this.apiClient.callApi(
        '/contacts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get contact by id
     * Get contact by id
     * @param {Number} id ID of Contact **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/ContactResult}
     */
    this.getContactById = function(id, opts) {
      return this.getContactByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all contacts.
     * List all contacts.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/ContactResults} and HTTP response
     */
    this.listContactsWithHttpInfo = function(opts) {
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
      var returnType = ContactResults;

      return this.apiClient.callApi(
        '/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all contacts.
     * List all contacts.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Number} opts.modelTypeId Search on ModelType ID *(Optional)*
     * @param {Number} opts.tagId Search on Tag ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.itemId Search on Item ID *(Optional)* &#x60;(Relation)&#x60;
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/ContactResults}
     */
    this.listContacts = function(opts) {
      return this.listContactsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update contact by id
     * Update contact by id
     * @param {Number} id ID of Contact **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ContactDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:radiomanagermodels/Success} and HTTP response
     */
    this.updateContactByIDWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = opts['data'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateContactByID");
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
        '/contacts/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update contact by id
     * Update contact by id
     * @param {Number} id ID of Contact **(Required)**
     * @param {Object} opts Optional parameters
     * @param {module:radiomanagermodels/ContactDataInput} opts.data Data *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:radiomanagermodels/Success}
     */
    this.updateContactByID = function(id, opts) {
      return this.updateContactByIDWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
