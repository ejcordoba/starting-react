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
        name="Reddit Twitter"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="elonmusk"
        name="Elon Musk"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="reddit.com"
        name="Reddit Twitter"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="vxnder"
        name="Vanderhart"
      />
    </section>
  );
}
