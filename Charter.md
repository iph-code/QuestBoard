# QuestBoard Charter

## Project Title

"QuestBoard"

## Project Purpose

To create a streamlined, online system for organizing, tracking, and reporting Dungeons & Dragons (D&D) games, including Dungeon Master (DM) scheduling, player character registration, and integrated reporting to support campaign logistics and community engagement.

### Background

Our local D&D club uses Meetup, Discord, and spreadsheets to manage games. This process is error-prone, lacks transparency, and is hard to scale. This project aims to build a centralized web application to streamline game scheduling, sign-ups, and reporting.

## Project Objectives

⦁	Allow Dungeon Masters to register and post games.

⦁	Enable players to browse and sign up for games with their characters.

⦁	Automatically update Player Form options based on DM submissions.

⦁	Centralize campaign and player data for reports and scheduling.

⦁	Facilitate communication through integration with Discord and Meetup.

## Scope

### In-Scope Functionality

⦁	MVP

⦁	User auth (Google login)

⦁	User registration and profile updates

⦁	DM game submission form

⦁	Game listing & sign-up system

⦁	Game calendar view

⦁	Session summary and DM notes page

⦁	Character basic stats management, including leveling up

⦁	Mobile-responsive design

⦁	Secure form validation and access control

⦁	Tier 2

⦁	Faction management

⦁	Non-game meeting management

⦁	Pending requests report

⦁	Magic items management

### Out-of-Scope (for now)

⦁	Payment or monetization systems.

⦁	In-app chat or messaging

⦁	Custom campaign world database

⦁	Advanced Discord bots or full third-party integrations.

## Stakeholders

⦁	DMs (schedule and manage games) (includes Initiates and full DMs)

⦁	Players (sign up for games, read summaries)

⦁	Admins (monitor usage, moderate reports) (includes Mods, MPs, and Developer)

⦁	Mods & MPs must approve progress

⦁	Developer (Isaac - lead dev/project manager)

## Key Deliverables

⦁	A working, interactive web app functional on desktops and mobile

⦁	A documented and maintainable Apps Script codebase.

⦁	Reports and visual tools for DMs.

⦁	Guidelines or a wiki for DMs and players on how to use the system.

## Assumptions

⦁	TAC will allow for Google-only auth in version 1

⦁	Google Sheets is robust enough to handle TAC operations

## Technical Constraints

⦁	Apps Script has a daily email quota limit of 1000 emails/day

⦁	A Google Sheet has a maximum of 10 million cells, a column limit of 18,278 columns (reaching column ZZZ), and no strict numerical limit on the number of rows itself, but it's indirectly governed by the total cell limit and the number of columns used

## Risks

⦁	User adoption (DMs primarily), especially if UI performance is sub-par

⦁	Data retention policies

## Dependency

⦁	Club provides DM lists (complete)

⦁	Club provides Discord webhooks (complete)

⦁	Club provides Meetup webhooks

## Timeline

⦁	Phase 1: Establish user roles, workflows, and state machines

⦁	Sprint 1:

⦁	Phase 2: Develop the database structure

⦁	Phase 3: Create the database (Sheets) and test data

⦁	Phase 4: Create web app structure

## Success Criteria

⦁	MVP launched with core features and no critical bugs

⦁	DMs and players are able to use the system with minimal instruction

⦁	Players can sign up for games from a mobile device in under 2 minutes

⦁	All (100%) DMs actively using the submission system

⦁	DM Game Reports posted within one week

⦁	A documented and maintainable Apps Script codebase.

⦁	The system is sustainable with minimal maintenance.

## Technical Architecture Sketch

Add later, when available.

## Glossary

**MVP** stands for **Minimum Viable Product**. It’s the smallest slice of functionality that:

⦁	Delivers real value to users

⦁	Lets you get feedback as early as possible

⦁	Minimizes wasted effort on bells and whistles
