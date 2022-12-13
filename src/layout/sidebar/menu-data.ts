export const menus: any = [
  {
    path: 'pages',
    data: null,
    children: [
      {
        path: 'home',
        data: {
          menu: {
            title: 'Home',
            icon: 'fa-solid fa-home',
            selected: false,
            expanded: false,
            order: 1,
          },
        },
        children: [],
      },
      {
        path: 'hubs',
        data: {
          menu: {
            title: 'Hubs',
            icon: 'fa-solid fa-location-dot',
            selected: true,
            expanded: true,
            order: 6,
          },
        },
        children: [
          {
            path: 'hub',
            data: {
              menu: { title: 'Hub', icon: null, selected: false, expanded: false, order: 1 },
            },
            children: [],
          },
          {
            path: 'courier-zone',
            data: {
              menu: {
                title: 'Courier Zone',
                icon: null,
                selected: false,
                expanded: false,
                order: 2,
              },
            },
            children: [],
          },
          {
            path: 'team-leader',
            data: {
              menu: {
                title: 'Team Leader',
                icon: null,
                selected: false,
                expanded: false,
                order: 3,
              },
            },
            children: [],
          },
          {
            path: 'sorter-spesification',
            data: {
              menu: {
                title: 'Sorter Tanımları',
                icon: null,
                selected: false,
                expanded: false,
                order: 27,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'shipments',
        data: {
          menu: {
            title: 'Shipment Operations',
            icon: 'fa-solid fa-ship',
            selected: false,
            expanded: true,
            order: 2,
          },
        },
        children: [
          {
            path: 'shipment',
            data: {
              menu: {
                title: 'Shipments Save',
                icon: null,
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [],
          },
          {
            path: 'track',
            data: {
              menu: {
                title: 'Shipments Track',
                icon: null,
                selected: false,
                expanded: false,
                order: 2,
              },
            },
            children: [],
          },
          {
            path: 'courier-pickup-call',
            data: {
              menu: {
                title: 'Courier Pickup Call',
                icon: null,
                selected: false,
                expanded: false,
                order: 3,
              },
            },
            children: [],
          },
          {
            path: 'status',
            data: {
              menu: {
                title: 'Shipment Status',
                icon: null,
                selected: false,
                expanded: false,
                order: 4,
              },
            },
            children: [],
          },
          {
            path: 'task-track',
            data: {
              menu: { title: 'Task Track', icon: null, selected: false, expanded: false, order: 7 },
            },
            children: [],
          },
          {
            path: 'print-preprinted-label',
            data: {
              menu: {
                title: 'Preprinted Barcode',
                icon: null,
                selected: false,
                expanded: false,
                order: 8,
              },
            },
            children: [],
          },
          {
            path: 'label-print',
            data: {
              menu: {
                title: 'Label Printing',
                icon: null,
                selected: false,
                expanded: false,
                order: 9,
              },
            },
            children: [],
          },
          {
            path: 'return-shipment-track',
            data: {
              menu: {
                title: 'Return Shipment Track',
                icon: null,
                selected: false,
                expanded: false,
                order: 9,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'Rol Yetkileri',
            icon: 'fa-solid fa-hand',
            selected: false,
            expanded: false,
            order: 11,
          },
        },
        children: [
          {
            path: 'permission',
            data: {
              menu: {
                title: 'Role Yetkisi',
                icon: null,
                selected: false,
                expanded: false,
                order: 11,
              },
            },
            children: [],
          },
        ],
      },
    ],
  },
];

const win: any = window;

win.menu = menus;
