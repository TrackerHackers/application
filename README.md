
# Table of Contents 

* [Summary](#summary)
* [Phase One](#phase-one)
* [Phase Two](#phase-two)
* [Meet the Team](#meet-the-tracker-hackers-team)
* [Materials Links](#links-to-our-materials)


# Summary 
TrackMyStuff! is a one stop business solution for managing office inventory. Using secure development practices and rigorous security implementations, TrackMyStuff! makes sure your data is always secure. Never find yourself blindsided by running out of materials again!

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

Lisa updated the View Inventory pages, presenting users' items in a Card format. Lisa also incorporated an Image field into the application, enabling users to upload images of their inventory for better management. Lisa modified the Add and Edit List pages to display this new field. 

Up next Lisa will create a logo for the application and incorporate more visually satisfying designs. Lisa can also implement a redirect feature on the Add and Edit pages, so that after a user adds or edits an item, they will automatically be directed to the View Inventory page.

### Lizyl Failano

Lizyl made some modifications to the Landing Page. These changes include incorporating pictures showcasing the key features, such as adding, editing, and viewing inventory. Additionally, she introduced prominent sign-in and sign-up buttons to enhance user accessibility. In the About Page, Lizyl expanded upon the description, providing more detailed information. Furthermore, she made slight adjustments to the style.css to improve the overall aesthetic. 

Up next Lizyl will involve further modifications to the landing page and style.

### Andrea Jans

Andrea updated the MongoDB Collection with the fields the application needs to track for each item. Andrea also modified the Add, Edit, List and Admin List pages to display those new fields. Andrea updated the build status badge in the README.md file
to reflect the current status of the application.

Up next Andrea will be handling the delete functionality. Also, Andrea will be investigating how MongoDB recommends handling injection attacks. In that vein, Andrea will be investigating how to protect against url hijacking in the routing, where a user copies or modifies the url to access a page they should not be able to access.

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

//Lisa add phase two contributions here

### Lizyl Failano

//Lizyl add phase two contributions here

### Andrea Jans

//Andrea add phase two contributions here

### Sienne Rodwell 

In this phase, Sienne modified the card style for the view inventory page to provide a more enjoyable user experience. Sienne also removed the image field from the card, which was a design choice made by the team. Sienne made the corresponding modifications in the Add Inventory and Edit Inventory pages to remove image fields. Additionally, Sienne modified the styling of the Navigation Bar and Footer to have less contrast 

Currently, Sienne is navigating various design needs for the application. She will continue to do so through the next phase, making any necessary improvements to the user interface and implementing security procedures as necessary. 

## Future Plans

In the future the TrackMyStuff! Application will:

* Include more comprehensive testing documents and processes
* Protect against injection attacks in forms
* Include modifications for ease of use and appealing design

# Meet the Tracker Hackers Team 

## Lisa Cheng 
[Github]() //add github profile link here 

[LinkedIn]() //add LinkedIn profile link here 

[Professional Portfolio]() //add professional portfolio link here 

## Lizyl Failano 
[Github]() //add github profile link here 

[LinkedIn]() //add LinkedIn profile link here 

[Professional Portfolio]() //add professional portfolio link here 

## Andrea Jans 
[Github]() //add github profile link here 

[LinkedIn]() //add LinkedIn profile link here 

[Professional Portfolio]() //add professional portfolio link here 

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
