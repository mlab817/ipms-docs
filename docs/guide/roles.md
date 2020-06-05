---
title: Roles
author: Lester Bolotaolo
---

# Roles

[[TOC]]

## Roles Definition

| Role 			|	Description	|	Capabilities	|
|---------------|---------------|-------------------|
| Superadmin	|	Can manage users, update database |	Manage other users, database resources |
| Admin			|	Can manage users except superadmin | Can assign role to other users (except admin) and update the PIP directory	|
| Reviewer		|	Users tasked to review projects submitted by OUs |	Review/validate/return projects of operating units assigned to them				|
| Encoder		|	Users tasked to provide PAPs to the system	| Can add/update/delete/finalize/endorse projects that belong to them |
| Viewer		|	Users which can only view projects | Can view projects of OUs assigned to them					|
| Guest			|	Users with no privilege | Can login |

Role determine the ability of a user to perform certain actions on projects. This is summarized below:

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

## Users

The admin page shows the list of users in the system and allows the superadmin and admin users to assign roles and operating units to users.

![admin home](https://user-images.githubusercontent.com/29625844/83619872-0afe5c80-a5bf-11ea-9775-af1b3adc8e48.png)

## Assign Role

To assign a role, click on the right button (<span class="iconify" data-icon="mdi:account" data-inline="false"></span>). An `Assign Role` dialog box will appear where you can select a role to user. Once done, click `Save`.

![assign role](https://user-images.githubusercontent.com/29625844/83619882-0d60b680-a5bf-11ea-8666-484353291e21.png)

## Assign Operating Unit

To assign operating units to view/review, click on the left button (<span class="iconify" data-icon="mdi:view-grid" data-inline="false"></span>). An `Assign Operating Unit` dialog box will appear where you can select and assign operating units. You may use the filter box to search for OUs. Click `Save` to apply changes.

![assign ou](https://user-images.githubusercontent.com/29625844/83619880-0cc82000-a5bf-11ea-90f2-c8b66abbf71c.png)

