import nock from "nock";

nock("https://cloud.appwrite.io:443", { encodedQueryParams: true })
  .delete(
    "/v1/databases/default/collections/blog_posts/documents/669e49f100329300407a",
    {},
  )
  .reply(204, "", [
    "Access-Control-Allow-Credentials",
    "true",
    "Access-Control-Allow-Headers",
    "Origin, Cookie, Set-Cookie, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Access-Control-Request-Headers, Accept, X-Appwrite-Project, X-Appwrite-Key, X-Appwrite-Locale, X-Appwrite-Mode, X-Appwrite-JWT, X-Appwrite-Response-Format, X-Appwrite-Timeout, X-SDK-Version, X-SDK-Name, X-SDK-Language, X-SDK-Platform, X-SDK-GraphQL, X-Appwrite-ID, X-Appwrite-Timestamp, Content-Range, Range, Cache-Control, Expires, Pragma, X-Forwarded-For, X-Forwarded-User-Agent",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE",
    "Access-Control-Allow-Origin",
    "https://localhost",
    "Access-Control-Expose-Headers",
    "X-Appwrite-Session, X-Fallback-Cookies",
    "Content-Type",
    "text/html",
    "Date",
    "Mon, 22 Jul 2024 13:49:17 GMT",
    "Server",
    "Appwrite",
    "Strict-Transport-Security",
    "max-age=10886400",
    "X-Content-Type-Options",
    "nosniff",
    "X-Debug-Fallback",
    "true",
    "X-Debug-Speed",
    "0.17089891433716",
    "X-Ratelimit-Limit",
    "60",
    "X-Ratelimit-Remaining",
    "59",
    "X-Ratelimit-Reset",
    "1721656200",
    "Connection",
    "close",
  ]);

nock("https://cloud.appwrite.io:443", { encodedQueryParams: true })
  .delete(
    "/v1/databases/default/collections/blog_posts/documents/669e49f1002d284f333d",
    {},
  )
  .reply(204, "", [
    "Access-Control-Allow-Credentials",
    "true",
    "Access-Control-Allow-Headers",
    "Origin, Cookie, Set-Cookie, X-Requested-With, Content-Type, Access-Control-Allow-Origin, Access-Control-Request-Headers, Accept, X-Appwrite-Project, X-Appwrite-Key, X-Appwrite-Locale, X-Appwrite-Mode, X-Appwrite-JWT, X-Appwrite-Response-Format, X-Appwrite-Timeout, X-SDK-Version, X-SDK-Name, X-SDK-Language, X-SDK-Platform, X-SDK-GraphQL, X-Appwrite-ID, X-Appwrite-Timestamp, Content-Range, Range, Cache-Control, Expires, Pragma, X-Forwarded-For, X-Forwarded-User-Agent",
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE",
    "Access-Control-Allow-Origin",
    "https://localhost",
    "Access-Control-Expose-Headers",
    "X-Appwrite-Session, X-Fallback-Cookies",
    "Content-Type",
    "text/html",
    "Date",
    "Mon, 22 Jul 2024 13:49:17 GMT",
    "Server",
    "Appwrite",
    "Strict-Transport-Security",
    "max-age=10886400",
    "X-Content-Type-Options",
    "nosniff",
    "X-Debug-Fallback",
    "true",
    "X-Debug-Speed",
    "0.13990688323975",
    "X-Ratelimit-Limit",
    "60",
    "X-Ratelimit-Remaining",
    "58",
    "X-Ratelimit-Reset",
    "1721656200",
    "Connection",
    "close",
  ]);
