const Tags = {
  aa: {
    text: "AA",
    bgColor: "#FF9900", // Amber
    textColor: "#FFFFFF",
  },

  eip: {
    text: "EIP",
    bgColor: "#0070F3", // Deep blue
    textColor: "#FFFFFF",
  },

  solidity: {
    text: "Solidity",
    bgColor: "#8E44AD", // Purple
    textColor: "#FFFFFF",
  },

  pectra: {
    text: "Pectra",
    bgColor: "#36D60C", // Bright green
    textColor: "#FFFFFF",
  },

  blockchain: {
    text: "Blockchain",
    bgColor: "#00C9A7", // Aqua
    textColor: "#000000", // Black for better contrast
  },

  security: {
    text: "Security",
    bgColor: "#FF3B30", // Red
    textColor: "#FFFFFF",
  },

  research: {
    text: "Research",
    bgColor: "#FFD700", // Gold
    textColor: "#000000", // Black for better contrast
  },
  core: {
    text: "Core",
    bgColor: "#FF6F61", // Coral red / Warm salmon tone
    textColor: "#FFFFFF", // Stands out clearly on dark and coral
  },
};

const defaultImage = "/images/default.png";

export const BlogData = [
  // {
  //   title: "EIP-2929 : Gas cost increases for state access opcodes",
  //   date: "07/04/2025",
  //   tags: [Tags.eip, Tags.core],
  //   slug: "eip-2929",
  //   image: defaultImage,
  //   description:
  //     "Increase gas cost for state access opcodes based on warm and cold access",
  // },
  {
    title: "EIP-7623 : Increase calldata cost",
    date: "07/04/2025",
    tags: [Tags.eip, Tags.core, Tags.pectra],
    slug: "eip-7623",
    image: defaultImage,
    description: "Increase calldata cost to reduce maximum block size",
  },
  {
    title: "EIP-2718 : Typed Transaction Envelope",
    date: "04/04/2025",
    tags: [Tags.eip, Tags.core],
    slug: "eip-2718",
    image: defaultImage,
    description:
      "Defines a new transaction type that is an envelope for future transaction types.",
  },
];
