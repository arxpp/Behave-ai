import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { patients, emotionDetections, alerts, facilities } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Patient management
  patients: router({
    list: publicProcedure.input(z.object({ facilityId: z.number() })).query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      return await db.select().from(patients).where(eq(patients.facilityId, input.facilityId));
    }),
    getById: publicProcedure.input(z.object({ patientId: z.number() })).query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(patients).where(eq(patients.id, input.patientId)).limit(1);
      return result.length > 0 ? result[0] : null;
    }),
  }),

  // Emotion detection data
  emotions: router({
    getByPatient: publicProcedure.input(z.object({ patientId: z.number(), limit: z.number().default(100) })).query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      return await db.select().from(emotionDetections)
        .where(eq(emotionDetections.patientId, input.patientId))
        .limit(input.limit);
    }),
    create: publicProcedure.input(z.object({
      patientId: z.number(),
      facilityId: z.number(),
      angerLevel: z.number(),
      happinessLevel: z.number(),
      sadnessLevel: z.number(),
      fearLevel: z.number(),
      neutralLevel: z.number(),
      detectionConfidence: z.number(),
      imageUrl: z.string().optional(),
    })).mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const result = await db.insert(emotionDetections).values(input);
      return result;
    }),
  }),

  // Alerts management
  alerts: router({
    getByFacility: publicProcedure.input(z.object({ facilityId: z.number() })).query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      return await db.select().from(alerts).where(eq(alerts.facilityId, input.facilityId));
    }),
    getActive: publicProcedure.input(z.object({ facilityId: z.number() })).query(async ({ input }) => {
      const db = await getDb();
      if (!db) return [];
      return await db.select().from(alerts).where(eq(alerts.status, 'active'));
    }),
  }),

  // Facilities management
  facilities: router({
    getById: publicProcedure.input(z.object({ facilityId: z.number() })).query(async ({ input }) => {
      const db = await getDb();
      if (!db) return null;
      const result = await db.select().from(facilities).where(eq(facilities.id, input.facilityId)).limit(1);
      return result.length > 0 ? result[0] : null;
    }),
  }),
});

export type AppRouter = typeof appRouter;
