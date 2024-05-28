import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="reddit.com"
      >
        Reddit Twitter
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="elonmusk"
      >
        Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="reddit.com"
      >
        Reddit Twitter
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="vxnder"
      >
        Vanderhart
      </TwitterFollowCard>
    </section>
  );
}
