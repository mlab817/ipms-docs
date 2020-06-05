# Projects

[[TOC]]

## Creating Projects

// submission status set to draft (POV: user)

## Finalizing Projects

// submission status set to finalized (POV: user)

## Endorsing Projects

```gql
mutation {
  endorseProjects(
    projects: [ID!]! @rulesForArray(apply: ["min:1"])
    file: Upload!
  ) {
    id
  }
}
```

## Validating Projects



## Returning Projects

## Reviewing Projects

## Accepting Projects

## Approving Projects


## Encoding Projects

# Other Functions

## Deleting Projects

The Project model uses `SoftDeletes`. Soft deleted projects are not permanently deleted making it possible to retrieve them. The GraphQL code responsible for soft deleting project is shown below:

```gql
deleteProject(id: ID!): Project
```

To use this, you may run the following mutation: 

```gql
mutation deleteProject($id: ID!) {
  deleteProject(id: $id) {
    id
    title
  }
}
```

Below is a sample result:

```gql
{
  "data": {
    "deleteProject": {
      "id": "1",
      "title": "Title"
    }
  }
}
```

Note that this action requires a sub-selection. You may just opt to return the `id`, `title` or both. Not providing sub-selection will result in failure of the action.

The mutation will return the instance of the recently deleted project making it possible to inform the user of the details of the action. Adding the `@softDeletes` directive in the Project model transforms it into the following schema:

```gql
type Query {
  projects(trashed: Trashed @trashed): [Project!]! @all
}
```

where `Trashed` takes on the values `WITH`, `ONLY`, and `WITHOUT`. As you may have guessed, this defaults to `WITHOUT` to retrieve only the active projects.

## Force Deleting Projects

Force deleting projects is an action available only to admin and up users. It permanently deletes the project from the database making it impossible to retrieve the deleted project. This function is useful for cleaning up the database but because of its irreversible nature, always use with caution. The GraphQL mutation is provided below:

```gql
forceDeleteProject(id: ID!): Project @forceDelete
```

Like soft deletion, the force delete project returns an instance of the deleted project so that the user may have one last glance at the permanently deleted project. To use this action, run the following mutation:

```gql
mutation {
  forceDeleteProject(id: 1) {
    id
    title
  }
}
```

Note that this action requires a sub-selection. You may just opt to return the `id`, `title` or both.

## Querying Projects

```gql
query {
  getCurrentUser {
    # projects owned by the user 
    # $query->where('created_by', $user->id)
    projects(first:10, after:"MTA=") {
      pageInfo {
        total
      }
    }
    # projects owned by the office where the user belongs to 
    # $query->where('operating_unit_id',$user->operating_unit_id)
    operating_unit {
      projects(first:10) {
        pageInfo {
          total
        }
      }
    }
    # projects for review of the user based on the office assigned to them
    # query->whereIn('operating_unit_id',$user->reviews->pluck('id')->toArray());
    reviews {
      projects(first:10) {
        pageInfo{
          total
        }
      }
    }
    # projects that can be viewed by the user based on the office assigned to them
    # query->whereIn('operating_unit_id',$user->views->pluck('id')->toArray());
    views {
      projects(first:10) {
        pageInfo {
          total
        }
      }
    }
  }
}
```
