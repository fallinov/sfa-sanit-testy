// schemas/pet.js
export default {
  name: 'pet',
  type: 'document',
  title: 'Animal',
  groups: [
    { name: 'caracs',
      title: 'Caractéristiques',
      // icon: CogIcon, // optional
      // default: true, // optional, est le groupe ouvert par défaut
      // hidden: ({currentUser, value, parent}) => true // optional
    },
    { name: 'medias',
      title: 'Médias',
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
      group: 'medias',
      options: {
        hotspot: true,
      }
    },
    { name: 'taille', title: 'Taille', type: 'string', group: 'caracs' },
    { name: 'poids', title: 'Poids', type: 'string', group: 'caracs' },
    { name: 'couleur', title: 'Couleur', type: 'string',  group: 'caracs' },
    { name: 'image', title: 'Image', type: 'image',  group: ['caracs', 'medias'] }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'surname',
      media: 'photo'
    }
  }

}
