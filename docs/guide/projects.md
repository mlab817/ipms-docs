---
title: Project Manager
tags: 
  - add project
  - update project
  - delete project
  - view project
  - transfer project
  - endorse project
  - review project
  - validate project
  - endorse project
  - monitor project
  - share project
  - search project
---

# Projects

[[toc]]

## Projects Directory

The projects are presented/grouped by their status of submission. This begins from `draft` and ends with `encoded` (see [Project Submission Flow](#project-submission-flow)).

![projects directory](https://user-images.githubusercontent.com/29625844/85286973-2a095380-b4c6-11ea-9680-a7c7da71dd9c.png)

## View Projects by Status

This shows the list of projects that are `accessible` to the users. Accessible is designed by a few criteria:

1. The user is the owner of the project.
2. The user belongs to the same operating unit that the project belongs to.
3. The user is allowed to view the projects of the operating unit.
4. The user is a reviewer of the project.
5. The user is the lead IPD staff.
6. The user is the IPD Chief.

Note that currently, projects are filtered based on user inputs (projects they own), user affiliation (projects belonging to their office) and user assigned operating units (operating units they can view/review).

![projects](https://user-images.githubusercontent.com/29625844/83590122-9a881900-a587-11ea-9226-2db2a495c675.png)

The project menu has five options:

- View - view more details of the project
- Update - update the details of the project
- Review - review the project
- Add - add projects to list for endorsement
- Delete - delete the project

Rather than hiding options not accessible to users, they are shown as disabled.

![project menu](https://user-images.githubusercontent.com/29625844/83590177-b8ee1480-a587-11ea-8ea5-3cdcd6e6be7e.png)

## Project Submission Flow

The figure below show the general project submission flow. It starts with encoder [adding a project](#add-project). After adding a project, the encoder is expected to [update it](#update-project) and complete the required information. Once the required information is complete, they need to [finalize it](#finalize-project). Only finalized project can be [endorsed](#endorse-project). Once endorsed, the `reviewer` validates the endorsement (whether the project is included in the endorsement letter or not) and the completeness of information. If found compliant, the `reviewer` can review the project; otherwise, they will return it for compliance. After review is final, the `lead` will review if the review is okay and [accept it](#accept-project). Finally, the IPD Chief will [approve](#approve-project) the inclusion of the project in the system.  

![project submission flow](https://user-images.githubusercontent.com/29625844/83707848-97576080-a64d-11ea-90e8-31c98856bc30.png)

## Add Project

Add project feature is available to users with `ENCODER` role only.

To add a project, simply go to the Add Project page which can be found at the bottom of the list of projects or from the dashboard shortcuts. To create a project, fill out the form (ALL fields are required). If at least one of the form fields is not filled, it can not be submitted/saved. To save the project, just click the `Save` button. To reset the form (i.e. to clear all the data encoded), just click `Reset` and confirm it. Note that once you reset the form, you will no longer be able to retrieve the data you provided earlier.

![add project](https://user-images.githubusercontent.com/29625844/85285809-1fe65580-b4c4-11ea-85b7-b76475fef250.png)

![add project2](https://user-images.githubusercontent.com/29625844/85285899-46a48c00-b4c4-11ea-944c-1ddccf568f61.png)

Upon successful submission, you will see be prompted to either (a) add a new project or (b) view the project added. If you choose `Cancel`, the form will be reset to facilitate new entry. If you choose `OK`, you will be taken to the project profile page.

![add project success](https://user-images.githubusercontent.com/29625844/85286599-81f38a80-b4c5-11ea-8a4d-18a6dca0847b.png)

***Note:*** The `generate fake data` button is for development purpose only.

## View Project

You can view the details of the project from the list of projects by clicking on the dropdown and selecting `View Project`. Security on view project is not as strict as other functions. As long as you can view it in the list of projects, you can view its details.

![View Project](https://user-images.githubusercontent.com/29625844/83824911-5bce9c00-a70a-11ea-8921-37cbb94b3ae9.png)

## Update Project

This function is exclusive to users with the `Encoder` role and it can only be done to projects which were not finalized and/or were returned.

## Finalize Project

## Endorse Project

## Validate Project

## Review Project

## Accept Project

## Approve Project

# Miscellaneous Functions

## Transfer Project

## Delete Project

## Monitor Project

## Share Project (enhancement)

## Search Project

![search project](https://user-images.githubusercontent.com/29625844/83590235-dfac4b00-a587-11ea-8f5f-7b64828e9b6f.png)