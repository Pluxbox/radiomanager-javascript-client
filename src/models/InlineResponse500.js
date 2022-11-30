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
 * The InlineResponse500 model module.
 * @module models/InlineResponse500
 * @version 2.0
 */
class InlineResponse500 {
    /**
     * Constructs a new <code>InlineResponse500</code>.
     * @alias module:models/InlineResponse500
     */
    constructor() { 
        
        InlineResponse500.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse500</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/InlineResponse500} obj Optional instance to populate.
     * @return {module:models/InlineResponse500} The populated <code>InlineResponse500</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse500();

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
     * Validates the JSON data with respect to <code>InlineResponse500</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InlineResponse500</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }

        return true;
    }

/**
     * Returns Given error (not formatted), describes the problem.
     * @return {String}
     */
    getError() {
        return this.error;
    }

    /**
     * Sets Given error (not formatted), describes the problem.
     * @param {String} error Given error (not formatted), describes the problem.
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
 * Given error (not formatted), describes the problem.
 * @member {String} error
 */
InlineResponse500.prototype['error'] = undefined;

/**
 * Corresponding HTTP Response Status Code
 * @member {Number} statusCode
 */
InlineResponse500.prototype['statusCode'] = undefined;






export default InlineResponse500;

