# StudyHub - Frontend Learning Platform (v1.0)

StudyHub is a mini frontend learning platform built with React.
Users can explore courses, enroll, and manage their enrolled course through a dashboard.

## Live Demo
[StudyHub]
link: 


## Tech Stack

- React - ui library
- React Router - Client-side routing
- TailwindCSS - Styling
- Custom Hooks - Business logic separation
- LocalStorage - Data persistence



## Features (Release v1.0)

- User login (fake authentication)
- Protected routes
- Course listing page
- Enroll functionality
- Dashboard overview
- LocalStorage persistence
- Skeleton loading ui
- Responsive design (mobile + desktop)


## Project Structure

src/
|
|---app/
|---assets/
|---components/
|---features/
|---hooks/
|---pages/
|---utils/

The project follows a modular structure separating UI, logic, and state management.


## Architecture Highlights

- Single Source of Truth for course state
- Reusable CourseCard component
- Custom hooks for logic separation
- ProtectedRoute implementation
- Immutable state updates


## State Management

- Course state handled inside useCourses hook
- Auth state handled inside useAuth hook
- LocalStorage used for persistence


## UI / UX Decisions

- Skeleton loading for better perceived performance
- Mobile-first responsive layout
- Clear navigation flow
- Consistent spacing and component reuse


## Future Improvements


## What I have learned from this project