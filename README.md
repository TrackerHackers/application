# Table of Contents

* [Summary](#summary)
* [Phase One](#phase-one)
* [Phase Two](#phase-two)
* [Phase Three](#phase-three)
* [Meet the Team](#meet-the-tracker-hackers-team)
* [Materials Links](#links-to-our-materials)

# Summary

![TrackMyStuff! Logo](./app/public/images/logo.png)

TrackMyStuff! is a one stop business solution for managing office inventory. Using secure development practices and rigorous security implementations, TrackMyStuff! makes sure your data is always secure. Never find yourself blindsided by running out
of materials again!

## Comprehensive Application Functionality and Features

* allows users to log in
* allows users to create accounts
* allows users to add inventory
* allows users to modify inventory
* allows users to list their inventory
* allows administrators to list all inventory
* Has a landing page prompting the user to get started
* Has an About page which is accessible to non-logged in and logged in users

# Phase One

In phase one of application implementation, the following functionality and features were added

* allows users to log in
* allows users to create accounts
* allows users to add inventory
* allows users to modify inventory
* allows users to list their inventory
* allows administrators to list all inventory
* Has a landing page prompting the user to get started
* Has an About page which is accessible to non-logged in and logged in users
* allows users to delete inventory from view inventory page instead of editing inventory values
* Once inventory is edited, the site will reroute you to the view inventory page

## Work Breakdown by Team Member

### Lisa Cheng

Lisa updated the View Inventory pages, presenting users' items in a Card format. Lisa also incorporated an Image field into the application, enabling users to upload images of their inventory for better management. Lisa modified the Add and Edit List
pages to display this new field.

Up next Lisa will create a logo for the application and incorporate more visually satisfying designs. Lisa can also implement a redirect feature on the Add and Edit pages, so that after a user adds or edits an item, they will automatically be
directed to the View Inventory page.

### Lizyl Failano

Lizyl made some modifications to the Landing Page. These changes include incorporating pictures showcasing the key features, such as adding, editing, and viewing inventory. Additionally, she introduced prominent sign-in and sign-up buttons to enhance
user accessibility. In the About Page, Lizyl expanded upon the description, providing more detailed information. Furthermore, she made slight adjustments to the style.css to improve the overall aesthetic.

Up next Lizyl will involve further modifications to the landing page and style.

### Andrea Jans

Andrea updated the MongoDB Collection with the fields the application needs to track for each item. Andrea also modified the Add, Edit, List and Admin List pages to display those new fields. Andrea updated the build status badge in the README.md file
to reflect the current status of the application.

Up next Andrea will be handling the delete functionality. Also, Andrea will be investigating how MongoDB recommends handling injection attacks. In that vein, Andrea will be investigating how to protect against url hijacking in the routing, where a
user copies or modifies the url to access a page they should not be able to access.

### Sienne Rodwell

Sienne created the landing page and about pages. Sienne also modified the routing of the pages such that the About page is accessible for users who are both logged in and not logged in. Users who are creating an account for the first time will
be taken to the About page. Users who have previous accounts will be taken to their View Inventory page.

Up next Sienne will be handling modifying the About page to include more details. She will also handle modifications needed to current design.

# Phase Two

In phase two of application development, the following improvements were made

* allows users to delete inventory from view inventory page instead of editing inventory values
* logo created
* Navbar and footer styling changed
* Appropriate About page modifications
* Remove image link field from inventory objects in edit, add, and view inventory pages
* Once inventory is edited, the site will reroute you to the view inventory page

## Work Breakdown by Team Member

### Lisa Cheng

In this phase, Lisa added a redirection feature such that upon submitting the Edit Inventory form, users are automatically redirected to the View Inventory page. Lisa also modified the card for the View Inventory page to include the Notes section,
and to have it displayed N/A if no notes are added. Lisa also added a sorting functionality to the View Inventory and List Inventory (Admin) pages. Now, the items are alphabetically organized, to improve the user experience for managing office
inventory.

Currently, Lisa will work on improving the user experience and security for the application. She will continue to do so through the next phase, along with updating the screenshots on the landing page.

### Lizyl Failano

In this phase, Lizyl created the group logo, incorporating elements that reflect the team's essence and identity.

Additionally, Lizyl is reviewing and refining previous report sections to reflect the latest updates and implementations. She examines each section and makes necessary edits to accurately portray the project's current status. Lizyl ensures the
reports are up-to-date and provides stakeholders with a comprehensive understanding of the project's progress.

### Andrea Jans

In this phase, Andrea added a delete functionality to the application. Users can now delete items from the View Inventory and Admin pages. This also involved updating the MongoDB Collection to remove the deleted item. Icons are now used for the Edit
and Delete buttons to improve the user experience. The routing table was updated to allow the delete functionality to work. Andrea found an article titled
[How to prevent injection attacks in MongoDB](https://www.slingacademy.com/article/how-to-prevent-injection-attacks-in-mongodb-with-examples/) and another titled
[How to secure your Meteor app](https://guide.meteor.com/security).

Currently, Andrea is implementing the recommendations for how to handle injection attacks in MongoDB. Andrea is also be implementing the recommendations for how to protect against url hijacking in the routing, where a user copies or modifies the url
to access a page they should not be able to access. Andrea will also be adding test cases to the application to ensure that the delete functionality works as expected.

### Sienne Rodwell

In this phase, Sienne modified the card style for the view inventory page to provide a more enjoyable user experience. Sienne also removed the image field from the card, which was a design choice made by the team. Sienne made the corresponding
modifications in the Add Inventory and Edit Inventory pages to remove image fields. Additionally, Sienne modified the styling of the Navigation Bar and Footer to have less contrast.

Currently, Sienne is navigating various design needs for the application. She will continue to do so through the next phase, making any necessary improvements to the user interface and implementing security procedures as necessary.

## Future Plans

In the future the TrackMyStuff! Application will:

* Include more comprehensive testing documents and processes
* Protect against injection attacks in forms
* Protect against url hijacking in the routing
* Include modifications for ease of use and appealing design

# Phase Three

In phase three of application development, the following improvements were made

* Updated landing page
* Protection against Injection Attacks
* Fuzz Testing
* Static Analysis
* Dynamic Review 

## Work Breakdown by Team Member

### Lisa Cheng

add stuff here

### Lizyl Failano

add stuff here

### Andrea Jans

add stuff here

### Sienne Rodwell

Sienne worked to complete Fuzz Testing in this phase. She also continued to monitor and provide any application support needs and improvements. She contributed to the ongoing process of reporting for this application (which may be viewed in the Application Document link below). 

In the next phase, Sienne will continue to monitor any application support needs and implement improvements as necessary. 

## Future Plans 

In the future, the TrackMyStuff! application will: 
* Have increased security features
* Include more comprehensive testing documents and processes
* Make UI improvements as necessary 

# Meet the Tracker Hackers Team

## Lisa Cheng

[Github](https://github.com/chenglisa)

[LinkedIn](https://www.linkedin.com/in/cheng-lisals)

[Professional Portfolio](https://chenglisa.github.io/)

## Lizyl Failano

[Github](https://github.com/lizylf)

[LinkedIn](https://www.linkedin.com/in/lizyl-failano-33aa29289/)

[Professional Portfolio](https://lizylf.github.io/)

## Andrea Jans

[Github](https://github.com/awjans)

[LinkedIn](https://www.linkedin.com/in/andreawjans)

[Professional Portfolio](https://awjans.github.io)

## Sienne Rodwell

[Github](https://github.com/SienneR)

[LinkedIn](https://www.linkedin.com/in/sienne-rodwell/)

[Professional Portfolio](https://sienner.github.io)

# Links to Our Materials

[Main Branch of Repository](https://github.com/TrackerHackers/application)

[Application Document](https://docs.google.com/document/d/1saC6QGrdUEQv1wSCf__P5w3YoyzN5x74XjpLNpQT2tU/edit?usp=sharing)

[TestCafe - Static Analysis](https://testcafe.io)

[ES-Lint - Static Analysis](https://eslint.org)

[Snyk - Static Analysis](https://snyk.io)

[Burp - Dynamic Analysis](https://portswigger.net/burp)

## Contiguous Integration Badge

[![TrackerHackers application](https://github.com/TrackerHackers/application/actions/workflows/ci.yml/badge.svg)](https://github.com/TrackerHackers/application/actions/workflows/ci.yml)
