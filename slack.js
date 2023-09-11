import { WebClient } from '@slack/web-api';

// Read a token from the environment variables
const token = 'xoxb-5525350307635-5859334007671-H6hlWljM6RmrDNWzbgALjkJG';

// Initialize
const web = new WebClient(token);

console.log("web",web);