export const ideas = [
  "home",
  "accordion",
  "rcg",
  "star-rating",
  "img-slider",
  "load-more",
  "tree-view",
  "qr-generator",
  "theme-switch",
];

export const routLink = [
  "",
  "accordion",
  "rcg",
  "star-rating",
  "img-slider",
  "load-more",
  "tree-view",
  "qr-generator",
  "theme-switch",
];

export const imgLinks = [
  "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg",
  "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg",
  "https://images.pexels.com/photos/516541/pexels-photo-516541.jpeg",
  "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",
];

export const sideMenu = [
  {
    label: "home",
    to: "/",
    children: [
      {
        label: "sub-sub-1",
        to: "/sub-sub-1",
        children: [
          {
            label: "sub-sub-sub-1",
            to: "/sub-sub-sub-1",
          },
          {
            label: "sub-sub-sub-2",
            to: "/sub-sub-sub-2",
          },
        ],
      },
      {
        label: "sub-sub-2",
        to: "/sub-sub-2",
      },
    ],
  },
  {
    label: "sub-1",
    to: "/sub-1",
    children: [
      {
        label: "sub-sub-1",
        to: "/sub-sub-1",
      },
      {
        label: "sub-sub-2",
        to: "/sub-sub-2",
        children: [
          {
            label: "sub-sub-sub-1",
            to: "/sub-sub-sub-1",
          },
          {
            label: "sub-sub-sub-2",
            to: "/sub-sub-sub-2",
          },
        ],
      },
    ],
  },
  {
    label: "sub-2",
    to: "/sub-2",
    children: [
      {
        label: "sub-sub-1",
        to: "/sub-sub-1",
        children: [
          {
            label: "sub-sub-sub-1",
            to: "/sub-sub-sub-1",
          },
          {
            label: "sub-sub-sub-2",
            to: "/sub-sub-sub-2",
          },
        ],
      },
      {
        label: "sub-sub-2",
        to: "/sub-sub-2",
      },
    ],
  },
  {
    label: "sub-3",
    to: "/sub-3",
    children: [
      {
        label: "sub-sub-1",
        to: "/sub-sub-1",
      },
      {
        label: "sub-sub-2",
        to: "/sub-sub-2",
        children: [
          {
            label: "sub-sub-sub-1",
            to: "/sub-sub-sub-1",
          },
          {
            label: "sub-sub-sub-2",
            to: "/sub-sub-sub-2",
          },
        ],
      },
    ],
  },
];
