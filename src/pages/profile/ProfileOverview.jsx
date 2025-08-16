import ProfileLayout from './ProfileLayout';

export default function ProfileOverview() {
  // Placeholder: pull real data from /api/auth/me once wired
  const user = { username: 'PlayerOne', email: 'player@example.com', joined: '2025-01-01' };

  return (
    <ProfileLayout title="Player Profile">
      <div className="bg-gray-900/60 rounded-2xl border border-gray-800/60 p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600" />
          <div>
            <div className="text-xl font-bold">{user.username}</div>
            <div className="text-gray-400 text-sm">{user.email}</div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-black/40 border border-gray-800/60">
            <div className="text-gray-400 text-sm">Joined</div>
            <div className="font-semibold">{user.joined}</div>
          </div>
          <div className="p-4 rounded-xl bg-black/40 border border-gray-800/60">
            <div className="text-gray-400 text-sm">Matches</div>
            <div className="font-semibold">12</div>
          </div>
          <div className="p-4 rounded-xl bg-black/40 border border-gray-800/60">
            <div className="text-gray-400 text-sm">Wins</div>
            <div className="font-semibold">7</div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}
