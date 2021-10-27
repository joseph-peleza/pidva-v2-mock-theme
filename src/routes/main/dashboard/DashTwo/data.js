import React from "react";

export const taskList = [
  {
    id: 1,
    title: 'Make the home page dynamic',
    completed: false,
    user: {
      projectName: 'Chatbull',
      avatar: 'https://via.placeholder.com/150x150'
    },
    dueDate: 'Tomorrow',
    tags: [1, 2]
  }, {
    id: 2,
    title: 'Design wireframes based on the requirements',
    completed: false,
    user: {
      projectName: 'Wieldy',
      avatar: 'https://via.placeholder.com/150x150'
    },
    dueDate: 'Today',
    tags: [2, 4]
  }, {
    id: 3,
    title: 'Need to define microinteraction on click of signin button',
    completed: false,
    user: {
      projectName: 'Jumbo',
      avatar: 'https://via.placeholder.com/150x150'
    },
    dueDate: '21 Jul',
    tags: [1, 2, 3]
  }, {
    id: 4,
    title: 'New page need to be designed for property dashThree',
    completed: false,
    user: {
      projectName: 'Wieldy',
      avatar: 'https://via.placeholder.com/150x150'
    },
    dueDate: '23 Jul',
    tags: [2, 3, 4]
  }, {
    id: 5,
    title: 'Design wireframes based on the requirements',
    completed: false,
    user: {
      projectName: 'Wieldy',
      avatar: 'https://via.placeholder.com/150x150'
    },
    dueDate: '1 Aug',
    tags: [2, 4]
  }];

export const recentActivity = [
  {
    id: 1,
    day: 'Today',
    tasks: [
      {
        id: 1,
        name: 'Ken Letting',
        title: [<span className="gx-link" key={1}>Ken Letting</span>, ' closed education check for ',
          <span className="gx-link" key={2}>ref number: RAK90J</span>],
        avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
        imageList: [],
      },
      {
        id: 2,
        name: 'Angel Mwangi',
        title: ['Angel reviewed ', <span className="gx-link" key={3}> A Report </span>, ' from ',
          <span className="gx-link" key={4}>Company A. </span>],
        avatar: 'https://wieldy.g-axon.work/assets/images/avatar/a5.png',
        imageList: [],
      },
      {
        id: 3,
        name: 'Marie',
        title: ['Marie Logged out of PIDVA at ', <span className="gx-link" key={5}>22:12 Hrs</span>,
          ' after 2 hrs of activity. '],
        avatar: 'https://wieldy.g-axon.work/assets/images/avatar/a8.png',
        imageList: [],
      },
      {
        id: 4,
        name: 'Joseph Mbuku',
        title: ['Joseph Finished customization of dashboard one.'],
        avatar: '',
        imageList: [],
      },
    ]
  },
  {
    id: 2,
    day: 'Yesterday',
    tasks: [
      // {
      //   id: 5,
      //   name: 'Kily Johns',
      //   title: ['Agent ',
      //     <span className="gx-link" key={7}>Kily Johns</span>, ' has added 7 new photos to the property ',
      //     <span key={6} className="gx-link">Albama’s House</span>],
      //   avatar: '',
      //   imageList: ['https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150', 'https://via.placeholder.com/150x150',],
      // },
      {
        id: 6,
        name: 'Antoinette',
        title: ['Antoinette approved 24 reports, ', <span className="gx-link" key={8}>14 reports still marked as pending.</span>],
        avatar: 'https://wieldy.g-axon.work/assets/images/avatar/a13.png',
        imageList: [],
      },
      {
        id: 7,
        name: 'Ken Letting',
        title: [<span className="gx-link" key={9}>Ken Letting</span>, ' assigned a report to Angel at 09:05 hrs.  The Report is due ',
          <span className="gx-link" key={10}>23rd March 2021.</span>],
        avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
        imageList: [],
      }, 
      {
        id: 8,
        name: 'Christine',
        title: [<span className="gx-link" key={11}>Christine</span>, ' has completed on approving ',
          <span className="gx-link" key={12}>All EABL Reports.</span>],
        avatar: 'https://wieldy.g-axon.work/assets/images/avatar/a11.png',
        imageList: [],
      },
    ]
  }];

