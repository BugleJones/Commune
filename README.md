# Commune

By Spencer Hamilton (BugleJones), Scott Hagan (prescottie), Tuan Pham (TuanPham303) and Russell Barthel (rbarthel)

## Environments

- Both development servers are required to run Commune
- `npm run dev:server` to run on localhost:3000
- In a separate terminal tab, `npm run dev:server` to run on localhost:3001

## Features

1. Users can view the Main Page stream of events to find unique meal experiences
2. Users have two varieites of search:
  - Main Page banner fuzzy search to manipulate results on the main page
  - Persistent NavBar fuzzy search to find events and users
3. Users can register, login and logout
  - Backend has been set up to allow for user/event updating
  - Users can add avatar images
4. Users can sign up to become a Host, and then create events to be shared with others
  - Events can be customized based on price, seats, location and menu
  - Event details can be viewed on an Event's Page
  - Users can provide the event with multiple images to be presented on the Event's Page
5. Commune makes use of the Stripe and Google Maps APIs to assist in checkout and location services, respectively
  - Users will ONLY see an address of an event upon booking the event
6. Users can review and rate Hosts, Chefs and other Guests at an event
  - Average reviews and ratings can be viewed on a User's Page

## Captures

<<<<<<< HEAD
![Commune Stream: Main Page]()
![Commune Event Page with NavBar Search]()
![Commune Sample Event Menu]()
![Commune Review/Rating Form]()
=======
![Alt text](https://github.com/TuanPham303/Commune/blob/master/public/github-images/Screen%20Shot%202017-11-03%20at%2011.04.48%20AM.png?raw=true)
![Alt text](https://github.com/TuanPham303/Commune/blob/master/public/github-images/Screen%20Shot%202017-11-03%20at%2011.06.33%20AM.png?raw=true)
![Alt text](https://github.com/TuanPham303/Commune/blob/master/public/github-images/Screen%20Shot%202017-11-03%20at%2011.11.25%20AM.png?raw=true)
>>>>>>> 4254a12be278a2117ae19a77958e75999bf4f098

## Starting Up Commune

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub
7. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
8. Update the .env file with your correct local information
9. Install dependencies: `npm i`
10. Fix to binaries for sass: `npm rebuild node-sass`
11. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
12. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
<<<<<<< HEAD
13. Run the servers: `npm run dev:api` `npm run dev:server`


## Particulars

- Most event images for Commune were taken from Unsplash, an open-source library of high quality images `https://unsplash.com/`
=======
13. Run the server: `npm run local`
14. Visit `http://localhost:3000/`
>>>>>>> 4254a12be278a2117ae19a77958e75999bf4f098

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
