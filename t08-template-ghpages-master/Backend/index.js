import express from "express"
import { DataTypes, Sequelize } from "sequelize"
import cors from "cors"

import { fileURLToPath } from "url"
import path from "path"

import dbInitialization from "./dbInit.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

// This fixes the CORS error. This allows only request from the set origin to communicate with the server
const corsOptions = {
    origin: "http://localhost:3000" // The link of your project when run locally
}
const app = express()
app.use(express.json())
app.use(cors(corsOptions))

async function initDB() {
    const models = {}

    await db.authenticate()

    const people = db.define("people", {
        name: DataTypes.STRING,
        expertise: DataTypes.STRING,
        description: DataTypes.TEXT,
        education: DataTypes.TEXT,
        image: DataTypes.STRING,
        linkedin: DataTypes.STRING,
        instagram: DataTypes.STRING,
        

        
    });

    const areas = db.define("areas", {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        
        
        

    });

    const projects = db.define("projects", {
        name: DataTypes.STRING,
        subtitle: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        image1: DataTypes.STRING,
        image2: DataTypes.STRING,
        price: DataTypes.INTEGER,
        areaname: DataTypes.STRING,
        areaname1: DataTypes.STRING,
        people: DataTypes.STRING,
    });

    
  
    models.people = people;
    models.areas = areas;
    models.projects = projects;



    models.Dog = db.define('dog', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    models.Location = db.define('location', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    models.Location.hasMany(models.Dog)
    models.Dog.belongsTo(models.Location)

    models.projects.belongsTo(models.people);
    models.people.hasMany(models.projects);
    models.projects.hasMany(models.areas);
    models.areas.hasMany(models.projects);
    

    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()

    app.get('/dogs', async (req, res) => {
        const data = await models.Dog.findAll();

        res.status(200).json(data)
    })

    app.get('/dogs/:id', async (req, res) => {
        const data = await models.Dog.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Location
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/locations', async (req, res) => {
        const data = await models.Location.findAll();

        res.status(200).json(data)
    })

    app.get('/locations/:id', async (req, res) => {
        const data = await models.Location.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.Dog
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/projects', async (req, res) => {
        const data = await models.projects.findAll();
        res.status(200).json(data)
    })

    app.get('/projects/:id', async (req, res) => {
        const data = await models.projects.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.people
                },
                {
                    model: models.areas
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/projects/green', async (req, res) => {
        const data = await models.projects.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.people
                },
                {
                    model: models.areas
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/projects/education', async (req, res) => {
        const data = await models.projects.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.people
                },
                {
                    model: models.areas
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/projects/health', async (req, res) => {
        const data = await models.projects.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.people
                },
                {
                    model: models.areas
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/people', async (req, res) => {
        const data = await models.people.findAll();
        res.status(200).json(data)
    })

    app.get('/people/:id', async (req, res) => {
        const data = await models.people.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.projects
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/areas', async (req, res) => {
        const data = await models.areas.findAll();
        res.status(200).json(data)
    })

    app.get('/areas/:id', async (req, res) => {
        const data = await models.areas.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.projects
                }
            ]
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    // post request for contact form just for testing
    app.post('/contact', async (req, res) => {
        console.log(req.body)
        res.sendStatus(200)
    })



    // Using a different port
    app.listen(3001, () => {
        console.log("Listening on port 3001")
    })
}

initServer();