export const ticketList = [
  {
    id: 1,
    avatar: 'https://wieldy.g-axon.work/assets/images/avatar/domnic-harris.png',
    title: 'Nephat applied for annual leave',
    description: [<span className="gx-link" key={13}>Now</span>],
    status: 2
  }, {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: "Lang'at applied For paternity leave.",
    description: [<span key={14} className="gx-link">Yesterday</span>],
    status: 1
  }, {
    id: 3,
    avatar: 'https://wieldy.g-axon.work/assets/images/avatar/a5.png',
    title: 'Angel Applied for Maternity Leave.',
    description: [<span key={15} className="gx-link">Approved</span>, " 2 days ago"],
    status: 4
  }
];
export const taskStatus = [
  {
    id: 1,
    title: 'Critical',
    color: 'red'
  }, {
    id: 2,
    title: 'High',
    color: 'orange'
  }, {
    id: 3,
    title: 'Medium',
    color: 'green'
  }, {
    id: 4,
    title: 'Low',
    color: 'light-grey'
  }
];
export const taskTags = [
  {
    id: 1,
    name: 'HTML',
    color: 'red',
  }, {
    id: 2,
    name: 'React',
    color: 'green',
  }, {
    id: 3,
    name: 'JavaScript',
    color: 'blue',
  }, {
    id: 4,
    name: 'CSS',
    color: 'orange',
  }];
export const siteVisit = [
  {name: '1', thisYear: 0, lastYear: 0},
  {name: '2', thisYear: 0, lastYear: 1},
  {name: '3', thisYear: 5, lastYear: 2},
  {name: '4', thisYear: 10, lastYear: 0},
  {name: '5', thisYear: 4, lastYear: 1},
  {name: '6', thisYear: 16, lastYear: 3},
  {name: '7', thisYear: 5, lastYear: 1},
  {name: '8', thisYear: 11, lastYear: 5},
  {name: '9', thisYear: 6, lastYear: 2},
  {name: '10', thisYear: 11, lastYear: 3},
  {name: '11', thisYear: 30, lastYear: 2},
  {name: '12', thisYear: 10, lastYear: 1},
  {name: '13', thisYear: 13, lastYear: 0},
  {name: '14', thisYear: 4, lastYear: 2},
  {name: '15', thisYear: 3, lastYear: 8},
  {name: '16', thisYear: 1, lastYear: 0},
  {name: '17', thisYear: 0, lastYear: 0},
];

export const totalSaleData = [
  {name: 'JAN', price: 600},
  {name: 'FEB', price: 3398},
  {name: 'MAR', price: 1200},
  {name: 'APR', price: 4908},
  {name: 'MAY', price: 2908},
];

export const totalRevenueData = [
  {name: 'JAN', thisYear: 60},
  {name: 'FEB', thisYear: 90},
  {name: 'MAR', thisYear: 50},
  {name: 'APR', thisYear: 75},
  {name: 'MAY', thisYear: 60},
  {name: 'JUN', thisYear: 85},
  {name: 'JUL', thisYear: 20},
  {name: 'AUG', thisYear: 75},
  {name: 'SEP', thisYear: 60},
  {name: 'OCT', thisYear: 40},
  {name: 'NOV', thisYear: 75},
  {name: 'DEC', thisYear: 25},
];

export const trafficData = [
  {name: 'Ken', value: 0},
  {name: 'Nephat', value: 2000},
  {name: 'Angel', value: 600},
  {name: 'Cynthia', value: 4400},
  {name: 'Cynthia', value: 900},
  {name: 'Page H', value: 4860},
];
