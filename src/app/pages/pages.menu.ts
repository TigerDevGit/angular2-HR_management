export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Self-Service',
            icon: 'fa fa-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'Time Tracker',
            icon: 'fa fa-pencil',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'views',
            data: {
              menu: {
                title: 'Views',
              }
            }
          },
          {
            path: 'reports',
            data: {
              menu: {
                title: 'Reports',
              }
            }
          },
          {
            path: 'holidays',
            data: {
              menu: {
                title: 'Holidays',
              }
            }
          },
          {
            path: 'settings',
            data: {
              menu: {
                title: 'Settings',
              }
            }
          },
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'Organization',
            icon: 'fa fa-bank',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'announcements',
            data: {
              menu: {
                title: 'Announcements',
              }
            }
          },
          {
            path: 'organizationtree',
            data: {
              menu: {
                title: 'OrganizationTree',
              }
            }
          },
          {
            path: 'groups',
            data: {
              menu: {
                title: 'Groups',
              }
            }
          },
          {
            path: 'employee',
            data: {
              menu: {
                title: 'Employee',
              }
            }
          },
          {
            path: 'department',
            data: {
              menu: {
                title: 'Department',
              }
            }
          },
          {
            path: 'designation',
            data: {
              menu: {
                title: 'Designation',
              }
            }
          },
          {
            path: 'exitdetails',
            data: {
              menu: {
                title: 'ExitDetails',
              }
            }
          },
          {
            path: 'companypolicy',
            data: {
              menu: {
                title: 'CompanyPolicy',
              }
            }
          },
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Compensation',
            icon: 'fa fa-clipboard',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'asset',
            data: {
              menu: {
                title: 'Asset',
              }
            }
          },
          {
            path: 'benefit',
            data: {
              menu: {
                title: 'Benefit',
              }
            }
          },
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'Approvals',
            icon: 'fa fa-cubes',
            selected: false,
            expanded: false,
            order: 300,
          }
        }
      },
    ]
  }
];
