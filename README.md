DEMO VIDEO --

https://drive.google.com/drive/folders/1LaUEIjKJd5u-v-zrDpgm2pfnlDXQEjQv?usp=sharing


# TodoMarrow - Fullstack Todo List Application

## Overview

This is a fullstack Todo List application built using Next.js for the frontend and backend. The application allows users to create, edit, and delete todos, add tags and priorities, and mention other users in todos. It also includes features like pagination, filtering, sorting, and data export.

## Features

### Todo Management
- Create new todos with titles and descriptions
- Add tags and priorities to todos (High, Medium, Low)
- Tag/mention other users in todos (@username)
- Edit existing todos
- Delete todos

### Todo Details
- Click on a todo to view its details (tags, priority, notes, users)
- Add notes to a todo via a modal when clicking an icon next to the todo

### List View Features
- List all todos with basic information
- Pagination (either infinite scroll or numbered pagination)
- Filter todos by tags, priority, or users
- Sort todos by creation date, priority, etc.

### Data Export [Optional]
- Export all todos of a user (JSON or CSV format)

### User Management [Optional]
- Backend: Pre-create at least 5 different users for tagging validation
- Frontend: Dedicated tab to display all users and switch between them

## Technical Stack

### Frontend
- **Framework**: Next.js
- **State Management**: React Context API
- **Styling**: CSS (provided structure)
- **Responsive Design**: Yes

### Backend
- **Framework**: Next.js API routes
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

### Database
- **Database**: MongoDB
- **Schema**: Designed to support todos, users, tags, and priorities

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/piyushg1/TodoMarrow-Combined.git
   cd TodoMarrow-Combined
