import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { getPublicServices } from '../Graphql/PublicServices'
import _ from 'lodash'

const Home = props => {
  const { loading, error, data } = useQuery(getPublicServices, { variables: '' })
  return <View>
    { loading
      ? <ActivityIndicator />
      : !_.isEmpty(error)
        ? <Text>{error}</Text>
        : <Text>{JSON.stringify(data)}</Text>
    }
  </View>
}

export default Home
