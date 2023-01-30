import { createSchema } from "sanity";
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        post,
        author,
        category,
        blockContent
    ]),
})