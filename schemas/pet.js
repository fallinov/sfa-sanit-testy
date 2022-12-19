// schemas/pet.js
export default {
  name: 'pet',
  type: 'document',
  title: 'Pet',
  groups: [
    { name: 'caracs',
      title: 'Caractéristiques',
      // icon: CogIcon, // optional
      // default: true, // optional, est le groupe ouvert par défaut
      // hidden: ({currentUser, value, parent}) => true // optional
    }
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'surname',
      type: 'string',
      title: 'Nick name'
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age',
      readOnly: ({currentUser}) => {
        return !(currentUser.roles.find(({name}) => name === 'administrator'))
      },
      hidden: ({ parent, value }) => !parent?.name
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    { name: 'taille', title: 'Taille', type: 'string', group: 'caracs' },
    { name: 'poids', title: 'Poids', type: 'string', group: 'caracs' },
    { name: 'couleur', title: 'Couleur', type: 'string',  group: 'caracs' }
  ]
}
