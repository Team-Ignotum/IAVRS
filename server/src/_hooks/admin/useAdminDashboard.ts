"use client";

export interface AdminStats {
  totalStaff: number;
  centers: number;
  activeStaff: number;
  inactiveStaff: number;
}

export interface UseAdminDashboardResult {
  stats: AdminStats;
  recentProjects: [];
  isLoading: boolean;
  error: string | null;
}

// Temporary mock data used for the staff dashboard until the real admin data source is connected.
// The page is intentionally using user-centered stats instead of project metrics to match the design.
const mockStats: AdminStats = {
  totalStaff: 1248,
  centers: 842,
  activeStaff: 34,
  inactiveStaff: 18,
};

export function useAdminDashboard(): UseAdminDashboardResult {
  return {
    stats: mockStats,
    recentProjects: [],
    isLoading: false,
    error: null,
  };
}
