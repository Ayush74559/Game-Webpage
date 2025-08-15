import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Extended dummy data for gamer profile with advanced stats
  const playerProfile = {
    username: 'GamerPro123',
    level: 45,
    xp: 12500,
    avatar: 'https://via.placeholder.com/150?text=Avatar',
    wins: 250,
    losses: 100,
    rank: 'Diamond',
    kdRatio: 2.5,
    accuracy: '47%',
    recentGames: [
      { id: 1, game: 'Battle Royale', result: 'Win', kills: 12, deaths: 3, date: 'Aug 14, 2025' },
      { id: 2, game: 'Team Deathmatch', result: 'Loss', kills: 5, deaths: 8, date: 'Aug 13, 2025' },
    ],
    achievements: [
      { id: 1, name: 'Sharpshooter', description: '100 headshots in a row' },
      { id: 2, name: 'Veteran Player', description: 'Played 500 matches' },
    ],
    friends: [
      { id: 1, username: 'Friend1', status: 'Online' },
      { id: 2, username: 'Friend2', status: 'Offline' },
    ],
    notifications: [
      { id: 1, message: 'New event starting soon!' },
      { id: 2, message: 'Friend request from GamerX' },
    ],
  };

  // Simulated FPS value
  const fps = 60;

  // XP progress calculation
  const xpForNextLevel = 15000;
  const xpProgress = Math.min(100, (playerProfile.xp / xpForNextLevel) * 100);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Dashboard Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Gamer Profile Dashboard</h1>
            <div className="flex space-x-4">
              <button
                onClick={toggleDarkMode}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Player Profile Section */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow mb-6 p-6 flex items-center`}>
            <img
              src={playerProfile.avatar}
              alt="Player Avatar"
              className="w-24 h-24 rounded-full mr-6 border-4 border-indigo-500"
            />
            <div>
              <h2 className="text-2xl font-bold">{playerProfile.username}</h2>
              <p className="text-sm">Level {playerProfile.level} | XP: {playerProfile.xp}</p>
              <p className="text-sm text-indigo-400">Rank: {playerProfile.rank}</p>
              <p className="text-sm">K/D Ratio: {playerProfile.kdRatio} | Accuracy: {playerProfile.accuracy}</p>
            </div>
            {/* Live FPS Monitoring */}
            <div className="ml-auto">
              <h3 className="text-lg font-medium">Live FPS</h3>
              <p className="text-3xl font-bold text-indigo-400">{fps}</p>
            </div>
          </div>

          {/* XP Progression */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow mb-6 p-6`}>
            <h3 className="text-lg font-medium mb-4">XP Progression</h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: `${xpProgress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm">Progress to next level: {xpProgress}%</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Player Stats Card */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden shadow rounded-lg`}>
              <div className="p-5">
                <h3 className="text-lg font-medium">Player Stats</h3>
                <p className="mt-2 text-sm">
                  Wins: {playerProfile.wins} | Losses: {playerProfile.losses}
                </p>
                <p className="mt-1 text-sm">Win Rate: {Math.round((playerProfile.wins / (playerProfile.wins + playerProfile.losses)) * 100)}%</p>
              </div>
            </div>

            {/* Recent Games Card */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden shadow rounded-lg`}>
              <div className="p-5">
                <h3 className="text-lg font-medium">Recent Games</h3>
                <ul className="mt-2 text-sm">
                  {playerProfile.recentGames.map((game) => (
                    <li key={game.id} className="mb-2">
                      {game.game} - {game.result} ({game.date}) | Kills: {game.kills} / Deaths: {game.deaths}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Achievements Card */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden shadow rounded-lg`}>
              <div className="p-5">
                <h3 className="text-lg font-medium">Achievements</h3>
                <ul className="mt-2 text-sm">
                  {playerProfile.achievements.map((achievement) => (
                    <li key={achievement.id} className="mb-2">
                      <strong>{achievement.name}</strong>: {achievement.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Friends List Card */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden shadow rounded-lg`}>
              <div className="p-5">
                <h3 className="text-lg font-medium">Friends List</h3>
                <ul className="mt-2 text-sm">
                  {playerProfile.friends.map((friend) => (
                    <li key={friend.id} className="mb-2">
                      {friend.username} - {friend.status}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Notifications Card */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden shadow rounded-lg`}>
              <div className="p-5">
                <h3 className="text-lg font-medium">Notifications</h3>
                <ul className="mt-2 text-sm">
                  {playerProfile.notifications.map((notification) => (
                    <li key={notification.id} className="mb-2">
                      {notification.message}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
