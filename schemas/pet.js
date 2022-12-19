// schemas/pet.js
export default {
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age',
      readOnly: ({currentUser}) => {
        return !(currentUser.roles.find(({name}) => name === 'administrator'))
      }
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      }
    }
  ]
}
