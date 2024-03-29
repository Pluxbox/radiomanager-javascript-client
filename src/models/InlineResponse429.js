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

/**
 * The InlineResponse429 model module.
 * @module models/InlineResponse429
 * @version 2.0
 */
class InlineResponse429 {
    /**
     * Constructs a new <code>InlineResponse429</code>.
     * @alias module:models/InlineResponse429
     */
    constructor() { 
        
        InlineResponse429.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse429</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/InlineResponse429} obj Optional instance to populate.
     * @return {module:models/InlineResponse429} The populated <code>InlineResponse429</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse429();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InlineResponse429</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InlineResponse429</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }

        return true;
    }

/**
     * Returns Rate limit response
     * @return {String}
     */
    getError() {
        return this.error;
    }

    /**
     * Sets Rate limit response
     * @param {String} error Rate limit response
     */
    setError(error) {
        this['error'] = error;
    }
/**
     * Returns Corresponding HTTP Response Status Code
     * @return {Number}
     */
    getStatusCode() {
        return this.statusCode;
    }

    /**
     * Sets Corresponding HTTP Response Status Code
     * @param {Number} statusCode Corresponding HTTP Response Status Code
     */
    setStatusCode(statusCode) {
        this['statusCode'] = statusCode;
    }

}



/**
 * Rate limit response
 * @member {String} error
 */
InlineResponse429.prototype['error'] = undefined;

/**
 * Corresponding HTTP Response Status Code
 * @member {Number} statusCode
 */
InlineResponse429.prototype['statusCode'] = undefined;






export default InlineResponse429;

