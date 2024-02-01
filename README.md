So far, the TrackMyStuff! Application:

* allows users to log in
* allows users to create accounts
* allows users to add inventory
* allows users to modify inventory
* allows users to list their inventory
* allows administrators to list all inventory
* Has a landing page prompting the user to get started
* Has an About page which is accessible to non-logged in and logged in users

In the future the TrackMyStuff! Application will:

* allow a user to delete inventory
* feature more visually satisfying designs
* have a more detailed About page
* have its own logo
* protect against injection attacks in the MongoDB database
* protect against url hijacking in the routing

Work Breakdown by Team Member

* Lisa Cheng

Lisa updated the View Inventory pages, presenting users' items in a Card format. Lisa also incorporated an Image field into the application, enabling users to upload images of their inventory for better management. Lisa modified the Add and Edit List pages to display this new field. 

Up next Lisa will create a logo for the application and incorporate more visually satisfying designs. Lisa can also implement a redirect feature on the Add and Edit pages, so that after a user adds or edits an item, they will automatically be directed to the View Inventory page.

* Lizyl Failano

* Andrea Jans

Andrea updated the MongoDB Collection with the fields the application needs to track for each item. Andrea also modified the Add, Edit, List and Admin List pages to display those new fields. Andrea updated the build status badge in the README.md file
to reflect the current status of the application.

Up next Andrea will be handling the delete functionality. Also, Andrea will be investigating how MongoDB recommends handling injection attacks. In that vein, Andrea will be investigating how to protect against url hijacking in the routing, where a
user copies or modifies the url to access a page they should not be able to access.

* Sienne Rodwell

Sienne created the landing page and about pages. Sienne also modified the routing of the pages such that the About page is accessible for users who are both logged in and not logged in. Users who are creating an account for the first time will
be taken to the About page. Users who have previous accounts will be taken to their View Inventory page.

Up next Sienne will be handling modifying the About page to include more details.

[![TrackerHackers application](https://github.com/TrackerHackers/application/actions/workflows/ci.yml/badge.svg)](https://github.com/TrackerHackers/application/actions/workflows/ci.yml)
