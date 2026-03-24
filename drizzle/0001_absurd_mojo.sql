CREATE TABLE `alerts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`patientId` int NOT NULL,
	`facilityId` int NOT NULL,
	`emotionDetectionId` int,
	`severity` enum('low','medium','high','critical') NOT NULL,
	`alertType` enum('anger_outburst','distress','confusion','unusual_behavior') NOT NULL,
	`description` text,
	`status` enum('active','acknowledged','resolved') DEFAULT 'active',
	`assignedTo` int,
	`acknowledgedAt` timestamp,
	`resolvedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `alerts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `demoSessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`sessionType` enum('camera_demo','photo_upload','patient_monitoring'),
	`detectedEmotions` text,
	`alertsTriggered` int DEFAULT 0,
	`duration` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `demoSessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `emotionDetections` (
	`id` int AUTO_INCREMENT NOT NULL,
	`patientId` int NOT NULL,
	`facilityId` int NOT NULL,
	`angerLevel` int NOT NULL,
	`happinessLevel` int NOT NULL,
	`sadnessLevel` int NOT NULL,
	`fearLevel` int NOT NULL,
	`neutralLevel` int NOT NULL,
	`detectionConfidence` int NOT NULL,
	`imageUrl` text,
	`timestamp` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `emotionDetections_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `facilities` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`address` text,
	`phone` varchar(20),
	`email` varchar(320),
	`licenseNumber` varchar(100),
	`totalBeds` int,
	`adminUserId` int,
	`subscriptionStatus` enum('trial','active','inactive') DEFAULT 'trial',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `facilities_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `interventions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`alertId` int NOT NULL,
	`patientId` int NOT NULL,
	`caregiverId` int NOT NULL,
	`interventionType` varchar(100),
	`description` text,
	`outcome` enum('successful','partial','unsuccessful','pending') DEFAULT 'pending',
	`durationMinutes` int,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `interventions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `patients` (
	`id` int AUTO_INCREMENT NOT NULL,
	`facilityId` int NOT NULL,
	`firstName` varchar(100) NOT NULL,
	`lastName` varchar(100) NOT NULL,
	`dateOfBirth` timestamp,
	`roomNumber` varchar(50),
	`dementiaSeverity` enum('mild','moderate','severe'),
	`medicalHistory` text,
	`emergencyContact` varchar(255),
	`riskLevel` enum('low','medium','high') DEFAULT 'medium',
	`isActive` int DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `patients_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `alerts` ADD CONSTRAINT `alerts_patientId_patients_id_fk` FOREIGN KEY (`patientId`) REFERENCES `patients`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `alerts` ADD CONSTRAINT `alerts_facilityId_facilities_id_fk` FOREIGN KEY (`facilityId`) REFERENCES `facilities`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `alerts` ADD CONSTRAINT `alerts_emotionDetectionId_emotionDetections_id_fk` FOREIGN KEY (`emotionDetectionId`) REFERENCES `emotionDetections`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `alerts` ADD CONSTRAINT `alerts_assignedTo_users_id_fk` FOREIGN KEY (`assignedTo`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `demoSessions` ADD CONSTRAINT `demoSessions_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `emotionDetections` ADD CONSTRAINT `emotionDetections_patientId_patients_id_fk` FOREIGN KEY (`patientId`) REFERENCES `patients`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `emotionDetections` ADD CONSTRAINT `emotionDetections_facilityId_facilities_id_fk` FOREIGN KEY (`facilityId`) REFERENCES `facilities`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `facilities` ADD CONSTRAINT `facilities_adminUserId_users_id_fk` FOREIGN KEY (`adminUserId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `interventions` ADD CONSTRAINT `interventions_alertId_alerts_id_fk` FOREIGN KEY (`alertId`) REFERENCES `alerts`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `interventions` ADD CONSTRAINT `interventions_patientId_patients_id_fk` FOREIGN KEY (`patientId`) REFERENCES `patients`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `interventions` ADD CONSTRAINT `interventions_caregiverId_users_id_fk` FOREIGN KEY (`caregiverId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `patients` ADD CONSTRAINT `patients_facilityId_facilities_id_fk` FOREIGN KEY (`facilityId`) REFERENCES `facilities`(`id`) ON DELETE no action ON UPDATE no action;