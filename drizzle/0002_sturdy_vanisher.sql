ALTER TABLE `users` ADD `userType` enum('facility_manager','caregiver','family_member','investor','system_admin') DEFAULT 'caregiver';--> statement-breakpoint
ALTER TABLE `users` ADD `facilityId` int;--> statement-breakpoint
ALTER TABLE `users` ADD `phone` varchar(20);--> statement-breakpoint
ALTER TABLE `users` ADD `department` varchar(100);--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_facilityId_facilities_id_fk` FOREIGN KEY (`facilityId`) REFERENCES `facilities`(`id`) ON DELETE no action ON UPDATE no action;