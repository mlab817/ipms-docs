# Role Management

[[TOC]]

## Type of Roles

This application uses roles to determine access of users to resources. These roles are shown below:

| ID | Role | General Description |
|----|----|----|
|1|Superadmin|Superadmins can view projects and manage users.|
|2|Admin|Admins can view projects and manage users.|
|3|Reviewer|Reviewers are those that are assigned to review projects of operating units/encoders. They are assigned on operating unit basis. Note thought that they can not update projects.|
|4|Encoder|Encoders are the contributors of projects. They can add new projects in the application. Aside from creating projects, they can also finalize and endorse projects. They can also delete their own project.|
|5|Viewer|Viewers can, as the name suggest, view projects in the application. It should be noted, however, that the projects they can view depend on the assigned agencies to them.|
|99|Guest|This is the default role given to users. They can only log in to the app and explore but not do anything.|

## Permissions

`App\Policies\ProjectPolicy` manages authorization to perform certain actions on projects. This is summarized below:

| Method/Action | Owner * | Guest | Encoder | Reviewer** | Viewer** | Admin | Superadmin |
|----|----|----|----|----|----|----|----|
|Create|----|----|&#9745;|----|----|----|----|
|View|&#9745;|----|----|----|&#9745;|&#9745;|&#9745;|
|Update|&#9745;|----|----|----|----|----|----|
|Delete|&#9745;|----|----|----|----|----|----|
|Force Delete|&#9745;|----|----|----|----|----|----|
|Review|----|----|----|&#9745;|----|----|----|
|Validate|----|----|----|&#9745;|----|----|----|
|Return|----|----|----|&#9745;|----|----|----|
\* Owner is encoder and owner of project.
\** Reviewer and viewer access is limited to operating units assigned to them.

The view access is reinforced by a global project scope (`App\Scopes\ProjectScope`). This basically limits what user see.

Permissions to access project depends on two things: 
1. ownership, 
2. role, and 
3. ou assignment.

### Ownership 

As mentioned above, owners can create, finalize and endorse their **own** projects.
