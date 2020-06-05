# Authentication

[[TOC]]

## Registration

To register, a user must provide `name`, `email`, `password`, and `password_confirmation`. From the frontend, this can be called through the following mutation:

```gql
mutation register(input:{
	name: String!
	email: String!
	password: String!
	password_confirmation: String!
}) {
	status
}
```

Note that a minimum length of 8 characters is imposed on the password.

Upon registration, the app triggers four listeners through the `Registered` event: `VerifyEmail` notification, `CreateUserAvatar`, `AssignDefaultRole`, and `SendCompleteUserProfileNotification`. The `VerifyEmail` is managed by default Laravel template. A token is sent to the user's email which they need to click to validate their email. The `CreateUserAvatar` listener creates a default `image_url` for user using [Robohash](https://robohash.org/). The `AssignDefaultRole` assigns `guest` role to new users, just to ensure they have a role when using the app. `SendCompleteUserProfileNotification` sends a notification to user prompting them to complete their profile by visiting their `/account` settings.

As soon as they are registered, the user can log in.

## Resend Email Verification

A user may also resend email verification notification manually. The mutation can be found in `graphql/custom_auth.graphql`:

```gql
mutation {
  resendEmailVerification(input:{
    email: String!
  }) {
    message
  }
}
```

This uses a custom resolver in `App\GraphQL\Mutations\AuthMutator@resendEmailVerification`.

This returns a message.

<a name="login"></a>
## Login

To login, the user needs to provide only username (email) and password. This can be called using the following mutation which returns `access_token`:

```gql
mutation login(input:{
	username: String!
	password: String!
}) {
	access_token
}
```

The `access_token` returned can be used for `Authorization` header by prefixing `Bearer ` to it.

## Forgot Password

When user forgets their password, they can send an email request to change their password. The following mutation is responsible for this which returns status and message:

```gql
mutation {
  forgotPassword(input:{
    email: String!
  }) {
    message
    status
  }
}
```

A `Reset Password Notification` containing password reset link will be sent to their email. This is why it is important to validate their email before using their account. Their account can forever be lost if they do not have access to the email. It should be noted that the link in the email is directed to the backend.

<a name="reset-password"></a>
## Reset Password

Upon receiving the `Reset Password Notification`, the user will be able to reset their password. Under the hood, the following mutation is called:

```gql
mutation updateForgottenPassword(input:{
    email: String!
    token: String! // included in the email
    password: String!
    password_confirmation: String!
}) {
	status
	message
}
```

The mutation returns a status and message. The user may now login using their new password.

The above is a GraphQL-based authentication. The actual implementation in the backend is not this although they use the same input and result in the same output.

## Update Password

The user may also update their password while they are logged in. The mutation responsible for this is:

```gql
mutation {
 	updatePassword(input:{
    old_password: String!
    password: String!
    password_confirmation: String!
  }) {
    status
    message
  }
}
```

The mutation also returns status and message like the other mutations.
