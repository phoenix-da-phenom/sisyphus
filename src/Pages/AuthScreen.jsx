import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [gravatarUrl, setGravatarUrl] = useState("");
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Generate Gravatar URL from email
  const getGravatar = (email) => {
    const trimmedEmail = email.trim().toLowerCase();
    const hash = md5(trimmedEmail); // Requires 'md5' library (install via npm)
    return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
  };

  // Fetch GitHub repos by email (using GitHub API)
  const fetchGitHubRepos = async (email) => {
    try {
      // Step 1: Search for users with this email
      const usersResponse = await axios.get(
        `https://api.github.com/search/users?q=${email}+in:email`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      if (usersResponse.data.items.length === 0) {
        throw new Error("No GitHub user found with this email.");
      }

      // Step 2: Get repos of the first matched user
      const username = usersResponse.data.items[0].login;
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      setRepos(reposResponse.data);
    } catch (err) {
      setError("Failed to fetch GitHub repos: " + err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setError("");
    const gravatar = getGravatar(email);
    setGravatarUrl(gravatar);
    fetchGitHubRepos(email);

    // Navigate to a "profile" page (optional)
    navigate("/profile", { state: { email, gravatarUrl: gravatar, repos } });
  };

  return (
    <div className="auth-screen">
      <h1>Auth Screen</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {gravatarUrl && (
        <div className="gravatar-container">
          <img src={gravatarUrl} alt="Gravatar" width={100} />
        </div>
      )}

      {error && <p className="error">{error}</p>}

      {repos.length > 0 && (
        <div className="repos">
          <h3>GitHub Repositories:</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuthScreen;