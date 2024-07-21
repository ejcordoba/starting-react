import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "reddit.com",
    name: "Reddit Twitter",
    isFollowing: true,
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
    isFollowing: true,
  },
  {
    userName: "reddit.com",
    name: "Reddit Twitter",
    isFollowing: true,
  },
  {
    userName: "vxnder",
    name: "Vanderhart",
    isFollowing: true,
  },
];

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard formatUserName={formatUserName} userName="reddit.com">
        Reddit Twitter
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName="elonmusk">
        Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName="reddit.com">
        Reddit Twitter
      </TwitterFollowCard>
      <TwitterFollowCard formatUserName={formatUserName} userName="vxnder">
        Vanderhart
      </TwitterFollowCard>
    </section>
  );
}
