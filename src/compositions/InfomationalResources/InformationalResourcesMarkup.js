import React from 'react'

import './InformationalResources.css'

const infoResourcesMarkup = () => {

  const checkListData = {
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
        <li>
          <input type="checkbox" id="kit-water" />
          <label for="kit-water">
            <h4>Water</h4>
            <p>At least 1 gallon per person, per day for drinking and sanitation</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-food"/>
          <label for="kit-food">
            <h4>Food</h4>
            <p>Non-perishable like canned, dry, or powdered goods</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-radio"/>
          <label for="kit-radio">
            <h4>Radio (Battery Powered)</h4>
            <p>To get alerts and information when networks are down</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-flashlight"/>
          <label for="kit-flashlight">
            <h4>Flashlight</h4>
            <p>To see in dark places, at night, or as a signaling device</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-batteries"/>
          <label for="kit-batteries">
            <h4>Batteries</h4>
            <p>For your radio and flashlight</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-first-aid"/>
          <label for="kit-first-aid">
            <h4>First Aid Kit</h4>
            <p>Emergency services may not be able to help you immediately after a disaster</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-whistle"/>
          <label for="kit-whistle">
            <h4>Whistle</h4>
            <p>To signal for help</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-filter"/>
          <label for="kit-filter">
            <h4>Air Filtering Mask</h4>
            <p>Dust and smoke are commonly encountered hazards</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-wipes"/>
          <label for="kit-wipes">
            <h4>Wet Wipes</h4>
            <p>For sanitation and hygiene, especially if there's no running water</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-wrench"/>
          <label for="kit-wrench">
            <h4>Wrench or Pliers</h4>
            <p>For turning off utilities like gas lines</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-can-opener"/>
          <label for="kit-can-opener">
            <h4>Can Opener</h4>
            <p>For opening canned foods</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-plastic-sheet"/>
          <label for="kit-plastic-sheet">
            <h4>Plastic Sheeting</h4>
            <p>Useful for using as emergency shelter</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-duct-tape"/>
          <label for="kit-duct-tape">
            <h4>Duct Tape</h4>
            <p>For constructing emergency shelter and numerous other uses</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-garbage"/>
          <label for="kit-garbage">
            <h4>Garbage Bags</h4>
            <p>To maintain sanitation</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="kit-other"/>
          <label for="kit-other">
            <h4>Other Items Unique to Your Family</h4>
            <p>Examples: prescription medications, baby formula, important documents</p>
          </label>
        </li>
      </ul>
      <h3>Additional Resources</h3>
      <ul>
        <li>
          <a href="http://www.sanjoseca.gov/index.aspx?NID=1409" target="_blank" rel="noopener noreferrer">San Jose - Be Supplied</a>
          <p>Emergency kit building information from the City of San Jose's Office of Emergency Management, including local stores to purchase items and organizations you can purchase ready-made kits from.</p>
        </li>
        <li>
          <a href="https://www.ready.gov/build-a-kit" target="_blank" rel="noopener noreferrer">Ready.gov - Build a Kit</a>
          <p>Official emergency kit building information from the US government with a good overview of what to include in a kit, plus several printable checklists.</p>
        </li>
        <li>
          <a href="http://www.conovernc.gov/vertical/Sites/%7BBAB0D760-E669-4331-9C22-9FB14833B6B9%7D/uploads/Visual-Checklist-Disaster-Supply-Kit.jpg" target="_blank" rel="noopener noreferrer">Visual Checklist for a Disaster Supply Kit</a>
          <p>An easy to use and printable emergency supply kit checklist with pictures for each item. Great for building an emergency kit if you like a more visual approach.</p>
        </li>
        <li>
          <a href="https://www.fema.gov/media-library-data/1389294951288-b25113d9aef2b877323d380720827f3b/R3_trifold_eng.pdf" target="_blank" rel="noopener noreferrer">FEMA Emergency Preparedness Brochure</a>
          <p>Useful essential disaster planning guide in short brochure format by FEMA. Contains all key preparedness information.</p>
        </li>
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
        <li>
          <input type="checkbox" id="plan-comms"/>
          <label for="plan-comms">
            <h4>Communication Plan</h4>
            <p>How will you receive emergency alerts or warnings? How will you contact family members--does everyone have each others contact information? How about emergency meeting places or out-of-town contacts if you are can't be reached?</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="plan-shelter"/>
          <label for="plan-shelter">
            <h4>Shelter Plan</h4>
            <p>Many disasters require taking shelter somewhere appropriate to the hazard. Do you know the safest locations for each type of hazard in your area? Where will you go during a disaster?</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="plan-evac"/>
          <label for="plan-evac">
            <h4>Evacuation Plan</h4>
            <p>If there is a call for evacuation, do you know where you will go and where you will stay? What routes will you take? What supplies will you need?</p>
          </label>
        </li>
        <li>
          <input type="checkbox" id="plan-practice"/>
          <label for="plan-practice">
            <h4>Practice Plan</h4>
            <p>All the planning in the world is useless if you don't know what to do when disaster strikes. Practice your plan regularly to make sure it works and you can remember the information.</p>
          </label>
        </li>
      </ul>
      <h3>
        Additional Resources
      </h3>
      <ul>
        <li>
          <a href="http://www.sanjoseca.gov/index.aspx?NID=1408" target="_blank" rel="noopener noreferrer">
            San Jose - Be Prepared
          </a>
          <p>San Jose Office of Emergency Management's 10 step disaster preparation guide. Includes several planning resources and tools to learn about local hazards.</p>
        </li>
        <li>
          <a href="https://www.sccgov.org/sites/oes/residents/Pages/ReadySCC.aspx" target="_blank" rel="noopener noreferrer">
            ReadySCC
          </a>
          <p>Paid for by the County of Santa Clara, ReadySCC is a free mobile app that helps create a family disaster preparedness plan. It can help store contacts and resources.</p>
        </li>
        <li>
          <a href="https://www.sccgov.org/sites/oes/residents/Pages/twelve-month-emergency-preparedness-calendar.aspx" target="_blank" rel="noopener noreferrer">
            Twelve Month Emergency Preparedness Calendar
          </a>
          <p>Created by County of Santa Clara's Emergency Management office, this 12 month program called Do 1 Thing helps you prepare for disasters by doing one thing each month.</p>
        </li>
        <li>
          <a href="https://www.ready.gov/make-a-plan" target="_blank" rel="noopener noreferrer">
            Ready.gov - Make a Plan
          </a>
          <p>
          Offical federally maintained Ready.gov guide to emergency planning. Lists steps and provides templates for emergency planning.
          </p>
        </li>
        <li>
          <a href="https://www.fema.gov/media-library/assets/documents/22187" target="_blank" rel="noopener noreferrer">
            FEMA - Family Emergency Plans
          </a>
          <p>
          Several of FEMA's Family Emergency Plan templates with different versions and languages available to download.
          </p>
        </li>
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
        <li>
          <a href="http://www.sanjoseca.gov/index.aspx?NID=5760#" target="_blank" rel="noopener noreferrer">
            San Jose - Be Informed
          </a>
          <p>
          San Jose Office of Emergency Management's guide to staying informed, including key emergency contact information and useful apps.
          </p>
        </li>
        <li>
          <a href="https://www.211bayarea.org/disaster-information/" target="_blank" rel="noopener noreferrer">
            211 Bay Area - Disaster Information
          </a>
          <p>
          During a disaster, residents can call 2-1-1 for critical information about evacuation routes, food, and shelter, as well as resources during recovery. You can also text your zip code to 898211 and a resource specialist can help you find what you need.
          </p>
        </li>
        <li>
          <a href="https://www.sccgov.org/sites/alertscc/Pages/home.aspx" target="_blank" rel="noopener noreferrer">
            AlertSCC
          </a>
          <p>
          AlertSCC is a free, easy, and confidential way for anyone who lives or works in Santa Clara County to get emergency warnings sent directly to their cell phone, mobile device, email, or landline.
          </p>
        </li>
        <li>
          <a href="https://www.ready.gov/alerts" target="_blank" rel="noopener noreferrer">
            Emergency Alerts
          </a>
          <p>
          Ready.gov's page describing different warning alerts you can receive and the types of devices that receive the alerts, including radio, broadcast, and wireless alert systems.
          </p>
        </li>
        <li>
          <a href="https://www.google.org/crisismap/weather_and_events" target="_blank" rel="noopener noreferrer">
            Google Crisis Map
          </a>
          <p>
          Google's Crisis Map shows emergencies, weather, hazards, and alerts overlaid on a map of the US. Simple, but easy to use.
          </p>
        </li>
        <li>
          <a href="https://www.data.gov/disasters/apps-tools/" target="_blank" rel="noopener noreferrer">
            Data.gov - Apps & Tools
          </a>
          <p>
          Data.gov's page features numerous apps and tools shared at the White House Innovation for Disaster Response and Recovery Demo Day to help address the challenges that severe weather and other disasters can pose to our communities.
          </p>
        </li>
        <li>
          <a href="https://www.nws.noaa.gov/nwr/" target="_blank" rel="noopener noreferrer">
            NOAA Weather Radio All Hazards
          </a>
          <p>
          NOAA Weather Radio broadcasts official Weather Service warnings, watches, forecasts and other hazard information 24 hours a day, 7 days a week. Lists the frequencies to tune into.
          </p>
        </li>
        <li>
          <a href="https://www.fema.gov/disaster-recovery-centers" target="_blank" rel="noopener noreferrer">
            FEMA - Disaster Recovery Centers
          </a>
          <p>
          During declared disasters, FEMA can open a Disaster Recovery Center, which is a readily accessible facility or mobile office where survivors may go for information about FEMA programs or other disaster assistance programs, and to ask questions. This page provides information and lets you search for a Disaster Recovery Center.
          </p>
        </li>
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
        <li>
          <a href="http://www.sanjoseca.gov/index.aspx?NID=6001" target="_blank" rel="noopener noreferrer">
            San Jose - Be Involved
          </a>
          <p>
          The City of San Jose's Office of Emergency Management page on getting involved in community emergency preparedness programs. You can volunteer directly with the department, with neighborhood watch programs, take CERT (Community Emergency Response Team) training, and find other volunteer opportunities.
          </p>
        </li>
        <li>
          <a href="http://evc-santaclaracounty.org/other-disaster-volunteer-resources/" target="_blank" rel="noopener noreferrer">
            Santa Clara County Emergency Volunteer Center - Disaster Volunteer Resources
          </a>
          <p>
          EVC is a disaster preparedness and response program designed to increase the capacity of the community to respond to and recover from disasters through the effective coordination of spontaneous volunteer resources. They maintain an excellent resources page listing local volunteer organizations and opportunities.
          </p>
        </li>
        <li>
          <a href="https://www.redcross.org/local/california/northern-california-coastal/volunteer.html" target="_blank" rel="noopener noreferrer">
            American Red Cross Northern CA Coastal Region - Volunteer
          </a>
          <p>
          The Red Cross is likely the most well known nonprofit organization providing disaster response and other humanitarian assistance. They have numerous volunteer training programs and opportunities related to disaster response adn emergency preparedness. The Silicon Valley chapter is located in San Jose.
          </p>
        </li>
        <li>
          <a href="https://www.ready.gov/volunteer" target="_blank" rel="noopener noreferrer">
            Ready.gov - Volunteer
          </a>
          <p>
          The federal Ready.gov volunteer page contains extensive listings of volunteer organizations and opportunities.
          </p>
        </li>
        <li>
          <a href="https://www.redcross.org/local/california/northern-california-coastal/volunteer.html" target="_blank" rel="noopener noreferrer">
            Americorps Pathfinder Search Tool
          </a>
          <p>
          For more involved or longer term commitments, Americorps lists several volunteer opportunities in the field of disaster preparedness and recovery. This page lets you search and filter by state and opportunity type (select California under State and Disaster Preparedness & Recovery under Service Area). Because Americorps is a well supported federal program, accepted volunteers are eligible for monetary assistance, education awards, and other benefits.
          </p>
        </li>
      </ul>
    </section>
    </React.Fragment>
  )

};

export {
  infoResourcesMarkup
};
