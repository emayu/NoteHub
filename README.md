# NoteHub
The primary purpose of the application is creating and managing notes.

This is a Node.JS project
- There is a back-end rest api for creating and managing notes.
- And a front-end project for the api

## Status
- [x] First design and testing version for the api
- [ ] REST Api implemented
- [ ] Postman runner passed
- [ ] Frontend implemented
- [ ] Wrap on docker


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
