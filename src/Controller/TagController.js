import Tag from "../Model/Tag.js";

export const createTag = async (req, res) => {
    try {
        const title = req.body.title;
        const slug = title.toLowerCase().split(' ').join('-');
        const tag = await Tag.create({ title, slug });
        res.status(200).json(tag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const listTags = async (req, res) => {
    try {
        const tags = await Tag.findAll();
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getTagById = async (req, res) => {
    try {
        const tagId = req.params.id;
        const tag = await Tag.findOne({ where: { id: tagId } });

        if (!tag) {
            return res.status(404).json({ message: 'Tag not found' });
        }

        res.status(200).json(tag);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTag = async (req, res) => {
    try {
        const tagId = req.params.id;
        const { title } = req.body;
        const slug = title.toLowerCase().split(' ').join('-');
        const tag = await Tag.findOne({ where: { id: tagId } });

        if (!tag) {
            return res.status(404).json({ message: 'Tag not found' });
        } else {
            tag.title = title;
            tag.slug = slug;
            await tag.save();
            res.status(200).json(tag);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteTag = async (req, res) => {
    try {
        const tagId = req.params.id;
        const tag = await Tag.findOne({ where: { id: tagId } });
        
        if (!tag) {
            return res.status(404).json({ message: 'Tag not found' });
        } else {
            await tag.destroy();
            res.status(200).json({ message: 'Tag deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}