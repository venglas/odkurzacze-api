import mongoose, { mongo, plugin } from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const Slide = mongoose.Schema(
    {
        id: Number,
        name: String,
        title: String, //title for slider images
        image: String //this shouldn't be a link but file - look after at this bro
    },
    {
        timestamps: true
    }
);

Slide.plugin(URLSlugs('name', {field: 'slug', update: true}));

export default mongoose.model('Slide', Slide);