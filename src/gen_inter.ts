import * as schemas from "./schemas";
import fs from "node:fs";


const outPath = "/home/joealdersonstrachan/Desktop/freight/apps/granul8-api/src/interfaces/api/models";

const schemaNames = Object.keys(schemas);

const parseField = (fieldName, schemaName, schema) => {
	let alias = "";
	let parsedField = "";
	let type = schema[fieldName].type;

	if (fieldName == "_id") {
		if (typeof schema["_id"] !== "undefined" && typeof schema["_id"]["alias"] !== "undefined") {
			alias = schema["_id"]["alias"];
			parsedField = `${alias}: Types.ObjectId`;
		}	
	
	} else if (fieldName.includes("Id")) {

		if (fieldName != "adminStatusId") {
			parsedField = `${fieldName}: Types.ObjectId;`;
		} else {
			parsedField = `${fieldName}: Types.ObjectId | undefined;`;
		}
	
	
	} else if (type == "Date") {
		parsedField = `${fieldName}?: number;`;
	
	
	} else if (type == "String") {
		if (fieldName != "description") {
			parsedField = `${fieldName}: string;`;
		} else {
			parsedField = `${fieldName}: string | undefined;`;
		}
	}

	return parsedField;
};

const getInterName = (schemaName) => "I" + schemaName.charAt(0).toUpperCase() + schemaName.slice(1);


schemaNames.forEach((schemaName) => {
	if (!schemaName.includes("Options")) {
		const schema = schemas[schemaName];
		const fieldNames = Object.keys(schemas[schemaName]);
		const interName = getInterName(schemaName).replace("Schema", "");

		const filePath = `${outPath}/${interName}.ts`;

		let inter = `
		import { Types } from "mongoose";
		
		export interface ${interName} {\n`;

		inter += fieldNames.reduce((acc, fieldName) => {
			acc += "\t" + parseField(fieldName, schemaName, schema) + "\n";

			return acc;
		}, "");
		
		inter += "}";

		fs.writeFileSync(filePath, inter, 'utf8');
	}
});
