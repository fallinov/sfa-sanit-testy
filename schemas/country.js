export default {
  name: 'country',
  type: 'document',
  title: 'Pays',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom'
    },
    {
      name: 'flag',
      type: 'image',
      title: 'Drapeau'
    }
  ]
}
