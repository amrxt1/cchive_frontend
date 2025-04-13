import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('http://localhost:3000/api/v1/users')
        .then((res) => res.json()),
  });

  const [query, setQuery] = useState('');
  const filtered = users.filter((u) =>
    u.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div >
      <section >
        <h1 >Get Connected.</h1>
        <p >Search if your friends are here:</p>
        <input
          type="text"
          placeholder="Search by username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul >
          {filtered.map((user) => (
            <li key={user.username} >
              {user.first_name} {user.last_name} <span >(@{user.username})</span>
            </li>
          ))}
        </ul>
      </section>

      <section >
        <Feature
          title="Marketplace"
          desc="Buy and sell books, gear, and more."
          to="/marketplace"
        />
        <Feature
          title="Study Groups"
          desc="Chat, share files, stay organized."
          to="/study_groups"
        />
        <Feature
          title="Peer Tutoring"
          desc="Find and offer tutoring help."
          to="/tutoring/request"
        />
        <Feature
          title="Course Reviews"
          desc="Leave reviews for instructors and courses."
          to="/courses"
        />
      </section>
    </div>
  );
}

function Feature({ title, desc, to }) {
  return (
    <Link to={to} >
      <h3 >{title}</h3>
      <p >{desc}</p>
    </Link>
  );
}
