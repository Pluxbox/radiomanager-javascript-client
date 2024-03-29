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
 * The ProgramInputOnlyAllOf model module.
 * @module models/ProgramInputOnlyAllOf
 * @version 2.0
 */
class ProgramInputOnlyAllOf {
    /**
     * Constructs a new <code>ProgramInputOnlyAllOf</code>.
     * @alias module:models/ProgramInputOnlyAllOf
     */
    constructor() { 
        
        ProgramInputOnlyAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProgramInputOnlyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ProgramInputOnlyAllOf} obj Optional instance to populate.
     * @return {module:models/ProgramInputOnlyAllOf} The populated <code>ProgramInputOnlyAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramInputOnlyAllOf();

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['Number']);
            }
            if (data.hasOwnProperty('presenters')) {
                obj['presenters'] = ApiClient.convertToType(data['presenters'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProgramInputOnlyAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProgramInputOnlyAllOf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['presenters'])) {
            throw new Error("Expected the field `presenters` to be an array in the JSON data but got " + data['presenters']);
        }

        return true;
    }

/**
     * @return {Array.<Number>}
     */
    getTags() {
        return this.tags;
    }

    /**
     * @param {Array.<Number>} tags
     */
    setTags(tags) {
        this['tags'] = tags;
    }
/**
     * @return {Array.<Number>}
     */
    getPresenters() {
        return this.presenters;
    }

    /**
     * @param {Array.<Number>} presenters
     */
    setPresenters(presenters) {
        this['presenters'] = presenters;
    }

}



/**
 * @member {Array.<Number>} tags
 */
ProgramInputOnlyAllOf.prototype['tags'] = undefined;

/**
 * @member {Array.<Number>} presenters
 */
ProgramInputOnlyAllOf.prototype['presenters'] = undefined;






export default ProgramInputOnlyAllOf;

