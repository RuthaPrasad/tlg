// import { ICON_TYPE, NOTIFICATION_TYPES, TAG_TYPES } from './styles-constants';

// export const MAX_TIMESTAMP = 8640000000000000;

// export const getMonthYear = function (date: Date) {
//   //TODO: LANG- different languages apart from en-us
//   return date.toLocaleString('en-us', { month: 'short', year: 'numeric' });
// };

// export const getLocation = function (location: Location) {
//   //TODO: LANG- different languages apart from en-us
//   return location.city + ', ' + location.country;
// };

// export const formatTenure = function (tenure: Tenure) {
//   const startDate = getMonthYear(tenure.startDate);
//   //TODO: change endDate to "present" if current date, depending on api return value
//   const endDate = getMonthYear(tenure.endDate);
//   return startDate + ' - ' + endDate;
// };

// export interface Route {
//   label: string;
//   component: any;
//   props?: any;
//   icon?: keyof typeof MaterialCommunityIcons.glyphMap;
// }

// export interface TopTabProps {
//   initialRoute: string;
//   tabList: Route[];
// }

// export interface BottomTabProps {
//   initialRoute: string;
//   tabList: Route[];
//   header?: React.FC<any>;
// }

// export interface ImageSource {
//   uri: string;
//   width?: number;
//   height?: number;
//   method?: string;
//   headers?: any[];
//   body?: string;
// }

// export interface ActionInfo extends ListItemInfo {
//   image: any;
//   title: string;
//   description: string;
//   onPress?: () => void;
//   onDismiss?: () => void;
//   styleOverrides?: {};
// }

// export interface ActionItemProps extends ListItemProps {
//   data: ActionInfo;
// }

// export interface SocialLink {
//   entity: Entity;
//   uri: string;
//   //TODO: prarut is this an object
//   userName: string;
// }

// export interface UserAboutInfo {
//   description: string;
//   socialLinks?: SocialLink[];
// }

// export interface Connection {
//   userId: string;
//   targetId: string;
// }

// export interface Entity {
//   entityId: string;
//   website: string;
//   imageUri?: string;
//   name: string;
// }

// export interface Location {
//   city: string;
//   country: string;
// }

// export interface Tenure {
//   endDate: Date;
//   startDate: Date;
// }
export interface ITaxonomy {
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  //TODO: formatter, invalid casing
  scientific_name: string;
}

//TODO missing info : api contract
export interface ILocations {
  variable: string;
}

//TODO missing info : api contract
export interface ICharacteristics {
  variable: string;
}

//TODO: switch out with above interfaces
export interface IAnimalInfo extends IListItemInfo {
  name: string;
  taxonomy: ITaxonomy;
  locations: string[];
  characteristics: Record<string, string>;
}
export interface IListItemInfo {
  id: string;
}

// export interface NotificationProps {
//   type: NOTIFICATION_TYPES;
//   title?: string;
//   label?: any;
//   disabled?: boolean;
//   duration?: number;
//   styleOverrides?: {};
//   onPress?: () => void;
//   onDismiss?: () => void;
// }

// export interface TagInfoProps extends ListItemProps {
//   data: Array<TagInfo>;
//   initialNum?: number;
// }

// export interface BasicInfoProps extends ListItemProps {
//   data: UserBasicInfo;
// }

// export interface HistoryInfoProps extends ListItemProps {
//   data: UserHistoryInfo;
// }

// export interface ListItemProps {
//   data: any;
// }

// export interface FiniteListProps {
//   data: any[];
//   ListItemComponent: React.FC<ListItemProps>;
//   HeaderComponent?: React.FC<any>;
//   title?: string;
//   defaultHeader?: boolean;
//   defaultFooter?: boolean;
//   initialNum?: number;
// }

// export interface ComponentWithProps {
//   component: React.FC<any>;
//   props: any;
// }
