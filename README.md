Disaster Response SJ is a React based web application that displays active disasters in San Jose for public knowledge, disaster planning resources, and contains an administrative interface for disaster response managers to create active disaster posts.

## Getting Started Contributing

1. Join the disaster-response-sj Slack channel to introduce yourself and meet contributors [https://codeforsanjose.slack.com/messages/disaster-response-sj](https://codeforsanjose.slack.com/messages/disaster-response-sj)
2. Browse issues posted on the disaster-response-sj repository on GitHub for some contribution ideas [https://github.com/codeforsanjose/disaster-response-sj/issues](https://github.com/codeforsanjose/disaster-response-sj/issues)
3. Clone [the **develop** branch](https://github.com/codeforsanjose/disaster-response-sj/tree/develop) of the disaster-response-sj repository from GitHub onto your computer. The main files to work on will be in the `src` directory.
4. Run the webapp (refer to setup & installation), click around, and explore the different features. Any bugs to fix? Anything to improve? Features to add? Documentation to update?
5. Create new issues or assign yourself an existing issue/notify others if you want to work on something so others can keep track of who's doing what.

If you've never used GitHub before, cloning is basically downloading the disaster-response-sj app so you can work on it. Here's a [Git/GitHub tutorial to help you get started](https://www.youtube.com/watch?v=SWYqp7iY_Tc).

# Setup & Installation

You'll need to setup the frontend (aka the interface you interact on the web browser) and the backend (the mock server containing disaster data) before you run the web app.

## Prerequisites

* Updated versions of [Node.js](https://nodejs.org/en/), [NPM](https://www.npmjs.com/get-npm), and [git](https://git-scm.com/downloads) installed.
* Tested as working with npm v6.4.1 and Node.js v10.15.1.
* Updated [Python version >= 2.7](https://www.python.org/downloads/)
* Windows users may need Windows Build Tools (Install with NPM using `npm install -g --production windows-build-tools@4.0.0`). For more help see Troubleshooting section.

## Setup Guide

You'll need to run the following on the command line.

1. Clone repo `git clone https://github.com/codeforsanjose/disaster-response-sj.git`. This should download the project to your computer into a directory titled disaster-response-sj.
2. Change to the **develop** branch `git checkout develop` in the disaster-response sj directory.
3. Install dependencies `npm i`.
4. Install nodemon `npm i nodemon -g`
5. Get database credentials file `projectInfoData.js` from project lead through Slack channel [https://codeforsanjose.slack.com/messages/C77546YF6](https://codeforsanjose.slack.com/messages/C77546YF6)
6. Move `projectInfoData.js` into the `config` directory

Issues installing? See Troubleshooting section.

## Running the App

The easy way:

1. `npm run all` should start the backend and frontend, then automatically open a tab in your web browser with the web app. If the tab doesn't open, you can manually enter [http://localhost:3000](http://localhost:3000) in your browser to view the app.

The detailed way:

1. Start the server `nodemon --exec babel-node server.js` or alternatively `npm run server`
2. Start the React frontend `npm start`

`npm run all` is essentially just an alias to run the above two commands.

## Troubleshooting

Some developers may run into issues installing and running the app on their local machine. There have been some reported issues getting the app to run on Windows. A long thread containing information on the issues [can be found here](https://github.com/codeforsanjose/disaster-response-sj/issues/43).

### Extended Setup & Run Guide (Windows)

Run the following as an administrator. Any command line windows should be specifically ran as an administrator.

0. Clone the disaster-response-sj repository `git clone https://github.com/codeforsanjose/disaster-response-sj.git`
1. Install latest version of Node.js and NPM
2. Install latest version of Python (maybe unnecessary because Python is installed as part of windows-build-tools)
3. Install Windows Build Tools globally: `npm install -g --production windows-build-tools@4.0.0`
4. Install bcrypt manually (make sure you're in the project directory): `npm install bcrypt --save`
5. Install react manually (make sure you're in the project directory): `npm install react --save`
6. Install app dependencies: `npm i`
7. Install Nodemon globally: `npm install -g nodemon`
8. Install Babel globally: `npm install -g @babel/core @babel/cli @babel/node`
9. Ask project lead for the database credentials file, download it, and put it in the /config directory of the project [https://codeforsanjose.slack.com/messages/C77546YF6](https://codeforsanjose.slack.com/messages/C77546YF6)
10. Change to the **develop** branch `git checkout develop` in the disaster-response sj directory.
11. Start the back end server: `nodemon --exec babel-node server.js` while in project directory
12. Start the front end React app (open another command prompt window): `npm start`

If you encounter issues, you may have to restart your computer or run commands a second time. I'd also verify packages are actually installed by using npm list <package name to check> to see if they show up.

# Need Help?

Questions? Reach out to the project team on the #disaster-respons-sj Slack channel [https://codeforsanjose.slack.com/messages/disaster-response-sj](https://codeforsanjose.slack.com/messages/disaster-response-sj)

# Background

## Goals

Inspired by civic tech volunteer responses to hurricanes Harvey and Irma,
the goal of the disaster-response-sj project is to engage with San Jose's
Office of Emergency Services to discuss how Code for San Jose can contribute to
disaster response and planning.

## Target Users

1. Citizens - Any range of citizen from young, elderly, disabled, and speaking other languages. These users will read active disaster info and disaster planning resources.
2. Government Disaster Response Employees - These are the government employees responsible for disaster response using the administrative parts of the app to create and update disaster information posts for publication.

## Team

* Project Leader: Joseph, reachable on the [Code for San Jose Slack](https://codeforsanjose.slack.com/messages/disaster-response-sj) as @joester

# Development Details

## Project Structure



## React Style

This project uses React hooks, which is a newer, cleaner way of writing a React app versus the more traditional class style.

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

Some resources on React hooks:

* [React Today and Tomorrow and 90% Cleaner React With Hooks - Video](https://www.youtube.com/watch?v=dpw9EHDh2bM)
* [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)

## Libraries

* Leaflet.js - Used for easy Open Street Maps integration for displaying maps

# Other Info

## Plan

1. Gather information on existing system
2. Determine pain points or missing pieces of existing system
3. Look for existing tools to address #2

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

server {
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
        ssl_prefer_server_ciphers on;



...
