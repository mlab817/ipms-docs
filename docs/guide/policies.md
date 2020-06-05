---
title: Policies
author: Lester Bolotaolo
tags:
  - roles
  - admin
  - superadmin
  - reviewer
  - encoder
  - viewer
  - guest
---

# Policies

Access to the application is controlled by 1) Credentials and 2) Roles.

[[TOC]]

## Credentials

While registration is open, only users assigned with role can use the app.

## Roles

| Role 			|	Description	|	Capabilities	|
|---------------|---------------|-------------------|
| Superadmin	|				|					|
| Admin			|				|					|
| Reviewer		|				|					|
| Encoder		|				|					|
| Viewer		|				|					|
| Guest			|				|					|

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