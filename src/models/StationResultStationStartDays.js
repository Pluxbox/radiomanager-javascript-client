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
 * The StationResultStationStartDays model module.
 * @module models/StationResultStationStartDays
 * @version 2.0
 */
class StationResultStationStartDays {
    /**
     * Constructs a new <code>StationResultStationStartDays</code>.
     * @alias module:models/StationResultStationStartDays
     */
    constructor() { 
        
        StationResultStationStartDays.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StationResultStationStartDays</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/StationResultStationStartDays} obj Optional instance to populate.
     * @return {module:models/StationResultStationStartDays} The populated <code>StationResultStationStartDays</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StationResultStationStartDays();

            if (data.hasOwnProperty('monday')) {
                obj['monday'] = ApiClient.convertToType(data['monday'], 'String');
            }
            if (data.hasOwnProperty('tuesday')) {
                obj['tuesday'] = ApiClient.convertToType(data['tuesday'], 'String');
            }
            if (data.hasOwnProperty('wednesday')) {
                obj['wednesday'] = ApiClient.convertToType(data['wednesday'], 'String');
            }
            if (data.hasOwnProperty('thursday')) {
                obj['thursday'] = ApiClient.convertToType(data['thursday'], 'String');
            }
            if (data.hasOwnProperty('friday')) {
                obj['friday'] = ApiClient.convertToType(data['friday'], 'String');
            }
            if (data.hasOwnProperty('saturday')) {
                obj['saturday'] = ApiClient.convertToType(data['saturday'], 'String');
            }
            if (data.hasOwnProperty('sunday')) {
                obj['sunday'] = ApiClient.convertToType(data['sunday'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StationResultStationStartDays</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StationResultStationStartDays</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['monday'] && !(typeof data['monday'] === 'string' || data['monday'] instanceof String)) {
            throw new Error("Expected the field `monday` to be a primitive type in the JSON string but got " + data['monday']);
        }
        // ensure the json data is a string
        if (data['tuesday'] && !(typeof data['tuesday'] === 'string' || data['tuesday'] instanceof String)) {
            throw new Error("Expected the field `tuesday` to be a primitive type in the JSON string but got " + data['tuesday']);
        }
        // ensure the json data is a string
        if (data['wednesday'] && !(typeof data['wednesday'] === 'string' || data['wednesday'] instanceof String)) {
            throw new Error("Expected the field `wednesday` to be a primitive type in the JSON string but got " + data['wednesday']);
        }
        // ensure the json data is a string
        if (data['thursday'] && !(typeof data['thursday'] === 'string' || data['thursday'] instanceof String)) {
            throw new Error("Expected the field `thursday` to be a primitive type in the JSON string but got " + data['thursday']);
        }
        // ensure the json data is a string
        if (data['friday'] && !(typeof data['friday'] === 'string' || data['friday'] instanceof String)) {
            throw new Error("Expected the field `friday` to be a primitive type in the JSON string but got " + data['friday']);
        }
        // ensure the json data is a string
        if (data['saturday'] && !(typeof data['saturday'] === 'string' || data['saturday'] instanceof String)) {
            throw new Error("Expected the field `saturday` to be a primitive type in the JSON string but got " + data['saturday']);
        }
        // ensure the json data is a string
        if (data['sunday'] && !(typeof data['sunday'] === 'string' || data['sunday'] instanceof String)) {
            throw new Error("Expected the field `sunday` to be a primitive type in the JSON string but got " + data['sunday']);
        }

        return true;
    }

/**
     * @return {String}
     */
    getMonday() {
        return this.monday;
    }

    /**
     * @param {String} monday
     */
    setMonday(monday) {
        this['monday'] = monday;
    }
/**
     * @return {String}
     */
    getTuesday() {
        return this.tuesday;
    }

    /**
     * @param {String} tuesday
     */
    setTuesday(tuesday) {
        this['tuesday'] = tuesday;
    }
/**
     * @return {String}
     */
    getWednesday() {
        return this.wednesday;
    }

    /**
     * @param {String} wednesday
     */
    setWednesday(wednesday) {
        this['wednesday'] = wednesday;
    }
/**
     * @return {String}
     */
    getThursday() {
        return this.thursday;
    }

    /**
     * @param {String} thursday
     */
    setThursday(thursday) {
        this['thursday'] = thursday;
    }
/**
     * @return {String}
     */
    getFriday() {
        return this.friday;
    }

    /**
     * @param {String} friday
     */
    setFriday(friday) {
        this['friday'] = friday;
    }
/**
     * @return {String}
     */
    getSaturday() {
        return this.saturday;
    }

    /**
     * @param {String} saturday
     */
    setSaturday(saturday) {
        this['saturday'] = saturday;
    }
/**
     * @return {String}
     */
    getSunday() {
        return this.sunday;
    }

    /**
     * @param {String} sunday
     */
    setSunday(sunday) {
        this['sunday'] = sunday;
    }

}



/**
 * @member {String} monday
 */
StationResultStationStartDays.prototype['monday'] = undefined;

/**
 * @member {String} tuesday
 */
StationResultStationStartDays.prototype['tuesday'] = undefined;

/**
 * @member {String} wednesday
 */
StationResultStationStartDays.prototype['wednesday'] = undefined;

/**
 * @member {String} thursday
 */
StationResultStationStartDays.prototype['thursday'] = undefined;

/**
 * @member {String} friday
 */
StationResultStationStartDays.prototype['friday'] = undefined;

/**
 * @member {String} saturday
 */
StationResultStationStartDays.prototype['saturday'] = undefined;

/**
 * @member {String} sunday
 */
StationResultStationStartDays.prototype['sunday'] = undefined;






export default StationResultStationStartDays;

