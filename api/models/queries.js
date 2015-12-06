'use strict';

const Promise = require('bluebird');
const uuid = require('node-uuid');
const R = require('ramda');

module.exports = env => {

  const knex = require('./init.js')(env);

  const getParty = (name,cb) => {
    return Promise.props({
      party: knex('party').where('name',name),
      songs: knex('song').where('party_name',name),
    })
    .then(obj => {
      return cb(undefined,{
        party: obj.party[0],
        songs: obj.songs,
      });
    })
    .catch(err => {
      cb(err,undefined);
    });
  };

  const addHit = (id,cb) => {
    knex('song').where('id',id).asCallback((err,res) => {

      if (err) {
        return cb(err,undefined);
      }

      if (res.length < 1) {
        return cb(undefined,[]);
      }

      const currentHits = res[0].hits;

      knex('song').where('id',id).update('hits',currentHits+1,'*')
      .asCallback((errUpdate,resUpdate) => {

        if (errUpdate) {
          return cb(errUpdate,undefined);
        }

        return cb(undefined,resUpdate);
      });
    });
  };

  const addSong = (song,cb) => {

    song['id']   = uuid.v4();
    song['type'] = 'suggestion';

    knex('song').insert(song,'*').asCallback((err,data) => {

      if (err) {
        return cb(err,undefined);
      }

      return cb(undefined,data);
    });
  };

  const slice = (id,cb) => {
    knex('song').where('id',id).update('type','played','*').asCallback((err,res) => {

      if (err) {
        return cb(err,undefined);
      }

      knex('song')
      .select('*')
      .where('party_name', res[0].party_name)
      .orderBy('hits', 'desc')
      .asCallback((errHits,resHist) => {

        if (errHits) {
          return cb(errHits,undefined);
        }

        knex('song')
        .where('id',resHist[0].id)
        .update('type','playlist','*')
        .asCallback((errUpdate,resUpdate) => {

          if (errUpdate) {
            return cb(errUpdate,undefined);
          }

          return cb(undefined,resUpdate);
        });
      });
    });
  };

  return {
    getParty,
    addHit,
    addSong,
    slice,
  };
};
