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
import BroadcastEPGDay from './BroadcastEPGDay';

/**
 * The EPGResults model module.
 * @module models/EPGResults
 * @version 2.0
 */
class EPGResults {
    /**
     * Constructs a new <code>EPGResults</code>.
     * @alias module:models/EPGResults
     * @param days {Array.<module:models/BroadcastEPGDay>} 
     * @param nextPageUrl {String} 
     * @param prevPageUrl {String} 
     */
    constructor(days, nextPageUrl, prevPageUrl) { 
        
        EPGResults.initialize(this, days, nextPageUrl, prevPageUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, days, nextPageUrl, prevPageUrl) { 
        obj['days'] = days;
        obj['next_page_url'] = nextPageUrl;
        obj['prev_page_url'] = prevPageUrl;
    }

    /**
     * Constructs a <code>EPGResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EPGResults} obj Optional instance to populate.
     * @return {module:models/EPGResults} The populated <code>EPGResults</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EPGResults();

            if (data.hasOwnProperty('days')) {
                obj['days'] = ApiClient.convertToType(data['days'], [BroadcastEPGDay]);
            }
            if (data.hasOwnProperty('next_page_url')) {
                obj['next_page_url'] = ApiClient.convertToType(data['next_page_url'], 'String');
            }
            if (data.hasOwnProperty('prev_page_url')) {
                obj['prev_page_url'] = ApiClient.convertToType(data['prev_page_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EPGResults</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EPGResults</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EPGResults.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['days']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['days'])) {
                throw new Error("Expected the field `days` to be an array in the JSON data but got " + data['days']);
            }
            // validate the optional field `days` (array)
            for (const item of data['days']) {
                BroadcastEPGDay.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page_url'] && !(typeof data['next_page_url'] === 'string' || data['next_page_url'] instanceof String)) {
            throw new Error("Expected the field `next_page_url` to be a primitive type in the JSON string but got " + data['next_page_url']);
        }
        // ensure the json data is a string
        if (data['prev_page_url'] && !(typeof data['prev_page_url'] === 'string' || data['prev_page_url'] instanceof String)) {
            throw new Error("Expected the field `prev_page_url` to be a primitive type in the JSON string but got " + data['prev_page_url']);
        }

        return true;
    }

/**
     * @return {Array.<module:models/BroadcastEPGDay>}
     */
    getDays() {
        return this.days;
    }

    /**
     * @param {Array.<module:models/BroadcastEPGDay>} days
     */
    setDays(days) {
        this['days'] = days;
    }
/**
     * @return {String}
     */
    getNextPageUrl() {
        return this.next_page_url;
    }

    /**
     * @param {String} nextPageUrl
     */
    setNextPageUrl(nextPageUrl) {
        this['next_page_url'] = nextPageUrl;
    }
/**
     * @return {String}
     */
    getPrevPageUrl() {
        return this.prev_page_url;
    }

    /**
     * @param {String} prevPageUrl
     */
    setPrevPageUrl(prevPageUrl) {
        this['prev_page_url'] = prevPageUrl;
    }

}

EPGResults.RequiredProperties = ["days", "next_page_url", "prev_page_url"];

/**
 * @member {Array.<module:models/BroadcastEPGDay>} days
 */
EPGResults.prototype['days'] = undefined;

/**
 * @member {String} next_page_url
 */
EPGResults.prototype['next_page_url'] = undefined;

/**
 * @member {String} prev_page_url
 */
EPGResults.prototype['prev_page_url'] = undefined;






export default EPGResults;

