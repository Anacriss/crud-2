// This rule allows anyone with your database reference to view, edit,
// and delete all data in your database. It is useful for getting
// started, but it is configured to expire after 30 days because it
// leaves your app open to attackers. At that time, all client
// requests to your database will be denied.
//
// Make sure to write security rules for your app before that time, or else
// all client requests to your database will be denied until you Update
// your rules
{
  "rules": {
    ".read": "now < 1599714000000",  // 2020-9-10
    ".write": "now < 1599714000000",  // 2020-9-10
  }
}