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
  {
    title: "EIP-7685 : General purpose execution layer requests ",
    date: "16/04/2025",
    tags: [Tags.eip, Tags.core, Tags.pectra],
    slug: "eip-7685",
    image: defaultImage,
    description:
      "A general purpose bus for sharing EL triggered requests with the CL",
  },
  {
    title: "EIP-7691 : Blob throughput increase",
    date: "12/04/2025",
    tags: [Tags.eip, Tags.core, Tags.pectra],
    slug: "eip-7691",
    image: defaultImage,
    description:
      "Increase the number of blobs to reach a new target and max of 6 and 9 blobs per block respectively",
  },
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
