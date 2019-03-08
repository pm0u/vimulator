[![Build Status](https://travis-ci.com/pm0u/vimulator.svg?branch=master)](https://travis-ci.com/pm0u/vimulator)

## Vimulator 2: Judgement Day
Vimulator was my Q1 project and I think it could be adapted to be a useful teaching tool that is supported by the community using it.

Vim is a console based text editor that uses advanced keyboard shortcuts to increase efficiency. Most people within software development will encounter Vim at some point, usually inadvertently, and be stuck not knowing how it works. Additionally, these shortcuts help promote good typing habits and are available across a wide range of applications and text editors to keep key functionality consistent across multiple applications. Vimulator will help to educate and train users in Vim's keyboard shortcuts and functionality, thereby removing the large wall that exists when being overwhelmed by the extreme possibilities.

This update to Vimulator would maintain the same structure and functionality as the original prototype. I think that developing Vimulator in this way can present a unique opportunity to explore object oriented programming and test driven design. The structure I see now includes using React for UI management, Redux for state management, a "Vim engine" that will manage the state of the vim application, and an input manager that will handle what happens when a user presses a specific key.

To include a back end, lessons could be stored on an external database and be accessed as needed. A stretch feature would be the ability to import lessons from something like a github repo so that community members could write tutorials and lessons side by side.

As an open source project, Vimulator can also serve as a teaching tool to help people break into contributing to open source software as well as an example of well written code to reference.

### Project Planning

I have chosen to go with creating a VIM tutor website. I will be utilizing Trello for project planning. The project can be viewed [here](https://trello.com/b/fip80Dmf/q1-proj-vimdicator).

### Style Guide

I would like the website to mimic the look of vim in the terminal as much as possible. This will help new users become comfortable with real vim more readily and is something other vim tutors lack. With this in mind, styling will be minimal. In vim, any lines or divisions are provided by text characters. The font used will be Fira Mono -- I chose this font because it is a free font that new users could implement in their own terminals and because in code editing it is important to use a monospace font. This font will contribute to the terminal feel/aesthetic. Colors will be minimal, as it is meant to look like a terminal. I would like to use the palette provided by [solarized light by Ethan Schoonover](https://ethanschoonover.com/solarized/). I have found this to be a very approachable color scheme that is easy to read and is well accepted among experienced coders. This will help introduce new users to customizing their own terminal experience.

![Wireframe of webpage](https://image.ibb.co/jRO8L0/vim-wireframe.png)

![style guide](https://vectr.com/tmp/b75ezVFRh/c49lkfH0h.png?width=640&height=640&select=c49lkfH0hpage0)

### ERD

ERD can be viewed [here](https://www.lucidchart.com/invitations/accept/5db5c8dd-013c-4f0d-9e34-84e3d3ca4ff5). This will really only be to store user info and associate it with completed lessons. A stretch goal is to store lessons in a mongoDB database and access lessons dynamically.

### MVP / proof of concept

The current proof of concept is live at http://vimulator.surge.sh/html/index.html

there is admittedly still a lot to be done to make it efficient and viable.
