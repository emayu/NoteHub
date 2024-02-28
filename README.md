# NoteHub
The primary purpose of the application is creating and managing notes.

This is a Node.JS project
- There is a back-end rest api for creating and managing notes.
- And a front-end project for the api

## Status
- [x] First design and testing version for the api
- [x] REST Api implemented(partially)
- [x] Postman runner passed
- [ ] Frontend implemented
- [ ] Wrap on docker


## Run this project
Run runnig this project
1. Clone this Git repository
2. move to backend project `cd notes-api`
3. install the dependecies `npm install`
4. move to root `cd ..`
5. move to frontend project `cd notes-ui`
6. install the dependecies `npm install`
7. move to root again `cd ..`
8. then in the root folder run projects `npm run dev`
9. go to `http:localhost:4200`


### Version used for develop
NodeJS v18.19.0



## RESTful API and Testing

The API design and testing for Notes API is located in [postman/notes_project.postman_collection.json](https://github.com/emayu/NoteHub/web/blob/master/postman/notes_project.postman_collection.json), in the collection project you can view some examples and use it to perform testing to the api


### Resources 
The principal resource is the notes

- GET http://localhost:3000/notes-api/v1/notes 


### To Run test
The easiest way to install Newman is using NPM. If you have Node.js installed, it is most likely that you have NPM installed as well.

```console
$ npm install -g newman
```
To run the collection in root folder of the project The `newman run` command allows you to specify a collection to be run. 

```console
$ newman run postman/notes_project.postman_collection.json
```
