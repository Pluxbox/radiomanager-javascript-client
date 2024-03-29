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
import Genre from './Genre';
import GenreOutputOnly from './GenreOutputOnly';
import GenreRelations from './GenreRelations';
import GenreRelationsBroadcasts from './GenreRelationsBroadcasts';
import GenreRelationsPrograms from './GenreRelationsPrograms';

/**
 * The GenreResult model module.
 * @module models/GenreResult
 * @version 2.0
 */
class GenreResult {
    /**
     * Constructs a new <code>GenreResult</code>.
     * @alias module:models/GenreResult
     * @implements module:models/Genre
     * @implements module:models/GenreRelations
     * @implements module:models/GenreOutputOnly
     * @param id {Number} 
     * @param name {String} 
     */
    constructor(id, name) { 
        Genre.initialize(this, id, name);GenreRelations.initialize(this);GenreOutputOnly.initialize(this);
        GenreResult.initialize(this, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name) { 
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GenreResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GenreResult} obj Optional instance to populate.
     * @return {module:models/GenreResult} The populated <code>GenreResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenreResult();
            Genre.constructFromObject(data, obj);
            GenreRelations.constructFromObject(data, obj);
            GenreOutputOnly.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('urn')) {
                obj['urn'] = ApiClient.convertToType(data['urn'], 'String');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('broadcasts')) {
                obj['broadcasts'] = GenreRelationsBroadcasts.constructFromObject(data['broadcasts']);
            }
            if (data.hasOwnProperty('programs')) {
                obj['programs'] = GenreRelationsPrograms.constructFromObject(data['programs']);
            }
            if (data.hasOwnProperty('_external_station_id')) {
                obj['_external_station_id'] = ApiClient.convertToType(data['_external_station_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GenreResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenreResult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GenreResult.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['urn'] && !(typeof data['urn'] === 'string' || data['urn'] instanceof String)) {
            throw new Error("Expected the field `urn` to be a primitive type in the JSON string but got " + data['urn']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `broadcasts`
        if (data['broadcasts']) { // data not null
          GenreRelationsBroadcasts.validateJSON(data['broadcasts']);
        }
        // validate the optional field `programs`
        if (data['programs']) { // data not null
          GenreRelationsPrograms.validateJSON(data['programs']);
        }

        return true;
    }

/**
     * @return {Number}
     */
    getId() {
        return this.id;
    }

    /**
     * @param {Number} id
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * @return {String}
     */
    getUrn() {
        return this.urn;
    }

    /**
     * @param {String} urn
     */
    setUrn(urn) {
        this['urn'] = urn;
    }
/**
     * @return {Number}
     */
    getParentId() {
        return this.parent_id;
    }

    /**
     * @param {Number} parentId
     */
    setParentId(parentId) {
        this['parent_id'] = parentId;
    }
/**
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * @param {String} name
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * @return {module:models/GenreRelationsBroadcasts}
     */
    getBroadcasts() {
        return this.broadcasts;
    }

    /**
     * @param {module:models/GenreRelationsBroadcasts} broadcasts
     */
    setBroadcasts(broadcasts) {
        this['broadcasts'] = broadcasts;
    }
/**
     * @return {module:models/GenreRelationsPrograms}
     */
    getPrograms() {
        return this.programs;
    }

    /**
     * @param {module:models/GenreRelationsPrograms} programs
     */
    setPrograms(programs) {
        this['programs'] = programs;
    }
/**
     * @return {Number}
     */
    getExternalStationId() {
        return this._external_station_id;
    }

    /**
     * @param {Number} externalStationId
     */
    setExternalStationId(externalStationId) {
        this['_external_station_id'] = externalStationId;
    }

}

GenreResult.RequiredProperties = ["id", "name"];

/**
 * @member {Number} id
 */
GenreResult.prototype['id'] = undefined;

/**
 * @member {String} urn
 */
GenreResult.prototype['urn'] = undefined;

/**
 * @member {Number} parent_id
 */
GenreResult.prototype['parent_id'] = undefined;

/**
 * @member {String} name
 */
GenreResult.prototype['name'] = undefined;

/**
 * @member {module:models/GenreRelationsBroadcasts} broadcasts
 */
GenreResult.prototype['broadcasts'] = undefined;

/**
 * @member {module:models/GenreRelationsPrograms} programs
 */
GenreResult.prototype['programs'] = undefined;

/**
 * @member {Number} _external_station_id
 */
GenreResult.prototype['_external_station_id'] = undefined;


// Implement Genre interface:
/**
 * @member {Number} id
 */
Genre.prototype['id'] = undefined;
/**
 * @member {String} urn
 */
Genre.prototype['urn'] = undefined;
/**
 * @member {Number} parent_id
 */
Genre.prototype['parent_id'] = undefined;
/**
 * @member {String} name
 */
Genre.prototype['name'] = undefined;
// Implement GenreRelations interface:
/**
 * @member {module:models/GenreRelationsBroadcasts} broadcasts
 */
GenreRelations.prototype['broadcasts'] = undefined;
/**
 * @member {module:models/GenreRelationsPrograms} programs
 */
GenreRelations.prototype['programs'] = undefined;
// Implement GenreOutputOnly interface:
/**
 * @member {Number} _external_station_id
 */
GenreOutputOnly.prototype['_external_station_id'] = undefined;




export default GenreResult;

