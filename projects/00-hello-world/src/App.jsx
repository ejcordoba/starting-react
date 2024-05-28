import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="reddit.com"
        name="Reddit Twitter"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="elonmusk"
        name="Elon Musk"
      />
      <TwitterFollowCard
        isFollowing
        userName="reddit.com"
        name="Reddit Twitter"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="vxnder"
        name="Vanderhart"
      />
    </section>
  );
}
