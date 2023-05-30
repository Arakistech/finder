'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/iarakistain/cli72tm6q02o401pr1lm04899',
  accessToken:
    'pk.eyJ1IjoiaWFyYWtpc3RhaW4iLCJhIjoiY2w1a3B3YTMxMGNmbTNjbWd2ZTc3bmkyMiJ9.A9qFkPgG40gFsgruODOWRA',
  CSV: './Sample_Data.csv',
  center: [-120.234, 47.398],
  zoom: 6,
  title: 'Dubai Map',
  description:
    ' You can also filter the list by business type.',
  sideBarInfo: ['Location_Name', 'Address', 'Phone'],
  popupInfo: ['Location_Name'],
  filters: [
    {
      type: 'dropdown',
      title: 'Languages supported: ',
      columnHeader: 'Languages',
      listItems: [
        'Amharic',
        'ASL',
        'Cambodian',
        'Chinese',
        'Danish',
        'English',
        'French',
        'German',
        'Greek',
        'Hindi',
        'Italian',
        'Japanese',
        'Korean',
        'Language Line Services',
        'Norwegian',
        'Oriya',
        'Portuguese',
        'Punjabi',
        'Russian',
        'Somali',
        'Spanish',
        'Swedish',
        'Tagalog',
        'Thai',
        'Tigrinya',
        'Tongan',
        'Vietnamese',
        'Ukranian',
      ],
    },
    {
      type: 'checkbox',
      title: 'Devices available: ',
      columnHeader: 'Devices_available', // Case sensitive - must match spreadsheet entry
      listItems: ['Computer', 'Wi-Fi', 'Adaptive Laptops'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Clients: ',
      columnHeader: 'Clients',
      listItems: [
        'Adults',
        'Disabled',
        'Homeless',
        'Immigrants/Refugees',
        'Low Income',
        'Seniors',
        'Youth: Pre-teen',
        'Youth: Teen',
      ],
    },
  ],
};
