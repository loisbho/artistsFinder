import React from 'react'

const ArtistContext = React.createContext({
  name: '',
  url: '',
  summary: '',
  handleInputChange: () => {}
})

export default ArtistContext
