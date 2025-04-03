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

  defi: {
    text: "DeFi",
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
};

const defaultImage = "/images/default.png";

export const BlogData = [
  {
    title: "EIP-7691 : Blob throughput increase",
    date: "03/04/2025",
    tags: [Tags.eip],
    slug: "eip-7691",
    image: defaultImage,
    description: "Increasing the throughput of blob transactions in Ethereum.",
  },
];
