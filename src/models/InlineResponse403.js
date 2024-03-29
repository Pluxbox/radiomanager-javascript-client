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
 * The InlineResponse403 model module.
 * @module models/InlineResponse403
 * @version 2.0
 */
class InlineResponse403 {
    /**
     * Constructs a new <code>InlineResponse403</code>.
     * @alias module:models/InlineResponse403
     */
    constructor() { 
        
        InlineResponse403.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/InlineResponse403} obj Optional instance to populate.
     * @return {module:models/InlineResponse403} The populated <code>InlineResponse403</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse403();

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
     * Validates the JSON data with respect to <code>InlineResponse403</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InlineResponse403</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }

        return true;
    }

/**
     * Returns Describes what is forbiden.
     * @return {String}
     */
    getError() {
        return this.error;
    }

    /**
     * Sets Describes what is forbiden.
     * @param {String} error Describes what is forbiden.
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
 * Describes what is forbiden.
 * @member {String} error
 */
InlineResponse403.prototype['error'] = undefined;

/**
 * Corresponding HTTP Response Status Code
 * @member {Number} statusCode
 */
InlineResponse403.prototype['statusCode'] = undefined;






export default InlineResponse403;

