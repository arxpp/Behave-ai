import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Facility table - stores information about care homes/facilities using Behave AI
 */
export const facilities = mysqlTable("facilities", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  address: text("address"),
  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 320 }),
  licenseNumber: varchar("licenseNumber", { length: 100 }),
  totalBeds: int("totalBeds"),
  adminUserId: int("adminUserId").references(() => users.id),
  subscriptionStatus: mysqlEnum("subscriptionStatus", ["trial", "active", "inactive"]).default("trial"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Facility = typeof facilities.$inferSelect;
export type InsertFacility = typeof facilities.$inferInsert;

/**
 * Patient table - stores patient information and baseline data
 */
export const patients = mysqlTable("patients", {
  id: int("id").autoincrement().primaryKey(),
  facilityId: int("facilityId").notNull().references(() => facilities.id),
  firstName: varchar("firstName", { length: 100 }).notNull(),
  lastName: varchar("lastName", { length: 100 }).notNull(),
  dateOfBirth: timestamp("dateOfBirth"),
  roomNumber: varchar("roomNumber", { length: 50 }),
  dementiaSeverity: mysqlEnum("dementiaSeverity", ["mild", "moderate", "severe"]),
  medicalHistory: text("medicalHistory"),
  emergencyContact: varchar("emergencyContact", { length: 255 }),
  riskLevel: mysqlEnum("riskLevel", ["low", "medium", "high"]).default("medium"),
  isActive: int("isActive").default(1),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Patient = typeof patients.$inferSelect;
export type InsertPatient = typeof patients.$inferInsert;

/**
 * Emotion Detection Data - stores real-time emotion analysis results
 */
export const emotionDetections = mysqlTable("emotionDetections", {
  id: int("id").autoincrement().primaryKey(),
  patientId: int("patientId").notNull().references(() => patients.id),
  facilityId: int("facilityId").notNull().references(() => facilities.id),
  angerLevel: int("angerLevel").notNull(), // 0-100
  happinessLevel: int("happinessLevel").notNull(), // 0-100
  sadnessLevel: int("sadnessLevel").notNull(), // 0-100
  fearLevel: int("fearLevel").notNull(), // 0-100
  neutralLevel: int("neutralLevel").notNull(), // 0-100
  detectionConfidence: int("detectionConfidence").notNull(), // 0-100
  imageUrl: text("imageUrl"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export type EmotionDetection = typeof emotionDetections.$inferSelect;
export type InsertEmotionDetection = typeof emotionDetections.$inferInsert;

/**
 * Alerts table - stores behavioral alerts triggered by the system
 */
export const alerts = mysqlTable("alerts", {
  id: int("id").autoincrement().primaryKey(),
  patientId: int("patientId").notNull().references(() => patients.id),
  facilityId: int("facilityId").notNull().references(() => facilities.id),
  emotionDetectionId: int("emotionDetectionId").references(() => emotionDetections.id),
  severity: mysqlEnum("severity", ["low", "medium", "high", "critical"]).notNull(),
  alertType: mysqlEnum("alertType", ["anger_outburst", "distress", "confusion", "unusual_behavior"]).notNull(),
  description: text("description"),
  status: mysqlEnum("status", ["active", "acknowledged", "resolved"]).default("active"),
  assignedTo: int("assignedTo").references(() => users.id),
  acknowledgedAt: timestamp("acknowledgedAt"),
  resolvedAt: timestamp("resolvedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Alert = typeof alerts.$inferSelect;
export type InsertAlert = typeof alerts.$inferInsert;

/**
 * Interventions table - tracks caregiver responses to alerts
 */
export const interventions = mysqlTable("interventions", {
  id: int("id").autoincrement().primaryKey(),
  alertId: int("alertId").notNull().references(() => alerts.id),
  patientId: int("patientId").notNull().references(() => patients.id),
  caregiverId: int("caregiverId").notNull().references(() => users.id),
  interventionType: varchar("interventionType", { length: 100 }),
  description: text("description"),
  outcome: mysqlEnum("outcome", ["successful", "partial", "unsuccessful", "pending"]).default("pending"),
  durationMinutes: int("durationMinutes"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Intervention = typeof interventions.$inferSelect;
export type InsertIntervention = typeof interventions.$inferInsert;

/**
 * Demo Sessions table - tracks demo/testing sessions for the live demo feature
 */
export const demoSessions = mysqlTable("demoSessions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").references(() => users.id),
  sessionType: mysqlEnum("sessionType", ["camera_demo", "photo_upload", "patient_monitoring"]),
  detectedEmotions: text("detectedEmotions"), // JSON string
  alertsTriggered: int("alertsTriggered").default(0),
  duration: int("duration"), // in seconds
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DemoSession = typeof demoSessions.$inferSelect;
export type InsertDemoSession = typeof demoSessions.$inferInsert;