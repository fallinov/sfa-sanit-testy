export default {
  name: 'person',
  type: 'document',
  title: 'Personne',
  fields: [
    {
      name: 'firstName',
      type: 'string',
      title: 'Prénom'
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Nom'
    },
    {
      title: 'Pays visités',
      name: 'visitedCountries',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'country'}
          ]
        }
      ]
    },
  ],
  preview: {
    select: {
      lastName: 'lastName',
      firstName: 'firstName'
    },
    prepare(selection) {
      const {lastName, firstName} = selection
      return {
        title: `${lastName} ${firstName}`,
      }
    }
  }
}
