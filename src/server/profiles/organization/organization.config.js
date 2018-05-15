const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const organization_args = require('./organization.arguments');
const controller = require('./organization.controller');

const scopes = [
	'user/*.*',
	'user/Organization.*',
	'user/Organization.read',
	'user/*.read',
	'organization/*.*',
	'organization/Organization.*',
	'organization/Organization.read',
	'organization/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/organization',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, organization_args.ACTIVE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ENDPOINT),
			Object.assign({versions: VERSIONS.STU3}, organization_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, organization_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, organization_args.PARTOF),
			Object.assign({versions: VERSIONS.STU3}, organization_args.PHONETIC),
			Object.assign({versions: VERSIONS.STU3}, organization_args.TYPE)
		],
		scopes: scopes,
		controller: controller.getOrganization
	},
	{
		type: 'post',
		path: '/:version/organization/_search',
		corsOptions: {methods: ['POST']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, organization_args.ACTIVE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ENDPOINT),
			Object.assign({versions: VERSIONS.STU3}, organization_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, organization_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, organization_args.PARTOF),
			Object.assign({versions: VERSIONS.STU3}, organization_args.PHONETIC),
			Object.assign({versions: VERSIONS.STU3}, organization_args.TYPE)
		],
		scopes: scopes,
		controller: controller.getOrganization
	},
	{
		type: 'get',
		path: '/:version/organization/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getOrganizationById
	}
];

/**
 * @name exports
 * @summary Organization config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ORGANIZATION
	},
	routes
};