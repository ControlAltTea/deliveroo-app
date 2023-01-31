
export default {
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        {
            name: "name",
            type: "string",
            title: "Restaurant name",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "short_description",
            type: "string",
            title: "short description",
            validation: (Rule) => Rule.max(200),
        },
        {
            name: "image",
            type: "image",
            title: "image of the restaurant",
        },
        {
            name: "lat",
            type: "number",
            title: "Latitude of the restaurant",
        },
        {
            name: "long",
            type: "number",
            title: "longitude of the restaurant",
        },
        {
            name: "address",
            type: "string",
            title: "restaurant address",
            validation: (Rule) => Rule.required()
        }

    ],
}
