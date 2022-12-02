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
import Program from './Program';
import ProgramInputOnly from './ProgramInputOnly';

/**
 * The ProgramDataInput model module.
 * @module models/ProgramDataInput
 * @version 2.0
 */
class ProgramDataInput {
    /**
     * Constructs a new <code>ProgramDataInput</code>.
     * @alias module:models/ProgramDataInput
     * @implements module:models/Program
     * @implements module:models/ProgramInputOnly
     * @param modelTypeId {Number} 
     * @param title {String} 
     */
    constructor(modelTypeId, title) { 
        Program.initialize(this, modelTypeId, title);ProgramInputOnly.initialize(this);
        ProgramDataInput.initialize(this, modelTypeId, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, modelTypeId, title) { 
        obj['model_type_id'] = modelTypeId;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>ProgramDataInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ProgramDataInput} obj Optional instance to populate.
     * @return {module:models/ProgramDataInput} The populated <code>ProgramDataInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramDataInput();
            Program.constructFromObject(data, obj);
            ProgramInputOnly.constructFromObject(data, obj);

            if (data.hasOwnProperty('model_type_id')) {
                obj['model_type_id'] = ApiClient.convertToType(data['model_type_id'], 'Number');
            }
            if (data.hasOwnProperty('field_values')) {
                obj['field_values'] = ApiClient.convertToType(data['field_values'], Object);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('genre_id')) {
                obj['genre_id'] = ApiClient.convertToType(data['genre_id'], 'Number');
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('short_name')) {
                obj['short_name'] = ApiClient.convertToType(data['short_name'], 'String');
            }
            if (data.hasOwnProperty('medium_name')) {
                obj['medium_name'] = ApiClient.convertToType(data['medium_name'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('recommended')) {
                obj['recommended'] = ApiClient.convertToType(data['recommended'], 'Boolean');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('pty_code_id')) {
                obj['pty_code_id'] = ApiClient.convertToType(data['pty_code_id'], 'Number');
            }
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
     * Validates the JSON data with respect to <code>ProgramDataInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProgramDataInput</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProgramDataInput.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['short_name'] && !(typeof data['short_name'] === 'string' || data['short_name'] instanceof String)) {
            throw new Error("Expected the field `short_name` to be a primitive type in the JSON string but got " + data['short_name']);
        }
        // ensure the json data is a string
        if (data['medium_name'] && !(typeof data['medium_name'] === 'string' || data['medium_name'] instanceof String)) {
            throw new Error("Expected the field `medium_name` to be a primitive type in the JSON string but got " + data['medium_name']);
        }
        // ensure the json data is a string
        if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
            throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['language'] && !(typeof data['language'] === 'string' || data['language'] instanceof String)) {
            throw new Error("Expected the field `language` to be a primitive type in the JSON string but got " + data['language']);
        }
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
     * @return {Number}
     */
    getModelTypeId() {
        return this.model_type_id;
    }

    /**
     * @param {Number} modelTypeId
     */
    setModelTypeId(modelTypeId) {
        this['model_type_id'] = modelTypeId;
    }
/**
     * @return {Object}
     */
    getFieldValues() {
        return this.field_values;
    }

    /**
     * @param {Object} fieldValues
     */
    setFieldValues(fieldValues) {
        this['field_values'] = fieldValues;
    }
/**
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * @param {String} title
     */
    setTitle(title) {
        this['title'] = title;
    }
/**
     * @return {Boolean}
     */
    getDisabled() {
        return this.disabled;
    }

    /**
     * @param {Boolean} disabled
     */
    setDisabled(disabled) {
        this['disabled'] = disabled;
    }
/**
     * @return {Number}
     */
    getGenreId() {
        return this.genre_id;
    }

    /**
     * @param {Number} genreId
     */
    setGenreId(genreId) {
        this['genre_id'] = genreId;
    }
/**
     * @return {Number}
     */
    getGroupId() {
        return this.group_id;
    }

    /**
     * @param {Number} groupId
     */
    setGroupId(groupId) {
        this['group_id'] = groupId;
    }
/**
     * @return {String}
     */
    getDescription() {
        return this.description;
    }

    /**
     * @param {String} description
     */
    setDescription(description) {
        this['description'] = description;
    }
/**
     * @return {String}
     */
    getShortName() {
        return this.short_name;
    }

    /**
     * @param {String} shortName
     */
    setShortName(shortName) {
        this['short_name'] = shortName;
    }
/**
     * @return {String}
     */
    getMediumName() {
        return this.medium_name;
    }

    /**
     * @param {String} mediumName
     */
    setMediumName(mediumName) {
        this['medium_name'] = mediumName;
    }
/**
     * @return {String}
     */
    getWebsite() {
        return this.website;
    }

    /**
     * @param {String} website
     */
    setWebsite(website) {
        this['website'] = website;
    }
/**
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * @param {String} email
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * @return {Boolean}
     */
    getRecommended() {
        return this.recommended;
    }

    /**
     * @param {Boolean} recommended
     */
    setRecommended(recommended) {
        this['recommended'] = recommended;
    }
/**
     * @return {String}
     */
    getLanguage() {
        return this.language;
    }

    /**
     * @param {String} language
     */
    setLanguage(language) {
        this['language'] = language;
    }
/**
     * @return {Number}
     */
    getPtyCodeId() {
        return this.pty_code_id;
    }

    /**
     * @param {Number} ptyCodeId
     */
    setPtyCodeId(ptyCodeId) {
        this['pty_code_id'] = ptyCodeId;
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

ProgramDataInput.RequiredProperties = ["model_type_id", "title"];

/**
 * @member {Number} model_type_id
 */
ProgramDataInput.prototype['model_type_id'] = undefined;

/**
 * @member {Object} field_values
 */
ProgramDataInput.prototype['field_values'] = undefined;

/**
 * @member {String} title
 */
ProgramDataInput.prototype['title'] = undefined;

/**
 * @member {Boolean} disabled
 */
ProgramDataInput.prototype['disabled'] = undefined;

/**
 * @member {Number} genre_id
 */
ProgramDataInput.prototype['genre_id'] = undefined;

/**
 * @member {Number} group_id
 */
ProgramDataInput.prototype['group_id'] = undefined;

/**
 * @member {String} description
 */
ProgramDataInput.prototype['description'] = undefined;

/**
 * @member {String} short_name
 */
ProgramDataInput.prototype['short_name'] = undefined;

/**
 * @member {String} medium_name
 */
ProgramDataInput.prototype['medium_name'] = undefined;

/**
 * @member {String} website
 */
ProgramDataInput.prototype['website'] = undefined;

/**
 * @member {String} email
 */
ProgramDataInput.prototype['email'] = undefined;

/**
 * @member {Boolean} recommended
 */
ProgramDataInput.prototype['recommended'] = undefined;

/**
 * @member {String} language
 */
ProgramDataInput.prototype['language'] = undefined;

/**
 * @member {Number} pty_code_id
 */
ProgramDataInput.prototype['pty_code_id'] = undefined;

/**
 * @member {Array.<Number>} tags
 */
ProgramDataInput.prototype['tags'] = undefined;

/**
 * @member {Array.<Number>} presenters
 */
ProgramDataInput.prototype['presenters'] = undefined;


// Implement Program interface:
/**
 * @member {Number} model_type_id
 */
Program.prototype['model_type_id'] = undefined;
/**
 * @member {Object} field_values
 */
Program.prototype['field_values'] = undefined;
/**
 * @member {String} title
 */
Program.prototype['title'] = undefined;
/**
 * @member {Boolean} disabled
 */
Program.prototype['disabled'] = undefined;
/**
 * @member {Number} genre_id
 */
Program.prototype['genre_id'] = undefined;
/**
 * @member {Number} group_id
 */
Program.prototype['group_id'] = undefined;
/**
 * @member {String} description
 */
Program.prototype['description'] = undefined;
/**
 * @member {String} short_name
 */
Program.prototype['short_name'] = undefined;
/**
 * @member {String} medium_name
 */
Program.prototype['medium_name'] = undefined;
/**
 * @member {String} website
 */
Program.prototype['website'] = undefined;
/**
 * @member {String} email
 */
Program.prototype['email'] = undefined;
/**
 * @member {Boolean} recommended
 */
Program.prototype['recommended'] = undefined;
/**
 * @member {String} language
 */
Program.prototype['language'] = undefined;
/**
 * @member {Number} pty_code_id
 */
Program.prototype['pty_code_id'] = undefined;
// Implement ProgramInputOnly interface:
/**
 * @member {Array.<Number>} tags
 */
ProgramInputOnly.prototype['tags'] = undefined;
/**
 * @member {Array.<Number>} presenters
 */
ProgramInputOnly.prototype['presenters'] = undefined;




export default ProgramDataInput;

