/**
 * RadioManager
 * This OpenAPI 3 Document describes the functionality of the API v2 of RadioManager. Note that no rights can be derived from this Document and the true functionality of the API might differ.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@pluxbox.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BlockResult from '../models/BlockResult';
import InlineResponse200 from '../models/InlineResponse200';
import InlineResponse400 from '../models/InlineResponse400';
import InlineResponse401 from '../models/InlineResponse401';
import InlineResponse403 from '../models/InlineResponse403';
import InlineResponse404 from '../models/InlineResponse404';
import InlineResponse422 from '../models/InlineResponse422';
import InlineResponse429 from '../models/InlineResponse429';
import InlineResponse500 from '../models/InlineResponse500';

/**
* Block service.
* @module radiomanager/BlockApi
* @version 2.0
*/
export default class BlockApi {

    /**
    * Constructs a new BlockApi. 
    * @alias module:radiomanager/BlockApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get block by id
     * Get block by id
     * @param {Number} id ID of Block **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/BlockResult} and HTTP response
     */
    getBlockByIdWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBlockById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        '_external_station_id': opts['externalStationId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BlockResult;
      return this.apiClient.callApi(
        '/blocks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get block by id
     * Get block by id
     * @param {Number} id ID of Block **(Required)**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/BlockResult}
     */
    getBlockById(id, opts) {
      return this.getBlockByIdWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get current Block
     * Get currently playing Block
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/BlockResult} and HTTP response
     */
    getCurrentBlockWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BlockResult;
      return this.apiClient.callApi(
        '/blocks/current', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get current Block
     * Get currently playing Block
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/BlockResult}
     */
    getCurrentBlock() {
      return this.getCurrentBlockWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get upcoming Block
     * Get currently upcoming Block
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/BlockResult} and HTTP response
     */
    getNextBlockWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BlockResult;
      return this.apiClient.callApi(
        '/blocks/next', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get upcoming Block
     * Get currently upcoming Block
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/BlockResult}
     */
    getNextBlock() {
      return this.getNextBlockWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of all blocks currently in your station.
     * Get a list of all blocks currently in your station. This feature supports pagination and will give a maximum of 50 blocks back.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* `(Relation)`
     * @param {Number} opts.itemId Search on Item ID *(Optional)* `(Relation)`
     * @param {Number} opts.programId Search on Program ID *(Optional)* `(Relation)`
     * @param {Date} opts.startMin Minimum start date *(Optional)*
     * @param {Date} opts.startMax Maximum start date *(Optional)*
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Number} opts.limit Results per page *(Optional)*
     * @param {String} opts.orderBy Field to order the results *(Optional)*
     * @param {module:models/String} opts.orderDirection Direction of ordering *(Optional)*
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/InlineResponse200} and HTTP response
     */
    listBlocksWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'broadcast_id': opts['broadcastId'],
        'item_id': opts['itemId'],
        'program_id': opts['programId'],
        'start-min': opts['startMin'],
        'start-max': opts['startMax'],
        'page': opts['page'],
        'limit': opts['limit'],
        'order-by': opts['orderBy'],
        'order-direction': opts['orderDirection'],
        '_external_station_id': opts['externalStationId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/blocks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of all blocks currently in your station.
     * Get a list of all blocks currently in your station. This feature supports pagination and will give a maximum of 50 blocks back.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.broadcastId Search on Broadcast ID *(Optional)* `(Relation)`
     * @param {Number} opts.itemId Search on Item ID *(Optional)* `(Relation)`
     * @param {Number} opts.programId Search on Program ID *(Optional)* `(Relation)`
     * @param {Date} opts.startMin Minimum start date *(Optional)*
     * @param {Date} opts.startMax Maximum start date *(Optional)*
     * @param {Number} opts.page Current page *(Optional)* (default to 1)
     * @param {Number} opts.limit Results per page *(Optional)*
     * @param {String} opts.orderBy Field to order the results *(Optional)*
     * @param {module:models/String} opts.orderDirection Direction of ordering *(Optional)*
     * @param {Number} opts.externalStationId Query on a different (content providing) station *(Optional)*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/InlineResponse200}
     */
    listBlocks(opts) {
      return this.listBlocksWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
