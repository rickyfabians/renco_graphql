import gql from 'graphql-tag'

export const getPublicServices = gql`
  query getPublicServices {
    public_services {
        name
        address
        city
        created_at
        id
        kecamatan
        latitude
        longitude
        phone
        province
        public_service
        updated_at
    }
  }
`

export const insertPublicServices = gql`
    mutation insertPublicServices(
        $address: String!,
        $kecamatan: String!,
        $city: String!,
        $province: String!,
        $latitude: String!,
        $longitude: String!,
        $name: String!,
        $phone: String!,
        $public_service: String!) {
            insert_public_services(
                objects: {
                    address: $address,
                    city: $city,
                    kecamatan: $kecamatan,
                    latitude: $latitude,
                    longitude: $longitude,
                    name: $name,
                    phone: $phone,
                    province: $province,
                    public_service: $public_service
                }
            )
    }
`

export const updatePublicServices = gql`
    mutation updatePublicServices(
        $id: Int!,
        $address: String!,
        $kecamatan: String!,
        $city: String!,
        $province: String!,
        $latitude: String!,
        $longitude: String!,
        $name: String!,
        $phone: String!,
        $public_service: String!) {
        update_public_services(
            where: {
                id: {
                    _eq: $id
                }
            }, 
            _set: {
                address: $address,
                city: $city,
                kecamatan: $kecamatan,
                latitude: $latitude,
                longitude: $longitude,
                name: $name,
                phone: $phone,
                province: $province,
                public_service: $public_service
            })
    }
`
