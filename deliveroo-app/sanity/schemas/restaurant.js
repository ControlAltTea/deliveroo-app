
export default {
    name: 'restaurant',
    title: 'Restaurant',
    type: 'document',
    fields: [
        {
            name: "name",
            type: "string",
            title: "Restaurant name",
            valigation: (Rule) => Rule.required(),
        },
    ],
}
