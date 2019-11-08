import React from 'react'

import './InformationalResources.css'

const infoResourcesMarkup = () => {

  const checklistData = {
    kit: {
      list: [
        {
          id: 'kit-water',
          title: 'Water',
          description: "At least 1 gallon per person, per day for drinking and sanitation"
        }, {
          id: 'kit-food',
          title: 'Food',
          description: "Non-perishable like canned, dry, or powdered goods"
        }, {
          id: 'kit-radio',
          title: 'Radio (Battery Powered)',
          description: "To get alerts and information when networks are down"
        }, {
          id: 'kit-flashlight',
          title: 'Flashlight',
          description: "To see in dark places, at night, or as a signaling device"
        }, {
          id: 'kit-batteries',
          title: 'Batteries',
          description: "For your radio and flashlight"
        }, {
          id: 'kit-first-aid',
          title: 'First Aid Kit',
          description: "Emergency services may not be able to help you immediately after a disaster"
        }, {
          id: 'kit-whistle',
          title: 'Whistle',
          description: "To signal for help"
        }, {
          id: 'kit-filter',
          title: 'Air Filtering Mask',
          description: "Dust and smoke are commonly encountered hazards"
        }, {
          id: 'kit-wipes',
          title: 'Wet Wipes',
          description: "For sanitation and hygiene, especially if there's no running water"
        }, {
          id: 'kit-wrench',
          title: 'Wrench or Pliers',
          description: "For turning off utilities like gas lines"
        }, {
          id: 'kit-can-opener',
          title: 'Can Opener',
          description: "For opening canned foods"
        }, {
          id: 'kit-plastic-sheet',
          title: 'Plastic Sheeting',
          description: "Useful for using as emergency shelter"
        }, {
          id: 'kit-duct-tape',
          title: 'Duct Tape',
          description: "For constructing emergency shelter and numerous other uses"
        }, {
          id: 'kit-garbage',
          title: 'Garbage Bags',
          description: "To maintain sanitation"
        }, {
          id: 'kit-other',
          title: 'Other Items Unique to Your Family',
          description: "Examples: prescription medications, baby formula, important documents"
        }
      ],
      resources: [
        {
          url: 'http://www.sanjoseca.gov/index.aspx?NID=1409',
          title: 'San Jose - Be Supplied',
          description: "Emergency kit building information from the City of San Jose's Office of Emergency Management, including local stores to purchase items and organizations you can purchase ready-made kits from."
        }, {
          url: 'https://www.ready.gov/build-a-kit',
          title: 'Ready.gov - Build a Kit',
          description: "Official emergency kit building information from the US government with a good overview of what to include in a kit, plus several printable checklists."
        }, {
          url: 'http://www.conovernc.gov/vertical/Sites/%7BBAB0D760-E669-4331-9C22-9FB14833B6B9%7D/uploads/Visual-Checklist-Disaster-Supply-Kit.jpg',
          title: 'Visual Checklist for a Disaster Supply Kit',
          description: "An easy to use and printable emergency supply kit checklist with pictures for each item. Great for building an emergency kit if you like a more visual approach."
        }, {
          url: 'https://www.fema.gov/media-library-data/1389294951288-b25113d9aef2b877323d380720827f3b/R3_trifold_eng.pdf',
          title: 'FEMA Emergency Preparedness Brochure',
          description: "Useful essential disaster planning guide in short brochure format by FEMA. Contains all key preparedness information."
        }
      ]
    },
    plan: {
      list: [
        {
          id: 'plan-comms',
          title: 'Communication Plan',
          description: "How will you receive emergency alerts or warnings? How will you contact family members--does everyone have each others contact information? How about emergency meeting places or out-of-town contacts if you are can't be reached?"
        }, {
          id: 'plan-shelter',
          title: 'Shelter Plan',
          description: "Many disasters require taking shelter somewhere appropriate to the hazard. Do you know the safest locations for each type of hazard in your area? Where will you go during a disaster?"
        }, {
          id: 'plan-evac',
          title: 'Evacuation Plan',
          description: "If there is a call for evacuation, do you know where you will go and where you will stay? What routes will you take? What supplies will you need?"
        }, {
          id: 'plan-practice',
          title: 'Practice Plan',
          description: "All the planning in the world is useless if you don't know what to do when disaster strikes. Practice your plan regularly to make sure it works and you can remember the information."
        },
      ],
      resources: [
        {
          url: 'http://www.sanjoseca.gov/index.aspx?NID=1408',
          title: 'San Jose - Be Prepared',
          description: "San Jose Office of Emergency Management's 10 step disaster preparation guide. Includes several planning resources and tools to learn about local hazards."
        }, {
          url: 'https://www.sccgov.org/sites/oes/residents/Pages/ReadySCC.aspx',
          title: 'ReadySCC',
          description: "Paid for by the County of Santa Clara, ReadySCC is a free mobile app that helps create a family disaster preparedness plan. It can help store contacts and resources."
        }, {
          url: 'https://www.sccgov.org/sites/oes/residents/Pages/twelve-month-emergency-preparedness-calendar.aspx',
          title: 'Twelve Month Emergency Preparedness Calendar',
          description: "Created by County of Santa Clara's Emergency Management office, this 12 month program called Do 1 Thing helps you prepare for disasters by doing one thing each month."
        }, {
          url: 'https://www.ready.gov/make-a-plan',
          title: 'Ready.gov - Make a Plan',
          description: "Offical federally maintained Ready.gov guide to emergency planning. Lists steps and provides templates for emergency planning."
        }, {
          url: 'https://www.fema.gov/media-library/assets/documents/22187',
          title: 'FEMA - Family Emergency Plans',
          description: "Several of FEMA's Family Emergency Plan templates with different versions and languages available to download."
        }
      ]
    },
    info: {
      resources: [
        {
          url: 'http://www.sanjoseca.gov/index.aspx?NID=5760#',
          title: 'San Jose - Be Informed',
          description: "San Jose Office of Emergency Management's guide to staying informed, including key emergency contact information and useful apps."
        }, {
          url: 'https://www.211bayarea.org/disaster-information/',
          title: '211 Bay Area - Disaster Information',
          description: "During a disaster, residents can call 2-1-1 for critical information about evacuation routes, food, and shelter, as well as resources during recovery. You can also text your zip code to 898211 and a resource specialist can help you find what you need."
        }, {
          url: 'https://www.sccgov.org/sites/alertscc/Pages/home.aspx',
          title: 'AlertSCC',
          description: "AlertSCC is a free, easy, and confidential way for anyone who lives or works in Santa Clara County to get emergency warnings sent directly to their cell phone, mobile device, email, or landline."
        }, {
          url: 'https://www.ready.gov/alerts',
          title: 'Emergency Alerts',
          description: "Ready.gov's page describing different warning alerts you can receive and the types of devices that receive the alerts, including radio, broadcast, and wireless alert systems."
        }, {
          url: 'https://www.google.org/crisismap/weather_and_events',
          title: 'Google Crisis Map',
          description: "Google's Crisis Map shows emergencies, weather, hazards, and alerts overlaid on a map of the US. Simple, but easy to use."
        }, {
          url: 'https://www.data.gov/disasters/apps-tools/',
          title: 'Data.gov - Apps & Tools',
          description: "Data.gov's page features numerous apps and tools shared at the White House Innovation for Disaster Response and Recovery Demo Day to help address the challenges that severe weather and other disasters can pose to our communities."
        }, {
          url: 'https://www.nws.noaa.gov/nwr/',
          title: 'NOAA Weather Radio All Hazards',
          description: "NOAA Weather Radio broadcasts official Weather Service warnings, watches, forecasts and other hazard information 24 hours a day, 7 days a week. Lists the frequencies to tune into."
        }, {
          url: 'https://www.fema.gov/disaster-recovery-centers',
          title: 'FEMA - Disaster Recovery Centers',
          description: "During declared disasters, FEMA can open a Disaster Recovery Center, which is a readily accessible facility or mobile office where survivors may go for information about FEMA programs or other disaster assistance programs, and to ask questions. This page provides information and lets you search for a Disaster Recovery Center."
        }
      ]
    },
    involve : {
      resources: [
        {
          url: 'http://www.sanjoseca.gov/index.aspx?NID=6001',
          title: 'San Jose - Be Involved',
          description: "The City of San Jose's Office of Emergency Management page on getting involved in community emergency preparedness programs. You can volunteer directly with the department, with neighborhood watch programs, take CERT (Community Emergency Response Team) training, and find other volunteer opportunities."
        }, {
          url: 'http://evc-santaclaracounty.org/other-disaster-volunteer-resources/',
          title: 'Santa Clara County Emergency Volunteer Center - Disaster Volunteer Resources',
          description: "EVC is a disaster preparedness and response program designed to increase the capacity of the community to respond to and recover from disasters through the effective coordination of spontaneous volunteer resources. They maintain an excellent resources page listing local volunteer organizations and opportunities."
        }, {
          url: 'https://www.redcross.org/local/california/northern-california-coastal/volunteer.html',
          title: 'American Red Cross Northern CA Coastal Region - Volunteer',
          description: "The Red Cross is likely the most well known nonprofit organization providing disaster response and other humanitarian assistance. They have numerous volunteer training programs and opportunities related to disaster response adn emergency preparedness. The Silicon Valley chapter is located in San Jose."
        }, {
          url: 'https://www.ready.gov/volunteer',
          title: 'Ready.gov - Volunteer',
          description: "The federal Ready.gov volunteer page contains extensive listings of volunteer organizations and opportunities."
        }, {
          url: 'https://www.redcross.org/local/california/northern-california-coastal/volunteer.html',
          title: 'Americorps Pathfinder Search Tool',
          description: "For more involved or longer term commitments, Americorps lists several volunteer opportunities in the field of disaster preparedness and recovery. This page lets you search and filter by state and opportunity type (select California under State and Disaster Preparedness & Recovery under Service Area). Because Americorps is a well supported federal program, accepted volunteers are eligible for monetary assistance, education awards, and other benefits."
        }
      ]
    }
  }

  const listItemTemplate = (item) => {
    return (
      <li>
        <input type="checkbox" id={item.id} />
        <label htmlFor={item.id}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </label>
      </li>
    )
  }

  const resourceTemplate = (item) => {
    return (
      <li>
        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
        <p>{item.description}</p>
      </li>
    )
  }

  const kitChecklist = checklistData.kit.list.map((currentListItem) => listItemTemplate(currentListItem))
  const kitResources = checklistData.kit.resources.map((currentResource) => resourceTemplate(currentResource))

  const planChecklist = checklistData.plan.list.map((currentListItem) => listItemTemplate(currentListItem))
  const planResources = checklistData.plan.resources.map((currentResource) => resourceTemplate(currentResource))

  const infoResources = checklistData.info.resources.map((currentResource) => resourceTemplate(currentResource))
  const involveResources = checklistData.involve.resources.map((currentResource) => resourceTemplate(currentResource))

  return (
    <React.Fragment>
    <section>
      <h1>Preparing for Disaster</h1>
      <p>
        Get disaster ready <strong>before</strong> an emergency strikes. Here's how to get started:
      </p>
      <ol className="tiles">
        <li>
          <a href="#kit">Get a Kit</a>
        </li>
        <li>
          <a href="#plan">Make a Plan</a>
        </li>
        <li>
          <a href="#info">Be Informed</a>
        </li>
        <li>
          <a href="#involve">Get Involved</a>
        </li>
      </ol>
    </section>

    <section>
      <h2>Get a Kit</h2>
      <a name="kit"></a>
      <p>The emergency supplies in a basic disaster readiness kit can help you keep alive. Think first about essentials like food, water, shelter, and clean air. Also keep in mind how you will receive information during a disaster.</p>
      <aside>
        Protip: Aim for at least 3 days worth of supplies for your household. Consider 2 kits—one for the house and one portable if you need to leave home.
      </aside>
      <h3>Emergency Kit Checklist</h3>
      <ul className="fancy-checklist">
        { kitChecklist }
      </ul>
      <h3>Additional Resources</h3>
      <ul>
        { kitResources }
      </ul>
    </section>

    <section>
      <a name="plan"></a>
      <h2>Make a Plan</h2>
      <p>Know what to do in an emergency situation, especially if you're separated. A good plan can help prevent panic and keep you safe during chaotic situations.</p>
      <aside>
        Protip: Your family may be separated when a disaster strikes so everyone needs to know what to do, how to contact each other, and where to meet.
      </aside>
      <h3>Planning Checklist</h3>
      <ul className="fancy-checklist">
        { planChecklist }
      </ul>
      <h3>
        Additional Resources
      </h3>
      <ul>
        { planResources }
      </ul>
    </section>

    <section>
      <a name="info"></a>
      <h2>Be Informed</h2>
      <p>Stay updated with the latest emergency alerts and warnings. Know the type of disasters that can affect your area so you can plan accordingly.</p>
      <h3>
        Additional Resources
      </h3>
      <ul>
        { infoResources }
      </ul>
    </section>

    <section>
      <a name="involve"></a>
      <h2>Get Involved</h2>
      <p>Be proactive in helping your community prepare for disaters. You can help make your community safer and stronger.</p>
      <h3>
        Additional Resources
      </h3>
      <ul>
        { involveResources }
      </ul>
    </section>
    </React.Fragment>
  )

};

export {
  infoResourcesMarkup
};
