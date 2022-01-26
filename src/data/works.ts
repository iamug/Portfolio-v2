export interface IWork {
  name: string;
  description: string;
  stack?: string;
  github?: string;
  live?: string;
}
export const Works: Array<IWork> = [
  {
    name: "Event Menu App",
    description:
      "Event menu application that enables users to create a menu and share a unique link and track orders from different tables using a QRCode ",
    stack: "Express, MongoDB , React, Chakra UI, RSuite",
    github: "https://github.com/iamug/Restaurant-menu",
    live: "https://app.baretag.co",
  },
  {
    name: "Ride Sharing App Admin Dashboard ",
    description:
      "Admin panel to manage users, drivers, vehicles , transactions for a ride sharing app with Role Based Access Control and Activity Logs ",
    stack: "Nodejs, Express, MongoDB , React, Bootstrap 5, RSuite",
    live: "https://admin.commute.ng",
  },
  {
    name: "Vehicle Managment Dashboard ",
    description: "User dashboar to onboard vehicles and track earnings of vehicles  ",
    stack: "Nodejs, Express, MongoDB , React, Bootstrap 5, RSuite",
    live: "https://partner.commute.ng",
  },
  {
    name: "ExpressWebJS Website ",
    description: "Website design for an open source Nodejs backend framework",
    stack: "Reactjs, Bootstrap 5",
    live: "https://expresswebjs.com/",
  },
  {
    name: "Attendance Managment App (Frontend)",
    description: "App to track clockins and clock outs of employees with reporting to show attendance by days, weeks etc",
    stack: "Reactjs, Redux, Material UI",
    github: "https://github.com/iamug/Attendance-Management-System-Frontend/",
    live: "https://iamug.github.io/Attendance-Management-System-Frontend/",
  },
  {
    name: "Attendance Managment App (Backend)",
    description: "App to track clockins and clock outs of employees with reporting to show attendance by days, weeks etc",
    stack: "ExpressWebJs, MongoDb",
    github: "https://github.com/iamug/Attendance-Management-System-Backend",
  },
  {
    name: "React Advice App",
    description: "React App to generate Advice",
    stack: "Reactjs",
    github: "https://github.com/iamug/react-advice-app/",
    live: "https://iamug.github.io/react-advice-app/",
  },
  {
    name: "Lagos Livable City Conference Website ",
    description: "Website for Lagos Livable City Conference including portal for registrations and integration with Notion.",
    stack: "Bootstrap, Express, MongoDB, Notion API",
    live: "http://lagoslivablecity.com/",
  },
  {
    name: "Lagos State Ministry of Health Website ",
    description: "Website for Lagos State Ministry of Health (Lagos MiND) ",
    stack: "WordPress",
    live: "http://lagosmind.org/",
  },
  {
    name: "AlliedRx Pharmacy Website ",
    description: "Website for AlliedRx Pharmacy with a protal to manage prescription refills and transfers",
    stack: "WordPress",
    live: "https://alliedrxpharmacy.com/",
  },
  {
    name: "Private Sector Health Alliance of Nigeria Website ",
    description: "Website for Private Sector Health Alliance of Nigeria.",
    stack: "WordPress",
    live: "https://pshan.org/",
  },
  {
    name: "Scrap Bank Africa Website ",
    description: "Website for Scrap Bank Africa ",
    stack: "WordPress",
    live: "https://scrapbankafrica.com/",
  },
];
