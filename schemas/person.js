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
    }
  ],
  preview: {
    select: {
      title: 'nom'
    }
  },
  prepare(selection) {
    const {firstName, lastName} = selection
    return {
      nom: firstName + ' ' + lastName
    }
  }
}
