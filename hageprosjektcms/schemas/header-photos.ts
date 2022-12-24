export default {
    title: "Topp-bilder",
    name: "topp-bilder",
    type: "document",
    fields: [
        {
            title: "Toppbilde-sett",
            name: "toppbildesett",
            type: "array",
            of: [{type: "topp-bilde"}]
        }
    ]
}