# Local Frontend Development
1. Clone repo `git clone https://github.com/codeforsanjose/disaster-response-sj.git`
2. Change to branch develop `git checkout develop`
3. Install dependecies `npm i`
4. Install nodemon `npm i nodemon -g`
5. Run application `npm start`

# Local Backend development
1. Get DB credentials file from project lead through Slack channel https://codeforsanjose.slack.com/messages/C77546YF6
2. Move projectInfoData.js into config directory
3. `nodemon --exec babel-node server.js`
For continuously running, do run this in a screen
screen
nodemon --exec babel-node server.js`
To view again: 

screen -x
[detached from 5210.pts-0.ip-172-31-7-186]



# disaster-response-sj

Inspired by civic tech volunteer responses to hurricanes Harvey and Irma,
the goal of the disaster-response-sj project is to engage with San Jose's
Office of Emergency Services to discuss how CfSJ can contribute to
disaster response planning and execution.

## Plan

1. Gather information on existing system
2. Determine pain points or missing pieces of existing system
3. Look for existing tools to address #2

## Resources

_(will move this to its own page in a bit)_

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


