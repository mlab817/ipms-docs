# Profile

[[TOC]]

## Introduction

User can update their own profile although this is limited to name, operating unit, position, and contact number. They can also upload their own avatar.

<a name="update-user"></a>
## Update User

The following mutation is responsible for updating user. The command is found in `graphql/user.graphql`. It uses the `@update` directive and thus, does not require any mutator file.

```gql
mutation {
 	updateUser(input:{
    name: String
    operating_unit_id: ID
    unit: String
    position: String
    image_url: String
    contact_number: String
  }) {
    User
  }
}
```

It returns the `User` instance making it possible to update your user automatically in the frontend.

## Upload User Avatar

The mutation for uploading user avatar can also be found in `graphql/user.graphql`. It uses the `Upload` type. Note that users need to be logged in to access this feature. The mutation is as follows: 

```gql
mutation {
 	uploadUserAvatar(image: Upload!) {
    User
  }
}
```

The mutation is resolved by `App/GraphQL/Mutations/UploadUserAvatarMutation`. It returns the `User` instance so that you can update the user in the frontend.

Note that the file is uploaded to dropbox in the `avatars` folder.
