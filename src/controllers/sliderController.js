import Slide from '../models/slide';

export default {
    async findOne(req, res, next){
        const slide = await Slide.findOne({ slug: req.params.slug });

        if(!slide) return next();
        return res.status(200).send({ data: slide });
    },

    async findAll(req, res){
        const slide = await Slide.find().sort({ createdAt: 'desc' });
        return res.status(200).send({ data: slide });
    },

    async create(req, res){
        const slide = await new Slide({
            id: req.body.id,
            name: req.body.name,
            title: req.body.title,
            image: req.body.image
        }).save();

        return res.status(201).send({ data: slide, message: 'Slide was created :)' });
    },

    async update(req, res, next){
        const slide = await Slide.findOne({ 'slug': req.params.slug });
        if(!slide) return next();

        slide.id = req.body.id;
        slide.name = req.body.name;
        slide.title = req.body.title;
        slide.image = req.body.image;

        await slide.save();

        return res.status(200).send({ data: slide, message: 'Slide was updated :)' });
    },

    async remove(req, res, next){
        const slide = await Slide.findOne({ 'slug': req.params.slug });
        if(!slide) return next();

        slide.remove();

        return res.status(200).send({ message: 'Slide was deleted :)' })
    }
}