Disaster Response SJ is a React based web application that notifies people of active disaster information for San Jose and includes disaster planning resources, plus an administrative interface for disaster response managers to create/maintain active disaster updates.

# Contents

* ### [Installation](#installation-1)
* ### [Usage & Running the App](#usage-and-running-the-app)
* ### [Troubleshooting](#troubleshooting-1)
* ### [Contact & Help](#contact-and-help)
* ### [Background](#background-1)
* ### [Developer Documentation](#developer-documentation-1)
* ### [Other Info](#other-info-1)
* ### [License](#license)

# Getting Started

1. **Join the disaster-response-sj Slack channel** to introduce yourself and meet contributors [https://codeforsanjose.slack.com/messages/disaster-response-sj](https://codeforsanjose.slack.com/messages/disaster-response-sj)
2. **Browse issues** posted on the disaster-response-sj repository on GitHub for some contribution ideas [https://github.com/codeforsanjose/disaster-response-sj/issues](https://github.com/codeforsanjose/disaster-response-sj/issues)
3. **Clone [the *develop* branch](https://github.com/codeforsanjose/disaster-response-sj/tree/develop)** of the disaster-response-sj repository from GitHub onto your computer. The main files to work on will be in the `src` directory.
4. **Run the webapp** (refer to setup & installation), click around, and explore the different features. Any bugs to fix? Anything to improve? Features to add? Documentation to update?
5. **Report issues** or assign yourself an existing issue/notify others if you want to work on something so others can keep track of who's doing what.

If you've never used GitHub before, here's a [Git/GitHub tutorial to help you get started](https://www.youtube.com/watch?v=SWYqp7iY_Tc).

Read more in the [How to Contribute](#how-to-contribute) section.

# Installation

You'll need to setup the frontend (the interface you interact with on the browser) and the backend (the mock server containing disaster data) before you can run the web app.

## Prerequisites

* Updated versions of [Node.js](https://nodejs.org/en/), [NPM](https://www.npmjs.com/get-npm), and [git](https://git-scm.com/downloads) installed. Check node/npm versions in a command window with `node -v` and `npm -v`
* Tested as working with npm v6.4.1 and Node.js v10.15.1.
* Updated [Python version >= 2.7](https://www.python.org/downloads/). Check Python version with `python`
* Windows users may need additional setup. See [Troubleshooting section](#troubleshooting-1) for help.

## Setup

You'll need to run the following on the command line.

1. **Clone the repository**
`git clone https://github.com/codeforsanjose/disaster-response-sj.git`. This should download the project to your computer in a directory called disaster-response-sj.
2. **Change to the *develop* branch**
`git checkout develop` while in the disaster-response sj directory.
3. **Install dependencies**
`npm i`. These are programs and files the project requires to run.
4. **Install nodemon**
`npm i nodemon -g`. This restarts the server whenever you make changes to the code.
5. **Ask for database credentials file** `projectInfoData.js` from project lead on disaster-response-sj Slack channel or click: [https://codeforsanjose.slack.com/archives/C77546YF6/p1555038461000900](https://codeforsanjose.slack.com/archives/C77546YF6/p1555038461000900)
6. **Move downloaded `projectInfoData.js` into `config`** directory in your disaster-response-sj repo to enable the back end.
7. **Create .env.local file** in root directory. This'll store api keys, follow instructions in the .env file to add variables.

Issues installing? See [Troubleshooting section](#troubleshooting-1).

# Usage and Running the App

## Easy way:

1. `npm run all` should start the backend and frontend, then automatically open a tab in your web browser with the web app. If the tab doesn't open, you can manually enter [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Manual way:

1. **Start the server** `nodemon --exec babel-node server.js` or alternatively `npm run server`.
 Let it finish launching before starting the frontend. Manually restart the server with the comand `rs`
2. **Start the React frontend** `npm start`.
You'll need to do this in another command window.

## Ready to Work?

Skip ahead to the [Developer Documentation section.](#developer-documentation-1)

`npm run all` is just an alias to run the manual commands. If on Windows and that command doesn't work, you can try `npm run win-all`. To stop running the app, you can hit Ctrl + C in a Windows command prompt and it'll ask to terminate running jobs.

Either way, you should land on the main page showing active disaster posts with tab navigation options and a header reading Disaster Response SJ.

This part of the app is aimed at public citizens.

## Creating a Disaster Post

You can create disaster posts or update existing disaster posts from the administrative part of the app, which requires a login. You might also want to do development on this part of the app.

To access, go to [http://localhost:3000/login](http://localhost:3000/login)

You will need a username and password to login to the admin area. Contact the project lead for the login credentials: [https://codeforsanjose.slack.com/messages/disaster-response-sj](https://codeforsanjose.slack.com/messages/disaster-response-sj)

This part of the app is aimed at government employees.

# Troubleshooting

Some developers may run into issues installing and running the app on their local machine. There have been some reported issues getting the app to run on Windows.

A long thread containing information on the issues [can be found here](https://github.com/codeforsanjose/disaster-response-sj/issues/43).

## Extended Setup & Run Guide (Windows)

Run the following as an administrator. Any command line windows should be specifically ran as an administrator.

1. Clone the disaster-response-sj repository `git clone https://github.com/codeforsanjose/disaster-response-sj.git`
2. Install latest version of Node.js and NPM
3. Install latest version of Python (maybe unnecessary because Python is installed as part of windows-build-tools)
4. Install Windows Build Tools globally: `npm install -g --production windows-build-tools@4.0.0`
5. Install bcrypt manually (make sure you're in the project directory): `npm install bcrypt --save`
6. Install react manually (make sure you're in the project directory): `npm install react --save`
7. Install app dependencies: `npm i`
8. Install Nodemon globally: `npm install -g nodemon`
9. Install Babel globally: `npm install -g @babel/core @babel/cli @babel/node`
10. Ask project lead for the database credentials file on Slack, download it, and put it in the /config directory of the project. This link should take you to the file: [https://codeforsanjose.slack.com/archives/C77546YF6/p1555038461000900](https://codeforsanjose.slack.com/archives/C77546YF6/p1555038461000900)
11. Change to the **develop** branch `git checkout develop` in the disaster-response sj directory.
12. Start the back end server: `nodemon --exec babel-node server.js` while in project directory
13. Start the front end React app (open another command prompt window): `npm start`

## Additional Troubleshooting Tips

* You may have to restart your computer or run commands a second time. Verify packages are actually installed by using `npm list <package name to check>` to see if they show up.
* If you encounter an error running nodemon and close your command window to try again, sometimes the node process won't be terminated and you'll get an error if you try to start nodemon again. Just go to task manager and kill any node.js processes.
* If you get an error about a missing module, you might have to update the project dependencies again, especially if you haven't kept the project directory up to date. Just do an `npm i` again
* To quit running the app, hit Ctrl + C in your command window and it'll ask you if you want to terminate the batch job. Type Y and hit enter, and it'll stop the running process. You can do that in both windows to stop the front and back end.

# Contact and Help

Questions? Reach out to the project team on the #disaster-response-sj Slack channel [https://codeforsanjose.slack.com/messages/disaster-response-sj](https://codeforsanjose.slack.com/messages/disaster-response-sj)

Running this web app and working on it assumes some level of command line knowledge, familiarity with git, and using npm. If you're unfamiliar with this, you may want to review some web development resources. You can also ask for some guidance from other contributors.

## Team

Project Leader:
* Joseph, reachable on the [Code for San Jose Slack](https://codeforsanjose.slack.com/messages/disaster-response-sj) as @joester

# Background

## Goals

Inspired by civic tech volunteer responses to hurricanes Harvey and Irma,
the goal of the disaster-response-sj project is to engage with San Jose's
Office of Emergency Services to discuss how Code for San Jose can contribute to
disaster response and planning.

## Target Users

1. **Citizens** - Any range of citizen from young, elderly, disabled, and speaking other languages. These users will read active disaster info and disaster planning resources.
2. **Government Disaster Response Employees** - These are the government employees responsible for disaster response using the administrative parts of the app to create and update disaster information posts for publication.

# Developer Documentation

## Code Guidelines

* Add comments if necessary, but aim for readable code
* [Functional programming](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa) is your friend
* [Keep code organized](https://itnext.io/rethinking-separation-of-concerns-with-react-7e5de1b5c0f7) and try to [separate your concerns](https://krasimirtsonev.com/blog/article/react-separation-of-concerns)

## How to Contribute

If you aren't sure how your skills can support the project, talk to other contributors and they can help you find suitable work.

Ask to be added as a collaborator to the [disaster-response-sj repo](https://github.com/codeforsanjose/disaster-response-sj/) if you want to add branches on the main repo. You'll need to provide your GitHub name.

### Forking

Many contributors will just clone the main repo to their local machine for development instead of forking.

It's more complicated to manage than pushing branches directly to the main repo, but if you want your own copy of the main repo on GitHub under your GitHub account, you can fork it. It's more effort in syncing updates/making pull requests, but you get full control over your own forked repo. You can also create a pull request right away without waiting to be added as a collaborator.

### Contribution Process & Workflow

1. **Assign issue** to yourself and notify team of what you'll work on.
2. **Create a new branch** for the feature you will be working on from the `develop` branch: `git checkout develop` then `git checkout -b name-of-your-new-branch-here`.
3. **Commit changes** to your feature branch then push it to the repo: `git push origin name-of-the-branch`.
4. **Create a pull request** on GitHub for merging your feature branch with the `develop` branch so it can be reviewed by team members. Share it in the Slack channel.
5. **Project lead will merge changes** in your branch into the `develop` branch if everything looks good

### Contribution Ideas

* Test the app for bugs and report them by opening issues on GitHub
* Review the usability and report possible improvements
* Review security, accessibility, page speed, SEO, and other website concerns
* Create art assets
* Integrate an API that supports project goals
* Add animations & transitions
* Add a new feature
* Improve the design/styling
* Update or expand documentation
* Answer code questions contributors may have on Slack
* Improve the app setup process
* Report/close resolved issues
* Provide code review & feedback on pull requests
* Create unit tests for functionality
* Explore partnerships with other organizations
* Evaluate product fit to disaster management personnel needs
* Talk to disaster responders for use cases

More Resources:
* [https://opensource.guide/how-to-contribute/](https://opensource.guide/how-to-contribute/)

### Keeping Your Branch in Sync: Rebasing

Sometimes you'll work on a feature branch for a while and during that time someone else will merge updates into the main develop branch of the GitHub repo. The local copy of the develop branch on your computer won't be updated with those changes. When you already have several commits and go to create a pull request to merge your changes into the main repository, it's more likely you'll have merge conflicts to resolve.

You can prevent those conflicts by first merging in the updated version of the main repository with your local copy before you create a pull request. You'll need to either stash or commit any uncommitted changes before you rebase.

There's 2 ways to do this: [by merging or by rebasing.](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

* **Merging** adds a new commit to your history just for merging the updates into your branch
* **Rebasing** adds all the updates then replays your commits after those updates, without creating a new commit

Rebasing can help preserve a cleaner commit history for a project. For example, if you and a dev named Jane added commits to the develop branch, rebasing is like adding your changes on top of what John has already done.

To rebase:

```
// gets the upstream changes from the origin
git fetch
// switch to your feature branch if not already on it
git checkout your-feature-branch-name
// rebases changes from the origin develop branch onto the local develop branch
git rebase origin/develop
```

If you forked the repo, you'll also need to push the new develop branch to your fork before creating your pull request `git push -f fork-origin-name-here develop`

## Project Structure

### Frontend

You'll do most frontend interface development work in the `/src` directory.

This app uses [React](https://reactjs.org/) as a front end framework, with the basic project set up using [Create React App](https://create-react-app.dev/docs/).

Notice that `/src` has several directories. Most important are the `/components`, `/compositions`, and `/containers` directories, which are the 3 general categories of interface blocks inspired by the [Atomic Design philosophy](http://bradfrost.com/blog/post/atomic-web-design/) used in the project:

#### 1. **Components** - Most reusable react components, aka atoms in atomic design

Small components for things like form input fields, the logo, and Open Street Maps elements. These are the smallest interface pieces a user can interact with. How small is a component supposed to be? It's a bit of a judgment call, but they should generally be something small with a single purpose--like an interface button or tooltip box. If you're going to reuse it across the interface, it should be small enough to be reusable. If interactive, it should contain just the pieces that frequently change so that the rest of the interface doesn't need to get rerendered every time.

You can think of these like different kinds of individual Lego bricks (and if you've never played with Legos before, it's a kind of interconnecting building block toy).

Note that even though only this directory is specifically named "components", compositions and containers are also React components. They just use the lower level components as building blocks in their own component code.

#### 2. **Compositions** - More specific components that will have some reusable components, aka molecules in atomic design

These use the lower level components in addition to adding their own specific logic and code to compose more complicated interface pieces. You can imagine it as using different individual Lego pieces to build a larger model.

Contains the majority of the interface blocks, with compositions for the main disaster posts tab (`/DisasterPosts`), the preparing for disaster tab (`/FEMAChecklist`), and the after a disaster tab (`/InfomationalResources`). The admin area (`/AdminForm`) and login (`/Login`) tabs are also here.

There's also blocks for smaller parts of the interface like the detailed view for a clicked disaster post that shows in a modal popup (`/DisasterModalPostDetails`) and the HTML markup for each disaster post (`/PostMarkup`) that gets used in both the disaster posts tab plus the admin area.

#### 3. **Containers** - Made of compositional components and other reusable components, aka organisms in atomic design

Contains the layout for the largest interface blocks, essentially the overall admin area and the public part of the app.

You can think of these like separate pages. Continuing our Lego analogy, this is like arranging each of the models into a complete scene or cityscape.

#### Directory Structure

Every level of React component, whether component, composition, or container, has a common directory structure or way that it is organized. Here's an example using the MapDisplay component. Notice how the directory and files within share names:

```
MapDisplay
 |_MapDisplay.css
 |_MapDisplay.js
 |_MapDisplay.test.js
 |_mapPin.png
```

Thus, if you want to add a new component, you would follow the same basic file structure. The directory has the name of the component and the js and css files share the name.

#### Other Components

There are other modules that make up the project which don't fit in the previously defined categories. Some files and directories are denoted as markup. These contain detailed HTML elements for JSX render functions to use.

There is also:

* **Contexts** - Things for state management that can replace redux
* **Utilities** - Stateless functions to be used generally in several places
* **Api** - Functions for fetching data from the backend for use in the frontend
* **Services** - External API and 3rd party related modules
* **Environmental Variables** - Variables (like API keys) stored in .env files are used to get the app running in a particular environment, but they can be added in a .gitignore so they don't get uploaded

#### Styling Components

If you want to apply styles to just a single component, you can add styles to the css file in that component's directory and it will apply to the component generated by the js file. This organization pattern makes the styles more modular so they apply specifically to the relevant component.

Note that component styles have a kind of namespacing applied to prevent styles for one component from conflicting with styles that have the same name in other components. This is achieved through the [descendant CSS selector](https://www.sitepoint.com/descendant-selector-css-selector/). When adding CSS, you'll want to maintain that qualified selector to prevent conflicts:

```
/* For the AdminContainer component, notice the parent class added before every other style definition */

.AdminContainer {
}

.AdminContainer .admin-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #ccc;
}

.AdminContainer .tab-item {
  cursor: pointer;
  border-right: 1px solid #ccc;
  padding: 0.5em;
}
```

#### Where to Add Your CSS

If we look at the previous MapDisplay component example and wanted to add some CSS styles, we would add it to the CSS file in the MapDisplay directory:

```
MapDisplay
 |_MapDisplay.css <------ ADD YOUR STYLES HERE
 |_MapDisplay.js
 |_MapDisplay.test.js
 |_mapPin.png
```

What if you have a CSS style that you want to apply to multiple components on a page?

You would simply add that CSS to the parent component's css file so it gets applied to the child components. So if you had a Button component and a Map component that were both used in a Composition component called MapTab, and wanted both Button and Map to have the same background color, you would add the background color style in MapTab's css file so it applies to both components that are used in the MapTab:

```
MapTab (Renders a Button and a Map)
 |_MapTab.css <------ ADD YOUR STYLES HERE
 |_MapTab.js
Button
 |_Button.css
 |_Button.js
Map
 |_Map.css
 |_Map.js
```

#### Adding Images / Static Files

Static assets/files should for a component should be placed in the same directory as the component it is used in, keeping components modular.

To load a static file like an image in your component, you'll need to import it at the top of your js file, which gives you the path as a string, and then use it in the render function where you need it:

```
// We're in the Logo component file Logo.js
import React, { Fragment } from 'react'
import logoImg from './logo-dark-bg-web.png'

...

// Somewhere in your rendering function
<img className="logo-img" src={ logoImg  alt="logo"} />
...
```

You can read more on [importing static files here](https://create-react-app.dev/docs/adding-images-fonts-and-files).

#### Adding a Component


https://reactjs.org/docs/components-and-props.html
https://reactjs.org/docs/hooks-overview.html

#### Routing / Navigation

Frontend routing is handled by [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for navigating between the main app container, the admin container, and the login component. These can be viewed in `Navigation/Navigation.js`.

Routing is a way of providing bookmarkable URLs for certain app components or rendered configurations, so someone could type in `www.someappname.com/login` and the React app would know to load the login component in the main container instead of sending the user to the main page component.

### Backend

Backend development work can be done in the `/backend` directory and `server.js`.

The app uses [mongoDB](https://www.mongodb.com/what-is-mongodb) for the database and [Express](https://expressjs.com/) as a server side framework for [Node.js](https://nodejs.org/en/about/). It also uses [Passport](http://www.passportjs.org/) for authentication and [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing.

* `/config` - the `projectInfoData.js` file contains credentials that lets the app connect to mongoDB servers to load the app database. There is currently no local mongoDB database set up.
* `/backend` contains stuff related to routing, the database, and authentication, and some utilities.
* `server.js` manages most of the interaction between the front end and back end. It also contains some Twilio API interactions for sending disaster posts.

## React Style: Hooks vs Classes

This project uses React hooks, which is a [newer, cleaner way of writing a React app](https://www.youtube.com/watch?v=dpw9EHDh2bM) versus the more traditional class style. In some places, you may see the older style of React methods used. These are good candidates for refactoring to use React hooks.

Here's an example of equivalent components written in each style:

```javascript
// React Hooks style
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// React Classes style
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Some resources to learn more about React hooks:

* [React Today and Tomorrow and 90% Cleaner React With Hooks - Video](https://www.youtube.com/watch?v=dpw9EHDh2bM)
* [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)

## Libraries, Tools, and Services

* [Leaflet.js](https://leafletjs.com/) - Used for easy Open Street Maps integration for displaying maps
* [Jest](https://jestjs.io/) - Used for unit testing
* [create-react-app](https://github.com/facebook/create-react-app) - Used for initial scaffolding of the app so you can expect all the basics that comes with it like webpack, babel, and autoprefixer
* [LocationIQ](https://locationiq.com/) - Location API used for interacting with Open Street Maps Data for things like geocoding

# Other Info

## Plan

1. Gather information on existing system
2. Determine pain points or missing pieces of existing system
3. Look for existing tools to address number 2

## Resources

### San Jose

via @mthong:

  [City Council video and documentation](http://sanjose.granicus.com/MediaPlayer.php?view_id=51&clip_id=9856)

  Agenda items 3.5, 3.6 and 3.7 all relate to the flood response and future emergency management. I’d specifically recommend watching/listening to the City staff presentation and public comment (go to item 3.5 in the video index), or reading the staff memo for item 3.6.


See particularly Sec. 3.6 Memorandum; it's 130 pages total (!!) but the TL;DR is Appendix B and C.

### Generic

#### Tools and Apps

[Humanitarian Knowledge Base](https://airtable.com/shr1vjNbKJK8NpWBV/tblwCm1cFToNkPuVm/viwQ4Dqyrw7OfSpwc)

^^ Comprehensive collection of relevant tools and organizations

_note to self: add to KB_ https://www.projectptolemy.co https://disastersystems.org

[the Irma-Response api](https://github.com/Irma-Response/irma-api)

[Willow's shelter needs flow chart](https://realtimeboard.com/app/board/o9J_k0xXucA=/?moveToWidget=3074457345905464147)

#### Data

[The Humanitarian Data Exchange](https://data.humdata.org)

#### Standards (data formats and APIs)

[OpenReferral](https://openreferral.org) ([repo](https://github.com/openreferral))

[Human Services API](http://developer.open.referral.adopta.agency/documentation/) ([repo](https://github.com/human-services))

[schema.org](http://schema.org/docs/schemas.html)

#### Documentation

[Community Emergency Response](https://www.ready.gov/community-emergency-response-team)

[example local Emergency Response](https://www.vbgov.com/government/departments/emergency-management/Pages/vbcert.aspx)

[managing volunteers](https://www.nationalservice.gov/sites/default/files/resource/hon-cncs-msvtd_participant_materials.pdf)

#### Presentations

[Kevin Curry preso for NDoCH](https://docs.google.com/presentation/d/1ve7ZfBIMjDqNv8PdV4sD7pRB_dG2UTO18axEAvw4950/edit#slide=id.p)

#### Examples

[irmaresponse.org](https://www.irmaresponse.org)

## SSL Certificate Configuration
https://www.youtube.com/watch?v=m9aa7xqX67c
https://mozilla.github.io/server-side-tls/ssl-config-generator/

Make sure that you update the security group rules on AWS to include 443 connections in addition to 80

`server {
        listen 80 default_server;
        listen [::]:80 default_server;
    # Redirect all HTTP requests to HTTPS with a 301 Moved Permanently response.
        return 301 https://$host$request_uri;

}
server {
        listen 443 ssl;
        server_name disaster-response.codeforsanjose.com;


        ssl_certificate /etc/letsencrypt.../full.pem;
        ssl_certificate_key /etc/letsencrypt.../priv.pem;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers 'ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS';
        ssl_prefer_server_ciphers on;`

# License

This project is open source software licensed under the MIT License. Here's a short description from [choosealicense.com](https://choosealicense.com/licenses/mit/):

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

### Permissions
* Commercial use
* Distribution
* Modification
* Private use

### Conditions
* License and copyright notice

### Limitations
* Liability
* Warranty
