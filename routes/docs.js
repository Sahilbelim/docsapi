const express = require('express');
const DocsSchema = require('../module/docs')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
          const GetDocs = await DocsSchema.find({});
          res.status(200).send(GetDocs);
    } catch (error) {
        
        res.status(404).send(error)
    }
})
router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const GetDocs = await DocsSchema.findById({ _id });
    res.status(200).send(GetDocs);
  } catch (e) {
    res.status(404).send(e);
  }
});
router.post("/", async (req, res) => {
    try {
        console.log("Docs body ", req.body);
        const { desc, filesize, close, tagisOpen, tagTitle, tagColor } = req.body;
        const CreateDocs = new DocsSchema({
          desc,
          filesize,
          close,
          tagisOpen,
          tagTitle,
          tagColor,
        });
        const AddDocs = await CreateDocs.save();
        console.log(AddDocs)
    res.status(201).send(AddDocs);
  } catch (e) {
        res.status(404).send(e);
        console.log(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
      console.log("Docs body update ", req.body);
    const _id = req.params.id;
    const { desc, filesize, close, tagisOpen, tagTitle, tagColor } = req.body;
    const UpdateDocs = await DocsSchema.findByIdAndUpdate(
      _id,
      {
        desc,
        filesize,
        close,
        tagisOpen,
        tagTitle,
        tagColor,
      },
      {
        new: true,
      }
    );
    
    
    res.status(201).send(UpdateDocs);
  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const DeleteDocs = await DocsSchema.findByIdAndDelete(_id);
    res.status(204).send(DeleteDocs);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;