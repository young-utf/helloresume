/**
 * Created by youngmoon on 5/14/15.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/**
 *
 * @type {Schema}
 */

var ResumeSchema = new Schema({
  user: {
    type: String,
    ref: 'User',
    index: true
  },
  requestedAt: {
    type: Date,
    default: Date.now
  },
  publishedAt: {
    type: Date
  },
  sort: {
    type: String,
    index: true
  },
  paid: Boolean,
  // Process is divided to new, processing, done
  process: {
    type: String,
    default: 'new'
  },
  opened: {
    type: Boolean,
    default: true
  },
  checked: [
    {
      type: String,
      user: String,
      ref: 'User'
    }
  ],
  url: {
    type: String,
    index: true
  },



  basic: {
    name: String,
    label: String,
    picture: String,
    email: String,
    phone: String,
    website: String,
    summary: String,
    location: {
      address: String,
      city: String
    },
    profiles: [
      {
        network: String,
        username: String,
        url: String
      }
    ]
  },

  work: [
    {
      company: String,
      position: String,
      website: String,
      duration: String,
      summary: String,
      highlights: [
        String
      ]
    }
  ],

  volunteer: [
    {
      organization: String,
      position: String,
      website: String,
      duration: String,
      summary: String,
      highlights: [
        String
      ]
    }
  ],

  education: [
    {
      institution: String,
      area: String,
      studyType: String,
      duration: String,
      gpa: String,
      courses: [
        String
      ]
    }
  ],

  awards: [
    {
      title: String,
      date: String,
      summary: String
    }
  ],

  publications: [
    {
      name: String,
      publisher: String,
      releaseDate: String,
      website: String,
      summary: String
    }
  ],

  skills: [
    {
      name: String,
      level: String,
      keywords: [String]
    }
  ],

  language: [
    {
      language: String,
      fluency: String
    }
  ],

  interests: [
    {
      name: String,
      keywords: [String]
    }
  ],

  references: [
    {
      name: String,
      reference: String
    }
  ]
});


module.exports = mongoose.model('Resume', ResumeSchema);
