# User Interface

![full_ui](https://user-images.githubusercontent.com/29625844/83491340-33fdef00-a4e4-11ea-8eb9-0582ced92caa.png)

## Parts of the Interface

[[TOC]]

## The User Interface

![user interface](https://user-images.githubusercontent.com/29625844/87874508-f9510700-c9fc-11ea-9558-4d0337f14204.png)

## Header

The `Header/Navbar` has 4 controls: `Home Shortcut` (IPMS Logo), `Shopping Cart`, `Notification`, and the dropdown menu (displayed as user avatar). Clicking on the IPMS logo basically takes you to the `Welcome Screen`. The Shopping Cart is used for selecting projects to endorse (more on this in the Projects feature). The notifications is for displaying the events you missed while you were logged out. The `avatar` shows an expandable menu.

Within the dropdown menu are the following:

| Shortcut | Description |
|:----:|:---- |
|Projects|Connects to the projects directory.|
|Profile|The profile page allows the user to update his/her personal information including photo.|
|Activity|Shows history of user activities. This is a good way to track if there are actions you are not aware of. Note, however, that only project-related actions are currently supported.|
|Security|Allows user to change password, resend email verification and logout all devices.|
|Settings|This is used to change application-related settings.|
|Help and Feedback (not yet implemented)|This feature is yet to be implemented but is expected to just send support tickets.|
|Report Issues|This link will take you to the Github page of this application where you can file your report for consideration of the developers. Note that this is mostly related to the actual program itself.|
|Change Logs|Provides information on the changes underwent by the application through the versions.|
|Logout|Used to logout the current user.|

## Sidebar

The sidebar contains the following useful links:

1. Dashboard - The dashboard is the home page of the application where the user can find summary reports, shortcuts, latest activities, and exchange rates (this is for API demo purposes only). In-app messaging is currently not supported since implementing real-time capabilities is costly.
2. Add Project - Shortcut to the add project page. Can only be used by `encoders`.
3. Projects - Expandable menu that shows links to projects based on their processing status. This will be discussed in-depth in the `Projects` module.
4. Profile - Same as the one mentioned in the [Header/Navbar](#header) section. 
5. Settings - Same as the one mentioned in the [Header/Navbar](#header) section.

On small screens, the sidebar is converted into `Tabs` which will appear below the `Header`.

## Footer

The footer contains some information on the application's URL, shortcut to this Documentation, the app's information (About), and the current application's `version`. We expect to deploy minor changes from time-to-time to ensure that the app is working properly.