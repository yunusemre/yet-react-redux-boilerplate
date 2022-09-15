import './sidebar.scss';

import classNames from 'classnames';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { menuToggle } from '../../store/features/appSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { NavLinkMenu } from './nav-link';
import NotificationMenu from './notification-menu';
import OptionsMenu from './options-menu';

const SidebarMenu = () => {
  const menuState = useAppSelector((state) => state.app.menuOpen);
  const dispatch = useAppDispatch();

  const isOpenMenu = classNames({ ' show': menuState });

  return (
    <div id="sidebar" className="sidebar position-relative">
      <div
        className={`sidebar-toggle c-pointer${isOpenMenu}`}
        onClick={() => dispatch(menuToggle())}
      >
        {menuState ? (
          <i className="fa-solid fa-arrow-left"></i>
        ) : (
          <i className="fa-solid fa-arrow-right"></i>
        )}
      </div>
      <div className={`kolaygelsin-navbar${isOpenMenu}`}>
        <nav className="nav">
          <Link to="/" className="nav_logo mb-4 d-block">
            <span className="c-pointer">
              {menuState ? (
                <img src="/logo.png" height="50" alt="Kolay gelsin" />
              ) : (
                <img src="/logo-mini.png" height="50" alt="Kolay gelsin" />
              )}
            </span>
          </Link>
          <div className="scroll-height-scroll">
            <ul className="nav_list m-0 p-0">
              {menus[0].children.map((menu: any, index: number) => (
                <NavLinkMenu key={index} isOpen={menuState} {...menu} />
              ))}
            </ul>
          </div>
        </nav>
        <nav className="nav">
          <ul className="nav_list m-0 p-0">
            <li className="">
              <NotificationMenu />
            </li>
            <li className="options-menu">
              <OptionsMenu />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = memo(SidebarMenu);

export { Sidebar };

// const menus: any = [
//   {
//     path: '/',
//     data: null,
//     children: [
//       {
//         path: '/home',
//         data: {
//           menu: {
//             title: 'Home',
//             icon: null,
//             selected: false,
//             expanded: false,
//             order: 1,
//           },
//         },
//         children: [],
//       },
//       {
//         path: '/dashboard',
//         data: {
//           menu: {
//             title: 'Dashboard',
//             icon: null,
//             selected: false,
//             expanded: false,
//             order: 1,
//           },
//         },
//         children: [],
//       },
//     ],
//   },
// ];

const menus: any = [
  {
    path: '/',
    data: null,
    children: [
      {
        path: '/',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 1,
          },
        },
        children: [],
      },
      {
        path: 'shipments',
        data: {
          menu: {
            title: 'SHIPMENT_OPERATIONS',
            icon: 'ion-android-boat',
            selected: false,
            expanded: false,
            order: 2,
          },
        },
        children: [
          {
            path: 'shipment',
            data: {
              menu: {
                title: 'SHIPMENT_SAVE',
                icon: null,
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [],
          },
          {
            path: 'shipmentTrack',
            data: {
              menu: {
                title: 'SHIPMENT_TRACK',
                icon: null,
                selected: false,
                expanded: false,
                order: 2,
              },
            },
            children: [],
          },
          {
            path: 'courierPickupCall',
            data: {
              menu: {
                title: 'COURIER_PICKUP_CALL',
                icon: null,
                selected: false,
                expanded: false,
                order: 3,
              },
            },
            children: [],
          },
          {
            path: 'shipmentStatus',
            data: {
              menu: {
                title: 'SHIPMENT_STATUS',
                icon: null,
                selected: false,
                expanded: false,
                order: 4,
              },
            },
            children: [],
          },
          {
            path: 'taskTrack',
            data: {
              menu: {
                title: 'TASK_TRACK',
                icon: null,
                selected: false,
                expanded: false,
                order: 7,
              },
            },
            children: [],
          },
          {
            path: 'printPreprintedLabel',
            data: {
              menu: {
                title: 'PREPRINTED_BARCODE',
                icon: null,
                selected: false,
                expanded: false,
                order: 8,
              },
            },
            children: [],
          },
          {
            path: 'labelPrint',
            data: {
              menu: {
                title: 'LABEL_PRINTING',
                icon: null,
                selected: false,
                expanded: false,
                order: 9,
              },
            },
            children: [],
          },
          {
            path: 'returnShipmentTrack',
            data: {
              menu: {
                title: 'RETURN_SHIPMENT_TRACK',
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
        path: 'customers',
        data: {
          menu: {
            title: 'CUSTOMER_OPERATIONS',
            icon: 'ion-ios-people',
            selected: false,
            expanded: false,
            order: 3,
          },
        },
        children: [
          {
            path: 'customer',
            data: {
              menu: {
                title: 'CUSTOMER_SAVE',
                icon: null,
                selected: false,
                expanded: false,
                order: 0,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'contracts',
        data: {
          menu: {
            title: 'CONTRACT_OPERATIONS',
            icon: 'ion-document-text',
            selected: false,
            expanded: false,
            order: 4,
          },
        },
        children: [
          {
            path: 'contract',
            data: {
              menu: {
                title: 'CONTRACT_SAVE',
                icon: null,
                selected: false,
                expanded: false,
                order: 0,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'hubs',
        data: {
          menu: {
            title: 'HUB',
            icon: 'ion-android-pin',
            selected: false,
            expanded: false,
            order: 6,
          },
        },
        children: [
          {
            path: 'hub',
            data: {
              menu: {
                title: 'HUB',
                icon: null,
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [],
          },
          {
            path: 'courierZone',
            data: {
              menu: {
                title: 'COURIER_ZONE',
                icon: null,
                selected: false,
                expanded: false,
                order: 2,
              },
            },
            children: [],
          },
          {
            path: 'teamLeader',
            data: {
              menu: {
                title: 'TEAM_LEADER',
                icon: null,
                selected: false,
                expanded: false,
                order: 3,
              },
            },
            children: [],
          },
          {
            path: 'dispatcher',
            data: {
              menu: {
                title: 'DISPATCHER',
                icon: null,
                selected: false,
                expanded: false,
                order: 4,
              },
            },
            children: [],
          },
          {
            path: 'courierZoneUpdate',
            data: {
              menu: {
                title: 'COURIER_ZONE_UPDATE',
                icon: null,
                selected: false,
                expanded: false,
                order: 5,
              },
            },
            children: [],
          },
          {
            path: 'consolidatedDeliveryNote',
            data: {
              menu: {
                title: 'CONSOLIDATED_DELIVERY_NOTE',
                icon: null,
                selected: false,
                expanded: false,
                order: 6,
              },
            },
            children: [],
          },
          {
            path: 'courierTrack',
            data: {
              menu: {
                title: 'COURIER_TRACK',
                icon: null,
                selected: false,
                expanded: false,
                order: 9,
              },
            },
            children: [],
          },
          {
            path: 'outOfCoverage',
            data: {
              menu: {
                title: 'OUT_OF_COVERAGE',
                icon: null,
                selected: false,
                expanded: false,
                order: 10,
              },
            },
            children: [],
          },
          {
            path: 'courierTracing',
            data: {
              menu: {
                title: 'COURIER_TRACING',
                icon: null,
                selected: false,
                expanded: false,
                order: 11,
              },
            },
            children: [],
          },
          {
            path: 'scanDeliveryNote',
            data: {
              menu: {
                title: 'SCAN_DELIVERY_NOTE',
                icon: null,
                selected: false,
                expanded: false,
                order: 12,
              },
            },
            children: [],
          },
          {
            path: 'shiftSupervisor',
            data: {
              menu: {
                title: 'SHIFT_SUPERVISOR',
                icon: null,
                selected: false,
                expanded: false,
                order: 13,
              },
            },
            children: [],
          },
          {
            path: 'deliveryNote',
            data: {
              menu: {
                title: 'DELIVERY_NOTE',
                icon: null,
                selected: false,
                expanded: false,
                order: 14,
              },
            },
            children: [],
          },
          {
            path: 'matchDeliveryNote',
            data: {
              menu: {
                title: 'MATCH_DELIVERY_NOTE',
                icon: null,
                selected: false,
                expanded: false,
                order: 15,
              },
            },
            children: [],
          },
          {
            path: 'amazonLabelPairing',
            data: {
              menu: {
                title: 'AMAZON_LABEL_PAIRING',
                icon: null,
                selected: false,
                expanded: false,
                order: 16,
              },
            },
            children: [],
          },
          {
            path: 'courierZonePreview',
            data: {
              menu: {
                title: 'COURIER_ZONE_PREVIEW',
                icon: null,
                selected: false,
                expanded: false,
                order: 17,
              },
            },
            children: [],
          },
          {
            path: 'cashDesk',
            data: {
              menu: {
                title: 'CASH_DESK',
                icon: null,
                selected: false,
                expanded: false,
                order: 21,
              },
            },
            children: [],
          },
          {
            path: 'stopSimulation',
            data: {
              menu: {
                title: 'STOP_SIMULATION',
                icon: null,
                selected: false,
                expanded: false,
                order: 22,
              },
            },
            children: [],
          },
          {
            path: 'lineHaulTrack',
            data: {
              menu: {
                title: 'LINE_HAUL_TRACK',
                icon: null,
                selected: false,
                expanded: false,
                order: 22,
              },
            },
            children: [],
          },
          {
            path: 'groupTrack',
            data: {
              menu: {
                title: 'GROUP_TRACK',
                icon: null,
                selected: false,
                expanded: false,
                order: 23,
              },
            },
            children: [],
          },
          {
            path: 'manuelRouting',
            data: {
              menu: {
                title: 'MANUEL_ROUTING',
                icon: null,
                selected: false,
                expanded: false,
                order: 24,
              },
            },
            children: [],
          },
          {
            path: 'mapTaskForwarding',
            data: {
              menu: {
                title: 'MAP_TASK_FORWARDING',
                icon: null,
                selected: false,
                expanded: false,
                order: 25,
              },
            },
            children: [],
          },
          {
            path: 'manuelRoutingSimulation',
            data: {
              menu: {
                title: 'MANUEL_ROUTING_SIMULATION',
                icon: null,
                selected: false,
                expanded: false,
                order: 25,
              },
            },
            children: [],
          },
          {
            path: 'lineHaulSearch',
            data: {
              menu: {
                title: 'LINE_HAUL_SEARCH',
                icon: null,
                selected: false,
                expanded: false,
                order: 26,
              },
            },
            children: [],
          },
          {
            path: 'collectionScreen',
            data: {
              menu: {
                title: 'COLLECTION_SCREEN',
                icon: null,
                selected: false,
                expanded: false,
                order: 26,
              },
            },
            children: [],
          },
          {
            path: 'sorterSpesification',
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
        path: 'recipients',
        data: {
          menu: {
            title: 'RECIPIENT_OPERATIONS',
            icon: 'ion-person',
            selected: false,
            expanded: false,
            order: 7,
          },
        },
        children: [
          {
            path: 'recipient',
            data: {
              menu: {
                title: 'RECIPIENT_SAVE',
                icon: null,
                selected: false,
                expanded: false,
                order: 0,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'transferWarehouseOperations',
        data: {
          menu: {
            title: 'TRANSFER_WAREHOUSE',
            icon: 'ion-cube',
            selected: false,
            expanded: false,
            order: 8,
          },
        },
        children: [
          {
            path: 'transferWarehouse',
            data: {
              menu: {
                title: 'TRANSFER_WAREHOUSE',
                icon: null,
                selected: false,
                expanded: false,
                order: 0,
              },
            },
            children: [],
          },
          {
            path: 'transferWarehouseWorkItem',
            data: {
              menu: {
                title: 'TRANSFER_WAREHOUSE_WORK_ITEM',
                icon: null,
                selected: false,
                expanded: false,
                order: 2,
              },
            },
            children: [],
          },
          {
            path: 'shipmentDelivery',
            data: {
              menu: {
                title: 'SHIPMENT_DELIVERY',
                icon: null,
                selected: false,
                expanded: false,
                order: 3,
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
            title: 'USER_OPERATIONS',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 9,
          },
        },
        children: [
          {
            path: 'userAdd',
            data: {
              menu: {
                title: 'USER_ADD',
                icon: null,
                selected: false,
                expanded: false,
                order: 0,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'invoices',
        data: {
          menu: {
            title: 'INVOICES_OPERATIONS',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 10,
          },
        },
        children: [
          {
            path: 'invoiceNumberInformation',
            data: {
              menu: {
                title: 'INVOICE_NUMBER_INFORMATION',
                icon: null,
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [],
          },
          {
            path: 'invoice',
            data: {
              menu: {
                title: 'CORPORATE_INVOICE_OPERATION',
                icon: null,
                selected: false,
                expanded: false,
                order: 2,
              },
            },
            children: [],
          },
          {
            path: 'individualInvoice',
            data: {
              menu: {
                title: 'INDIVIDUAL_INVOICE_OPERATION',
                icon: null,
                selected: false,
                expanded: false,
                order: 3,
              },
            },
            children: [],
          },
          {
            path: 'invoiceTrack',
            data: {
              menu: {
                title: 'INVOICE_TRACK',
                icon: null,
                selected: false,
                expanded: false,
                order: 4,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'damage',
        data: {
          menu: {
            title: 'DAMAGE',
            icon: 'ion-android-pin',
            selected: false,
            expanded: false,
            order: 10,
          },
        },
        children: [
          {
            path: 'damagedTrack',
            data: {
              menu: {
                title: 'DAMAGE_TRACK',
                icon: '',
                selected: false,
                expanded: false,
                order: 1,
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
            title: 'AUTHORITY_OPERATIONS',
            icon: 'ion-android-hand',
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
                title: 'ROLE_AUTHORITY',
                icon: null,
                selected: false,
                expanded: false,
                order: 11,
              },
            },
            children: [],
          },
          {
            path: 'holiday',
            data: {
              menu: {
                title: 'HOLIDAY_OPERATIONS',
                icon: null,
                selected: false,
                expanded: false,
                order: 12,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'unload_mw',
        data: {
          menu: {
            title: 'İndir Okut / ÖT',
            icon: 'ion-arrow-down-a',
            selected: false,
            expanded: false,
            order: 11,
          },
        },
        children: [
          {
            path: 'unload',
            data: {
              menu: {
                title: 'UNLOAD',
                icon: null,
                selected: false,
                expanded: false,
                order: 11,
              },
            },
            children: [],
          },
          {
            path: 'sorting',
            data: {
              menu: {
                title: 'Ayrıştırma Ekranı',
                icon: null,
                selected: false,
                expanded: false,
                order: 21,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'missingItems',
        data: {
          menu: {
            title: 'MISSING_ITEMS',
            icon: 'ion-search',
            selected: false,
            expanded: false,
            order: 12,
          },
        },
        children: [],
      },
      {
        path: 'callCenterOperations',
        data: {
          menu: {
            title: 'CALL_CENTER',
            icon: 'ion-headphone',
            selected: false,
            expanded: false,
            order: 14,
          },
        },
        children: [
          {
            path: 'callCenterDashboard',
            data: {
              menu: {
                title: 'CALL_CENTER_DASHBOARD',
                icon: null,
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'turkcell',
        data: {
          menu: {
            title: 'Turkcell',
            icon: 'ion-iphone',
            selected: false,
            expanded: false,
            order: 14,
          },
        },
        children: [
          {
            path: 'simCardMatching',
            data: {
              menu: {
                title: 'SIM_CARD_MATCHING',
                icon: null,
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [],
          },
          {
            path: 'hobimMatching',
            data: {
              menu: {
                title: 'HOBIM_MATCHING',
                icon: null,
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [],
          },
          {
            path: 'simCardStockTracking',
            data: {
              menu: {
                title: 'SIM_CARD_STOCK_TRACKING',
                icon: null,
                selected: false,
                expanded: false,
                order: 81,
              },
            },
            children: [],
          },
          {
            path: 'simCardStockSafetyCheck',
            data: {
              menu: {
                title: 'SIM_CARD_STOCK_SAFETY_CHECK',
                icon: null,
                selected: false,
                expanded: false,
                order: 82,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'amazon',
        data: {
          menu: {
            title: 'Amazon',
            icon: null,
            selected: false,
            expanded: false,
            order: 15,
          },
        },
        children: [
          {
            path: 'productPrefix',
            data: {
              menu: {
                title: 'Tanım Ekranı',
                icon: null,
                selected: false,
                expanded: false,
                order: 27,
              },
            },
            children: [],
          },
          {
            path: 'potentialCustomer',
            data: {
              menu: {
                title: 'POTENTIAL_CUSTOMER',
                icon: null,
                selected: false,
                expanded: false,
                order: 28,
              },
            },
            children: [],
          },
          {
            path: 'ebkPool',
            data: {
              menu: {
                title: 'EBK_POOL',
                icon: null,
                selected: false,
                expanded: false,
                order: 28,
              },
            },
            children: [],
          },
          {
            path: 'ebkPoolManagement',
            data: {
              menu: {
                title: 'EBK_POOL_MANAGEMENT',
                icon: null,
                selected: false,
                expanded: false,
                order: 29,
              },
            },
            children: [],
          },
        ],
      },
      {
        path: 'corporate',
        data: {
          menu: {
            title: 'CORPORATE_BRANCH',
            icon: null,
            selected: false,
            expanded: false,
            order: 16,
          },
        },
        children: [],
      },
      {
        path: 'corporateReporting',
        data: {
          menu: {
            title: 'CORPORATE_BRANCH_REPORTING',
            icon: null,
            selected: false,
            expanded: false,
            order: 17,
          },
        },
        children: [],
      },
      {
        path: 'parameters',
        data: {
          menu: {
            title: 'PARAMETERS',
            icon: null,
            selected: false,
            expanded: false,
            order: 18,
          },
        },
        children: [],
      },
      {
        path: 'simcard',
        data: {
          menu: {
            title: 'SIMCARD',
            icon: null,
            selected: false,
            expanded: false,
            order: 19,
          },
        },
        children: [],
      },
      {
        path: 'corporateCustomerShipmentRegistration',
        data: {
          menu: {
            title: 'Kurumsal Gönderi Kayıt',
            icon: null,
            selected: false,
            expanded: false,
            order: 22,
          },
        },
        children: [],
      },
      {
        path: 'matchingcustomerspecificcode',
        data: {
          menu: {
            title: 'MATCHING_CUSTOMER_SPECIFIC_CODE',
            icon: null,
            selected: false,
            expanded: false,
            order: 23,
          },
        },
        children: [],
      },
      {
        path: 'excelShipmentUpload',
        data: {
          menu: {
            title: 'EXCEL_SHIPMENT_UPLOAD',
            icon: null,
            selected: false,
            expanded: false,
            order: 24,
          },
        },
        children: [],
      },
      {
        path: 'monitoring',
        data: {
          menu: {
            title: 'MONITORING',
            icon: null,
            selected: false,
            expanded: false,
            order: 25,
          },
        },
        children: [
          {
            path: 'webHook',
            data: {
              menu: {
                title: 'WEB_HOOK',
                icon: null,
                selected: false,
                expanded: false,
                order: 1,
              },
            },
            children: [],
          },
          {
            path: 'sorter',
            data: {
              menu: {
                title: 'SORTER',
                icon: null,
                selected: false,
                expanded: false,
                order: 2,
              },
            },
            children: [],
          },
          {
            path: 'audit',
            data: {
              menu: {
                title: 'AUDIT',
                icon: null,
                selected: false,
                expanded: false,
                order: 3,
              },
            },
            children: [],
          },
          {
            path: 'ebkProcessLog',
            data: {
              menu: {
                title: 'EBK_PROCESS_LOG',
                icon: null,
                selected: false,
                expanded: false,
                order: 4,
              },
            },
            children: [],
          },
        ],
      },
    ],
  },
];
