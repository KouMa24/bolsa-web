import Airtable from "airtable";
import { properties } from "./properties.js"

const base = new Airtable({apiKey: properties.tokenKey}).base(properties.baseId);

export default base;