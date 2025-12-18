/**
 * Event-related constants for forms and dropdowns
 */

export const EVENT_TYPES = [
  "Wedding",
  "Baby Shower",
  "Gender Reveal",
  "Sip & See",
  "First Birthday",
  "Dinner Party",
  "Milestone Birthday",
  "Anniversary",
  "Engagement Party",
  "Graduation",
  "Corporate Event",
  "Gala",
  "Conference",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "Over $100,000",
  "Prefer not to say",
] as const;

export type EventType = typeof EVENT_TYPES[number];
export type BudgetRange = typeof BUDGET_RANGES[number];
