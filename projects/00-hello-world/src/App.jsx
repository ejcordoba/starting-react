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
    userName: "reddit2.com",
    name: "Reddit Twitter 2",
    isFollowing: true,
  },
  {
    userName: "vxnder",
    name: "Vanderhart",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
