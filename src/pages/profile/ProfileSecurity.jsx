import { useState } from 'react';
import ProfileLayout from './ProfileLayout';

export default function ProfileSecurity() {
  const [form, setForm] = useState({ password: '', confirm: '' });
  const [status, setStatus] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    if (form.password.length < 6 || form.password !== form.confirm) {
      setStatus('Passwords must match and be at least 6 characters');
      return;
    }
    setStatus('Updating…');
    try {
      // TODO: call /api/users/me/password (PATCH) when available
      await new Promise(r => setTimeout(r, 600));
      setStatus('Password updated');
    } catch {
      setStatus('Update failed');
    }
  }

  return (
    <ProfileLayout title="Security">
      <form onSubmit={onSubmit} className="bg-gray-900/60 rounded-2xl border border-gray-800/60 p-6 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">New Password</label>
          <input type="password" value={form.password} onChange={e=>setForm(f=>({...f, password:e.target.value}))} className="w-full rounded-lg bg-black/40 border border-gray-800/60 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Confirm Password</label>
          <input type="password" value={form.confirm} onChange={e=>setForm(f=>({...f, confirm:e.target.value}))} className="w-full rounded-lg bg-black/40 border border-gray-800/60 px-3 py-2" />
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">Update Password</button>
          <span className="text-sm text-gray-400">{status}</span>
        </div>
      </form>
    </ProfileLayout>
  );
}
