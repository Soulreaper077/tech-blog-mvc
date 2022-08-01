const { Post } = require('../models');

const postdata = [
    {
        title: ' The World ',
        post_text: ' is everything really a jojos refrence? ',
        user_id: 10, 
    },
    {
        title: ' Testing Faze',
        post_text: ' this is just a test  ',
        user_id: 8, 
    },
    {
        title: ' Yo yo yo ',
        post_text: ' whats good wid it ',
        user_id: 1, 
    },
    {
        title: ' Bankai!  ',
        post_text: ' who yall got on best banaki in the verse?  ',
        user_id: 4, 
    },
    {
        title: '  notes ',
        post_text: ' just me takin notes ',
        user_id: 7, 
    },
    {
        title: ' Devil Fruits ',
        post_text: ' bari bari no mi is op  ',
        user_id: 4, 
    },
    {
        title: ' One Piece ',
        post_text: ' what is the best in the big 3 ? ',
        user_id: 1, 
    },
    {
        title: ' Unicorn ',
        post_text: ' rainbows and cotton candy  ',
        user_id: 1, 
    },
    {
        title: ' Shingeki No Kyojin ',
        post_text: ' This is the best one  ',
        user_id: 9, 
    },
    {
        title: ' Yata Mirror ',
        post_text: ' Broken ability, nothing else to say about that ',
        user_id: 5, 
    },
    {
        title: ' Toutska Blade ',
        post_text: ' Dont even get me started.... ',
        user_id: 3, 
    },
    {
        title: ' Coding ',
        post_text: ' coding can be alot of fun !',
        user_id: 10, 
    },
    {
        title: ' Iggy the Goat ',
        post_text: ' MVP of Stardust Crusaders  ',
        user_id: 8, 
    },
    {
        title: ' Code Geass ',
        post_text: ' All Hail Lelouch!',
        user_id: 3, 
    },
    {
        title: ' Javascript  ',
        post_text: ' any pointers on how to improve ones ability ? ',
        user_id: 3, 
    },
    {
        title: ' No No No',
        post_text: ' No! No! NO! ',
        user_id: 7, 
    },
    {
        title: ' Oranges ',
        post_text: ' Superior fruit  ',
        user_id: 6, 
    },
    {
        title: ' Mac Vs Windows ',
        post_text: ' Mac OS Negs ',
        user_id: 4, 
    },
    {
        title: ' lkdsfhalsfjs ',
        post_text: ' runnin out of ideas here  ',
        user_id: 6, 
    },
    {
        title: ' Christmas ',
        post_text: ' Merry Christmas Yo!! ',
        user_id: 7, 
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;