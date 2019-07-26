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
        title: 'building on fire',
        description: 'large fire in region effecting following neighborhoods with smoke, neiborhood 1, 2, 3',
        updates: [
            '10am fire spread to next building',
            '11am fire contained'
        ],
        disasterAddress: '',
        disasterPinPoint: '',
        effectedRadius: 5,
        resolved: false,
        started: '8am',
        reportedBy: 'John Doe',
        contactName: 'Bob da Builder',
        contactPhone: '(456) 555-6785',
        contactEmail: 'bob@builder.com',

    },
    {
        title: 'building on fire',
        description: 'large fire in region effecting following neighborhoods with smoke, neiborhood 1, 2, 3',
        updates: [
            '10am fire spread to next building',
            '11am fire contained'
        ],
        disasterAddress: '',
        disasterPinPoint: '',
        effectedRadius: 5,
        resolved: '',
        started: '8am',
        reportedBy: 'John Doe',
        contactName: 'Bob da Builder',
        contactPhone: '(456) 555-6785',
        contactEmail: 'bob@builder.com',

    },
]

export {
    posts
}
