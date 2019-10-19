import React from 'react'

import './FEMAChecklist.css'

const FEMAChecklistMarkup = () => {
  const checklistData = {
      general: [
          {
            id: 'stay-safe',
            title: 'Maintain Safety',
            description: "If you had to leave home, return only when local authorities advise that it is safe to do so. Make sure you stay safe and avoid danger during the recovery process. Check with officials that your home is safe to enter. You may need to find temporary housing while your home is being rebuilt or while securing a new place to live."
          }, {
            id: 'mental-health',
            title: 'Ensure Mental Health',
            description: "Mental health and emotional recovery are as important as physical recovery and rebuilding your home. If your and your family's state of mind isn't good, managing the recovery process can be difficult. Stay connected with family and utilize support resources."
          }, {
            id: 'call-insurance',
            title: 'Contact Insurance and/or Landlord ASAP',
            description: "Contact your insurance company as soon as possible to report your loss. If renting, contact your landlord to find out if repairs are planned. If you have homeowner's or renter's insurance, check what's covered. Make sure you follow and understand instructions for completing your claim. Check your property, earthquake, flood, fire, and other applicable coverage.""
          }, {
            id: 'doc-damage',
            title: 'Document Damage, Document Everything',
            description: "Check your home inventory records (if you have them) and track what needs fixing or replacing. Check that you have  important records/documents like passports, birth certificates, tax info, etc. Take photos to document damage. Take notes on who you talk with, when, and about what. You will need to have many phone calls and conversations you need to track. You may need the help of a professionals. Don't fix or throw away anything before discussing it with your adjuster first."
          }, {
            id: 'doc-damage',
            title: 'Document Damage, Document Everything',
            description: "Check your home inventory records (if you have them) and track what needs fixing or replacing. Check that you have  important records/documents like passports, birth certificates, tax info, etc. Take photos to document damage. Take notes on who you talk with, when, and about what. You will need to have many phone calls and conversations you need to track. You may need the help of a professionals. Don't fix or throw away anything before discussing it with your adjuster first."
          }, {
            id: 'prevent-loss',
            title: 'Prevent Further Damage to Home',
            description: 'Act prudently to prevent further loss to your property--insurance may not cover subsequent damage due to reasonable measures not being taken. Confirm any necessary actions with your insurance company. Check with your landlord if renting.'
          }, {
            id: 'check-aid',
            title: 'Check if Disaster Assistance is Available',
            description: "A range of government public agencies, private organizations, and companies may be offering aid to homeowners and renters affected by a disaster. A tenant rights organization may help point to assistance for renters. Research what's available, but be wary of scammers and fraud. Local American Red Cross and Salvation Army chapters may be able to offer information on help. If FEMA is offering assistance, scroll down for a FEMA specific checklist."
          }, {
            id: 'replace-docs',
            title: 'Replace Vital Documents',
            description: 'You may need to replace vital documents that are lost due to property damage. Licenses, IDs, passports, certificates, credit cards, tax records, and other important files may need replacement. Catalog your documents and contact the appropriate authorities.'
          }, {
            id: 'use-help',
            title: 'Use Helpers',
            description: 'Recovery can be a large, daunting process. Tap the connections like family, friends, co-workers, groups you are part of, and the community to see what they can do to help. Spreading a big project into smaller tasks can ease recovery. It can be as simple as someone watching your children, helping you photograph damage, or checking out new places to live. Consider professional guidance with an accredited financial counselor or CPA with a personal finance credential. After that, you will likely require the service of contractors, building planners, and other skilled labor during repairs.'
          }
      ],
      resources: [
        {
          url: 'https://www.sccassessor.org/index.php/tax-savings/tax-reductions/disaster-relief',
          title: 'Office of the Assessor, County of Santa Clara - Disaster Relief',
          description: 'Information and applications for disaster relief related to property taxes and assessments. Apply for property tax reductions or bill deferrals here. Also available on the website is an application for reassessment exclusion from seismic retrofitting improvements.'
        }, {
          url: 'http://www.wildfirerecovery.org/',
          title: 'California Statewide Wildfire Recovery Services',
          description: 'Central listing of resources for California residents on recovering from wildfire diasasters. Includes links to local assistance, services, rebuilding, financial help, contacts, and more.'
        }, {
          url: 'https://www.caloes.ca.gov/cal-oes-divisions/earthquake-tsunami-volcano-programs/earthquake-recovery',
          title: 'Cal OES - Earthquake Recovery',
          description: "General guidance on earthquake recovery resources from the California Governor's Office of Emergency Services."
        }, {
          url: 'http://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/dont-get-burned.cfm',
          title: "CA Department of Insurance - Don't Get Burned After a Disaster",
          description: 'A detailed guide to avoiding scams, conducting due diligence, reporting fraud, and other related resources. Includes contact information for public adjusters, attorneys, license boards, and insurance fraud offices. Contains specific checks in hiring contractors and in the rebuilding process.'
        }, {
          url: 'https://www.caloes.ca.gov/RecoverySite/Documents/Disaster-Recovery-Assistance-and-Services-Brochure.pdf',
          title: 'Cal OES - Disaster Recovery Assistance and Services Brochure',
          description: 'Comprehensive list of disaster assistance services and programs in California from public agencies. Includes sections on employment assistance, food progams, counseling, insurance, rebuilding, taxes, and record replacement.'
        }, {
          url: 'https://www.redcross.org/content/dam/redcross/atg/PDF_s/Preparedness___Disaster_Recovery/General_Preparedness___Recovery/Financial/picking-up-the-pieces-A5076.pdf',
          title: 'UMN Extension - Recovery After Disaster: The Family Financial Toolkit',
          description: "An award winning toolkit for financial recovery after a disaster featuring written and video forms. At nearly 200 pages it's book length and one of the most complete disaster recovery resources available. Organized into units, the toolkit offers strategies, checklists, questions to answer, resource lists, and work sheets to aid the disaster recovery process. Produced by the University of Minnesota, the toolkit is available in a non-state specific form (just click the link). The toolkit is also available in video form, check for the link in the sidebar."
        }, {
          url: 'https://www.ready.gov/recovering-disaster',
          title: 'Ready.gov - Recovering from Disaster',
          description: 'From Ready.gov: General advice on steps to take after disaster strikes in order to begin getting your home, your community and your life back to normal.'
        }, {
          url: 'https://www.redcross.org/get-help/disaster-relief-and-recovery-services.html',
          title: 'American Red Cross - Disaster Relief & Recovery Services',
          description: "The Red Cross' main page to find resources related to disaster recovery. Includes well written, extensive information on staying safe, checking your home, emotional recovery, and financial recovery. There's also a full disaster type specific knowledge base."
        }, {
          url: 'https://www.redcross.org/content/dam/redcross/atg/PDF_s/Preparedness___Disaster_Recovery/General_Preparedness___Recovery/Financial/picking-up-the-pieces-A5076.pdf',
          title: 'American Red Cross - Picking Up the Pieces After a Disaster Brochure',
          description: 'Only 16 pages long but a comprehensive, printable brochure containing a framework for disaster recovery. A good reference to have on hand.'
        }, {
          url: 'https://www.redcross.org/content/dam/redcross/atg/PDF_s/Preparedness___Disaster_Recovery/General_Preparedness___Recovery/Financial/picking-up-the-pieces-A5076.pdf',
          title: 'American Red Cross - Picking Up the Pieces After a Disaster Brochure',
          description: 'Only 16 pages long but a comprehensive, printable brochure containing a framework for disaster recovery. A good reference to have on hand.'
        }, {
          url: 'https://www.disasterassistance.gov/',
          title: 'DisasterAssistance.gov',
          description: 'The official federal government website for finding and applying for disaster assistance in your area.'
        }
      ],
      survivor: [
        {
          id: "reg-fema",
          title: "Register with FEMA",
          description: "FEMA offers disaster survivors multiple options to apply for aid if it is available: via web, mobile app, phone, and by visiting a local Disaster Recovery Center. People with disabilities should make any reasonable accommodation request at this step."
        }, {
          id: "fema-inspect",
          title: "Schedule a FEMA Inspection",
          description: "FEMA inspectors typically schedule onsite inspections with the applicant within two weeks after the applicant has registered for disaster assistance. Due to the extent of damage, your on-site inspection may take longer."
        }, {
          id: "fema-letter",
          title: "Read FEMA Determination Letter Carefully",
          description: "The letter should explain FEMA’s decision and any problems to correct. If a mistake has been made, contact FEMA right away by calling the toll-free numbers below or visiting a Disaster Recovery Center."
        }, {
          id: "fema-grant",
          title: "Use FEMA Grant for Disaster Recovery",
          description: "The notification letter from FEMA explains how to use the funds appropriately."
        }, {
          id: "save-receipts",
          title: "Save Receipts & Maintain Records",
          description: "Document how the funds were used and retain records for all repairs, cleanup and disaster-related costs for at least three years in case of a FEMA audit."
        }, {
          id: "fema-contact",
          title: "Stay in Touch with FEMA",
          description: "Go to <a href='https://www.disasterassistance.gov/' target='_blank' rel="noopener noreferrer">www.DisasterAssistance.gov/</a> or call the toll-free numbers below."
        }, {
          id: "visit-drc",
          title: "Visit a Disaster Recovery Center",
          description: "Go to <a href='https://www.disasterassistance.gov/' target='_blank' rel='noopener noreferrer'>www.DisasterAssistance.gov/</a> to find the nearest Disaster Recovery Center or call the toll-free"
        }, {
          id: "fema-display",
          title: "Visit a FEMA Hazard Mitigation Display",
          description: "Go to <a href='https://www.disasterassistance.gov/' target='_blank' rel='noopener noreferrer'>www.DisasterAssistance.gov/</a> to find the nearest Disaster Recovery Center or call the toll-free"
        }
      ]
  }

  const generalList = checklistData.general.map((item) =>
    <li>
      <input type="checkbox" id={item.id} />
      <label htmlFor={item.id}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </label>
    </li>
  )

  const resourcesList = checklistData.resources.map((item) =>
    <li>
      <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
      <p>{item.description}</p>
    </li>
  )

  const survivorList = checklistData.survivor.map((item) =>
    <li>
      <input type="checkbox" id={item.id} />
      <label htmlFor={item.id}>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </label>
    </li>
  )

  return (
    <React.Fragment>
    <section>
      <h1>Recovering: What to Do After a Disaster</h1>
    </section>

    <section>
      <p>After a disaster, you will need to put your life back together. You may need to evaluate damage, assign responsibilities, contact insurance, and apply for assistance if available. If FEMA has declared a disaster in your area, federal aid may be available. <a href="#femalist">View a FEMA disaster assistance specific checklist</a> further down the page.</p>

      <h3>General Recovery Checklist</h3>
      <ul className="fancy-checklist">
        { generalList }
      </ul>
      <h3>Additional Resources</h3>
      <ul>
        { resourcesList }
      </ul>
    </section>

    <section>
      <a name="femalist"></a>
      <h2>Eligible for FEMA Disaster Assistance?</h2>
      <p>If you are eligible for disaster assistance from FEMA use this checklist for the aid application process.</p>
      <aside>
        Based on the <a href="https://www.fema.gov/media-library-data/1505143234654-0094f4d1a798c1d5175d7e11a114e77a/disaster-survivors-checklist.pdf" target="_blank" rel="noopener noreferrer">FEMA Disaster Survivor's Checklist</a>. Click the link to view the official FEMA checklist or visit <a href="https://www.disasterassistance.gov/" target="_blank" rel="noopener noreferrer">www.DisasterAssistance.gov/</a>.
      </aside>
      <h3>FEMA Disaster Survivor Checklist</h3>
      <ul className="fancy-checklist">
        { survivorList }
      </ul>
    </section>

    </React.Fragment>
  )

};

export {
  FEMAChecklistMarkup
};
