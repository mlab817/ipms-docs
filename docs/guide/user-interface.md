# User Interface

![full_ui](https://user-images.githubusercontent.com/29625844/83491340-33fdef00-a4e4-11ea-8eb9-0582ced92caa.png)

## Parts of the Interface

[[TOC]]

<a name="header"></a>
## Header/Navbar

The `Header/Navbar` has 4 controls: `Home Shortcut` (IPMS Logo), `Shopping Cart`, `Notification`, and the dropdown menu (displayed as user avatar). Clicking on the IPMS logo basically takes you to the `Welcome Screen`. The Shopping Cart is used for selecting projects to endorse (more on this in the Projects feature). The notifications is for displaying the events you missed while you were logged out. The `avatar` shows an expandable menu.

Within the expandable menu are shortcuts:

| Shortcut | Description |
| ---- | ---- |
|Profile|The profile page allows the user to update his/her personal information, update password and resend email verification.|
|Admin|As the title suggest, this feature is only available to admin users. Admin can change user roles and assign operating units to view/review.|
|Activity|Shows history of user activities. This is a good way to track if there are actions you are not aware of. Note, however, that only project-related actions are currently supported.|
|Settings|This is used to change application-related settings.|
|Help and Feedback (not yet implemented)|This feature is yet to be implemented but is expected to just send support tickets.|
|Report Issues|This link will take you to the Github page of this application where you can file your report for consideration of the developers. Note that this is mostly related to the actual program itself.|
|Logout|Used to logout the current user.|

<a name="tabs"></a>
## Tabs

The tabs allow user to navigate between pages. There are five pages here:

1. Dashboard - The dashboard is the home page of the application where the user can find summary reports, shortcuts, latest activities, and exchange rates (this is for API demo purposes only). In-app messaging is currently not supported since implementing real-time capabilities is costly.
2. Projects - The projects tab is where all the action is. Here you can view the list of projects and access other features such as creating a new project, updating/deleting existing ones, etc. This will be discussed in-depth in the `Projects` module.
3. Directory - The directory is primarily used to manage users in the system. Here you can find the list of all operating units and the users and reviewers associated with them.
4. Profile - Same as the one mentioned in the [Header/Navbar](#header) section. 
5. Admin - Same as the one mentioned in the [Header/Navbar](#header) section.


<a name="footer"></a>
## Footer

The footer contains some information on the application's URL, shortcut to the Documentation, the app's information (About), and the current application's `version`. We expect to deploy minor changes from time-to-time to ensure that the app is working properly.