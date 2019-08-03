const posts = [
    {
        title: 'Evacuations near San Jose Guadalupe River due to flood risk',
        description: 'San Jose city officials warned of possible flooding brought on by intense rains along the Guadalupe River from Willow Glen Way to Atlanta Ave',
        updates: [
            '7:07 am National Weather Service's forecast expect lighter rain throughout the day which is not predicted to create flooding conditions. Residents in evacuation zones are safe to return home.'
        ],
        disasterAddress: '619 Willow Glen Way',
        disasterPinPoint: '37.303897,-121.882354',
        effectedRadius: 5,
        resolved: true,
        started: '5:00 am',
        reportedBy: 'Steven Jacobs',
        contactName: 'Steven Jacobs',
        contactPhone: '(408) 555-6785',
        contactEmail: 'steve@jacobs.com',

    },
    {
        title: 'Grass fire in San Jose threatens homes, structures',
        description: '47-acre grass fire burned a mobile home and a small cottage to the ground.',
        updates: [
            '12:30 pm fire has been contained. No one was injured in the blaze'
        ],
        disasterAddress: '3138 Chillum Ct',
        disasterPinPoint: '',
        effectedRadius: 5,
        resolved: true,
        started: '11:00 am',
        reportedBy: 'Janie Whitmire',
        contactName: 'Jonathon Whitmire',
        contactPhone: '(408) 895-6785',
        contactEmail: 'JonAndJanie@aol.com',

    },
    {
        title: 'Radioactive Hazmat Breach',
        description: 'Workers were removing cesium chloride salt when the breach occurred around 9am',
        updates: [
            '10am 13 people have tested positive for exposure to radioactive materials'
        ],
        disasterAddress: 'Regional Medical Center of San Jose, 225 N Jackson Ave, 95116',
        disasterPinPoint: '37,-121',
        effectedRadius: 5,
        resolved: false,
        started: '9am',
        reportedBy: 'John Doe',
        contactName: 'Aaron Hill',
        contactPhone: '(408) 259-5050',
        contactEmail: 'ahill@cdc.ca.gov',

    },
    {
        title: 'Hwy 87 Bridge Collapses near Hwy 85',
        description: 'The on-ramp bridge from Hwy 85 South to Hwy 87 North collapsed during the AM commute. 5 vehicles fell from the bridge during the collapse with 8 people sustaining life-threatening injuries.',
        updates: [],
        disasterAddress: 'Hwy 87 at Hwy 85',
        disasterPinPoint: '37,-121',
        effectedRadius: 1,
        resolved: '',
        started: '7am',
        reportedBy: 'Gerome Every',
        contactName: 'Gerome Every',
        contactPhone: '(408) 252-2680',
        contactEmail: 'gerome@every.com',

    },
]

export {
    posts
}
