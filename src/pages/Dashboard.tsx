import { Routes, Route } from 'react-router-dom';
import { DashboardHome } from './DashboardHome';
import { Students } from './Students';
import { PendingApprovals } from './PendingApprovals';
import { RecordedContent } from './RecordedContent';
import { LiveSessions } from './LiveSessions';
import { Settings } from './Settings';

export function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/students" element={<Students />} />
      <Route path="/pending" element={<PendingApprovals />} />
      <Route path="/content" element={<RecordedContent />} />
      <Route path="/sessions" element={<LiveSessions />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}