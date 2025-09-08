import { PostCard } from "./post-card";

const samplePosts = [
  {
    user: {
      name: "Alex Chen",
      username: "alexbuilds",
      avatar: "/placeholder.svg",
      badges: ["Verified", "Top Creator"]
    },
    content: {
      text: "Just deployed my first smart contract on Ethereum! The journey from idea to mainnet was incredible. Special thanks to the dev community for all the support. 🚀✨",
      timestamp: "2h",
    },
    engagement: {
      likes: 247,
      comments: 28,
      shares: 15,
      tips: 42
    },
    isLiked: true
  },
  {
    user: {
      name: "Maya Rodriguez",
      username: "cryptomaya",
      avatar: "/placeholder.svg",
      badges: ["Early Adopter"]
    },
    content: {
      text: "Market analysis: DeFi protocols are showing strong fundamentals this quarter. The integration of social tokens is creating new economic models we've never seen before. What are your thoughts on the future of SocialFi?",
      timestamp: "5h",
    },
    engagement: {
      likes: 189,
      comments: 45,
      shares: 23,
      tips: 67
    }
  },
  {
    user: {
      name: "Sam Wilson",
      username: "samweb3",
      avatar: "/placeholder.svg",
      badges: ["Community Leader"]
    },
    content: {
      text: "Hosting a virtual meetup tonight at 8 PM EST! We'll be discussing the latest trends in decentralized social networks and how creators can monetize their content. Link in bio 👆",
      timestamp: "1d",
    },
    engagement: {
      likes: 156,
      comments: 34,
      shares: 41,
      tips: 28
    }
  },
  {
    user: {
      name: "Emma Johnson",
      username: "emmadefi",
      avatar: "/placeholder.svg",
      badges: ["NFT Artist"]
    },
    content: {
      text: "Just minted my latest NFT collection 'Digital Dreams'! Each piece represents a moment in the evolution of web3 culture. Proud to share this journey with all of you 💎",
      image: "/placeholder.svg",
      timestamp: "2d",
    },
    engagement: {
      likes: 324,
      comments: 67,
      shares: 89,
      tips: 156
    },
    isLiked: true
  }
];

export function Feed() {
  return (
    <div className="space-y-6 pb-20">
      {samplePosts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}