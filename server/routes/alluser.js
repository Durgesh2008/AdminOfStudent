import express from 'express';
import  Alluser from '../models/User.js';
const router = express.Router();


// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallUser',  async (req, res) => {
    const page = parseInt(req.query.page) || 1;  // Current page number
    const perPage = parseInt(req.query.perPage) || 10;
    try {
        const totalCount = await Alluser.countDocuments();
        const list = await Alluser.find({ }).skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
        res.json({list,
            currentPage: page,
            totalPages: Math.ceil(totalCount / perPage),
            totalItems: totalCount,})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/adduser', async (req, res) => {
        try {
            const { username, email, phone,Joining,ending,course,collegeName } = req.body;

            // If there are errors, return Bad request and the errors
           const saveduser=  await Alluser.create({
            username, email, phone,Joining,ending,course,collegeName
        });
          

            res.json(saveduser)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updateuser/:id', async (req, res) => {
    const {  username, email, phone,Joining,ending,course,collegeName} = req.body;
    try {
        // Create a newNote object
        const newuser = {};
        if (username) { newuser.username = username };
        if (email) { newuser.email = email };
        if (phone) { newuser.phone = phone };
        if(Joining){newuser.Joining=Joining};
        if(ending){newuser.ending=ending};
        if(course){newuser.course=course};
        if(collegeName){newuser.collegeName=collegeName};

        // Find the note to be updated and update it
        let existuser = await Alluser.findById(req.params.id);
        if (!existuser) { return res.status(404).send("Not Found") }

        let updateduser = await Alluser.findByIdAndUpdate(req.params.id, { $set: newuser }, { new: true })
        res.json({ updateduser });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deleteuser/:id', async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let serachuser = await Alluser.findById(req.params.id);
        if (!serachuser) { return res.status(404).send("Not Found") }

      
        let note = await Alluser.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
export default  router