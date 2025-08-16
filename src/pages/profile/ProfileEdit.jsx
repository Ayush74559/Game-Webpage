import { useState } from 'react';
import ProfileLayout from './ProfileLayout';

export default function ProfileEdit() {
  const [form, setForm] = useState({ username: '', email: '' });
  const [status, setStatus] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('Saving…');
    try {
      // TODO: call /api/users/me (PATCH) when available
      await new Promise(r => setTimeout(r, 600));
      setStatus('Saved');
    } catch {
      setStatus('Failed to save');
    }
  }

  return (
    <ProfileLayout title="Edit Profile">
      <form onSubmit={onSubmit} className="bg-gray-900/60 rounded-2xl border border-gray-800/60 p-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Username</label>
          <input value={form.username} onChange={e=>setForm(f=>({...f, username:e.target.value}))} className="w-full rounded-lg bg-black/40 border border-gray-800/60 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input type="email" value={form.email} onChange={e=>setForm(f=>({...f, email:e.target.value}))} className="w-full rounded-lg bg-black/40 border border-gray-800/60 px-3 py-2" />
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">Save</button>
          <span className="text-sm text-gray-400">{status}</span>
        </div>
      </form>
    </ProfileLayout>
  );
}
