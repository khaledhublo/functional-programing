let services = [
  {
    id: 1,
    name: "ser 1"
  },
  {
    id: 2,
    name: "ser 2"
  },
  {
    id: 3,
    name: "ser 3"
  },
  {
    id: 4,
    name: "ser 4"
  },
  {
    id: 5,
    name: "ser 5"
  },
  {
    id: 6,
    name: "ser 6"
  },
  {
    id: 7,
    name: "ser 7"
  },
  {
    id: 8,
    name: "ser 8"
  }
];

let servicesAdminCanManageId = [1, 5, 6];

// console.log(services.map(e => servicesAdminCanManageId.map(sm => sm === e.id)));
// console.log(
//   services.map(e =>
//     servicesAdminCanManageId
//       .map(sm => sm === e.id)
//       .reduce((p, c) => p || c, false)
//   )
// );

let servicesAdminCanManage = services.filter(e =>
  servicesAdminCanManageId
    .map(sm => sm === e.id)
    .reduce((p, c) => p || c, false)
);
console.log(servicesAdminCanManage);
