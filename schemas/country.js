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
  ],
  orderings: [
    {
      title: 'Nom croissant',
      name: 'nomAsc',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Nom décroissant',
      name: 'nomDesc',
      by: [
        {field: 'name', direction: 'desc'}
      ]
    }
  ]

}
