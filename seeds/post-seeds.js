const { Post } = require('../models');

const postdata = [
  {
    title: 'Test Post',
    post_text: 'this is just a test testing testing ',
    user_id: 10
  },
  {
    title: 'yo',
    post_text: 'yo yo yo ',
    user_id: 8
  },
  {
    title: 'Oi ',
    post_text: 'oi Oi oi',
    user_id: 1
  },
  {
    title: 'yada yada yada',
    post_text: 'something something somehting ',
    user_id: 4
  },
  {
    title: 'code',
    post_text: 'coding can be fun ',
    user_id: 7
  },
  {
    title: 'sklfjsalkfjd',
    post_text: 'skdfksajfsalkfjalkfjalfjakfjakfjakjflakjfjirowieoiwoiruowei',
    user_id: 4
  },
  {
    title: 'title',
    post_text: 'this is a post',
    user_id: 1
  },
  {
    title: 'what',
    post_text: 'is up my man!!!',
    user_id: 1
  },
  {
    title: 'test 2',
    post_text: 'this is test 2',
    user_id: 9
  },
  {
    title: 'orange',
    post_text: 'red',
    user_id: 5
  },
  {
    title: 'yeerrrrrrr',
    post_text: 'yeeeeerrrrrrrrrrrrrrrrrrrrrr',
    user_id: 3
  },
  {
    title: 'tyeoiyoie',
    post_text: 'aklfjslk',
    user_id: 10
  },
  {
    title: 'hocus pocus',
    post_text: 'Jokus',
    user_id: 8
  },
  {
    title: 'yandu',
    post_text: 'yander',
    user_id: 3
  },
  {
    title: 'Cras',
    post_text: 'abcdefghijklmnopqrstuvwxyz',
    user_id: 3
  },
  {
    title:
      'fkjshkjdahfk',
    post_text: 'tituuoiuoiuoi',
    user_id: 7
  },
  {
    title: 'Huzzaahhhhh',
    post_text: 'pssssttt',
    user_id: 6
  },
  {
    title: 'Etiam ',
    post_text: 'ijdiajfifj',
    user_id: 4
  },
  {
    title: 'Nulla',
    post_text: 'orleaslijf',
    user_id: 6
  },
  {
    title: 'This Is So',
    post_text: 'Bizare!!',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
