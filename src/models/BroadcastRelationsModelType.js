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

import ApiClient from '../ApiClient';
import BlockRelationsBroadcastParams from './BlockRelationsBroadcastParams';

/**
 * The BroadcastRelationsModelType model module.
 * @module models/BroadcastRelationsModelType
 * @version 2.0
 */
class BroadcastRelationsModelType {
    /**
     * Constructs a new <code>BroadcastRelationsModelType</code>.
     * @alias module:models/BroadcastRelationsModelType
     */
    constructor() { 
        
        BroadcastRelationsModelType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BroadcastRelationsModelType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BroadcastRelationsModelType} obj Optional instance to populate.
     * @return {module:models/BroadcastRelationsModelType} The populated <code>BroadcastRelationsModelType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BroadcastRelationsModelType();

            if (data.hasOwnProperty('href')) {
                obj['href'] = ApiClient.convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = BlockRelationsBroadcastParams.constructFromObject(data['params']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BroadcastRelationsModelType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BroadcastRelationsModelType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['href'] && !(typeof data['href'] === 'string' || data['href'] instanceof String)) {
            throw new Error("Expected the field `href` to be a primitive type in the JSON string but got " + data['href']);
        }
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['operation'] && !(typeof data['operation'] === 'string' || data['operation'] instanceof String)) {
            throw new Error("Expected the field `operation` to be a primitive type in the JSON string but got " + data['operation']);
        }
        // validate the optional field `params`
        if (data['params']) { // data not null
          BlockRelationsBroadcastParams.validateJSON(data['params']);
        }

        return true;
    }

/**
     * @return {String}
     */
    getHref() {
        return this.href;
    }

    /**
     * @param {String} href
     */
    setHref(href) {
        this['href'] = href;
    }
/**
     * @return {String}
     */
    getModel() {
        return this.model;
    }

    /**
     * @param {String} model
     */
    setModel(model) {
        this['model'] = model;
    }
/**
     * @return {String}
     */
    getOperation() {
        return this.operation;
    }

    /**
     * @param {String} operation
     */
    setOperation(operation) {
        this['operation'] = operation;
    }
/**
     * @return {module:models/BlockRelationsBroadcastParams}
     */
    getParams() {
        return this.params;
    }

    /**
     * @param {module:models/BlockRelationsBroadcastParams} params
     */
    setParams(params) {
        this['params'] = params;
    }

}



/**
 * @member {String} href
 */
BroadcastRelationsModelType.prototype['href'] = undefined;

/**
 * @member {String} model
 */
BroadcastRelationsModelType.prototype['model'] = undefined;

/**
 * @member {String} operation
 */
BroadcastRelationsModelType.prototype['operation'] = undefined;

/**
 * @member {module:models/BlockRelationsBroadcastParams} params
 */
BroadcastRelationsModelType.prototype['params'] = undefined;






export default BroadcastRelationsModelType;

