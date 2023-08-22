import { NOTIFICATION_TYPES } from './styles-constants';

// General
export const DANK_URL = 'https://joindank.com/';

export const INPUT_REQUIRED = '*';
export const INPUT_REQUIRED_CAPTION = '*Indicates required';
export const LIST_SHOW_ALL = 'Show all';
export const LIST_SHOW_LESS = 'Show less';
export const TEXT_READ_MORE = 'Read more';
export const TEXT_READ_LESS = 'Read less';
export const SAVE = 'Save';
export const CANCEL = 'Remove';

export const TITLE = 'Title';
export const COMPANY = 'Company';
export const COMPANY_SEARCH = 'Search the company';
export const EMPLOYMENT_TYPE = 'Employment Type';
export const CITY = 'City';
export const CITY_SELECT = 'Select City';
export const SELECT_EMPLOYMENT_TYPE = 'Select Employment Type';
export const IS_CURRENT_ROLE = 'I am currently working in this role';
export const IS_PRESENT = 'Present';
export const DESCRIPTION = 'Description';
export const IS_REMOTE = 'Working remote';
export const DATE_START = 'Start Date';
export const DATE_END = 'End Date';
export const DATE_SELECT = 'Select Date';
export const EMPLOYMENT_TYPE_OPTIONS = [
  'Full-Time Employee',
  'Part-Time Employee',
  'Contract Employee',
  'Temporary Employee',
  'Intern',
  'Freelancer',
  'Consultant',
];

export const SHARE_INVITE_ACTION = 'Invite';
export const SHARE_INVITE_ACTION_TITLE = 'Invite your friends and peers to join Dank';
export const SHARE_INVITE_LINK = 'Invite link for Dank.';
export const SHARE_INVITE_LINK_TITLE = 'Check this out: ';

//TODO: fetch from API
export const LOCATION_OPTIONS = [
  'Sydney, Australia',
  'Rio De Janeiro, Brazil',
  'Mumbai, India',
  'Cape Town, South Africa',
  'Shanghai, China',
  'Toronto, Canada',
  'London, United Kingdom',
  'New York, United States',
  'Tokyo, Japan',
  'Paris, France',
  'Dubai, United Arab Emirates',
  'Berlin, Germany',
  'Mexico City, Mexico',
];

export const NOTIFICATION_ACTIONS: {
  [key in keyof typeof NOTIFICATION_TYPES]: any;
} = {
  NoOp: {
    label: '',
    icon: '',
    title: 'successfully',
  },
  Undo: { label: 'Undo', icon: 'arrow-u-left-top', title: 'successfully' },
  Withdraw: { label: 'Withdraw', icon: '', title: 'successfully' },
  Retry: { label: 'Retry', icon: 'refresh', title: 'There was an error' },
  Close: {
    label: '',
    icon: 'close',
    title: 'The error has been reported to our team. Please retry later.',
  },
};

// Error messages
export const ERROR_NOT_FOUND = 'Not found';

// Buttons
export const BUTTON_TEXT_DISCARD = 'Discard';
export const BUTTON_TEXT_KEEP_WRITING = 'Keep writing';

// Discover Page
export const HOME_TAB = 'Home';
export const SUGGESTIONS_UNIVERSITY_CONNECT_TITLE = 'Connect with peers from your academic institution';

// Message Page
export const MESSAGE_TAB = 'Message';

// Settings Page
export const SETTINGS_TAB = 'Settings';

// Profile page
export const PROFILE_ABOUT = 'Bio';
export const PROFILE_SOCIAL_LINKS = 'Social accounts';
export const PROFILE_EDUCATION = 'Education';
export const PROFILE_EXPERIENCE = 'Experience';
export const PROFILE_SIMILARITIES = 'What connects you both';
export const WEBSITE_URI_TITLE = 'My Website';

// Tags
export const PROFILE_TAGS_UNCOMMON = 'others';
export const PROFILE_TAGS_OTHERS = 'Interest and Hobbies';
export const PROFILE_TAGS_OTHERS_COMMON = 'common interests';
export const PROFILE_TAGS_SKILLS = 'Skills';
export const PROFILE_TAGS_SKILLS_COMMON = 'common skills';

// Connections
export const NETWORK_TAB = 'Network';
export const CONNECTIONS_INFO_NO_CONNECTIONS = 'No connections yet';
export const CONNECTIONS_INFO_NUMBER_OF_CONNECTIONS = 'connections';
export const CONNECT_ACTIONS_CONNECT = 'Connect';
export const CONNECT_ACTIONS_MESSAGE = 'Message';
export const CONNECT_ACTIONS_PENDING = 'Invitation Sent';
export const CONNECT_ACTIONS_NOTIFICATIONS: {
  [key in keyof typeof NOTIFICATION_TYPES]: any;
} = {
  NoOp: {
    accepted: 'Connection request accepted ' + NOTIFICATION_ACTIONS.NoOp.title,
    withdraw: 'Connection request withdrawn ' + NOTIFICATION_ACTIONS.NoOp.title,
  },
  Undo: {
    remove: 'Connection removed ' + NOTIFICATION_ACTIONS.Undo.title,
    reject: 'Connection request rejected ' + NOTIFICATION_ACTIONS.Undo.title,
  },
  Withdraw: {
    sent: 'Connection request sent ' + NOTIFICATION_ACTIONS.Withdraw.title,
  },
  Retry: {
    sent: NOTIFICATION_ACTIONS.Retry.title + ' sending the connection request',
    withdraw: NOTIFICATION_ACTIONS.Retry.title + ' withdrawing the connection request',
    remove: NOTIFICATION_ACTIONS.Retry.title + ' removing the connection',
    accept: NOTIFICATION_ACTIONS.Retry.title + ' accepting the connection request',
    reject: NOTIFICATION_ACTIONS.Retry.title + ' rejecting the connection request',
  },
  Close: {
    accept: 'There was an error accepting the connection request. ' + NOTIFICATION_ACTIONS.Retry.title,
    reject: 'There was an error rejecting the connection request. ' + NOTIFICATION_ACTIONS.Retry.title,
  },
};
// Follow
export const FOLLOW_ACTIONS_FOLLOW = 'Follow';
export const FOLLOW_ACTIONS_FOLLOWING = 'Following';
